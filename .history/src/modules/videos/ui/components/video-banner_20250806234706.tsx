import { AlertTriangleIcon } from "lucide-react";
import { VideoGetOneOutput } from "../../types";

interface VideoBannerProps {
  status: VideoGetOneOutput["muxStatus"];
}

export const VideoBanner = ({ status }: VideoBannerProps) => {
  if (status === "ready") return null;
  return (
    <div className="bg-yellow-500 py-3 px-4 rounded-b-xl">Videobanner</div>
  );
};
