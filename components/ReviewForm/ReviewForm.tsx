import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { Button, Textarea, Rating, Input } from "..";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "../../helpers/api";
import { useState } from "react";

export const ReviewForm = ({
  productId,
  children,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setIsError] = useState<string>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(
        API.review.createDemo,
        {
          ...formData,
          productId,
        }
      );
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setIsError("Something went wrong...");
      }
    } catch (error: any) {
      setIsError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register("name", {
            required: { value: true, message: "Вкажіть своє ім'я" },
          })}
          placeholder="Ім'я"
          error={errors.name}
        />
        <Input
          {...register("title", {
            required: { value: true, message: "Вкажіть заголoвок" },
          })}
          placeholder="Заголовок відгуку"
          className={styles.title}
          error={errors.title}
        />
        <div className={styles.rating}>
          <span>Оцінка: </span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: "Вкажіть рейтинг" } }}
            render={({ field }) => (
              <Rating
                isEditable
                rating={field.value}
                ref={field.ref}
                setRating={field.onChange}
                error={errors.rating}
              />
            )}
          />
        </div>
        <Textarea
          {...register("description", {
            required: { value: true, message: "Вкажіть свою думку" },
          })}
          placeholder="Текст відгуку"
          className={styles.description}
          error={errors.description}
        />
        <div className={styles.submit}>
          <Button appearance="primary">Відправити</Button>
          <span className={styles.info}>
            * Перед публікацією переконайтесь що ви ненавидите русню і донатите
            на ЗСУ
          </span>
        </div>
      </div>
      {isSuccess && (
        <div className={cn(styles.success, styles.panel)}>
          <div className={styles.successTitle}>Ваш відгук надіслано</div>
          <div>Дякуємо, руский корабель іде нахуй!</div>
          <CloseIcon className={styles.close} />
        </div>
      )}
      {error && (
        <div className={cn(styles.error, styles.panel)}>
          {error}
          <CloseIcon className={styles.close} />
        </div>
      )}
    </form>
  );
};
