interface Props {
  params: promise<{ videoId: number | string }>;
}

const page = async ({ params }: Props) => {
  return (
    <div>
      <p>video id page: {params.videoId}</p>
    </div>
  );
};

export default page;
