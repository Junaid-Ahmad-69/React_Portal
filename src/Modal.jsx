import React from "react";
import ReactDom from "react-dom";
const Modal_Style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "50px",
    zIndex: 1000,
}

const Overlay = {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 1000,
}
const Modal = ({open, children, onClose}) => {
    if (!open) return null;
    return ReactDom.createPortal(
        <>
            <div style={Overlay}/>
            <div style={Modal_Style}>
                <button onClick={onClose}>Close Modal</button>
                {children}
            </div>
        </>,
        document.getElementById("portal")
    );
};


export default Modal;
