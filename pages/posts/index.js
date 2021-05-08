import { AllPosts } from "../../componets";
import { getAllPosts } from "../../lib";
import PropTypes from "prop-types";

export default function AllPostPage(props) {
  const { posts } = props;
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return allPosts;
}

AllPostPage.propTypes = {
  posts: PropTypes.object,
};
