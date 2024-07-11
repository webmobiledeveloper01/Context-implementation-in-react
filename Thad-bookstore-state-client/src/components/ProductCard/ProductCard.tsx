import { FC } from "react";
import styles from "./ProductCard.module.css";
import { BookItem } from "../../types/types";
import { getSlug } from "../../services/utils";
import { useCart } from '../../contexts/CartContext';

const ProductCard: FC<{ item: BookItem }> = ({ item }) => {
  const { dispatch } = useCart();
  const handleAddToCart = () => {
    console.log('Adddddddd');
    dispatch({ type: 'ADD_BOOK', book: item });
  };
  return (
    <div className={styles.pro_item}>
      <div className={styles.pro_item_inner}>
        <img src={`${import.meta.env.BASE_URL}/book-images/${getSlug(item.title)}.gif`} alt={item.title} />

        <h3>{item.title}</h3>
        <p>{item.author}</p>
        <span className={styles.price}>{item.price}</span>
        <span className={`${styles.btn} btn`} onClick={handleAddToCart}>Add to cart</span>
      </div>
    </div>
  );
};

export default ProductCard;