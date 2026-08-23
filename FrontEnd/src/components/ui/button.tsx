interface buttonProps {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset"
    disabled?: boolean
}

export default function Button ({
    text,
    onClick,
    type="button",
    disabled=false
}: buttonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
          {text}
        </button>
    );
}