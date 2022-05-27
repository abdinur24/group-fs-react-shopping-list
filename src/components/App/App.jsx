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
            console.log('in get') //added
            axios.get('/list')
                .then(response =>{
                    console.log('get sent',response.data); //changed
                    setShopListArray(response.data)
                }).catch(err => console.log('In GET', err));
        }

        const deleteItem= () =>{
            console.log('1')
            axios.delete(`/list`)
            .then((response)=>
            {console.log('2'); 
            getItem()})
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
                <ShoppingList shopListArray={shopListArray} deleteItem={deleteItem} getItem={getItem}/>

            </main>
        </div>
    );
}

export default App;
