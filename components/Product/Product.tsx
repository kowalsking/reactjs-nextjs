import { Button, Card, Divider, Rating, Tag } from '..';
import { priceUah } from '../../helpers/helpers';
import styles from "./Product.module.css";
import { ProductProps } from "./Product.props";

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}><img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} /></div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>
        {priceUah(product.price)}
        {product.oldPrice && <Tag className={styles.oldPrice} color="green">{priceUah(product.price - product.oldPrice)}</Tag>}
      </div>
      <div className={styles.credit}>
        {priceUah(product.credit)}/<span className={styles.month}>міс</span>
      </div>
      <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
      <div className={styles.tags}>{product.categories.map(c => <Tag key={c} className={styles.category}  color='ghost'>{c}</Tag>)}</div>
      <div className={styles.priceTitle}>ціна</div>
      <div className={styles.creditTitle}>кредит</div>
      <div className={styles.rateTitle}>{product.reviewCount} відгуків</div>
      <Divider className={styles.hr} />
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>features</div>
      <div className={styles.advBlock}>
        {product.advantages &&<div className={styles.advantages}>
          <div className={styles.advTitle}>Переваги</div>
          <div>{product.advantages}</div>
        </div>}
        {product.disAdvantages && <div className={styles.disadvantages}>
          <div className={styles.advTitle}>Недоліки</div>
          <div>{product.disAdvantages}</div>
        </div>}
      </div>
      <Divider className={styles.hr} />
      <div className={styles.actions}>
        <Button appearance='primary'>Дізнатись детальніше</Button>
        <Button appearance='ghost' arrow={'right'} className={styles.reviewButton}>Читати відгуки</Button>
      </div>
    </Card>
  )
}
