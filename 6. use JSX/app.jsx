import React from "react";
import ReactDOM from "react-dom/client";
import RowComp from "./components/RowComp";
      
      //---------------------------------
      // 1  | A    | ACTIVE   (green)
      // 2  | B    | DEACTIVE (red)
      // 3  | C    | ACTIVE   (green)

      // Create an html element
      // const App = () => {
      //   return React.createElement("table", { border: 1, cellpadding: 5 }, [
      //     React.createElement("tbody", {}, [
      //       row(1, "A", 1),
      //       row(2, "B", 0),
      //       row(3, "C", 1),
      //     ]),
      //   ]);
      // };

const App = () => {
  return  <table>
            <tbody>
             <RowComp id={1} name="A" status={1} />
             <RowComp id={2} name="B" status={0} />
             <RowComp id={3} name="C" status={1} />
             </tbody>
          </table>;
};

const container = document.getElementById("root");

if (!container._root) {
  container._root = ReactDOM.createRoot(container);
}
//
container._root.render(<App />);//