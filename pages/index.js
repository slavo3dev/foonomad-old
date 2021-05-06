import { Fragment } from "react";
import { Hero, FeaturedPosts } from "../componets";

export default function Home() {
  const DummyData = [
    {
      slug: "digital-nomad-pack",
      title: "Digital Nomad Pack",
      image: "digital-nomad-pack.png",
      excerpt: "Online Business that you can work remotly",
      date: "2021-5-5",
    },
  ];
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DummyData} />
    </Fragment>
  );
}
