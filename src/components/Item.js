export default function Item({newItem , onDelete , onPassed , onEdit}){
    return(<li className="item">
        <div className="title-box">

        <span onClick={()=>onPassed(newItem)} className="item-text">{newItem.done ? "done ! ✔ " : newItem.itemValue} </span>
        </div>
        <div className="toggle-btns">
            <span onClick={()=> onEdit(newItem)} className="toggle-edit">🎫</span>
            <span onClick={()=>onDelete(newItem)} className="toggle-close">❌</span>
        </div>
    </li>)
}