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
render�� jsx�ڵ带 ����=root��Ҿȿ� ����Ʈ �ڵ带 render
Strictmode - �츮�� �ۼ��� �ڵ尡 �������� �ƴ��� Ȯ���ؼ� �˷��ִ� ��� or ����Ʈ�� ������Ʈ������ �츮 �ڵ带 Ȯ�� �� ���
App  - jsx�� ���� ���� ./App = App.jsx


 */
