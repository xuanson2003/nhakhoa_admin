export const createImage = (url) =>
    new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', () => resolve(image));
        image.addEventListener('error', (error) => reject(error));
        image.setAttribute('crossOrigin', 'anonymous'); // Điều này quan trọng để tránh vấn đề CORS khi cắt ảnh
        image.src = url;
    });

const getCroppedImg = (imageSrc, pixelCrop) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = imageSrc;
        image.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = pixelCrop.width;
            canvas.height = pixelCrop.height;

            ctx.drawImage(
                image,
                pixelCrop.x,
                pixelCrop.y,
                pixelCrop.width,
                pixelCrop.height,
                0,
                0,
                pixelCrop.width,
                pixelCrop.height,
            );

            canvas.toBlob((blob) => {
                if (blob) {
                    resolve(blob); // Trả về Blob thay vì URL
                } else {
                    reject(new Error('Canvas is empty'));
                }
            }, 'image/jpeg');
        };
        image.onerror = (error) => reject(error);
    });
};

export default getCroppedImg;
