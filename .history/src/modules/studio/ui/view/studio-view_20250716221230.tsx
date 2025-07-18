import { VideosSection } from "../sections/videos-section";

export const StudioView = () => {
  return (
    <div className="flex flex-col gap-y-6 pt-2.5">
      <div className="px-4">
        <h1>Channel Content</h1>
        <p>Manage your channel content and videos</p>
      </div>
      <VideosSection />
    </div>
  );
};
