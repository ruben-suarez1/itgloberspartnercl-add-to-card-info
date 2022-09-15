import React from "react"
import { useProduct } from "vtex.product-context"
import { useOrderForm } from "vtex.order-manager/OrderForm"

const AddToCartInfo = () => {
  const productInfo = useProduct()
  const { orderForm } = useOrderForm()
  console.log("Este producto tiene esta info:", productInfo)
  console.log("Esta es informacion de la orden:", orderForm)
}


export default AddToCartInfo
