import { VideoView } from "@/modules/studio/ui/views/video-view";
import { HydrateClient, trpc } from "@/trpc/server";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ videoId: string }>;
  //   params: { videoId: string };
}

const page = async ({ params }: PageProps) => {
  const { videoId } = await params;
  //   const { videoId } = params;
  console.log("Video Page:", videoId);
  await trpc.studio.getOne.prefetch({ id: videoId });
  return (
    <HydrateClient>
      <VideoView videoId={videoId} />
    </HydrateClient>
  );
};

export default page;
