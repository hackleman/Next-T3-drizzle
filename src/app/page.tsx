import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://4b5qkpip75.ufs.sh/f/nzpio9vOaLPE3Pq4qs6Ap6i8PEJOTFd2zUYhIaleQXu9gNvt",
  "https://4b5qkpip75.ufs.sh/f/nzpio9vOaLPEnB8bXVvOaLPEwt9zfKih8gxuMV3kNqjydps6"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          posts.map((post) => (
            <div key={post.id}>{post.name}</div>
          ))
        }
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
