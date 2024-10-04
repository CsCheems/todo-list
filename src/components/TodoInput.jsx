import { useState } from "react"

export default function TodoInput(props){
    const{handleAddTodos} = props
    const[todoValue, setTodoValue] = useState('')

    return(
        <div>
            <header>
                <input value={todoValue} onChange={(e) => {
                    setTodoValue(e.target.value)
                }} placeholder="Enter todo..."/>
                <button onClick={() => {
                    handleAddTodos(todoValue)
                    setTodoValue('')
                }}>Add</button>
            </header>
        </div>
    )
}