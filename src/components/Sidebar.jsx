import React from "react";
import {
    BsGrid,
    BsFilePlay,
    BsPatchQuestion,
    BsChatSquareText,
    BsGlobeCentralSouthAsia,
    BsAward,
    BsBricks,
    BsSticky,
    BsPersonVideo,
    BsBoxSeam,
} from "react-icons/bs";
import Logo from "./Logo";

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
                name: "All Users",
                link: "/lectures",
                icon: <BsFilePlay />,
                notifications: 6,
            },
            {
                name: "Nationalities",
                link: "/query",
                icon: <BsPatchQuestion />,
                notifications: 2,
            },
        ],
    },
    {
        title: "SOCIALS",
        links: [
            {
                name: "Chat",
                link: "/chat",
                icon: <BsChatSquareText />,
                notifications: 0,
            },
            {
                name: "Events",
                link: "/events",
                icon: <BsGlobeCentralSouthAsia />,
                notifications: 1,
            },
        ],
    },
    {
        title: "Responsibilities",
        links: [
            {
                name: "Roles Definition",
                link: "/roles",
                icon: <BsBricks />,
                notifications: 0,
            },
            {
                name: "Roles Assigned",
                link: "/assigned",
                icon: <BsAward />,
                notifications: 5,
            },
        ],
    },
    {
        title: "Assets",
        links: [
            {
                name: "Notes",
                link: "/notes",
                icon: <BsSticky />,
                notifications: 3,
            },
            {
                name: "Calls",
                link: "/calls",
                icon: <BsPersonVideo />,
                notifications: 0,
            },
            {
                name: "Collaborate",
                link: "/collaborate",
                icon: <BsBoxSeam />,
                notifications: 21,
            },
        ],
    },
];


const SectionNavigation = ({ links, title }) => {
    return (
        <div className="sectionNavigation__Wrapper">
            <div className="navigation__top">
                <div className="left">{title}</div>
                <div className="right"></div>
            </div>
            <div className="navigation__body">
                {links.map((r, i) => (
                    <div key={i} className="link">
                        <div className="left">
                            <div className="icon">{r.icon}</div>
                            <p>{r.name}</p>
                        </div>
                        {r.notifications ? (
                            <div className="right">{r.notifications}</div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
};

const Sidebar = () => {
    return (
        <div>
            <div className={`sidebar__Wrapper`}>
                <div className="top">
                    <div className="logo">
                        <Logo />
                    </div>
                </div>

                <div className="body">
                    {sideBarData.map((l, i) => (
                        <SectionNavigation
                            key={i}
                            title={l.title}
                            links={l.links}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
