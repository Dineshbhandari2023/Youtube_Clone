import { Button } from "@/components/ui/button";
import { ThumbsUpIcon } from "lucide-react";

export const VideoReactions = () => {
  return (
    <div className="flex items-center flex-none">
      <Button>
        <ThumbsUpIcon />
      </Button>
    </div>
  );
};
