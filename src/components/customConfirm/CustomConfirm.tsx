import styled from "styled-components";

import { useCustomConfirm } from "components/customConfirm/hooks/useCustomConfirm";

function CustomConfirm() {
  const { title, text, isOpen, confirmAction, cancelAction } =
    useCustomConfirm();

  if (!isOpen) return <span />;

  return (
    <Bg>
      <Modal>
        <h1>{title}</h1>
        <strong>{text}</strong>
        <div>
          <button type="button" onClick={confirmAction}>
            OK
          </button>
          <button type="button" onClick={cancelAction}>
            Cancel
          </button>
        </div>
      </Modal>
    </Bg>
  );
}

const Bg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9999;
  inset: 0 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Modal = styled.div`
  padding: 32px;
  box-sizing: border-box;
  background-color: #fff;
  text-align: center;
  h1 {
    line-height: 2rem;
    color: #777;
  }
  > div {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 16px;
    button {
      cursor: pointer;
      border: 1px solid #aaa;
      border-radius: 4px;
      padding: 4px 8px;
    }
  }
`;

export default CustomConfirm;
