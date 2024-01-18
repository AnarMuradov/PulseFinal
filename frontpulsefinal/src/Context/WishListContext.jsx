import React, { createContext } from 'react'
import useLocal from '../Hooks/useLocal'
export const WishListContext = createContext()

function WishListProvider({children}) {
    const [wishlist, setWishlist] = useLocal('WishList',[])
    function addWishList(item){
        const elementindex = wishlist.findIndex(x=>x._id===item._id)
        if(elementindex === -1){
            setWishlist([...wishlist,item])
        }
    }
    function removeWishList(item){
            setWishlist(wishlist.filter(x=>x._id !== item._id))
    }
  return (
    <WishListContext.Provider value={{wishlist,addWishList,removeWishList}}>
        {children}
    </WishListContext.Provider>
  )
}

export default WishListProvider