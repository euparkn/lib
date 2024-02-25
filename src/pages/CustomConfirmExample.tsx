import styled from "styled-components";

import { useCustomConfirm } from "components/customConfirm/hooks/useCustomConfirm";

function CustomConfirmExample() {
  const { isConfirmed } = useCustomConfirm();

  const openConfirm = async () => {
    if (!(await isConfirmed({ title: "알림", text: "저장하시겠습니까?" })))
      return;
    console.log("ok");
  };

  return (
    <Container>
      <button type="button" onClick={openConfirm}>
        Open Confirmation Dialog
      </button>
    </Container>
  );
}

const Container = styled.div`
  padding: 16px;
  box-sizing: border-box;
  button {
    cursor: pointer;
    border: 1px solid #aaa;
    border-radius: 8px;
    padding: 8px 16px;
    &:hover {
      background-color: #eee;
    }
  }
`;

export default CustomConfirmExample;
