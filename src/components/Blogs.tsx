import BlogsCard from "@/components/BlogsCard";

export type TBlog = {
  _id: string;
  description: string;
  title: string;
  img: string;
};

const Blogs = async () => {
  const res = await fetch(
    "https://portfolio-server-steel-seven.vercel.app/all-blogs",
    {
      cache: "no-store",
    }
  );
  const blogs = await res.json();

  return (
    <section id="blogs">
      <h1 className="text-3xl anton-text tracking-wider font-medium bg-clip-text text-transparent bg-gradient-to-t from-purple-300 to-violet-600 md:text-6xl text-center   mb-8 md:mb-12">
        Blogs
      </h1>
      <div className="flex justify-center items-center  flex-wrap mb-12 gap-6">
        {blogs?.data.map((blog: TBlog) => (
          <BlogsCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
