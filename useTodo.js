import  { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

const init=()=>{
    return JSON.parse(localStorage.getItem('todos') || [])
  }
const useTodo = (initialState={}) => {
    const [todos, dispatch]=useReducer(todoReducer, initialState,init)
 

    const handleNewTodo=(todo)=>{
        const action={
          type: '[TODO] add todo',
          payload: todo
        }
        dispatch(action)
      }
      /*esto es para grabar los todos en en localstorage */
      useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
      },[todos])
    
  const handleRemoveTodo=(todo)=>{  
    dispatch({
      type: '[TODO] delete todo',
      payload: todo.id
    })
  }
  
  const handleToggleTodo=(id)=>{
    dispatch({
      type: '[TODO] togle todo',
      payload: id
    })
  }    
  

    return{
        ...todos,
        todos,
        handleToggleTodo,
        handleRemoveTodo,
        handleNewTodo,
        handleCount: todos.length,
        handlePendingTodo: todos.filter(todo=>!todo.done).length
        
    }
}

export default useTodo
