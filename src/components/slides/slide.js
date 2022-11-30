import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';
import slide3 from '../../images/slide3.jpg';
import slide4 from '../../images/slide4.png';
import React from 'react';
import '../slides/slide.css';
function Slide (){
    var counter = 1;
        setInterval(function () {
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if (counter > 4) {
                counter = 1
            }
        }, 5000)
    return(
        <div className="slider">
        <div className="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <input type="radio" name="radio-btn" id="radio4"/>
            <div className="slide first">
                <img src={slide1} alt="s1"/>
            </div>
            <div className="slide">
                <img src={slide2} alt="s2"/>
            </div>
            <div className="slide">
                <img src={slide3} alt="s3"/>
            </div>
            <div className="slide">
                <img src={slide4} alt="s4"/>
            </div>
        </div>
        <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
        </div>
        <div className="navigation-manual">
            <label for="radio1" className="manual-btn"/>
            <label for="radio2" className="manual-btn"/>
            <label for="radio3" className="manual-btn"/>
            <label for="radio4" className="manual-btn"/>
        </div>
    </div>
    );
}
export default Slide;