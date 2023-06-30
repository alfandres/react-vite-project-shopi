import { createContext, useState } from 'react';  

const shopiContext = createContext();

const ShopiProvider = ({children}) => {
//ShoppingCart: contador
    const [count, setCount] = useState(0);

//productInfo: open/close
    const [productInfoOpen, setProductInfoOpen] = useState(false);
    const openProductInfo = () =>  setProductInfoOpen(true);
    const closeProductInfo = () => setProductInfoOpen(false);

//productInfo: informacion de los productos 
    const [productInformacion, setProductInformacion] = useState({});

//ShoppingCart: agrgar al carro de compras 
    const [addCard, setAddCard] = useState([]);

//productInfo: open/close
    const [checkoutShopingOpen, setCheckoutShopingOpen] = useState(false);
    const openCheckoutShoping = () =>  setCheckoutShopingOpen(true);
    const closeCheckoutShoping = () => setCheckoutShopingOpen(false);    

    return(
        <shopiContext.Provider value={{
            count,
            setCount, 
            openProductInfo,
            closeProductInfo,
            productInfoOpen,
            productInformacion,
            setProductInformacion,
            addCard,
            setAddCard,
            checkoutShopingOpen,
            openCheckoutShoping,
            closeCheckoutShoping
        }}>
        {children}
        </shopiContext.Provider>    
    );

}

export {shopiContext, ShopiProvider};