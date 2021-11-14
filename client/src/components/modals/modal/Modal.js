import React, { useEffect, useRef } from 'react'
import styles from './Modal.module.css'

const Modal = ({ modalStyle, children, show, backdropStyle }) => {
    const modalRef = useRef(null);
    useEffect(
        () => {
            if (show) {
                modalRef.current.classList.add(styles.visible);
            }
            else {
                modalRef.current.classList.remove(styles.visible);
            }
        },
        [
            show
        ]
    );
    return (
        <div ref={modalRef} style={backdropStyle} className={`${styles.modal__wrap}`}>
            <div style={modalStyle} className={styles.modal}>
                {children}
            </div>
        </div>
    );
}

export default Modal
