import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        cpf: '',
        senha: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode processar os dados do formulário, enviar para um servidor, etc.
        console.log(formData);
    };

    return (
        <div className={styles.loginPage}>
            <h2>Login</h2>
            <div className={styles.containerforms}>
                <div className={styles.forms}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h4>Nome Completo:</h4>
                            <label htmlFor="nomeCompleto"></label>
                            <input
                                type="text"
                                id="nomeCompleto"
                                name="nomeCompleto"
                                value={formData.nomeCompleto}
                                onChange={handleChange}
                                className={styles.formInput}
                            />
                        </div>
                        <div>
                            <h4>CPF:</h4>
                            <label htmlFor="cpf"></label>
                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                value={formData.cpf}
                                onChange={handleChange}
                                className={styles.formInput}
                            />
                        </div>
                        <div>
                            <h4>Senha:</h4>
                            <label htmlFor="senha"></label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                value={formData.senha}
                                onChange={handleChange}
                                className={styles.formInput}
                            />
                        </div>
                        <button type="submit" className={styles.submitButton}>
                            Enviar
                        </button>
                    </form>
                    <span className={styles.span}>
                        Não possui conta? <span className={styles.destacado}>
                            <Link to="/Registro" className={styles.linkdestac}>REGISTRE-SE</Link>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Login;



