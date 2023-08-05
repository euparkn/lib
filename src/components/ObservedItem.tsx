import { ReactNode, useEffect, useRef } from "react";
import { styled } from "styled-components";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Item = styled.div`
  background-color: #555;
  width: 100px;
  height: 100px;
  margin: 100px auto;
`;

function ObservedItem({ children }: { children?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { ratio } = useIntersectionObserver(ref, {
    threshold: Array(10)
      .fill(0)
      .map((el, i) => i / 10),
  });

  return (
    <Item ref={ref} style={{ opacity: ratio }}>
      {children}
    </Item>
  );
}

export default ObservedItem;
