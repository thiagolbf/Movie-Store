import { CartPageBox, EndCart } from "./style";

export const CartPage = () => {
  return (
    <>
      <CartPageBox>
        MEU CARRINHO
        <p>filme 1</p>
        <p>filme 2</p>
        <EndCart>
          <p>Finalizar compra</p>
          <button>finalizar compra</button>
        </EndCart>
      </CartPageBox>
    </>
  );
};
