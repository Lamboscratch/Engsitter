interface Props {
    style: string;
}

export default function Separator({ style }: Props) {
    return (
        <svg className={`${style} pt-1 w-[1.65rem] h-[1.65rem]`} xmlns="http://www.w3.org/2000/svg" strokeWidth="0" stroke="currentColor" fill="none" viewBox="0 0 1 31">
            <rect className="!fill-gray-200 dark:!fill-zinc-700" fillRule="evenodd" clipRule="evenodd" fill="currentColor" width="1" height="31" />
        </svg>
    );
}
