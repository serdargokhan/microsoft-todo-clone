import React from "react";

interface IProps {
    className: string;
    type: string;
    id?: string;
    value?: string;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLInputElement>;
    ref?: React.LegacyRef<HTMLInputElement>;
}

function Input(
    { className, type, onChange, onBlur, onClick, value, placeholder }: IProps,
    ref: React.LegacyRef<HTMLInputElement> | undefined
) {
    return (
        <input
            className={className}
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            onClick={onClick}
            value={value}
            placeholder={placeholder}
            ref={ref}
        />
    );
}

export default React.forwardRef(Input);
