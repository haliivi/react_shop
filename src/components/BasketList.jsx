import {BasketItem} from './BasketItem'

function BasketList(props) {
    const {
        order,
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incrementQuantity = Function.prototype,
        decrementQuantity = Function.prototype,
    } = props;
    const totalPrice = order.reduce((sum, item) => {
        return sum + item.price.finalPrice * item.quantity
    }, 0)

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {
                order.length ? order.map((item) => <BasketItem
                    key={item.id}
                    {...item}
                    removeFromBasket={removeFromBasket}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                />) : <li className="collection-item">Корзина пуста</li>
            }
            <li className="collection-item active">
                Общая стоимость: {totalPrice} руб.
            </li>
            <li className="collection-item right">
                <button className="btn-small">Оформить</button>
            </li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
        </ul>
    )
}

export {BasketList}