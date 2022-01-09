// Универсальный компонент -- список/лист для разных типов
import React from "react";
// <T> -- для любых типов
interface ListProps<T> {
    items: T[];
    // компонент ожидает props, который будет являеться компонетом, который нужно отрисовать (у нас это UserItem)
    renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>){
    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}