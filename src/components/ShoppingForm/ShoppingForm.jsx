import { useState } from 'react';
import axios from 'axios';

function ShoppingForm(props){
    const getItem = props.getItem;
    let [itemName, setItemName] = useState('');
    let [itemQuantity, setItemQuantity] = useState('');
    let [itemUnit, setItemUnit] = useState('');

    const addItem = (evt) =>{
        evt.preventDefault();
        console.log(`The item is ${itemName} and it has quantity of ${itemQuantity} and unit of ${itemUnit}`);

        //  axios POST
        axios.post('/list', 
            {name: itemName, quantity: itemQuantity, unit: itemUnit})
            .then(response => getItem(), console.log('In POST'))
            .catch(err => console.log('Error in POST', err))

            setItemName('');
            setItemQuantity('');
            setItemUnit('');
    }

    return  (
        <>
            <form onSubmit={addItem}>
            <label htmlFor="name-input">Name:</label>
                <input id="item-name"
                    value={itemName}
                    onChange={e => setItemName(e.target.value)}/>
                <label htmlFor="quantity-input">Quantity:</label>
                <input id="item-quantity"
                    value={itemQuantity}
                    onChange={e => setItemQuantity(e.target.value)}/>
                 <label htmlFor="unit-input">Unit:</label>
                <input id="item-name"
                    value={itemUnit}
                    onChange={e => setItemUnit(e.target.value)}/>
                <button type="submit">Add Item</button>
            </form>
        </>
    );
}

export default ShoppingForm;