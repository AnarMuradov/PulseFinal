import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { WishListContext } from "../../../Context/WishListContext";

const MenuSections = () => {
  const {addWishList} = useContext(WishListContext)
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);

  return (
    <section className="menuSection">
      <div className="menuSection__container">
        <div className="menuSection__container__title">
          <i className="fa-solid fa-utensils"></i>
          <div className="menuSection__container__title__content">
            <div className="menuSection__container__title__content__line"></div>
            <span>Our Menu</span>
            <div className="menuSection__container__title__content__line"></div>
          </div>
        </div>
        <div className="menuSection__container__items">
          <ul className="menuSection__container__items__list">
            <li>Breakfast</li>
            <li>Brunch</li>
            <li>Lunch</li>
            <li>Dinner</li>
          </ul>
        </div>
        <div className="menuSection__container__allData">
          {api.map((x) => {
            return (
              <div
                key={x._id}
                className="menuSection__container__allData__data"
              >
                <div className="menuSection__container__allData__data__name">
                  <Link to={`/DetailPage/${x._id}`}>{x.name}</Link>
                </div>
                <div className="menuSection__container__allData__data__content">
                  <div className="menuSection__container__allData__data__content__description">
                    {x.description}
                  </div>
                  <span>
                    ...................................................
                  </span>
                  <div className="menuSection__container__allData__data__content__price">
                    ${x.price}.00
                  </div>
                </div>
                <div className="menuSection__container__allData__data__add"> 
                <button onClick={()=>addWishList(x)}>Add To WishList</button>
                </div>
              </div>
            );
          })}
        </div>
        <div  className="menuSection__container__btn">
        <button>See More</button>
        </div>
      </div>
    </section>
  );
};

export default MenuSections;
