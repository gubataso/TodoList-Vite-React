export function TodoCard({todos, handleDeleteClick, handleToggleCompleted,handleEditClick}){
    return (
        <>
        {todos.map(todo =>{
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
                    <button className='sm:px-2 border border-2 px-5 rounded-md border-yellow-400' onClick={() => handleEditClick(todo)}>Edit</button>
                    <button className='sm:px-2 border border-2 px-5 rounded-md border-red-500' onClick={() => handleDeleteClick(todo.id)}>Delete</button>
                    <button className={todo.isCompleted ? 'sm:px-2 border border-2 px-5 rounded-md bg-green-500' : 'sm:px-2 border border-2 px-5 rounded-md bg-red-500'} onClick={() => handleToggleCompleted(todo.id)}>{todo.isCompleted ? "Completed" : "Incomplete"}</button>
                </div>
            </div>
            )
            })}
        </>
    )

    
}