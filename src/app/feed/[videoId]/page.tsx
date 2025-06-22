interface Props {
  params: Promise<{ videoId: number | string }>;
}

const page = async ({ params }: Props) => {
  const { videoId } = await params;

  return (
    <div>
      <p>video id page: {videoId}</p>
    </div>
  );
};

export default page;
