import axios from "axios";

function ShoppingList({shopListArray,deleteItem, getItem}) {
    console.log("in shopping list", shopListArray);
    
    function clearList(event){
        console.log('in clear list');

        axios.delete(`/list/`)
            .then(()=>{getItem()})
            .catch(err =>{ console.log('error in Clear', err)})

    }

    return(

        <>
            <button id="resetButton">Reset</button>
            <button onClick={clearList} id="clearButton">Clear</button>
            <div>
               
                    {shopListArray.map((item) => 
                        <div key={item.id}>  
                            {item.name} 
                            <div>
                            {item.quantity} {item.unit}
                            </div> 
                            {item.purchased}
                            <button>Buy</button>
                            <button>Remove</button>
                       </div>
                    )}
               
            </div>
        </>
    )
}

export default ShoppingList;