import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
render에 jsx코드를 전달=root요소안에 리액트 코드를 render
Strictmode - 우리가 작성한 코드가 최적인지 아닌지 확인해서 알려주는 기능 or 리액트가 업데이트됐을때 우리 코드를 확인 후 경고
App  - jsx를 통해 렌더 ./App = App.jsx


 */
