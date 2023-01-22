import React from 'react'
import { useState } from 'react';
import LoginModal from './LoginModal';

export default function Header() {
    const navLink = [
        { id: 1, title: "Our story", link: "about" },
        { id: 2, title: "Membership", link: "membership" },
        { id: 3, title: "Write", link: "write" },
        { id: 4, title: "Sign In", link: "#" },
        { id: 5, title: "Get started", link: "#" },
    ];

    const [modal, setModal] = useState(false)
    const [bgColor, setBgColor] = useState("#FFC017")

    const handleScroll = (event) => {
        if (event.currentTarget.scrollTop >= 530) {
            setBgColor("white")
        }
        else {
            setBgColor("#FFC017")
        }
    }
    function handleModal(e) {
        if (e.id == 4) {
            setModal(!modal)
        }
    }

    return (
        <div className="header" style={{ overflow: "scroll", backgroundColor: bgColor }} onScroll={handleScroll} >
            <div className="navDiv" >
                <img src={require("../images/Frame.png")} alt="" style={{ width: 162, height: 25 }} />
                <nav>
                    <ul className="navUl">
                        {navLink.map((e, index) => (
                            <>
                                <li className="navList" key={index}>
                                    <a className="navA" href=""
                                        onClick={(i) => {
                                            i.preventDefault();
                                            handleModal(e)
                                        }}>
                                        {e.title}
                                    </a>
                                </li>
                            </>
                        ))}
                    </ul>
                </nav>
            </div>
            <hr className='m-0' />

            <LoginModal
                modal={modal}
                setModal={setModal}
                showModal={handleModal}
            />
        </div >
    );
}
