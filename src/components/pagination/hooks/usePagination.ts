import { useEffect, useState } from "react";

export const usePaganation = ({
  totalPages,
  offset,
  setOffset,
  count,
}: IPagination) => {
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(1);

  useEffect(() => {
    setEnd(start + count - 1);
    setOffset(start);
  }, [start]);

  const toPrev = () => {
    if (offset === 1) return;
    setStart((prev) => prev - count);
  };

  const toNext = () => {
    if (offset === totalPages) return;
    setStart((prev) => prev + count);
  };

  const toStart = () => {
    setStart(1);
  };

  const toEnd = () => {
    const startNum =
      totalPages % count === 0
        ? totalPages - count + 1
        : totalPages - (totalPages % count) + 1;
    setStart(startNum);
  };

  return { start, end, toPrev, toNext, toStart, toEnd };
};
