import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { PostHeader } from "../PostHeader";
import classes from "./postcontent.module.css";

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
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}

PostContent.propTypes = {
  props: PropTypes.object || null,
};
