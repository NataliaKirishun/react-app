import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import qs from 'qs';
import { ServerStyleSheet } from 'styled-components';
import Root from './Root';
import configureStore from './store/configureStore';


function renderHTML(html, preloadedState, styles) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
          <title>Netfix</title>
          ${styles}
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const sheet = new ServerStyleSheet();
    const params = qs.parse(req.query);
    let store;
    if (Object.keys(params).length) {
      const preloadedState = {
        search:
          {
            currentPage: 1,
            moviesPerPage: +params.limit,
            searchBy: params.searchBy,
            sortBy: params.sortBy,
            sortOrder: params.sortOrder,
            offset: +params.offset,
            term: params.search,
          },
      };
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }
    // This context object contains the results of the render
    const context = {};

    const renderRoot = () => (
      <Root
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );
    store.runSaga().done.then(() => {
      const htmlString = renderToString(sheet.collectStyles(renderRoot()));
      const styles = sheet.getStyleTags();

      // context.url will contain the URL to redirect to if a <Redirect> was used
      if (context.url) {
        res.writeHead(302, {
          Location: context.url,
        });
        res.end();
        return;
      }
      const finishedState = store.getState();
      res.send(renderHTML(htmlString, finishedState, styles));
    });

    // Do first render, starts initial actions.
    renderToString(renderRoot());
    // When the first render is finished, send the END action to redux-saga.
    store.close();
  };
}
