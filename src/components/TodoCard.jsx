export function TodoCard(props){
    return (
        <>  
            <div key={props.todo.id} className='container border xl:my-3 xl:p-4 xl:w-80 pb-2 rounded-md shadow-md '>
                <div  className='text-center'>
                        <div>
                            {props.todo.title}
                        </div>
                        <div>
                            {props.todo.description}
                        </div>
                    </div>
                    <div className='flex gap-1 justify-center'>
                    <button className='sm:px-2 border border-2 px-5 rounded-md border-yellow-400' onClick={() => props.handleEditClick(props.todo)}>Edit</button>
                    <button className='sm:px-2 border border-2 px-5 rounded-md border-red-500' onClick={() => props.handleDeleteClick(props.todo.id)}>Delete</button>
                    <button className={props.todo.isCompleted ? 'sm:px-2 border border-2 px-5 rounded-md bg-green-500' : 'sm:px-2 border border-2 px-5 rounded-md bg-red-500'} onClick={() => props.handleToggleCompleted(props.todo.id)}>{props.todo.isCompleted ? "Completed" : "Incomplete"}</button>
                </div>
            </div>
        </>
    )

    
}