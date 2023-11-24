import ShimmerUI from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/hooks/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const [showIndex, setShowIndex] = useState(null);
   
    const resInfo = useRestaurant(resId);

    if (resInfo === null) return <ShimmerUI />;

    const { name, cuisines, costForTwoMessage } =
                resInfo?.cards[0]?.card?.card?.info;

//   const { itemCards } =
//             resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
//     console.log(itemCards);
// console.log( resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  const categories = 
            resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
                (c)=>
                    c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"      
                
            );
    // console.log("Categories are:",categories)

// console.log(itemCards);


    return (
        <div className="text-center">
         <h1 className="font-bold my-4 text-2xl">{name}</h1> 
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
             {/* <ul>
                 {itemCards.map((item) => (
                 <li key={item?.card?.info?.id} > 
                    {item?.card?.info?.name} - Rs:{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}/-
                 </li>))}
            </ul>    */}

            {categories.map((category, index)=>(
            <RestaurantCategory 
                key={category?.card?.card .title} 
                data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={()=>setShowIndex(index)}
                />
            ))}
        </div>
     );
};
 
export default RestaurantMenu;