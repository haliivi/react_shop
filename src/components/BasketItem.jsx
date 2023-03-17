function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity
    } = props
    return (
        <li className="collection-item">
            {name} x {quantity} = {price.finalPrice * quantity} руб.
            <span href="#!" class="secondary-content">
                <i class="material-icons basket-delete">close</i>
            </span>
        </li>
    )
}

export {BasketItem}