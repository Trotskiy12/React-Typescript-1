// прописываем типы, которые будут использоваться в разных частях приложения
// отдельны интерфейс для адреса
// I before name --> this is Interface
export interface IAdress{
    street: string;
    city: string;
    zipcode: string;
}
// интерфейс для пользователя
export interface IUser{
    id: number;
    name: string;
    email: string;
    address: IAdress;
} 

export interface ITodo{ 
    id: number;
    title: string;
    completed: boolean;
}