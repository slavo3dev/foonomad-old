import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { PostHeader } from "../PostHeader";
import classes from "./postcontent.module.css";
import Image from "next/image";
export function PostContent(props) {
  const { post } = props;
  const { title, image, slug, content } = post;

  const imagePath = `/images/posts/${slug}/${image}`;
  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;
      console.log("NODE: ", node);
      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={value}
          children={children}
        />
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>
        {content}
      </ReactMarkdown>
    </article>
  );
}

PostContent.propTypes = {
  props: PropTypes.object,
};
