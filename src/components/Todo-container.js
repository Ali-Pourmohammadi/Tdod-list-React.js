import Form from "./Form"
import ItemContainer from "./ItemContainer"
import Status from "./StatusBar"
export default function TodoContainer(){
    return(<div className="todo-container">
        <Form/>
        <ItemContainer/>
        <Status/>
    </div>)
}