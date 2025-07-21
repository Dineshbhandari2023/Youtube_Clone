import Image from "next/image";

interface VideoThumbnailProps {
  imageUrl?: string;
}

export const VideoThumbnail = ({ imageUrl }: VideoThumbnailProps) => {
  return (
    <div className="relative">
      {/* Thumbnail Wrapper */}
      <div className="relative w-full overflow-hidden rounded-xl aspect-video">
        <Image
          src="/placeholder.svg"
          alt="Thumbnail"
          fill
          className="size-full object-cover"
        />
      </div>
      {/* Video Duration Box */}
      <div>{/* TODO: Add video duration box */}</div>
    </div>
  );
};
