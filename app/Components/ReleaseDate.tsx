import { ReactNode } from "react";

interface Props {
    children: ReactNode;
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

const ReleaseDate = ({ children }: Props) => {
    const date = children?.toString().split("/");
    const day = date![0];
    const month = date![1];
    const year = date![2];

    return <time className="text-sm" dateTime={`${year}-${month}-${day}`}>{`${months.get(month)} ${day}, ${year}`}</time>;
};

export default ReleaseDate;
