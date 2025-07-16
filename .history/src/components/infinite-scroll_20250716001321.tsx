import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useEffect } from "react";
import { Button } from "./ui/button";

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
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: "100px",
  });

  useEffect(() => {
    if (isIntersecting && !isManual && hasNextPage && !isfetchingNextPage) {
      fetchNextpage();
    }
  }, [
    isIntersecting,
    hasNextPage,
    isfetchingNextPage,
    fetchNextpage,
    isManual,
  ]);
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div ref={targetRef} className="h-1" />
      {hasNextPage ? (
        <Button
          variant="secondary"
          disabled={!hasNextPage || isfetchingNextPage}
          onClick={fetchNextpage()}
        >
          {isfetchingNextPage ? "Loading" : "Load More"}
        </Button>
      ) : (
        <p className="text-xs text-muted-foreground">No more items to load</p>
      )}
    </div>
  );
};
