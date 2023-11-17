import { CreatePost } from "~/app/_components/create-post";
import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { Slider } from "~/components/ui/slider";

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <MaxWidthWrapper className="mb-12 mt-28 flex flex-col items-center justify-center text-center sm:mt-40">
      <Slider defaultValue={[33]} max={100} step={1} />
    </MaxWidthWrapper>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
