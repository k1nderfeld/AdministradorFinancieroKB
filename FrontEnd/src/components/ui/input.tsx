import type { ReactNode } from "react";
import Icon from "./icon";

interface InputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    placeholder?: string;
    icon?: ReactNode;
    prefix?: ReactNode;
    className?: string;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Input ({
    type,
    placeholder,
    icon,
    prefix,
    className,
    onChange,
    onKeyDown
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
                placeholder={placeholder}
                className={className}
                onKeyDown={onKeyDown}
            />
        </div>
    );
};