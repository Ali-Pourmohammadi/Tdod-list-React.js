export default function Status({arrayItems , editMode}){
    const items = arrayItems
    const passadItems = items.filter(item=> item.done).length;
    return(<div className="status-bar">
       {editMode ? <h2>in Edit Mode...</h2> :<h2>{items ? `you have ${items.length} item to do ${passadItems} / ${items.length}`:" Write Something to do ...."}</h2>}
        
    </div>)
}