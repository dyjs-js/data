/* 
1.�Լ��̸��� ù���ڴ� �빮��
2. return�� jsx
*/
//classes�� ��ü
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

//postList ������Ʈ Post�� div��� li
