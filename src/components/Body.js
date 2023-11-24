import RestaurantCard ,{ withPromotedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
    const [listofRestaurants, setListofRestaurants] = useState([]); 
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); 

   const [searchText, setSearchText] = useState("");

   const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // console.log("Body Rendered: ", listofRestaurants);

   useEffect(()=>{
    fetchData();
   },[]);
   
   const fetchData = async() => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
        const json = await data.json();

        //Optional Chaining
        setListofRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   };
 
   const onlineStatus = useOnlineStatus();

   if(onlineStatus == false)
     return (
        <h1>Looks Offline..!!!</h1>
     );

    const { loggedInUser, setUserName } = useContext(UserContext);

    return listofRestaurants?.length === 0 ? (
    <ShimmerUI/> 
    ) : (
        <div className="body">
            <div className="flex">
                <div className="search m-4 p-4">
                    <input 
                        type="text" 
                        data-testid = "searchInput"
                        className="border border-solid border-black px-4 py-2 rounded-lg" 
                        placeholder="Search" 
                        value={searchText}
                        onChange={(e)=>{
                            setSearchText(e.target.value);
                        }}
                    />
                    <button 
                    className="bg-green-100 m-4 px-4 py-2 rounded-lg shadow-lg"
                        onClick={()=>{
                            // console.log(searchText);
                            const filteredRestaurants = listofRestaurants.filter((res)=>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
                                res.info.cuisines.join(", ").toLowerCase().includes(searchText.toLowerCase()) ||
                                res.info.areaName.toLowerCase().includes(searchText.toLowerCase()) 
                            );
                            setFilteredRestaurants(filteredRestaurants);
                        }}
                      >
                      Search
                    </button>
                </div>
                    <div className="search m-4 p-4 flex items-center">
                     <button 
                     className="bg-gray-200 px-8 py-2 rounded-lg shadow-lg"
                     onClick={()=>{
                         const filteredList = listofRestaurants.filter(
                             (res)=>res.info.avgRating > 4.5
                             );
                             setListofRestaurants(filteredList);
                            }}>Top Rated Restaurant
                     </button>
                    </div>
                    <div className="search mx-2 py-2 flex items-center">
                <label>UserName: </label>
                <input 
                    className="border border-black p-2 rounded-lg" 
                    value={loggedInUser}
                    onChange={(e)=>setUserName(e.target.value)}
                />
            </div>
            </div>
          
            <div className="flex flex-wrap">
            {filteredRestaurants.map((restaurant)=>(
                <Link
                 key={restaurant.info.id}
                 to={"/restaurants/"+restaurant.info.id}>
                    {restaurant.info.isOpen ? (
                        <RestaurantCardPromoted resData={restaurant} />
                    ) : (
                    <RestaurantCard resData={restaurant} />
                    )}
                 </Link>

           ))}
            </div>
        </div>
     );          
};

export default Body;