export default function Item({item , onDelete , onEdit}){
    return(<li className="item">
        <div>
        <span className="check-input" onClick={()=> onEdit(item)}>
            <input type="checkBox" />
        </span>
        <span className="item-text">{item.done ? "✔ Done !" : item.itemValue}</span>
        </div>
        <div>
            <span className="toggle-edit">🎫</span>
            <span onClick={()=>onDelete(item)} className="toggle-close">❌</span>
        </div>
    </li>)
}