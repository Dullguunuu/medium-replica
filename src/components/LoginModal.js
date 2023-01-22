import React from 'react'

export default function LoginModal({ modal, setModal, handleModal }) {

    const modalDisplay = modal ? "block" : "none"
    return (
        <div className="modal" style={{ display: modalDisplay }} onClick={setModal}>
            <div className="modal-body" onClick={(e) => e.stopPropagation()}>
                <h1 className="modal-title">Welcome back.</h1>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label className="from-label">Username</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="mb-3">
                            <label className="from-label">Password</label>
                            <input className="form-control" type="password" />
                        </div>
                        <div className="mb-3 d-flex gap-2">
                            <button className="btn btn-warning" >Login</button>
                            <button className="btn btn-light" onClick={() => setModal(false)}>Close</button>
                        </div>
                        <button className="btn btn-outline-success">Admin Login</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
