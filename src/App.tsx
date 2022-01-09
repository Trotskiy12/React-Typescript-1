import {BrowserRouter, Route, NavLink, Routes} from 'react-router-dom'
import UsersPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';
const App = () =>  {
  // укажем тип, который должен быть у состояния -- массив пользователей

  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to="/users">Пользователи</NavLink>
          <NavLink to="/todos">Список дел</NavLink>
        </div>
        <Routes>
          <Route path={'/users'} element={<UsersPage/>}/>
          <Route path={'/todos'} element={<TodosPage/>}/>
          <Route path={'/users/:id'} element={<UserItemPage/>}/>
          <Route path={'/todos/:id'} element={<TodoItemPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
