import { useRef, useState } from "react";
import Modal from "./components/Modal";

const Study = ({open,onClose}) => {
  const modalRef = useRef();
 
  const [step, setStep] = useState(-1);

  return (
    <Modal
      open={open}
      title="如何使用"
      ref={modalRef}
      onClose={onClose}
    >
      {step < 0 && (
        <button
          style={{ padding: "6px" }}
          onClick={() => {
            setStep(0);
            modalRef.current.tips[0].action();
          }}
        >
          开始学习
        </button>
      )}
      {step >= 0 && (
        <div
          className="tip"
          style={{
            position: "absolute",
            top: `${modalRef.current.tips[step].position().top - 60}px`,
            left: `${modalRef.current.tips[step].position().left}px`,
          }}
        >
          {modalRef.current.tips[step].text}
          <button
            style={{ padding: "6px", marginLeft: "10px" }}
            onClick={() => {
              if (step < modalRef.current.tips.length - 1) {
                setStep((prv) => {
                  modalRef.current.tips[prv + 1].action();
                  return prv + 1;
                });
              } else {
                setStep(-1);
                onClose()
              }
            }}
          >
            知道了
          </button>
        </div>
      )}
    </Modal>
  );
};

export default Study;
