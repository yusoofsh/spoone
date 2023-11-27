import { api } from "@/lib/trpc";

const RootPage = async () => {
  const hello = await api.post.hello.query({ text: "there" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl">{hello.greeting}</p>
      </div>
    </main>
  );
};
export default RootPage;
