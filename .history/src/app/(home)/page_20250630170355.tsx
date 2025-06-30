// import { trpc } from "@/trpc/client";

import { trpc } from "@/trpc/server";

export default async function Home() {
  // const { data } = trpc.hello.useQuery({ text: "Dinesh Bhandari" });
  const data = await trpc.hello({ text: "Namaste! Dinesh Bhandari" });

  return (
    <div>
      <h1>I will load videos here in future!</h1>
      <p>Client Component says: {data.greeting}</p>
    </div>
  );
}
