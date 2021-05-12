import Head from "next/head";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { Hero, FeaturedPosts } from "../componets";
import { getFeaturedPosts } from "../lib/posts-util";

export default function Home(props) {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>foo(Nomad) blog</title>
        <meta
          name="description"
          content="Digital Tools, WebSite Design and Remote LifeStyle"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

Home.propTypes = {
  props: PropTypes.object,
};
