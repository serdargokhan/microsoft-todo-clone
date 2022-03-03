import React from "react";

interface Props {
    className: string;
    title: string;
    onClick?: () => void;
}

function Button({ className, title, onClick }: Props) {
    return (
        <button onClick={onClick} className={className}>
            {title}
        </button>
    );
}

export default Button;
