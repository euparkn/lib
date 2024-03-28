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
        <p>{text}</p>
        <div>
          <button type="button" onClick={cancelAction}>
            Cancel
          </button>
          <button type="button" onClick={confirmAction}>
            OK
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
  min-width: 240px;
  padding: 24px;
  box-sizing: border-box;
  background-color: #fff;
  text-align: center;
  border-radius: 8px;
  h1 {
    line-height: 2rem;
    color: #777;
    font-size: 1.3rem;
    margin-bottom: 8px;
  }
  > div {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 16px;
    button {
      cursor: pointer;
      border-radius: 4px;
      padding: 8px 16px;
      background-color: #eee;
      font-weight: 700;
    }
  }
`;

export default CustomConfirm;
