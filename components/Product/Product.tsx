import { Button, Card, Divider, Rating, Review, ReviewForm, Tag } from '..';
import { declOfNum, priceUah } from '../../helpers/helpers';
import styles from "./Product.module.css";
import { ProductProps } from "./Product.props";
import Image from 'next/image'
import cn from "classnames";
import { useState } from 'react';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false)

  console.log(1, isReviewOpened)
  
  return (
    <>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <Image 
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            width={70}
            height={70}
          />
        </div>
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
        <div className={styles.rateTitle}>{product.reviewCount} {declOfNum(product.reviewCount, ['відгук', 'відгука', 'відгуків'])}</div>
        <Divider className={styles.hr} />
        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>
          {product.characteristics.map(c => (
            <div className={styles.characteristics} key={c.name}>
              <span className={styles.characteristicsName}>{c.name}</span>
              <span className={styles.characteristicsDots}></span>
              <span className={styles.characteristicsValue}>{c.value}</span>
            </div>
          ))}
        </div>
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
        <Divider className={cn(styles.hr, styles.hr2)} />
        <div className={styles.actions}>
          <Button appearance='primary'>Дізнатись детальніше</Button>
          <Button 
            appearance='ghost'
            arrow={isReviewOpened ? 'down' :'right'}
            className={styles.reviewButton}
            onClick={() => setIsReviewOpened(!isReviewOpened)}
          >Читати відгуки</Button>
        </div>
      </Card>
      <Card color='blue' className={cn(styles.reviews, {
        [styles.opened]: isReviewOpened,
        [styles.closed]: !isReviewOpened,
      })}>
        {product.reviews.map(r => (
          <>
            <Review key={r._id} review={r} />
            <Divider />
          </>
        ))}
        <ReviewForm productId={product._id} />
      </Card>
    </>
  )
}
