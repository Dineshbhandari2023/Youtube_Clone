"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface VideoSectionProps {
  videoId: string;
}

export const VideoSection = ({ videoId }: VideoSectionProps) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary fallback={<p>Error...</p>}>
          <VideoSectionSuspense />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

const VideoSectionSuspense = () => {
  return <div>Video suspense</div>;
};
