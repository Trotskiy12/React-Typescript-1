import axios from "axios";
import React, {FC, useEffect, useState} from "react";
import { ITodo } from "../types/types";
import List from "./List";
import TodoItem from "./TodoItem";

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
    }, [])


    async function fetchTodos() {
        try{
        // при вызове запроса -- мы получаем "черный ящик", то есть мы не знаем, что там внутри
        // <IUser[]> -- дает поняить, что внутри массив с пользователями и с теми полями, которые мы указали внутри IUser[]
        const res = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(res.data)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <List 
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}></List>
    )
}

export default TodosPage