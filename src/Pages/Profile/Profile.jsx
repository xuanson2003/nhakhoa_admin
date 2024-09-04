import React, { useRef, useContext, useState } from 'react';

import { AdminContext } from '~/Context/AdminContext';
import ImageCropper from '~/Components/ImageCropper/ImageCropper';
import './Profile.css';

function Profile(props) {
    const cropperRef = useRef(null);
    const { user } = useContext(AdminContext);

    const handleSaveProfileImage = () => {
        const croppedImageBlob = cropperRef.current.getCroppedImage();
        if (croppedImageBlob) {
            const formData = new FormData();
            formData.append('image', croppedImageBlob, 'cropped-image.jpg');

            console.log('Cropped image blob:', croppedImageBlob);
        } else {
            console.log('No cropped image available');
        }
    };

    return (
        <div>
            <h1>Profile Pageê</h1>
            
            <ImageCropper ref={cropperRef} aspectRatio={1 / 1} defaultImage={user.image} />
            <button
                onClick={() => {
                    handleSaveProfileImage();
                }}
            >
                Get croppedImage
            </button>
        </div>
    );
}

export default Profile;
