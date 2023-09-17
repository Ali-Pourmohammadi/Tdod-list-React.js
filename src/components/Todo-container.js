import { useEffect, useState } from "react"
import Form from "./Form"
import ItemContainer from "./ItemContainer"
import Status from "./StatusBar"
export default function TodoContainer(){
    const [itemValue , setItemValue] = useState("");
    const [items , setItems] = useState(function(){
        const storedItems = localStorage.getItem("items");
        return JSON.parse(storedItems)
    });
    const [editMode  , setEditMode] = useState(false)
    const [editItemId , setEditItemId] = useState(null);
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
    useEffect(function(){
        localStorage.setItem("items" , JSON.stringify(items));
    },[items])

    function handleEdit(curr){
        setEditMode(editMode=> !editMode);
        setEditItemId(curr.id)
        setItemValue(curr.itemValue);   
    }
    return(<div className="todo-container">
        <Form setItems = {setItems} items = {items} addItem = {handleAddItem} itemValue = {itemValue} setItemValue ={setItemValue} editMode={editMode} setEditMode = {setEditMode} editItemId={editItemId} setEditItemID={setEditItemId}  />
        <ItemContainer arrayItems = {items} onDelete ={handleDelete} onPassed = {handleDone}  onEdit={handleEdit}/>
        <Status arrayItems = {items} />
    </div>)
}