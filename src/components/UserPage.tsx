import axios from "axios";
import React, {FC, useEffect, useState} from "react";
import { IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";
import { useNavigate } from "react-router-dom";
const UsersPage: FC = () => {
    // укажем тип, который должен быть у состояния -- массив пользователей
    const [users, setUsers] = useState<IUser[]>([])
    const history = useNavigate()
  // при перворм рендеринге страницы сразу получаем пользователей
    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try{
        // при вызове запроса -- мы получаем "черный ящик", то есть мы не знаем, что там внутри
        // <IUser[]> -- дает поняить, что внутри массив с пользователями и с теми полями, которые мы указали внутри IUser[]
        const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <List 
        items={users} 
        renderItem={(user: IUser) => <UserItem onClick={() => history('/users/' + user.id)} user = {user} key={user.id}/>}></List>
    )
}

export default UsersPage;