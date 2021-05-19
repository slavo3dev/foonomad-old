import Head from "next/head";
import PropTypes from "prop-types";
import { Fragment } from "react";
import {
  Hero,
  FeaturedPosts,
  EventList,
  InstagramImages,
} from "../componets";
import { getFeaturedPosts } from "../lib/posts-util";
import { getFeaturedEvents } from "../dummy-data";

export default function Home(props) {
  const { posts } = props;

  const featuredEvents = getFeaturedEvents();
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
      <EventList items={featuredEvents} />
      <InstagramImages />
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
