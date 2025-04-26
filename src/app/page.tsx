const mockUrls = [
  "https://4b5qkpip75.ufs.sh/f/nzpio9vOaLPE3Pq4qs6Ap6i8PEJOTFd2zUYhIaleQXu9gNvt",
  "https://4b5qkpip75.ufs.sh/f/nzpio9vOaLPEnB8bXVvOaLPEwt9zfKih8gxuMV3kNqjydps6"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        [...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
