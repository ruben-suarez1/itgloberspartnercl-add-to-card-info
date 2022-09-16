import React from "react"
import { useProduct } from "vtex.product-context"
import { useOrderForm } from "vtex.order-manager/OrderForm"
import ButtonGroup from "./ButtonGroup"

const AddToCartInfo = () => {
  const productInfo = useProduct()
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm()
  console.log("Este producto tiene esta info:", productInfo)
  console.log("Esta es informacion de la orden:", totalizers[0])

  return (
    <>
      {
        items.map((item: any, index: number) => {
          return (
            <div key={index}>
              <div>
                <img src={item.imageUrls.at1x} alt="imagen" />
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.id}</p>
                <p>${item.price / 100}</p>
                <p>Cant: {item.quantity}</p>
                <p>SubTotal: $ {(item.price / 100) * (item.quantity)}</p>
              </div>
            </div>
          )
        })
      }
      <div>
        <p>Tenemos {items.length} items en tu compra</p>
        <p>Total: ${totalizers[0]?.value / 100}</p>
      </div>
      <ButtonGroup />
    </>
  )
}


export default AddToCartInfo
