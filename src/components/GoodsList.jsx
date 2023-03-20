import { useContext } from 'react'
import {ShopContext} from '../context'
import {GoodsItem} from './GoodsItem'

function GoodsList() {
    const {goods = []} = useContext(ShopContext);
    if (!goods) {
        return <h3>Nothing here...</h3>
    }

    return (
        <div className="goods">
            {goods.map((item) => {return <GoodsItem key={item.mainId} {...item} />})}
        </div>
    )
}

export {GoodsList}