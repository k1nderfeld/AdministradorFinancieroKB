interface buttonProps {
    text: string;
    className?: string
    onClick?: () => void;
    type?: "button" | "submit" | "reset"
    disabled?: boolean
}

export default function Button ({
    text,
    className,
    onClick,
    type="button",
    disabled=false
}: buttonProps) {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
          {text}
        </button>
    );
}