import { useEffect, useState } from "react";

function Preview() {
  const [data, setData] = useState(null);

  const API_KEY =
    "a16115a57129311bddedaa7acd2c09e331aff1847299b795fe6459dceb603dbb";

  const ENDPOINT = "https://serpapi.com/search";

  const params = {
    engine: "google_images",
    q: "Apple",
    hl: "id",
  }

  useEffect(() => {
    const queryString = new URLSearchParams({...params, api_key: API_KEY, }).toString()
    const serpUrl = `${ENDPOINT}?${queryString}`;
    fetch("https://corsproxy.io/?"+ endcodeURIComponent (serpUrl))
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setData(result)
      })
      .catch((err) => console.error("Error:", err))
  }, [])

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Apple google_images</h1>
    </div>
  );
}

export default Preview;