import axios from "axios";

function ShoppingList({ shopListArray, getItem }) {
    console.log("in shopping list", shopListArray);

    const updatePurchase = (itemId) => {
        console.log(`updating item with and id of ${itemId}`)
        axios.put(`/list/${itemId}`)
            .then(response => {
                getItem();
            }).catch(err => console.log('Error in UPDATING purcahse', err));
    }

    const deleteItem = (itemId) =>{
        console.log(`deleting item with and id of ${itemId}`)
        axios.delete(`/list/${itemId}`)
            .then(response => {
                getItem();
            }).catch(err => console.log('Error in DELETING item', err));
    }





    return (
        <>
            <button id="resetButton">Clear</button>
            <button id="clearButton">Reset</button>
            <div>

                {shopListArray.map((item) =>
                    <div key={item.id}>
                        {item.name}
                        <div>
                            {item.quantity} {item.unit}
                        </div>
                        {item.purchased}
                        <button onClick={() => updatePurchase(item.id)} >Purchase</button>
                        {/* {itemPurchased(item.purchased)} */}
                        <button onClick={() => deleteItem(item.id)} >Remove</button>
                        {item.purchased ? <p>Purchased</p> : <p></p>}
                       
                    </div>
                )}

            </div>
        </>
    )
}

export default ShoppingList;