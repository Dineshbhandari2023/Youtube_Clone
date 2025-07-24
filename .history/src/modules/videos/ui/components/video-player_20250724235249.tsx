interface VideoPlayerProps {
  playbackId?: string | null | undefined;
  posterUrl?: string | null | undefined;
  autoPlay?: boolean;
  onPlay?: () => void;
}
