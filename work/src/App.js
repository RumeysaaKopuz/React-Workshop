import './App.css';
import {useState} from 'react'

function App() {
const [newItem, setNewItem] = useState("")
const [items, setItems] = useState([]);


function addItem(){
  
  if(!newItem) {
    alert("enter item")
    return;
  }
  const item = {
    id: Math.floor(Math.random() * 1000),
    value: newItem
  }

  setItems(oldList => [...oldList, item]);
  setNewItem("")
}
function deleteItem(id){
  const newArray = items.filter(item => item.id !== id)
  setItems(newArray)
 }
  return (
    <>
     <div className='center'>
     <h3>Todo List</h3>
      <input type='text' placeholder='...'  value={newItem} onChange={e => setNewItem(e.target.value) }  />
      <button onClick={() => addItem()} type='button'> Ekle</button>
       
       <ul>
       {items.map(item => {
        return(
          <li key={item.id}>{item.value} <button className='delete-btn' onClick={()=>deleteItem(item.id)}>⛔️</button></li>
        )
       })}
      
       </ul>
    
     </div>
    </>
  );
}

export default App;
