import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Slider = () => {
  return (
    <section>
        <Splide
         options={ {
            type  : 'fade',
            rewind: true,
          } } aria-label="My Favorite Images">
  <SplideSlide>
    <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg" alt=""/>
  </SplideSlide>
  <SplideSlide>
    <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-2.jpg" alt=''/>
  </SplideSlide>
  <SplideSlide>
    <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-3.jpg" alt=''/>
  </SplideSlide>
</Splide>
    </section>
  )
}

export default Slider