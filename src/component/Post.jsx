/* 
1.함수이름은 첫글자는 대문자
2. return은 jsx
*/
//classes는 객체
import classes from "./Post.module.css";

function Post(props) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </div>
  );
}

export default Post;

//postList 컴포넌트 Post는 div대신 li
