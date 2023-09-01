import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostsList from "./component/PostsList";

//리액트 컴포넌트 jsx 코드를 리턴

//jsx코드는 최상위 컴포넌트 한개만 return 할 수 있음 여기서는 main
function App() {
  return (
    <main>
      <PostsList />
    </main>
  );
}

export default App;
