import React from "react"
import { useProduct } from "vtex.product-context"
import { useOrderForm } from "vtex.order-manager/OrderForm"
import ButtonGroup from "./ButtonGroup"
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'

const AddToCartInfo = ({ blockClass }: { blockClass: string}) => {
  const container = generateBlockClass(styles.container, blockClass)
  const container__item = generateBlockClass(styles.container__item, blockClass)
  const container__item__cart = generateBlockClass(styles.container__item__cart, blockClass)
  const item__image =  generateBlockClass(styles.item__image, blockClass)
  const item__text =  generateBlockClass(styles.item__text, blockClass)
  const item__number =  generateBlockClass(styles.item__number, blockClass)
  const productInfo = useProduct()
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm()
  console.log("Este producto tiene esta info:", productInfo)
  console.log("Esta es informacion de la orden:", totalizers[0])

  return (
    <div className={container}>
      {
        items.map((item: any, index: number) => {
          return (
            <div key={index} className={container__item}>
              <div className={container__item__cart}>
                <img src={item.imageUrls.at1x} alt="imagen" className={item__image}/>
              </div>
              <div>
                <p className={item__text}>{item.name}</p>
                <p className={item__text}>{item.id}</p>
                <p className={item__number}>${item.price / 100}</p>
                <p className={item__number}>Cant: {item.quantity}</p>
                <p className={item__number}>SubTotal: $ {(item.price / 100) * (item.quantity)}</p>
              </div>
            </div>
          )
        })
      }
      <div className={container__item__cart}>
        <p className={item__number}>Tenemos {items.length} items en tu compra</p>
        <p className={item__number}>Total: ${totalizers[0]?.value / 100}</p>
      </div>
      <ButtonGroup />
    </div>
  )
}


export default AddToCartInfo
