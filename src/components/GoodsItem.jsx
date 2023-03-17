function GoodsItem(props) {
    const {
        mainId: id,
        displayName: name,
        displayDescription,
        price,
        granted,
        addToBasket = Function.prototype,
    } = props;

    return (
        <div id={id} className="card">
            <div className="card-image">
                <img src={granted[0].images.background} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button className="btn" onClick={() => addToBasket({id, name, price,})}>Купить</button>
                <span className="right" style={{fontSize: '1.8rem'}}>{price.finalPrice} руб.</span>
            </div>
        </div>
    )
}

export {GoodsItem}