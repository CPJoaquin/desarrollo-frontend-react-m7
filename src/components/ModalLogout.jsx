import { motion } from "framer-motion";

const ModalLogout = ({visible, onClose, onLogout}) => {
    if(!visible){
        return null;
    }
    return (
        <div className="modal-overlay">
            <motion.div
                className="notification-success"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                 <button className="close-btn-success" onClick={onClose}>
                    x
                </button>
                <div>
                    <span>¿Estas segur de que quieres cerrar sesión?</span>
                    <button onClick={onLogout}>Presiona para salir!!!</button>
                </div>
            </motion.div>
        </div>
    );
};
export default ModalLogout;