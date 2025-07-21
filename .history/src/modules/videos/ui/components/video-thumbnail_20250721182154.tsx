import Image from "next/image";

interface VideoThumbnailProps {
  imageUrl?: string | null;
  previewUrl?: string | null;
  title: string;
}

export const VideoThumbnail = ({
  imageUrl,
  previewUrl,
  title,
}: VideoThumbnailProps) => {
  return (
    <div className="relative">
      {/* Thumbnail Wrapper */}
      <div className="relative w-full overflow-hidden rounded-xl aspect-video">
        <Image
          src={imageUrl ?? "/placeholder.svg"}
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
