import { ReactNode } from "react";

interface Props {
    date: Date;
}

const months = new Map();
months.set("01", "January");
months.set("02", "February");
months.set("03", "March");
months.set("04", "April");
months.set("05", "May");
months.set("06", "June");
months.set("07", "July");
months.set("08", "August");
months.set("09", "September");
months.set("10", "October");
months.set("11", "November");
months.set("12", "December");

const ReleaseDate = ({ date }: Props) => {
    const creationDate = date.toLocaleDateString().split("/");
    const day = creationDate[0];
    const month = creationDate[1];
    const year = creationDate[2];

    return (
        <time className="text-sm initial:pb-4 sm:pb-5 border-solid border-gray-200 border-b dark:border-zinc-800" dateTime={`${year}-${month}-${day}`}>
            {`${months.get(month)} ${day}, ${year}`}
        </time>
    );
};

export default ReleaseDate;
