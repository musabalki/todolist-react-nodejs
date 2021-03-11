import React from "react"

const TodoItem=(props)=>{
    return (
       <div>
          {props.todo.message}
       </div>
    )
}
export default TodoItem;