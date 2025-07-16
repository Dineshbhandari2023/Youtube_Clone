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
  const { targetRef } = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: "100px",
  });

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div ref={targetRef} className="h-1" />
    </div>
  );
};
