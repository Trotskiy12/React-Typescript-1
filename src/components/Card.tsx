import React, {FC, useState} from "react";

// добавим перечисление, которое в дальнейшем сможем дерагать при вызове компонента
export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

// В интерфейсе опишем props которые будет ожидать от нас компонент
// Если хотим сделать необязательными, то ставим "?"
interface CardProps {
    width?: string;
    height?: string;
    // добавим свойство, которое позволит нам добавлять элементы внутри Card
    // но каждый раз прописывать -- не стоит
    // children?: React.ReactChild | React.ReactNode
    variant: CardVariant;
    // добавляем функцию
    // если фукнция должна что-то принимать, то в () указывает параметры и их типы
    // onClick: (num: number) => void;
}

// Объект с props у нас типа CardProps
// React.FC<CardProps> --> Говорим, что Card -- это Functional Component React'a с типом CardProps
const Card: FC<CardProps> = 
    ({
        width, 
        height, 
        variant,
        children}) => {
    return (
        <div style={{width, height, border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'lightgray': ''}}
        >
            {/* Отрисовка всего чего хотим внутри Card */}
            {children}
        </div>
    );
}

export default Card;