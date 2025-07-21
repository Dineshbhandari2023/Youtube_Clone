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
    <div className="relative group">
      {/* Thumbnail Wrapper */}
      <div className="relative w-full overflow-hidden rounded-xl aspect-video">
        <Image
          src={imageUrl ?? "/placeholder.svg"}
          alt="Thumbnail"
          fill
          className="size-full object-cover opacity-0 group-hover:opacity-100"
        />
        <Image
          src={previewUrl ?? "/placeholder.svg"}
          alt="Thumbnail"
          fill
          className="size-full object-cover opacity-0 group-hover:opacity-100"
        />
      </div>
      {/* Video Duration Box */}
      <div>{/* TODO: Add video duration box */}</div>
    </div>
  );
};
