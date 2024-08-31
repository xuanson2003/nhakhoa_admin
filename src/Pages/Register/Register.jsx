import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Login/Login.css';
import config from '~/Config';
import request from '~/Utils/httpRequest';
import storage from '~/Utils/storage';

function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Tên là bắt buộc'),
            email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
            password: Yup.string()
                .required('Mật khẩu là bắt buộc')
                .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
                .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Mật khẩu phải bao gồm cả chữ và số'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp')
                .required('Vui lòng nhập lại mật khẩu'),
        }),
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            try {
                const { name, email, password } = values;
                const response = await request.post('signup', { name, email, password });
                const responseData = response.data;

                if (responseData.success) {
                    storage.set(responseData.token);
                    window.location.replace('/');
                } else if (responseData.errorField === 'email') {
                    setErrors({ email: 'Email này đã được đăng ký' });
                }
            } catch (error) {
                setErrors({ submit: 'Đăng ký thất bại, vui lòng thử lại sau' });
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div className="signup">
            <div className="sign-container">
                <form className="login-form" onSubmit={formik.handleSubmit}>
                    <h2>Đăng ký</h2>
                    {formik.errors.submit && <h3>{formik.errors.submit}</h3>}
                    <div className="login-form-fields">
                        <div className="login-form-field">
                            <input
                                className={formik.touched.name && formik.errors.name ? 'error' : ''}
                                name="name"
                                placeholder="Nhập tên"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <p className="login-form-field-error">{formik.errors.name}</p>
                            ) : null}
                        </div>

                        <div className="login-form-field">
                            <input
                                className={formik.touched.email && formik.errors.email ? 'error' : ''}
                                name="email"
                                type="email"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.touched.email ? (
                                <p className="login-form-field-error">{formik.errors.email}</p>
                            ) : null}
                        </div>

                        <div className="login-form-field">
                            <input
                                className={formik.touched.password && formik.errors.password ? 'error' : ''}
                                name="password"
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder="Mật khẩu"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <p className="login-form-field-error">{formik.errors.password}</p>
                            ) : null}
                        </div>

                        <div className="login-form-field">
                            <div className="login-form-field-group">
                                <input
                                    className={
                                        formik.touched.confirmPassword && formik.errors.confirmPassword ? 'error' : ''
                                    }
                                    name="confirmPassword"
                                    type={passwordVisible ? 'text' : 'password'}
                                    placeholder="Nhập lại mật khẩu"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.confirmPassword}
                                />
                                {passwordVisible ? (
                                    <FontAwesomeIcon
                                        onClick={() => {
                                            setPasswordVisible(false);
                                        }}
                                        className="login-form-field-icon"
                                        icon={faEye}
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        onClick={() => {
                                            setPasswordVisible(true);
                                        }}
                                        className="login-form-field-icon"
                                        icon={faEyeSlash}
                                    />
                                )}
                            </div>
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <p className="login-form-field-error">{formik.errors.confirmPassword}</p>
                            ) : null}
                        </div>
                    </div>
                    <button className="login-form-button">Đăng ký</button>
                    <div className="login-form-register-link">
                        <span>
                            Bạn đã có tài khoản? <Link to={config.routes.login}>Đăng nhập</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
