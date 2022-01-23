import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

export default function Modal({ show, onClose, children }) {

    return (
        <CSSTransition
            in={show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
        >
            <div className="modal" onClick={onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </CSSTransition>
    );
}
