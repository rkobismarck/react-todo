import React, { useState } from 'react'
import FormTodo from './FormTodo'
import TodoList from './TodoList'

const Container = () => {
    const [list, setList] = useState([])

    const handleAddItem = addItem => {
        setList((prev) => [...prev, addItem]);
    }

    return (
        <div>
            <FormTodo handleAddItem={handleAddItem}/>
            <TodoList list={list} setList={setList}/>
        </div>
    )
}

export default Container;
