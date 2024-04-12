

import React, { useState } from 'react';

function ImgComponent() {
    const [imageSrc, setImageSrc] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImageSrc(reader.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className="butt">
            <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} ref={fileInput => this.fileInput = fileInput} />
            <button onClick={() => this.fileInput.click()}>Choose Image</button>
            {imageSrc && <img src={imageSrc} alt="Selected" />}
        </div>
    );
}

export default ImgComponent;

