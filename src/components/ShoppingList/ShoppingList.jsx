function ShoppingList({shopListArray}) {
    console.log("in shopping list", shopListArray);
    

    return(
        <>
            <button id="resetButton">Reset</button>
            <button id="clearButton">Reset</button>
            <div>
                <ul>
                    {shopListArray.map((name, quantity, unit, purchased, index) => 
                        <li key={index} >
                            {name} {quantity} {unit} {purchased}
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default ShoppingList;