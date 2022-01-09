import axios from "axios";
import React, { FC, useState, useEffect} from "react";
import { IUser } from "../types/types";
import { useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
interface UserItemPageParams {
    id: string;
}

const UserItemPage: FC = () => {

    // укажем тип, который должен быть у состояния -- массив пользователей
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams['id']>()
    const history = useNavigate()
  // при перворм рендеринге страницы сразу получаем пользователей
    useEffect(() => {
        fetchUser()
    })

    async function fetchUser() {
        try{
        // при вызове запроса -- мы получаем "черный ящик", то есть мы не знаем, что там внутри
        // <IUser[]> -- дает поняить, что внутри массив с пользователями и с теми полями, которые мы указали внутри IUser[]
        const res = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
        setUser(res.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => history('/users')}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;