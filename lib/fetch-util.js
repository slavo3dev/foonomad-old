export async function sendContactData(contactDetails) {
  const resposne = await fetch("/api/contact", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ contactDetails }),
  });

  const data = await resposne.json();

  if (!resposne.ok) {
    throw new Error(data.message || "Sorry, Something went wrong!!");
  }
}

/* 
 contactDetails = {
    email: addEmail,
    name: addName,
    message: addMessage,
 }
*/

export async function fetchInstagramData() {
  const contactDetails = {
    access_token: "c3oxd...",
    token_type: "bearer",
    expires_in: 5183944,
  };

  const resposne = await fetch("/api/instagram-data", {
    method: "POST",
    header: { "Content-Type": "application/json" },
    body: JSON.stringify({ contactDetails }),
  });

  const data = await resposne.json();

  if (!resposne.ok) {
    throw new Error(data.message || "Sorry, Something went wrong!!");
  }
}
