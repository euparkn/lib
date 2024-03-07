import styled from "styled-components";

import { usePaganation } from "components/pagination/hooks/usePagination";

function Pagination({ totalPages, offset, setOffset, count }: IPagination) {
  const { start, end, toPrev, toNext, toStart, toEnd } = usePaganation({
    totalPages,
    offset,
    setOffset,
    count,
  });

  const pageNumbers = () => {
    const arr = [];
    for (let i = start; i <= end; i += 1) {
      if (i <= totalPages) {
        arr.push(
          <button
            key={i}
            type="button"
            onClick={() => setOffset(i)}
            className={i === offset ? "active" : ""}
          >
            {i}
          </button>
        );
      }
    }
    return arr;
  };

  return (
    <Container>
      <Block>
        <button type="button" onClick={toStart} disabled={start <= count}>
          &lt;&lt;
        </button>
        <button type="button" onClick={toPrev} disabled={start === 1}>
          &lt;
        </button>
      </Block>
      <Block>{pageNumbers()}</Block>
      <Block>
        <button type="button" onClick={toNext} disabled={end >= totalPages}>
          &gt;
        </button>
        <button type="button" onClick={toEnd} disabled={end >= totalPages}>
          &gt;&gt;
        </button>
      </Block>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Block = styled.div`
  button {
    cursor: pointer;
    padding: 16px;
    &.active {
      font-weight: 700;
      text-decoration: underline;
    }
    &:disabled {
      cursor: default;
      opacity: 0.3;
    }
  }
`;

export default Pagination;
