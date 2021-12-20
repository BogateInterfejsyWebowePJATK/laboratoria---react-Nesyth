import React from "react";
import { render } from "react-dom";
import Menu from "./components/Menu";
import data from "./data/articles.json";

render(<Menu articles={data} />, document.getElementById("root"));
