import Pagination from "components/pagination/Pagination";
import { useState } from "react";
import styled from "styled-components";

function PaginationExample() {
  const [offset, setOffset] = useState(1);
  return (
    <Container>
      <h1>{offset}</h1>
      <Pagination totalPages={15} offset={offset} setOffset={setOffset} />
    </Container>
  );
}

const Container = styled.div`
  margin: 16px;
  text-align: center;
  h1 {
    font-size: 2rem;
    line-height: 2.5rem;
    background-color: #eee;
  }
`;

export default PaginationExample;
