import React, { useContext } from "react";
import "./style.scss";
import { WishListContext } from "../../Context/WishListContext";
import { Helmet } from "react-helmet-async";
const WishList = () => {
  const {wishlist,removeWishList} = useContext(WishListContext)
  return (
    <>
    <Helmet>
      <title>WishList</title>
    </Helmet>
    <section className="wishlist">
      <div className="wishlist__container">
   
        <div className="wishlist__container__table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((x) => {
                return (
                  <tr key={x._id}>
                    <td>{x.name}</td>
                    <td>{x.description}</td>
                    <td>{x.price}$</td>
                    <td>
                      <button onClick={()=>removeWishList(x)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    </>
  );
};

export default WishList;
