import type { ReactNode } from "react";
import Icon from "./icon";
import "./input.css"

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
            className={`input-container ${className ?? ""}`}
        >
            {icon && (
                <div className="input-icon-container">
                    <Icon>
                        {icon}
                    </Icon>
                </div>
                    )
            }
            {/* Se evalua si existe prefix para rederizarlo */}
            {prefix && <span>
                            {prefix}
                       </span>}

            <input
                className="input-field"
                onChange={onChange}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onKeyDown={onKeyDown}
                required={required}
            />
        </div>
    );
};