import { useContext } from "react";
import { CARD_IMAGE_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurantCard = (props) => {
    const {resData} = props;
    const {loggedInUser} = useContext(UserContext)
  
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        areaName,
    } = resData.info;
      return (  
          <div className="m-4 p-4 w-64 rounded-lg bg-gray-100 hover:bg-gray-300 shadow-lg">
              <img className="rounded-lg" alt="res-logo" src={CARD_IMAGE_URL+ cloudinaryImageId}/>
              <h3 className="font-bold text-xl py-2">{name}</h3>
              <h5 style={{color: "#02060c99",fontFamily:"Basis Grotesque Pro"}}>{cuisines.join(", ")}</h5>
              <h4 className="text-base font-bold">⭐{avgRating} Stars</h4>
              <h4 className="text-sm text-yellow-900">{costForTwo}</h4>
              <h5>{areaName}</h5>
              <p className="text-sm">Exclusive for {loggedInUser}</p>
          </div>
      );
   }

   // Higher Order Components

   export const withPromotedLabel = (RestaurantCard) => {
    return (props) =>{
        return(
            <div>
                <label className="absolute bg-green-500 text-white px-2 m-2">Is Open</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
   };
    



   export default RestaurantCard;