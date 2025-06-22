interface Props {
  params: number | string;
}

const page = ({ params }: Props) => {
  return (
    <div>
      <p>video id page</p>
    </div>
  );
};

export default page;
