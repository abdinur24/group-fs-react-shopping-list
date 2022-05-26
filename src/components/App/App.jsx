import React from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import { useEffect, useState } from 'react';
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx';



function App() {

        let [shopListArray, setShopListArray] = useState([]);
    
        const getItem = () =>{
            axios.get('/')
                .then(response =>{
                    console.log(response.data);
                    setShopListArray(response.data)
                }).catch(err => console.log('In GET', err));
        }
    
        useEffect(() =>{
            getItem();
        }, [])
    
    return (
        <div className="App">
            <Header />
            <main>
                <ShoppingForm getItem={getItem}/>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
