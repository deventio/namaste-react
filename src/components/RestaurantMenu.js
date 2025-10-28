import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await fetch(
        "https://corsproxy.io/?key=b70a9b1a&url=https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10576&catalog_qa=undefined&submitAction=ENTER",
        {
          // DON'T set mode:'no-cors' — that yields opaque responses with empty body
          // mode: 'cors',
          // credentials: 'include' // only if you need cookies
        }
      );

      console.log("res.type:", res.type); // "cors", "basic", or "opaque"
      console.log("status:", res.status); // e.g. 200, 0 (opaque)
      console.log("ok:", res.ok);
      console.log("content-type:", res.headers.get("content-type"));
      console.log(
        "access-control-allow-origin:",
        res.headers.get("access-control-allow-origin")
      );

      const text = await res.text();
      console.log("raw text length:", text.length);
      console.log("raw text preview:", text.slice(0, 500));

      try {
        const json = JSON.parse(text);
        console.log("parsed json:", json);
      } catch (e) {
        console.error("JSON parse failed:", e);
      }
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  };

  return (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
