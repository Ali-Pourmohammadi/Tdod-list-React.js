export default function Item(){
    return(<li className="item">
        <div>
        <span className="check-input">
            <input type="checkBox" />
        </span>
        <span className="item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, et.</span>
        </div>
        <div>
            <span className="toggle-edit">🎫</span>
            <span className="toggle-close">❌</span>
        </div>
    </li>)
}