
export default function Form({addItem , itemValue , setItemValue  , setEditMode , editMode , editItemId , setEditItemID   , setItems}){
    function handleSubmit(e){
        e.preventDefault();
        if( !itemValue) return ;
        if(editMode){
                setItems(items=> items.map(item=> item.id === editItemId ? {...item  , itemValue : itemValue }:item ))
              setEditItemID(null)
                setEditMode(false);
                setItemValue("");
        }else{
        const id = crypto.randomUUID();
        const newItem = {itemValue ,  id  , done:false}
        addItem(newItem);
        setItemValue("");
        }
    }
    return (<form className="form" onSubmit={handleSubmit}>
        <label htmlFor=""><p>Write Your Plan!</p></label>
        <div className="input-container">
        <input 
        type="text"value={itemValue} onChange={(e)=> setItemValue(e.target.value) } />
        <button className="btn-submit">{editMode  ? "Edit" : "Add"}</button>
        </div>
 
    </form>)
}