import {
    BsGrid,
    BsFilePlay,
    BsPatchQuestion,
} from "react-icons/bs";

export const sideBarData = [
    {
        title: "GENERAL",
        links: [
            {
                name: "Dashboard",
                link: "/dashboard",
                icon: <BsGrid />,
                notifications: 0,
            },
            {
                name: "Lectures",
                link: "/lectures",
                icon: <BsFilePlay />,
                notifications: 6,
            },
            {
                name: "Queries",
                link: "/query",
                icon: <BsPatchQuestion />,
                notifications: 2,
            },
        ],
    },
];
