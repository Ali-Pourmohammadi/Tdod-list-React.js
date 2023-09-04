import { useState } from "react"

export default function Form({addItem , itemValue , setItemValue}){
    function handleSubmit(e){
        e.preventDefault();
        const id = crypto.randomUUID();
        const newItem = {itemValue ,  id  , done:false}
        addItem(newItem);
        setItemValue("");
    }
    return (<form className="form" onSubmit={handleSubmit}>
        <label htmlFor=""><h4>😉 Write your dayli routing...</h4></label>
        <div>
            <input type="text"value={itemValue} onChange={(e)=> setItemValue(e.target.value)}/>
        <button className="btn-submit">Add</button>
        </div>
 
    </form>)
}