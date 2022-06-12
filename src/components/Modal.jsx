import React, { useImperativeHandle, useRef } from "react";

import "./Modal.css";
const Modal = ({ open, title, children, onClose }, ref) => {
  const handleClose = (e) => {
    if (e.target.className === "modalContainer") {
      onClose();
    }

    return null;
  };

  const handleCancel = () => {
    alert("取消");
    onClose();
  };

  const handleConfirm = () => {
    alert("确定");
    onClose();
  };

  const closeRef = useRef();
  const cancelRef = useRef();
  const confirmRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      tips: [
        {
          text: "点击这里 关闭窗口",
          position:()=>closeRef.current.getBoundingClientRect(),
          action: () => {
            closeRef.current.focus();
          },
        },
        {
          text: "点击这里 取消操作并关闭窗口",
          position:()=>cancelRef.current.getBoundingClientRect(),
          action: () => {
            cancelRef.current.focus();
          },
        },
        {
          text: "点击这里 确认操作并关闭窗口",
          position:()=>confirmRef.current.getBoundingClientRect(),
          action: () => {
            confirmRef.current.focus();
          },
        },
      ],
    };
  },[]);

  if (open) {
    return (
      <div className="modalContainer" onClick={handleClose}>
        <div className="modal">
          <div className="modal__head">
            <h2>{title}</h2>
            <button className="modal__close" onClick={onClose} ref={closeRef}>
              X
            </button>
          </div>
          {children}

          <div className="modal__foot">
            <button
              className="btn-cancel"
              onClick={handleCancel}
              ref={cancelRef}
            >
              取消
            </button>{" "}
            <button
              className="btn-confirm"
              onClick={handleConfirm}
              ref={confirmRef}
            >
              确定
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default React.forwardRef(Modal);
