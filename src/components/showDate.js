import React from 'react'
import { news } from './data';

export default function showDate(publishedDate) {

    // console.log(new Date(publishedDate))

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const date = publishedDate.getDate();
    const month = months[publishedDate.getMonth()].slice(0, 3);
    const year = publishedDate.getFullYear();

    const thisYear = new Date();

    const y = (year == thisYear.getFullYear()) ? "" : ", " + year;
    return `${month} ${date} ${y}`;
}
