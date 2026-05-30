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
  };

  useEffect(() => {
    const queryString = new URLSearchParams({
      ...params,
      api_key: API_KEY,
    }).toString();

    const serpUrl = `${ENDPOINT}?${queryString}`;

    fetch("https://corsproxy.io/?" + encodeURIComponent(serpUrl))
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  if (!data || !data.images_results) {
  return <h1>Loading...</h1>;
}

return (
  <div className="container">

    <div className="apple apple1">🍎</div>
    <div className="apple apple2">🍎</div>
    <div className="apple apple3">🍎</div>
    <div className="apple apple4">🍎</div>
    <div className="apple apple5">🍎</div>

    <div className="card">
      <h1 className="title">Apple Google Images</h1>

      <h2 className="text">
        {data.images_results[1].title}
      </h2>

      <img
        src={data.images_results[1].thumbnail}
        width="700"
        className="product-image"
      />

      <p className="text">
        Source: {data.images_results[1].source}
      </p>

      <p className="text">
        Price: {data.images_results[1].price || "$1.98"}
      </p>

      <p className="text">
        Product ID: {data.images_results[1].product_id || "H-E-B"}
      </p>

      <p className="text">
        Position: {data.images_results[1].position}
      </p>

      <a
        href={data.images_results[1].product_link}
        className="button"
      >
        Open Product
      </a>
    </div>

  </div>
);
}

export default Preview;