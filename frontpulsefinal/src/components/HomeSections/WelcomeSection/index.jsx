import React from 'react'
import './style.scss'
const WelcomeSection = () => {
  return (
    <section className='welcome'>
        <div className='welcome__container'>
        <div className="welcome__container__title">
        <i class="fa-solid fa-drumstick-bite"></i>
          <div className="welcome__container__title__content">
            <div className="welcome__container__title__content__line"></div>
            <span>Our Menu</span>
            <div className="welcome__container__title__content__line"></div>
          </div>
        </div>
        <div className='welcome__container__allCard'>
        <div className='welcome__container__allCard__card'>
            <span>2002</span>
            <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
        </div>
        <div className='welcome__container__allCard__card'>
            <span>2010</span>
            <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
        </div>
        <div className='welcome__container__allCard__card'>
            <span>2018</span>
            <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
        </div>
        </div> 
        <img src="https://preview.colorlib.com/theme/pulse/img/sign.png" alt="" /> 
        </div>
    </section>
  )
}

export default WelcomeSection