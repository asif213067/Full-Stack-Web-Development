const BlogLayout = ({ children }) => {
  return (
    <div>
      <h2 className="text-2xl text-green-300">
        This is fixed
      </h2>

      <div>
        {children}
      </div>
    </div>
  );
};

export default BlogLayout;