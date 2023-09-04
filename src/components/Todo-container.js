import { useState } from "react"
import Form from "./Form"
import ItemContainer from "./ItemContainer"
import Status from "./StatusBar"
export default function TodoContainer(){
    const [items , setItems] = useState([]);
    function handleAddItem(item){
        setItems([...items , item])
        console.log(items);
    }
    function handleDelete(curr){
        console.log(curr);
        setItems(items=> items.filter(item=>item.id !== curr.id));
    }
    return(<div className="todo-container">
        <Form addItem = {handleAddItem}/>
        <ItemContainer arrayItems = {items} onDelete ={handleDelete}/>
        <Status/>
    </div>)
}