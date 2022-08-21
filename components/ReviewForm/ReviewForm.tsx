import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { Button, Textarea, Rating, Input } from '..';
import CloseIcon from './close.svg';

export const ReviewForm = ({
  productId,
  children,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  return (
    <>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input placeholder="Ім'я" />
        <Input placeholder="Заголовок відгуку" className={styles.title} />
        <div className={styles.rating}>
          <span>Оцінка: </span>
          <Rating rating={0} />
        </div>
        <Textarea placeholder="Текст відгуку" className={styles.description} />
        <div className={styles.submit}>
          <Button appearance="primary">
            Відправити
          </Button>
          <span className={styles.info}>
            * Перед публікацією переконайтесь що ви ненавидите русню і донатите на ЗСУ
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>
          Ваш відгук надіслано
        </div>
        <div>
          Дякуємо, руский корабель іде нахуй!
        </div>
        <CloseIcon className={styles.close}/>
      </div>
    </>
  );
};
