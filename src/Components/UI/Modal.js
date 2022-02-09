import React from 'react';
import classes from './Modal.module.css';
import { Fragment } from 'react';
import { ReactDOM } from 'react-dom';


const Backdrop = (props) => {
    return <div className={classes.backdrop} />
};

const ModalOverlay = (props) => {
    return( 
    <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
    </div>
    ); 
};



const Modal = props => {
    return (
        <Fragment>
            
        </Fragment>

    );
};

export default Modal;