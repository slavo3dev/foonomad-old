import PropTypes from "prop-types";
import { PostHeader } from "../Post/postheader";

const DummyPost = {
  slug: "digital-nomad-pack",
  title: "Digital Nomad Pack",
  image: "digital-nomad-pack.png",
  date: "2021-5-5",
  content: "# Online Business that you can work remotly",
};

export function PostContent() {
  const { title, image, slug, content } = DummyPost;

  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <article>
      <PostHeader title={title} image={imagePath} />
      {content}
    </article>
  );
}

PostContent.propTypes = {
  props: PropTypes.object || null,
};
