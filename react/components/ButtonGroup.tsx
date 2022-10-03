import React from "react"
import styles from './styles.css'


const ButtonGroup = () => {
  return (
    <>
      <div  className={styles["department__button"]}>
        <a href="/checkout" className={styles["text"]}>CHECKOUT</a>
      </div>
      <div className={styles["department__button"]}>
        <a href="/" className={styles["text"]}>CONTINÚA COMPRANDO</a>
      </div>
      <div className={styles["department__button"]}>
        <a href="/cart-page" className={styles["text"]}>VER CARRITO</a>
      </div>
    </>
  )
}

export default ButtonGroup
