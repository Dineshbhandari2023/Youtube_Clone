import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ThumbsUpIcon } from "lucide-react";

export const VideoReactions = () => {
  const viewerReaction = "like";

  return (
    <div className="flex items-center flex-none">
      <Button>
        <ThumbsUpIcon
          className={cn("size-5", viewerReaction === "like" && "fill-black")}
        />
        {1}
      </Button>
      <Separator />
    </div>
  );
};
