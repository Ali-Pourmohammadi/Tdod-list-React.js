export default function Status({arrayItems}){
    const items = arrayItems
    const passadItems = items.filter(item=> item.done).length;
    return(<div className="status-bar">
        <h2>{items ? `you have ${items.length} item to do ${passadItems} / ${items.length}`:" Write Something to do ...."}</h2>
    </div>)
}