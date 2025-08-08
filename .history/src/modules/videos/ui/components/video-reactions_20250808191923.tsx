import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThumbsUpIcon } from "lucide-react";

export const VideoReactions = () => {
  const viewersReactions = "like";

  return (
    <div className="flex items-center flex-none">
      <Button>
        <ThumbsUpIcon
          className={cn("size-5", viewerReaction === "like" && "fill-black")}
        />
      </Button>
    </div>
  );
};
