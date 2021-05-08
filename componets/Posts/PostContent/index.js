import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { PostHeader } from "../PostHeader";
import classes from "./postcontent.module.css";

export function PostContent(props) {
  const { post } = props;
  const { title, image, slug, content } = post;

  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}

PostContent.propTypes = {
  props: PropTypes.object,
};
