import axios from "axios";

function ShoppingList({shopListArray}) {
    console.log("in shopping list", shopListArray);
    
    function clearList(event){
        console.log('in clear list');

        axios.delete()

    }

    return(

        <>
            <button onClick={clearList} id="resetButton">Reset</button>
            <button id="clearButton">Clear</button>
            <div>
               
                    {shopListArray.map((item) => 
                        <div key={item.id}>  
                            {item.name} 
                            <div>
                            {item.quantity} {item.unit}
                            </div> 
                            {item.purchased}
                            <button >Buy</button>
                            <button>Remove</button>
                       </div>
                    )}
               
            </div>
        </>
    )
}

export default ShoppingList;