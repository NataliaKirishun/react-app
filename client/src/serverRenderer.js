import React from 'react';
import qs from 'qs';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Root from './Root';
import configureStore from './store/configureStore';


function renderHTML(html, preloadedState) {
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
    const params = qs.parse(req.query);
    let store;
    if (Object.keys(params).length) {
      const preloadedState = {
        search:
          {
            currentPage: 1,
            moviesPerPage: params.limit,
            searchBy: params.searchBy,
            sortBy: params.sortBy,
            sortOrder: params.sortOrder,
            offset: +params.offset,
            term: params.search
          }
      };
      store = configureStore(preloadedState).store;
    } else {
      store = configureStore().store;
    }

    const context = {};

    const renderRoot = () => (
      <Root
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );

    renderToString(renderRoot());

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    };

    const htmlString = renderToString(renderRoot());
    const finishedState = store.getState();

    res.send(renderHTML(htmlString, finishedState));
  };
}
