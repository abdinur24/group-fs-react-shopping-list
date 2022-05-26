function ShoppingList({shopListArray}) {
    console.log("in shopping list", shopListArray);
    

    return(
        <>
            <button id="resetButton">Reset</button>
            <button id="clearButton">Reset</button>
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