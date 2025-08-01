import React from "react";
import ReactDOM from "react-dom/client";
// import {createElement} from "react-dom/client";
      
      //---------------------------------
      // 1  | A    | ACTIVE   (green)
      // 2  | B    | DEACTIVE (red)
      // 3  | C    | ACTIVE   (green)

      //Status component
      const statusComp = (status) => {
        const statusTxt = status == 1 ? "ACTIVE" : "DEACTIVE";
        const color = status == 1 ? "green" : "red";
        return React.createElement(
          "label",
          { style: { color: color } },
          statusTxt,
        );
      };

      //Table Data column
      const column = (content, id) => {
        return React.createElement("td", {}, content);
      };

      //Table Data Row
      const row = (id, name, status) => {
        const statusLb = statusComp(status);
        return React.createElement("tr", {}, [
          column(id),
          column(name),
          column(statusLb),
        ]);
      };

      // Create an html element
      const App = () => {
        return React.createElement("table", { border: 1, cellpadding: 5 }, [
          React.createElement("tbody", {}, [
            row(1, "A", 1),
            row(2, "B", 0),
            row(3, "C", 1),
          ]),
        ]);
      };

      const container = document.getElementById("root");

      // Init React's root element
      const root = ReactDOM.createRoot(container);

      // Load element to the react root
      root.render(React.createElement(App));