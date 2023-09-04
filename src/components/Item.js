export default function Item({item , onDelete}){
    return(<li className="item">
        <div>
        <span className="check-input">
            <input type="checkBox" />
        </span>
        <span className="item-text">{item.itemValue}</span>
        </div>
        <div>
            <span className="toggle-edit">🎫</span>
            <span onClick={()=>onDelete(item)} className="toggle-close">❌</span>
        </div>
    </li>)
}