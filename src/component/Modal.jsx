//div 백드롭 - 배경 렌더링
// dialog 실제 모달 컨텐츠
import classes from "./Modal.module.css";

function Modal({ children, onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
