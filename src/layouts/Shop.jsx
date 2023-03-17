import {useEffect, useState} from 'react'
import {API_KEY, API_URL} from '../config'
import {Preloader} from './Preloader'
import {GoodsList} from '../components/GoodsList';
import {Cart} from '../components/Cart'; 
import {BasketList} from '../components/BasketList'
import {Alert} from '../components/Alert';

function Shop () {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');
    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {...orderItem, quantity: orderItem.quantity + 1}
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder);
        }
        setAlertName(item.name);
    }
    const removeFromBasket = (id) => {
        const newOrder = order.filter(item => item.id !== id)
        setOrder(newOrder);

    }
    const incrementQuantity = (id) => {
        const newOrder = order.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity + 1;
                return {
                    ...item,
                    quantity: newQuantity,
                }
            } else {
                return item
            }
        });
        setOrder(newOrder);
    }
    const decrementQuantity = (id) => {
        const newOrder = order.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity - 1;
                return {
                    ...item,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                }
            } else {
                return item
            }
        });
        setOrder(newOrder);
    }
    const handleBasketShow = () => {setBasketShow(!isBasketShow);};
    
    const closeAlert = () => {setAlertName('')};

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            }
        })
        .then(response => response.json())
        .then(data => {
            data.shop && setGoods(data.shop);
            setLoading(false);
        })
    }, [])


    return (
        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}></Cart>
            {
                loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />
            }
            {
                isBasketShow && <BasketList 
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                />
            }
            {
                alertName && <Alert
                    name={alertName}
                    closeAlert={closeAlert}
                />
            }
        </main>
    )
}

export {Shop}