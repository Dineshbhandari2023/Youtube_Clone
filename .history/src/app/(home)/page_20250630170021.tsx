// import { trpc } from "@/trpc/client";

import { trpc } from "@/trpc/server";

export default function Home() {
  // const { data } = trpc.hello.useQuery({ text: "Dinesh Bhandari" });
  const { data } = trpc.hello({ text: "Dinesh Bhandari" });

  return (
    <div>
      <h1>I will load videos here in future!</h1>
      <p>Client Component says: {data?.greeting}</p>
    </div>
  );
}
