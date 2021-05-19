import { fetchInstagramData } from "../../lib/fetch-util";

export function InstagramImages() {
  const instagramData = fetchInstagramData();
  return (
    <div>
      <h1>Instgran Profile</h1>
      {console.log(instagramData)}
    </div>
  );
}
