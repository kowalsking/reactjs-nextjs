import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { Button, Textarea, Rating, Input } from '..';
import CloseIcon from './close.svg';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';

export const ReviewForm = ({
  productId,
  children,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<IReviewForm>()

  const onSubmit = (data: IReviewForm) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register('name', { required: { value: true, message: "Вкажіть своє ім'я"}})}
          placeholder="Ім'я"
          error={errors.name}
        />
        <Input
          {...register('title', { required: { value: true, message: "Вкажіть заголвок"}})}
          placeholder="Заголовок відгуку"
          className={styles.title}
          error={errors.title}
        />
        <div className={styles.rating}>
          <span>Оцінка: </span>
          <Controller 
            control={control}
            name='rating'
            render={({ field }) => (
              <Rating isEditable rating={field.value} ref={field.ref} setRating={field.onChange} />
            )}
          />
        </div>
        <Textarea {...register('description')} placeholder="Текст відгуку" className={styles.description} />
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
    </form>
  );
};
