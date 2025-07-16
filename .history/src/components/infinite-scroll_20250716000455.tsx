import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface InfiniteScrollProps {
  isManual?: boolean;
  hasNextPage: boolean;
  isfetchingNextPage: boolean;
  fetchNextpage: () => void;
}

export const InfiniteScroll = ({
  isManual = false,
  hasNextPage,
  isfetchingNextPage,
  fetchNextpage,
}: InfiniteScrollProps) => {
  const {} = useIntersectionObserver();

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div ref={} className="h-1" />
    </div>
  );
};
