import { AllPosts } from "../../componets";
import { getAllPosts } from "../../lib";
import PropTypes from "prop-types";

function AllPostPage(props) {
  const { posts } = props;
  return <AllPosts posts={posts} />;
}

export default AllPostPage;

export function getStaticProps() {
  const allPosts = getAllPosts();

  return allPosts;
}

AllPostPage.propTypes = {
  posts: PropTypes.object,
};
