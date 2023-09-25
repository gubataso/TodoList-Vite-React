import { useEffect, useState } from 'react'
import './App.css'
import { toast } from 'react-toastify'

function App() {
  const [TodoToggle, setTodoToggle] = useState(null)
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [Todo, setTodo] = useState([])

  useEffect(() => {
    console.log("test")
  }, [Todo])
  
  const handleSumbmit = e =>{
    e.preventDefault()
    if(newTitle.length === 0 || newDescription.length === 0){
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
      setTodo(currentTodo => {
        return [
          ...currentTodo,
          {id: crypto.randomUUID(), title: newTitle,description: newDescription, isCompleted:false},
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
      setNewTitle("")
      setNewDescription("")
    }
  }
    
  const handleDeleteClick = id => {
    setTodo(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  


  const handleToggleCompleted = id => {
    const todos = [...Todo]
    todos.map(todo => {
      if(todo.id === id){
        todo.isCompleted = !todo.isCompleted
      }
      return todo
    })
    setTodo(todos)
  }
  // function handleSumbmit(e){
  //   e.preventDefault()
  //   if(newTitle.length === 0 || newDescription.length === 0){
  //     toast.error('All fields are required!', {
  //           position: "top-right",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "dark",
  //         });
  //   }else{
  //     setTodo(currentTodo => {
  //       return [
  //         ...currentTodo,
  //         {id: crypto.randomUUID(), title: newTitle,description: newDescription, isCompleted:false},
  //       ]
  //     })
  //     toast.success('Todo has been added!', {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //     });
  //     setNewTitle("")
  //     setNewDescription("")
  //   }
  // }

  // function handleDeleteClick(id){
  //   setTodo(currentTodos => {
  //     return currentTodos.filter(todo => todo.id !== id)
  //   })
  // }

  // function handleToggleCompleted(id){
  //   const todos = [...Todo]
  //   todos.map(todo => {
  //     if(todo.id === id){
  //       todo.isCompleted = !todo.isCompleted
  //     }
  //     return todo
  //   })
  //   setTodo(todos)
  // }
  // setTodo(currentTodo =>{
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
    <div className='text-center p-4'> 
      <button className='rounded-2xl p-2 bg-gradient-to-l from-cyan-500 to-blue-500 text-white' onClick={() => setTodoToggle(TodoToggle=>!TodoToggle)}>
        {TodoToggle ? "Hide" : "Show"} Form
      </button>
      {TodoToggle ?
        <div>
          <div className='p-2'>
            <input placeholder='Title' value={newTitle} onChange={e => setNewTitle(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 focus:outline-none' />
          </div>
          <div className='p-2'>
            <input placeholder='Description' value={newDescription} onChange={e => setNewDescription(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 focus:outline-none' />
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
    {!TodoToggle ? 
      <div className=''>
        <h3 className='text-center mt-5 pb-10'>Todo List</h3>
        <div className='xl:grid xl:grid-cols-5 lg:grid lg:grid-cols-3 lg:place-items-center flex gap-2 flex-wrap justify-center'>
          {Todo.map(todo =>{
            return(
              <div key={todo.id} className='container border xl:my-3 xl:p-4 xl:w-80 pb-2 rounded-md shadow-md '>
                <div  className='text-center'>
                  <div>
                    {todo.title}
                  </div>
                  <div>
                    {todo.description}
                  </div>
                </div>
                <div className='flex gap-1 justify-center'>
                  <button className='sm:px-2 border border-2 px-5 rounded-md border-yellow-400'>Edit</button>
                  <button className='sm:px-2 border border-2 px-5 rounded-md border-red-500' onClick={() => handleDeleteClick(todo.id)}>Delete</button>
                  <button className={todo.isCompleted ? 'sm:px-2 border border-2 px-5 rounded-md bg-green-500' : 'sm:px-2 border border-2 px-5 rounded-md bg-red-500'} onClick={() => handleToggleCompleted(todo.id)}>{todo.isCompleted ? "Completed" : "Incomplete"}</button>
                </div>
              </div>
            )
            
          })}
        </div>
      </div>
      :null
      }
    </>
  )
}

export default App
