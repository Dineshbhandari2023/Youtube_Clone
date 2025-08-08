"use client";
interface VideoSectionProps {
  videoId: string;
}

export const VideoSection = ({ videoId }: VideoSectionProps) => {
  return <div>Video Section</div>;
};

const VideoSectionSuspense = () => {
  return <div>Video suspense</div>;
};
