import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostsList from "./component/PostsList";

//����Ʈ ������Ʈ jsx �ڵ带 ����

//jsx�ڵ�� �ֻ��� ������Ʈ �Ѱ��� return �� �� ���� ���⼭�� main
function App() {
  return (
    <main>
      <PostsList />
    </main>
  );
}

export default App;
