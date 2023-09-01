import React, { useState } from 'react';
import './Progressbar.css'; 

const VolumeSliderProgressBar = () => {
    const [volume1, setVolume1] = useState(50); 
    const [volume2, setVolume2] = useState(75);  
    const [volume3, setVolume3] = useState(30); 
    const [volume4, setVolume4] = useState(60); 

    const handleChangeVolume1 = (event) => {
        const newVolume = parseInt(event.target.value, 10);
        setVolume1(newVolume);
    };

    const handleChangeVolume2 = (event) => {
        const newVolume = parseInt(event.target.value, 10);
        setVolume2(newVolume);
    };

    const handleChangeVolume3 = (event) => {
        const newVolume = parseInt(event.target.value, 10);
        setVolume3(newVolume);
    };
    const handleChangeVolume4 = (event) => {
        const newVolume = parseInt(event.target.value, 10);
        setVolume4(newVolume);
    };

    return (
        <div className="volume-container">
            <div className="volume-bar">
                <input
                    type="range"
                    min="25.0"
                    max="100"
                    value={volume1}
                    onChange={handleChangeVolume1}
                    className="volume-slider1"
                />
                <div className='text1'>Hip</div>
                <p className="volume-label1"> {volume1}</p>
            </div>

            <div className="volume-bar">
                <input
                    type="range"
                    min="25.0"
                    max="100"
                    value={volume2}
                    onChange={handleChangeVolume2}
                    className="volume-slider2"
                />
                <div className='text2'>Leg</div>
                <p className="volume-label2"> {volume2}</p>
            </div>

            <div className="volume-bar">
                <input
                    type="range"
                    min="25.0"
                    max="100"
                    value={volume3}
                    onChange={handleChangeVolume3}
                    className="volume-slider3"
                />
                <div className='text3'>Neck</div>
                <p className="volume-label3"> {volume3}</p>
            </div>
            <div className="volume-bar">
                <input
                    type="range"
                    min="25.0"
                    max="100"
                    value={volume4}
                    onChange={handleChangeVolume4}
                    className="volume-slider3"
                />
                <div className='text3'>Shoulder</div>
                <p className="volume-label3"> {volume4}</p>
            </div>
        </div>
    );
};

export default VolumeSliderProgressBar;
