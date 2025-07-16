interface InfiniteScrollProps {
  isManual?: boolean;
  hasNextPage: boolean;
  isfetchingNextPage: boolean;
  fetchNextpage: () => void;
}
