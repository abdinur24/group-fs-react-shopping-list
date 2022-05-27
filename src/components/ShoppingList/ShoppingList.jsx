function ShoppingList({shopListArray,deleteItem}) {
    console.log("in shopping list", shopListArray);
    

    return(
        <>
            <button onClick={() => deleteItem()} id="resetButton">Reset</button>
            <button id="clearButton">Clear</button>
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