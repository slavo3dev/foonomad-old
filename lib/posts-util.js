import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postPathDirectory = path.join(process.cwd(), "articles");

function getPostData(fileName) {
  const filePath = path.join(postPathDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); // remove the file extesion
  const postsData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postsData;
}

export function getAllPosts() {
  const postFiles = fs.readFileSync(postPathDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1,
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
