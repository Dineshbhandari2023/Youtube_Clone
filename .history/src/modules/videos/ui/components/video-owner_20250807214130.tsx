import { VideoGetOneOutput } from "../../types";

interface VideoOwnerProps {
  user: VideoGetOneOutput["user"];
  videoId: string;
}

export const VideoOwner = ({ user, videoId }: VideoOwnerProps) => {
  return (
    <div className="flex flex-center sm:items-start justify-between sm:justify-start gap-3 min-w-0">
      Video owner: user Info
    </div>
  );
};
