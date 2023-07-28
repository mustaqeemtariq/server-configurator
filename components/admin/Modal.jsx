import ReactModal from "react-modal";

const customStyles = {
  content: {
    // top: "50%",
    // left: "50%",
    // right: "40px",
    // bottom: "40px",
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)",
  },
  overlay: {
    overflow: "auto",
  },
};

const Modal = ({ isOpen, onModalClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={onModalClose}
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
