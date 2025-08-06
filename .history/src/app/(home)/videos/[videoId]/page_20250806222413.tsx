interface PageProps {
  params: Promise<{ videoId: string }>;
}

const Page = async () => {
  return <div>Video Id</div>;
};

export default Page;
