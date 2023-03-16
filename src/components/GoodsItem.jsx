function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        granted,
    } = props;

    return (
        <div id={mainId} className="card">
            <div className="card-image">
                <img src={granted[0].images.background} alt={displayName} />
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button className="btn">Купить</button>
                <span className="right" style={{fontSize: '1.8rem'}}>{price.finalPrice} руб.</span>
            </div>
        </div>
    )
}

export {GoodsItem}