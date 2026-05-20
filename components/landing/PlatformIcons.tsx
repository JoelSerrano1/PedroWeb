type IconProps = { className?: string };

export function IconWindows({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden>
            <path
                fill="currentColor"
                d="M3 4.5 10.5 3.4v7.1H3V4.5Zm8.5-.9L21 2v9.2h-9.5V3.6ZM3 12.9h7.5v7.6L3 19.5V12.9Zm9.5 0H21V22l-8.5-1.4V12.9Z"
            />
        </svg>
    );
}

export function IconLinux({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden>
            <path
                fill="currentColor"
                d="M12.3 2c-3.1 0-5.6 2.3-5.9 5.3-2.5.6-4.4 2.8-4.4 5.5 0 2.2 1.3 4.1 3.2 4.9-.1.8-.2 1.6-.2 2.4 0 2.8 2.2 5 5 5h.4c.3 1.2 1.3 2.1 2.6 2.1s2.3-.9 2.6-2.1h.3c2.8 0 5-2.2 5-5 0-.8-.1-1.6-.2-2.4 1.9-.8 3.2-2.7 3.2-4.9 0-2.7-1.9-4.9-4.4-5.5C17.9 4.3 15.4 2 12.3 2Zm-1.1 13.2c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6-.7 1.6-1.6 1.6Zm2.2 0c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6-.7 1.6-1.6 1.6Z"
            />
        </svg>
    );
}

export function IconApple({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden>
            <path
                fill="currentColor"
                d="M16.7 12.7c0-2.5 2-3.5 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-2-.9-3.3-.9-1.7 0-3.2 1-4.1 2.5-1.7 3-0.4 7.4 1.2 9.8.8 1.2 1.7 2.5 3 2.5 1.2 0 1.6-.8 3.2-.8 1.5 0 2 .8 3.2.8 1.3 0 2.1-1.2 2.9-2.4.9-1.4 1.3-2.8 1.3-2.9 0 0-2.6-1-2.6-3.9ZM14.2 4.2c.7-.9 1.2-2.1 1.1-3.3-1 .1-2.2.7-2.9 1.5-.7.8-1.2 1.9-1.1 3.1 1.2.1 2.3-.6 2.9-1.3Z"
            />
        </svg>
    );
}

export function IconAndroid({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden>
            <path
                fill="currentColor"
                d="M8.2 3.5 7 5.8h10l-1.2-2.3a.9.9 0 0 0-.8-.5H9a.9.9 0 0 0-.8.5ZM6.2 7.2a1.8 1.8 0 0 0-1.8 1.8v6.5A1.8 1.8 0 0 0 6.2 17h11.6a1.8 1.8 0 0 0 1.8-1.8V9a1.8 1.8 0 0 0-1.8-1.8H6.2ZM5 9.8a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Zm14 0a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM9.2 17.8v2.2a1 1 0 1 0 2 0v-2.2H9.2Zm3.6 0v2.2a1 1 0 1 0 2 0v-2.2h-2Z"
            />
        </svg>
    );
}

export function IconIos({ className }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect
                x="6.5"
                y="2"
                width="11"
                height="20"
                rx="2.5"
                stroke="currentColor"
                strokeWidth="1.75"
            />
            <rect x="10" y="4" width="4" height="1.25" rx="0.5" fill="currentColor" />
            <circle cx="12" cy="18.25" r="1.1" fill="currentColor" />
        </svg>
    );
}
