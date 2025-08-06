interface PageProps {
  params: Promise<{ videoId: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { videosId } = await params;
  return <div>Video Id</div>;
};

export default Page;
