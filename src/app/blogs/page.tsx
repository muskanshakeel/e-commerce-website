import { Blogs } from "../components/blog";

export default function BlogsPage() {
  return (
    <main className="container mx-auto px-4 py-12 bg-gray-100">
      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-12 text-center">
        Latest Blogs
      </h1>

      {/* Blog Cards */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {Blogs.map((blog) => (
          <li
            key={blog.id}
            className="bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 p-6"
          >
            {/* Blog Title */}
            
              {blog.title}
           

            {/* Blog Excerpt */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {blog.content.slice(0, 150)}
              {blog.content.length > 150 ? "..." : ""}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
