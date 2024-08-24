import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import {saveFormData} from "../../redux/form/formActions";
import {motion} from "framer-motion";
import ModalInfo from "../../components/ModalInfo";
import { useState } from "react";
import ModalLogout from "../../components/ModalLogout";

const LoginForm = () => {
    const [values, handleChange, resetForm] = useForm({ username: '', email: '', password: ''});
    const[showModalinfo,setShowModalInfo] = useState(false)
    const[showModalLogout,setShowModalLogout] = useState(false)
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();
    const secret = form.password;
    const [showPassword, setShowPassword] = useState(false);
    const viewPasswordText  = () => {
        let passwordTextStatus = showPassword ? false : true;
        setShowPassword(passwordTextStatus);
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.password == secret){
            dispatch(saveFormData(values));
        }
        else{
            setShowModalInfo(true);
        }
    }
    const hideModalInfo = () => {
        setShowModalInfo(false);
    }
    const showLogoutModal = () => {
        setShowModalLogout(true);
    }
    const closeLogoutModal = () => {
        setShowModalLogout(false);
    }
    const logout = () => {
        resetForm();
        dispatch(saveFormData({ username: '', email: '', password: ''}));
        setShowModalLogout(false);
    }

    return (
        
        <motion.div
                initial={{opacity: 0, y: -70}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
            >
        <div className="container">
            <ModalInfo visible={showModalinfo} message="Password incorrecto" onClose={hideModalInfo}/>
            <ModalLogout visible={showModalLogout} onClose={closeLogoutModal} onLogout={logout}/>
            <form onSubmit={handleSubmit}>
                <h5>username: {form.formData.username}</h5>
                <h5>email: {form.formData.email}</h5>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <button type="button" onClick={viewPasswordText}>{showPassword ? 'ocultar' : 'ver'}</button>
                </div>
                <div className="button-container">
                    <button type="submit">Submit</button>
                    <a href="#" onClick={showLogoutModal}>Logout</a>
                </div>
            </form>
        </div>
        </motion.div>
    );
};

export default LoginForm;