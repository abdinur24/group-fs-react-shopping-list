import React from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';



function App() {

        let [shopListArray, setShopListArray] = useState([]);
    
        const getItem = () =>{
            axios.get('/list')
                .then(response =>{
                    console.log(response.data);
                    setShopListArray(response.data)
                }).catch(err => console.log('In GET', err));
        }

        const deleteItem= (listid) =>{
            axios.delete(`/list//${listid}`)
            .then(()=>{getItems()})
            .catch(err =>{ console.log('error in deleteitem', err)})
        }
    
        useEffect(() =>{
            getItem();
        }, [])
    
    return (
        <div className="App">
            <Header />
            <main>
                <ShoppingForm getItem={getItem}/>
                <ShoppingList shopListArray={shopListArray} deleteItem={deleteItem}/>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
