import React from "react";
import Slider from "react-slick";
import './ninth.css';
import imgf from './../../img/9_reviews/car.png';
import imgs from './../../img/9_reviews/”.png';
import imgp from './../../img/9_reviews/face.png';


class SimpleSlider extends React.Component {
  render() {
    const settings = {
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      arrows: false,
      dots: true
    };
    return (
      <div className="neinth_container">
        <p className="neinth_zag"> що кажуть щасливі клієнти <span className="n-zag"> про шумоізоляцію та нашу роботу </span> </p>
        <Slider {...settings} className="nei-cont">
          <div className="clip">
            <div className="sl-elem"> 
              <img src={imgf} alt="car" className="sl-img" /> 
              <br />
              <div className="sl-sc">
                <img src={imgs} alt="scopka" className="sl-scopk"/>
              </div>
              <div className="sl-text">
                Довго вивчала ціни на нанолак. У Благого виявилась найбільш вигідна пропозиція по області. Робила комплексне покриття, тому витрати на пеерїзд виявилися мізерними у порівнянні з загальною економією. Дуже задоволена результатом!
              </div>
            </div>
            <div className="sl-tr">
            </div>
            <br />
            <div className="sl-photo"> 
              <img src={imgp} alt="user"/>
              <p className="sl-username"> лисюк ганна </p>
            </div>
          </div>

          <div className="clip">
            <div className="sl-elem"> 
              <img src={imgf} alt="car" className="sl-img" /> 
              <br />
              <div className="sl-sc">
                <img src={imgs} alt="scopka" className="sl-scopk"/>
              </div>
              <div className="sl-text">
                Довго вивчала ціни на нанолак. У Благого виявилась найбільш вигідна пропозиція по області. Робила комплексне покриття, тому витрати на пеерїзд виявилися мізерними у порівнянні з загальною економією. Дуже задоволена результатом!
              </div>
            </div>
            <div className="sl-tr">
            </div>
            <br />
            <div className="sl-photo"> 
              <img src={imgp} alt="user"/>
              <p className="sl-username"> лисюк ганна </p>
            </div>
          </div>

          <div className="clip">
            <div className="sl-elem"> 
              <img src={imgf} alt="car" className="sl-img" /> 
              <br />
              <div className="sl-sc">
                <img src={imgs} alt="scopka" className="sl-scopk"/>
              </div>
              <div className="sl-text">
                Довго вивчала ціни на нанолак. У Благого виявилась найбільш вигідна пропозиція по області. Робила комплексне покриття, тому витрати на пеерїзд виявилися мізерними у порівнянні з загальною економією. Дуже задоволена результатом!
              </div>
            </div>
            <div className="sl-tr">
            </div>
            <br />
            <div className="sl-photo"> 
              <img src={imgp} alt="user"/>
              <p className="sl-username"> лисюк ганна </p>
            </div>
          </div>
          
          <div className="clip">
            <div className="sl-elem"> 
              <img src={imgf} alt="car" className="sl-img" /> 
              <br />
              <div className="sl-sc">
                <img src={imgs} alt="scopka" className="sl-scopk"/>
              </div>
              <div className="sl-text">
                Довго вивчала ціни на нанолак. У Благого виявилась найбільш вигідна пропозиція по області. Робила комплексне покриття, тому витрати на пеерїзд виявилися мізерними у порівнянні з загальною економією. Дуже задоволена результатом!
              </div>
            </div>
            <div className="sl-tr">
            </div>
            <br />
            <div className="sl-photo"> 
              <img src={imgp} alt="user"/>
              <p className="sl-username"> лисюк ганна </p>
            </div>
          </div>
          
          <div className="clip">
            <div className="sl-elem"> 
              <img src={imgf} alt="car" className="sl-img" /> 
              <br />
              <div className="sl-sc">
                <img src={imgs} alt="scopka" className="sl-scopk"/>
              </div>
              <div className="sl-text">
                Довго вивчала ціни на нанолак. У Благого виявилась найбільш вигідна пропозиція по області. Робила комплексне покриття, тому витрати на пеерїзд виявилися мізерними у порівнянні з загальною економією. Дуже задоволена результатом!
              </div>
            </div>
            <div className="sl-tr">
            </div>
            <br />
            <div className="sl-photo"> 
              <img src={imgp} alt="user"/>
              <p className="sl-username"> лисюк ганна </p>
            </div>
          </div>
          
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;