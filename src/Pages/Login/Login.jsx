import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { AdminContext } from '~/Context/AdminContext';
import config from '~/Config';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const Login = () => {
    const { HandleLogin } = useContext(AdminContext);
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
            password: Yup.string().required('Mật khẩu là bắt buộc'),
        }),
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            try {
                const result = await HandleLogin(values);
                if (result.success) {
                    navigate(config.routes.dashbroad);
                } else if (result.error_field === 'email') {
                    setErrors({ email: 'Email này chưa được đăng ký' });
                } else if (result.error_field === 'password') {
                    setErrors({ password: 'Mật khẩu không chính xác' });
                }
            } catch (error) {
                setErrors({ submit: 'Đăng nhập thất bại. Vui lòng thử lại sau.' });
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div className="login">
            <div className="login-container">
                <form className="login-form" onSubmit={formik.handleSubmit}>
                    <h2>Đăng nhập</h2>
                    {formik.errors.submit && <h3>{formik.errors.submit}</h3>}
                    <div className="login-form-fields">
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
                            {formik.touched.email && formik.errors.email ? (
                                <p className="login-form-field-error">{formik.errors.email}</p>
                            ) : null}
                        </div>
                        <div className="login-form-field">
                            <div className="login-form-field-group">
                                <input
                                    className={formik.touched.password && formik.errors.password ? 'error' : ''}
                                    name="password"
                                    type={passwordVisible ? 'text' : 'password'}
                                    placeholder="Mật khẩu"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                {passwordVisible ? (
                                    <FontAwesomeIcon
                                        onClick={() => setPasswordVisible(false)}
                                        className="login-form-field-icon"
                                        icon={faEye}
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        onClick={() => setPasswordVisible(true)}
                                        className="login-form-field-icon"
                                        icon={faEyeSlash}
                                    />
                                )}
                            </div>
                            {formik.touched.password && formik.errors.password ? (
                                <p className="login-form-field-error">{formik.errors.password}</p>
                            ) : null}
                        </div>
                    </div>
                    <div className="login-form-forgot-password">
                        <a href="/forgot-password">Bạn quên mật khẩu?</a>
                    </div>
                    <button type="submit" className="login-form-button" disabled={formik.isSubmitting}>
                        Đăng nhập
                    </button>
                    <div className="login-form-register-link">
                        <span>
                            Bạn chưa có tài khoản? <Link to={config.routes.register}>Đăng ký</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
