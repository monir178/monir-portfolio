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
      <h1 className="bg-gradient-to-br from-purple-400 to-purple-100 bg-clip-text text-center text-2xl font-medium tracking-widest uppercase text-transparent md:text-3xl lg:text-5xl mb-8 md:mb-20">
        Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs?.data.map((blog: TBlog) => (
          <BlogsCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
