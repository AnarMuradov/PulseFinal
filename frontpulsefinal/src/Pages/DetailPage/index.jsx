import React, { useEffect, useState } from 'react'
import './style.scss'
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Detail = () => {
    const {id} =useParams()
    const [api, setApi] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:3000/${id}`)
        .then((res) => res.json())
        .then((data) => setApi(data));
    }, [id]);
  return (
    <>
    <Helmet>
      <title>
        Detail Page
      </title>
    </Helmet>
    <section className='detail'>
        <div className='detail__container'>
        <div
                className="detail__container__data"
              >
                <div className="detail__container__data__name">
              {api.name}
                </div>
                <div className="detail__container__data__content">
                  <div className="detail__container__data__content__description">
                    {api.description}
                  </div>
                  <span>
                    ...................................................
                  </span>
                  <div className="detail__container__data__content__price">
                    ${api.price}.00
                  </div>
                </div>
              </div>
        </div>
    </section>
    </>
  )
}

export default Detail