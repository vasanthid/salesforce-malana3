import React from 'react';
import './Modal.css';

const Modal = ({isOpen, onConfirmClose, onCancel}) => {

    return (
            <div>
                {isOpen && 
                <div>
                    <div className="modal">
                        <div className="modal-header">
                            <p>Delete?</p>
                            <button className="close-button" onClick={onCancel}>&times;</button>
                        </div>
                        <div><p className="modal-body">Are you sure you want to delete?</p></div>
                        <div className="buttons-container">
                                <button className="button" onClick={onCancel}>No</button>
                                <button className="button button-primary" onClick={onConfirmClose}>Yes</button>
                        </div>
                    </div>

                    <div className="overlay">

                    </div>
                 </div>}   

            </div>
    );
};

export default Modal;

