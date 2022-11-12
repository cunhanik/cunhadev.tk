import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Label } from "./Label.js";
import { Input } from "./Input.js";

const h1 = new Component("h1", "body", { textContent: "HelloWorld" });
h1.render();

h1.tag = "h3";
h1.build().render();

const form = new Form("body");
const label = new Label("Name: ", form, { htmlfor: "nameInput" });
const input = new Input(form, { id: "nameInput", name: "nameInput" });

form.render();
label.render();
form.addChildren(input);
form.addChildren(
  new Component("br"),
  new Component("br"),
  new Label("Date: ", form, { htmlfor: "dateInput" }),
  new Input(form, { id: "dateInput", type: "date" })
);
