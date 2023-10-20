import React, { useState } from 'react';
import styles from './Register.module.css';
import { Link } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        cpf: '',
        dataAniversario: '',
        email: '',
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
        <div className={styles.registerPage}>
            <h2>Registro</h2>
            <div className={styles.containerforms}>
                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="nomeCompleto">Nome Completo:</label>
                            <input
                                type="text"
                                id="nomeCompleto"
                                name="nomeCompleto"
                                value={formData.nomeCompleto}
                                onChange={handleChange}
                                className={styles.formInput}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="cpf">CPF:</label>
                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                value={formData.cpf}
                                onChange={handleChange}
                                className={styles.formInput}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="dataAniversario">Data de nascimento:</label>
                            <input
                                type="date"
                                id="dataAniversario"
                                name="dataAniversario"
                                value={formData.dataAniversario}
                                onChange={handleChange}
                                className={styles.formInput}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.formInput}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                value={formData.senha}
                                onChange={handleChange}
                                className={styles.formInput}
                            />
                        </div>
                        <button type="submit" className={styles.formButton}>
                            Registrar
                        </button>
                    </form>
                    <span className={styles.span}>
                        Já possui uma conta? <span className={styles.destacado}>
                            <Link to="/Login" className={styles.linkdestac}>LOGIN</Link>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Register;
