import { useState } from "react"
import Form from "./Form"
import ItemContainer from "./ItemContainer"
import Status from "./StatusBar"
export default function TodoContainer(){
    const [itemValue , setItemValue] = useState("");
    const [items , setItems] = useState([]);
    const [editMode , setEditMode] = useState(false);
    // add  Item
    function handleAddItem(item){
        setItems([...items , item])
    }
    //   delete iitem
    function handleDelete(curr){
        setItems(items=> items.filter(item=>item.id !== curr.id));
    }
    // done item
    function handleDone (curr){
        setItems(items=>items.map(item=> item.id ===curr.id ? {...item  , done : !item.done}:item));
    }
    function handleEdit(){}
    return(<div className="todo-container">
        <Form addItem = {handleAddItem} itemValue = {itemValue} setItemValue ={setItemValue} />
        <ItemContainer arrayItems = {items} onDelete ={handleDelete} onEdit = {handleDone}/>
        <Status arrayItems = {items}/>
    </div>)
}