import Item from "./Item"
export default function ItemContainer({arrayItems , onDelete , onPassed , onEdit}){
    const items = arrayItems;
   return( <ul className={`item-container`}>
    {
items.map(newItem=><Item onEdit = {onEdit} onPassed={onPassed} onDelete = {onDelete} newItem={newItem} key={newItem.id}/>)
    }
    </ul>)
}