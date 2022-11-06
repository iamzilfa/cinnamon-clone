import Link from "next/link";

const Blog = () => {
  return (
    <div className="mx-auto container">
      <div className="h-screen flex flex-col gap-y-6 text-center justify-center">
        <h1 className="font-bold text-5xl font-montheavy">
          The Webpage Is Under Construction
        </h1>
        <p className="text-xl">
          Go back to{" "}
          <Link href="/" className="text-blue-800 font-montsemibold underline">
            Homepage
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Blog;
