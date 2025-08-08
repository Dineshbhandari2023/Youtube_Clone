import { VideoGetOneOutput } from "../../types";

interface VideoTopRowProps {
  video: VideoGetOneOutput;
}

export const VIdeoTopRow = ({ video }: VideoTopRowProps) => {
  return <div className="flex flex-col gap-4 mt-4">Video Top row</div>;
};
