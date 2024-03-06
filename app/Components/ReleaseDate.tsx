interface Props {
    date: string;
    style?: string;
}

const months = new Map();
months.set(0, "January");
months.set(1, "February");
months.set(2, "March");
months.set(3, "April");
months.set(4, "May");
months.set(5, "June");
months.set(6, "July");
months.set(7, "August");
months.set(8, "September");
months.set(9, "October");
months.set(10, "November");
months.set(11, "December");

export default function ReleaseDate({ date, style }: Props) {
    const creationDate = new Date(date);
    const day = creationDate.getDate();
    const month = creationDate.getMonth();
    const year = creationDate.getFullYear();

    return (
        <time className={`text-sm initial:pb-4 sm:pb-5 text-center ${style}`} dateTime={date}>
            {`${months.get(month)} ${day}, ${year}`}
        </time>
    );
}
