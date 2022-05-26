function ShoppingList({shopListArray}) {
    console.log("in shopping list", shopListArray);
    

    return(
        <>
            <button id="resetButton">Reset</button>
            <button id="clearButton">Reset</button>
            <div>
                <ul>
                    {shopListArray.map((item) => 
                        <li key={item.id} >
                            {item.name} {item.quantity} {item.unit} {item.purchased}
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default ShoppingList;