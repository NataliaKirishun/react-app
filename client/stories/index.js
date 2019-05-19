import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../src/common/Components/Button/Button";

storiesOf("Button", module).add("simple usage", () => (
  <Button>Hello Button</Button>
));

storiesOf("Button", module).add("red button", () => (
  <Button red>Hello Button</Button>
));

storiesOf("Button", module).add("white button", () => (
  <Button white>Hello Button</Button>
));