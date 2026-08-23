import type { ReactNode } from "react";
import Icon from "./icon";

interface InputProps {
    type: string;
    name?: string;
    placeholder?: string;
    value?: string;
    icon?: ReactNode;
    prefix?: ReactNode;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export default function Input ({
    type,
    name,
    placeholder,
    value,
    icon,
    prefix,
    className,
    onChange,
    onKeyDown,
    required
} : InputProps) {
    return (
        <div
            className={className}
        >
            <Icon>
                {icon}
            </Icon>
            {/* Se evalua si existe prefix para rederizarlo */}
            {prefix && <span>
                            {prefix}
                       </span>}

            <input
                onChange={onChange}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                className={className}
                onKeyDown={onKeyDown}
                required={required}
            />
        </div>
    );
};