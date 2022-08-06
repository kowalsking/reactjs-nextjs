import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import cn from "classnames";
import { Button, Card, Rating, Tag } from '..';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}><img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} /></div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>{product.price}</div>
      <div className={styles.credit}>{product.credit}</div>
      <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
      <div className={styles.tags}>{product.categories.map(c => <Tag key={c} color='ghost'>{c}</Tag>)}</div>
      <div className={styles.priceTitle}>ціна</div>
      <div className={styles.creditTitle}>кредит</div>
      <div className={styles.rateTitle}>{product.reviewCount} відгуків</div>
      <div className={styles.hr} ><hr/></div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>features</div>
      <div className={styles.advBlock}>
        <div className={styles.advantages}>
          <div>Переваги</div>
          <div>{product.advantages}</div>
        </div>
        <div className={styles.disAdvantages}>
          <div>Недоліки</div>
          <div>{product.disAdvantages}</div>
        </div>
      </div>
      <div className={styles.hr} ><hr/></div>
      <div className={styles.actions}>
        <Button appearance='primary'>Дізнатись детальніше</Button>
        <Button appearance='ghost' arrow={'right'}>Читати відгуки</Button>
      </div>
    </Card>
  );
};
