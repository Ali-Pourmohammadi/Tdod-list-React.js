import Item from "./Item"
export default function ItemContainer({arrayItems , onDelete , onEdit}){
    const items = arrayItems;
   return( <ul className={`item-container ${items.length === 0 ? "display-none":""}`}>
    {
        items.map(item=> <Item onEdit ={onEdit} onDelete = {onDelete} item={item} key={item.id}/>)
    }
    </ul>)
}