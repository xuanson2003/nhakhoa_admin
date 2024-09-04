import React, { useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Signup.css';
import config from '~/Config';
import ImageCropper from '~/Components/ImageCropper/ImageCropper';

Modal.setAppElement('#root');

function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const cropperRef = useRef(null);



    const handleSubmit = async (event) => {
        const croppedImageBlob = cropperRef.current.getCroppedImage();
        if (croppedImageBlob) {
            console.log(croppedImageBlob);
            const formData = new FormData();
            formData.append('image', croppedImageBlob, 'cropped-image.jpg');
        }
    };

    return (
        <div className="signup">
            <div className="sign-container">
                <form className="login-form">
                    {/* {formik.errors.submit && <h3>{formik.errors.submit}</h3>} */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="login-form-field">
                                <ImageCropper ref={cropperRef} aspectRatio={3 / 4} defaultImage={null} />
                                <p className="login-form-field-error"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="login-form-field">
                                <input type="email" name="email" placeholder="Email" />
                                <p className="login-form-field-error"></p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="login-form-field">
                                <input type="text" name="first_name" placeholder="Nhập tên" />
                                <p className="login-form-field-error"></p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="login-form-field">
                                <input type="text" name="last_name" placeholder="Nhập họ" />
                                <p className="login-form-field-error"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="login-form-field">
                                <div className="login-form-field-group">
                                    <input
                                        name="password"
                                        type={passwordVisible ? 'text' : 'password'}
                                        placeholder="Mật khẩu"
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
                                <p className="login-form-field-error"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="login-form-field">
                                <div className="login-form-field-group">
                                    <input
                                        name="confirm_password"
                                        type={passwordVisible ? 'text' : 'password'}
                                        placeholder="Nhập lại mật khẩu"
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
                                <p className="login-form-field-error"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="login-form-field">
                                <select name="position_id" id="">
                                    <option value="">Chọn chức vụ</option>
                                    <option value="1">Bác sĩ</option>
                                    <option value="2">Nhân viên vệ sinh</option>
                                </select>
                                <p className="login-form-field-error"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="login-form-field">
                                <div className="row mt-2">
                                    <label className="col-md-3 d-flex align-items-center">
                                        <input
                                            style={{ width: '40px', height: '20px' }}
                                            type="radio"
                                            checked="checked"
                                            name="gender"
                                        />
                                        <span style={{ fontSize: '16px' }}>Nam</span>
                                    </label>
                                    <label className="col-md-6 d-flex align-items-center">
                                        <input style={{ width: '40px', height: '20px' }} type="radio" name="gender" />
                                        <span style={{ fontSize: '16px' }}>Nữ</span>
                                    </label>
                                </div>
                                <p className="login-form-field-error"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="login-form-field">
                                <input type="number" name="phone" placeholder="Số điện thoại" />
                                <p className="login-form-field-error"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="login-form-field">
                                <input type="text" name="address" placeholder="Địa chỉ" />
                                <p className="login-form-field-error"></p>
                            </div>
                        </div>
                    </div>
                    <div className="row w-100">
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }}
                            className="login-form-button"
                        >
                            Đăng ký
                        </button>
                    </div>
                    <div className="login-form-register-link">
                        Bạn đã có tài khoản? <Link to={config.routes.login}>Đăng nhập</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
