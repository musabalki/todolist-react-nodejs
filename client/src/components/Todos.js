import React from "react"

const Todos=({todos})=>{
    
    return (
       <div>
          {todos.map((todo)=><h2 key={todo.id}>{todo.message}</h2>)}
       </div>
    )
}
export default Todos;