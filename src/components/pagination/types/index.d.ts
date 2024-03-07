interface IPagination {
  totalPages: number;
  offset: number;
  setOffset: (offset: number) => void;
  count: number;
}
