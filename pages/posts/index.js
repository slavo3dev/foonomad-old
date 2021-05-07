import { AllPosts } from "../../componets";

const DummyData = [
  {
    slug: "digital-nomad-pack",
    title: "Digital Nomad Pack",
    image: "digital-nomad-pack.png",
    excerpt: "Online Business that you can work remotly",
    date: "2021-5-5",
  },
];

function AllPostPage() {
  return <AllPosts posts={DummyData} />;
}

export default AllPostPage;
