import React from 'react'

export default function Footer() {
    const footerLinks = ["Help", "Status", "Writers", "Blog", "Careers", "Privacy", "Terms", "About", "Text to speech"];

    return (
        <div className="d-flex flex-wrap" style={{ width: "400px", marginLeft: "100px" }
        }>
            {
                footerLinks.map((e) => (
                    <span className="d-flex m-2" style={{ fontWeight: "400", fontSize: "13px", color: "#757575" }}>{e}</span>
                ))
            }
        </div >
    )
}
