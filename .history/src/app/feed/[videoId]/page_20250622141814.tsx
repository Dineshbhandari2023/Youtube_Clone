interface Props {
  params: { videoId: number | string };
}

const page = ({ params }: Props) => {
  return (
    <div>
      <p>video id page: {params}</p>
    </div>
  );
};

export default page;
