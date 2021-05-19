export default async function instagramData(req, res) {
  console.log("Hello From Instagram Data: ", req.body);
  res.status(200).json({ name: "John Doe" });

  async function fetchIg() {
    const resposne = await fetch(
      "'https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&&access_token=F4RVB...'",
      {
        method: "GET",
        header: {
          "Content-Type": "application/json",
        },
      },
    );
    const data = await resposne.json();

    console.log("Data from IG: ", data);
  }

  fetchIg();
}
