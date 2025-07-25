import { ResponsiveModal } from "@/components/responsive-modal";

interface ThumbnailUploadModalProps {
  videoId: String;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
