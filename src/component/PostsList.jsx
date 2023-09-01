import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostsList.module.css";
import { useState } from "react";

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function hideModalHanlder() {
    setModalIsVisible(false);
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function AuthorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  // let modalContent;
  // if (modalIsVisible === true) {
  //   <Modal onClose={hideModalHanlder}>
  //     <NewPost
  //       onBodyChange={bodyChangeHandler}
  //       onAuthorChange={AuthorChangeHandler}
  //     />
  //   </Modal>;
  // }

  return (
    <>
      {/* {modalContent} */}
      {modalIsVisible ? (
        <Modal onClose={hideModalHanlder}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={AuthorChangeHandler}
          />
        </Modal>
      ) : (
        false
      )}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="yeon" body="Check out the second course???" />
      </ul>
    </>
  );
}

export default PostsList;
