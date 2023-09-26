import { Button, Dialog, TextField } from "@mui/material";
import { useState } from "react";

export function TodoUpdateDialog({todo, setTodo, handleDialogClose, handleUpdateClick}){
    return (
        <>
            <Dialog open={todo.id !==null}>
            {/* <input placeholder='Title' value={todo.title} onChange={e => setTodo({...todo, title: e.target.value})} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 focus:outline-none' /> */}
                <div className='p-2'>
                    <input placeholder='Title' value={todo.title} onChange={e => setTodo({...todo, title: e.target.value})} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 focus:outline-none' />
                </div>
                <div className='p-2'>
                    <input placeholder='Description' value={todo.description} onChange={e => setTodo({...todo, description:e.target.value})} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 focus:outline-none' />
                </div>
                <Button onClick={() => handleDialogClose()}>
                    Close
                </Button>
                <Button onClick={() => handleUpdateClick(todo.id)}>
                    Update
                </Button>
            </Dialog>
        </>
    )
}