import { useRouter } from "next/router";
import React from "react";

function BlogPostsPage() {
  const router = useRouter();

  // You can call domain/blog/2021/10
  console.log(router.query);
  // slug : (2) ['2023', '13']

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}

export default BlogPostsPage;
