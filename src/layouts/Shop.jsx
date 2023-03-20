import {useEffect, useContext} from 'react'
import {ShopContext} from '../context'
import {API_KEY, API_URL} from '../config'
import {Preloader} from './Preloader'
import {GoodsList} from '../components/GoodsList';
import {Cart} from '../components/Cart'; 
import {BasketList} from '../components/BasketList'
import {Alert} from '../components/Alert';

function Shop () {
    const {
        loading,
        order,
        isBasketShow,
        alertName,
        setGoods
    } = useContext(ShopContext)

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            }
        })
        .then(response => response.json())
        .then(data => {
            data.shop && setGoods(data.shop);
        })
        // eslint-disable-next-line
    }, [])

    return (
        <main className="container content">
            <Cart quantity={order.length} />
            {
                loading ? <Preloader /> : <GoodsList />
            }
            {
                isBasketShow && <BasketList />
            }
            {
                alertName && <Alert />
            }
        </main>
    )
}

export {Shop}