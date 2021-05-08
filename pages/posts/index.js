import { AllPosts } from "../../componets";
import { getAllPosts } from "../../lib/posts-util";
import PropTypes from "prop-types";

export default function AllPostPage(props) {
  const { posts } = props;
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

AllPostPage.propTypes = {
  props: PropTypes.object,
  posts: PropTypes.array,
};
