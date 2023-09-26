import { useEffect, useState } from 'react'
import './App.css'
import { toast } from 'react-toastify'
import { TodoCard } from './components/TodoCard'
import {TodoUpdateDialog} from './components/TodoUpdateDialog'
function App() {
  const [todoToggle, setTodoToggle] = useState(null)
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("Todos")) ?? []
  })
  const [todo, setTodo] = useState({
    id:null,
    title:"",
    description:""
  })
  
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos))
  }, [todos])
  
  const handleSumbmit = e =>{
    e.preventDefault()
    if(todo.title.length === 0 || todo.description.length === 0){
      toast.error('All fields are required!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
    }else{
      setTodos(currentTodo => {
        return [
          ...currentTodo,
          {id: crypto.randomUUID(), title: todo.title,description: todo.description, isCompleted:false},
        ]
      })
      toast.success('Todo has been added!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTodo({
        id:null,
        title:"",
        description:""
      })
    }
  }
 
  const handleUpdateClick = id => {
    const tempTodos = [...todos]
    todos.map(todoArray => {
      if(todoArray.id === id){
        todoArray.title = todo.title
        todoArray.description = todo.description
      }
      return todo
    })
    setTodos(tempTodos)
    setTodo({
      id:null,
      title:"",
      description:""
    })
  }
    
  const handleDeleteClick = id => {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  const handleToggleCompleted = id => {
    const tempTodos = [...todos]
    todos.map(todo => {
      if(todo.id === id){
        todo.isCompleted = !todo.isCompleted
      }
      return todo
    })
    setTodos(tempTodos)
  }

  const handleEditClick = props => {
    setTodo(props)
  }

  const handleDialogClose = () => {
    setTodo({
      id:null,
      title:"",
      description:""})
  }
  

  // function handleToggleCompleted(id){
  //   const todos = [...Todo]
  //   todos.map(todo => {
  //     if(todo.id === id){
  //       todo.isCompleted = !todo.isCompleted
  //     }
  //     return todo
  //   })
  //   setTodos(todos)
  // }
  
  // setTodos(currentTodo =>{
  //   return currentTodo.map(todo => {
  //     if(todo.id === id) {
  //         if(isCompleted == true){
  //          return{...todo, isCompleted:false}
  //          }
  //         else{
  //          return{...todo, isCompleted:true}
  //         }
  //     }
  //     return todo
  //   })
  // })


  return (
    <>
    <TodoUpdateDialog 
      todo={todo}
      setTodo={setTodo}
      handleDialogClose={handleDialogClose}
      handleUpdateClick={handleUpdateClick}
    />

    <div className='text-center p-4'> 
      <button className='rounded-2xl p-2 bg-gradient-to-l from-cyan-500 to-blue-500 text-white' onClick={() => setTodoToggle(todoToggle=>!todoToggle)}>
        {todoToggle ? "Hide" : "Show"} Form
      </button>
      {todoToggle ?
        <div>
          <div className='p-2'>
            <input placeholder='Title' value={todo.title} onChange={e => setTodo({...todo, title: e.target.value})} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 focus:outline-none' />
          </div>
          <div className='p-2'>
            <input placeholder='Description' value={todo.description} onChange={e => setTodo({...todo, description:e.target.value})} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 focus:outline-none' />
          </div>
          <div>
            <button onClick={handleSumbmit}>
              Create
            </button>
          </div>
        </div>
        :null
      }
      
    </div>


    
    {!todoToggle ? 
      <div className=''>
        <h3 className='text-center mt-5 pb-10'>Todo List</h3>
        <div className='xl:grid xl:grid-cols-5 lg:grid lg:grid-cols-3 lg:place-items-center flex gap-2 flex-wrap justify-center'>
            <TodoCard
              todos={todos}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
              handleToggleCompleted={handleToggleCompleted}
            />
        </div>
      </div>
      :null
      }
    </>
  )
}

export default App
