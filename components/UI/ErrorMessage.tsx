import React from 'react'

interface Props {
    description: string;
    className: string;
}

function ErrorMessage({description, className}: Props) {

    return (
        <span className={className}>{description}</span>
    );
}

export default ErrorMessage;
