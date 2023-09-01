import React, { useState } from 'react';
import './Measurement.css';
import Footer from './Footer';
import VolumeSliderProgressBar from './Progressbar';
import './Progressbar.css';
import Header from './Header'
export default function Measurement() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <>
        <Header/>
            <div className='page'>
              
                <div className='nxtxt'>Set your measurements</div>
                <div className='buttonContainer'>
                    <button
                        className={`standardButton ${activeButton === 'standard' ? 'activeButton' : ''}`}
                        onClick={() => handleButtonClick('standard')}
                    >
                        <div className='buttontxt1'>
                            Standard Measurements
                        </div>
                    </button>
                    <button
                        className={`customizeButton ${activeButton === 'customize' ? 'activeButton' : ''}`}
                        onClick={() => handleButtonClick('customize')}
                    >
                        <div className='buttontxt2'>
                            Customize Measurements
                        </div>
                    </button>
                </div>
                {activeButton === 'standard' && (
                    <div className='rectangle'>
                        <div className='text'>Available Sizes:
                            <div className='rectangle1'>
                                <button className='rectangletxt1'>
                                    XS
                                </button>


                                <button className='rectangletxt1'>
                                    S
                                </button>


                                <button className='rectangletxt1'>
                                    M
                                </button>
                                <button className='rectangletxt1'>
                                    L
                                </button>
                                <button className='rectangletxt1'>
                                    XL
                                </button>
                                <button className='rectangletxt1'>
                                   2XL
                                </button>
                                <button className='rectangletxt1'>
                                    3XL
                                </button>
                            </div>
                        </div>
                    </div>


                )}
                {activeButton === 'customize' && (
                    <div className='rectangle2'>
                        <VolumeSliderProgressBar />
                    </div>

                )}

            </div>
            <Footer/>

        </>

    );
}
