import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";
import { CARD_IMAGE_URL } from "../utils/constants";

const ItemList = ({items}) => {
    // console.log(items)

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an Action
        dispatch(addItem(item));
    }
    return ( 
        <div>
            {items.map((item)=>(
                <div 
                    data-testid= "foodItems"
                    key={item.card.info.id}
                    className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span>
                            - ₹ 
                            {item.card.info.price
                             ? item.card.info.price /100
                             : item.card.info.defaultPrice/100
                            }
                        </span>
                    <p className="text-xs text-gray-600">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                            <img src={CARD_IMAGE_URL + item.card.info.imageId} className="w-full"/>
                            <div className="absolute">
                            <button 
                                className="p-2 mx-16 rounded-lg bg-white shadow-lg"
                                // onClick={handleAddItem}    

                            //---- This used to call the Function as Callback
                                onClick = {() => handleAddItem(item)}

                            //---- This is Wrong waay of call the Function 
                                // onClick = {handleAddItem(item)}
                            >
                                Add +
                            </button>
                            </div>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default ItemList;