import React from "react";

interface Props {
    className: string;
    title: string;
}

function Button({ className, title }: Props) {
    return <button className={className}>{title}</button>;
}

export default Button;
