import "./App.css";
import { React, useState } from "react";

function App() {
  const [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);

  const [like, setLike] = useState(0);

  return (
    <>
      <div className="App">
        <div className="black-nav">
          <h4>React Blog</h4>
        </div>
        <div className="list">
          <h4>
            {title[0]}
            <span
              onClick={() => {
                setLike(like + 1);
              }}
            >
              👍
            </span>

            {like}
            <button
              onClick={() => {
                let copy = [...title];
                copy[0] = "여자 코트 추천";
                setTitle(copy);
              }}
            >
              Change!
            </button>
          </h4>

          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>{title[1]}</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>{title[2]}</h4>
          <p>2월 17일 발행</p>
        </div>
      </div>
    </>
  );
}

export default App;
