import {useContext} from 'react'
import {ShopContext} from '../context'

function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
    } = props

    const {
        removeFromBasket,
        incrementQuantity,
        decrementQuantity,
    } = useContext(ShopContext)

    return (
        <li className="collection-item">
            {name} x 
            <i onClick={() => decrementQuantity(id)} className="material-icons basket-quantity">remove</i>
            {quantity}
            <i onClick={() => incrementQuantity(id)} className="material-icons basket-quantity">add</i> = {price.finalPrice * quantity} руб.
            <span href="#!" className="secondary-content" onClick={() => removeFromBasket(id)}>
                <i className="material-icons basket-delete">close</i>
            </span>
        </li>
    )
}

export {BasketItem}