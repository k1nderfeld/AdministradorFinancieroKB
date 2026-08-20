import type { ReactNode } from "react";

interface IconProps {
    children: ReactNode;
}

export default function Icon ({
    children
} : IconProps) {
    return (
        <span>
            {children}
        </span>
    );
}