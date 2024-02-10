import { useEffect, useState } from "react";
import styled from "styled-components";

function Pagination({
  totalPages,
  offset,
  setOffset,
}: {
  totalPages: number;
  offset: number;
  setOffset: (offset: number) => void;
}) {
  const count = 5;
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(1);

  useEffect(() => {
    setEnd(start + count - 1);
  }, [start]);

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
        {start > count && (
          <button type="button" onClick={() => setStart(1)}>
            &lt;&lt;
          </button>
        )}
        {start > count && (
          <button
            type="button"
            onClick={() => setStart((prev) => prev - count)}
          >
            &lt;
          </button>
        )}
      </Block>
      <Block>
        {pageNumbers()}
        {/* {end < totalPages && (
          <>
            <p>...</p>
            <button
              type="button"
              onClick={() => setOffset(totalPages)}
              className={offset === totalPages ? "active" : ""}
            >
              {totalPages}
            </button>
          </>
        )} */}
      </Block>
      <Block>
        {end < totalPages && (
          <button
            type="button"
            onClick={() => setStart((prev) => prev + count)}
          >
            &gt;
          </button>
        )}
        {end < totalPages && (
          <button
            type="button"
            onClick={() =>
              setStart(
                totalPages % count === 0
                  ? totalPages - count + 1
                  : totalPages - (totalPages % count) + 1
              )
            }
          >
            &gt;&gt;
          </button>
        )}
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
  }
`;

export default Pagination;
