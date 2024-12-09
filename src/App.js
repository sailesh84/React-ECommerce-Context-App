import React from 'react'
import Item from './components/Item'
import './App.css';
import Cart from './components/Cart';



export default function App() {
  return (
    <div>
      <Item name="ASUS Rog Strix G-17" price={950000}  />
      <Item name="ASUS Rog Strix G-18" price={1650000}  />
      <Item name="ASUS Rog Zephryus Dual 23" price={1750000}  />
      <Item name="ASUS Rog Zephryus Dual 24" price={2150000}  />
      <Item name="ASUS Zenbook Pro 24" price={850000}  />
      <Cart/>
    </div>
  )
}
