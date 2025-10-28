import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
      const data = await fetch(
        "url",
      );

    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);
  };

  console.log(resInfo);
 
 // const {name, cuisines, costForTwoMessage} = resInfo?.cards[2].card?.card?.info;
  return resInfo=== null? (<Shimmer/>) :(
    <div className="menu">
    
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
