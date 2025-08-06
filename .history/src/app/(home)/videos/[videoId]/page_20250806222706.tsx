import { HydrateClient, trpc } from "@/trpc/server";

interface PageProps {
  params: Promise<{ videoId: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { videoId } = await params;

  void trpc.videos.getOne.prefetch({ id: videoId });
  return (
    <HydrateClient>
      <VideoView />
    </HydrateClient>
  );
};

export default Page;
