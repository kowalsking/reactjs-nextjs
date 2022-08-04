import { HhData, Htag, Tag, Advantages, P, Sort } from "../../components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import { TopLevelCategory } from '../../interfaces/page.interface';
import { SortEnum } from '../../components/Sort/Sort.props';

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="m">
            {products.length}
          </Tag>
        )}
        <Sort sort={SortEnum.Rating} setSort={() => {}} />
      </div>
      {products && products.length}
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансії - {page.category}</Htag>
        {products && (
          <Tag color="red" size="m">
            dou.ua
          </Tag>
        )}
        <span>Сортування</span>
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && 
        <>
          <Htag tag="h2">Переваги</Htag>
          <Advantages advantages={page.advantages} />
        </>
      }
      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
      <Htag tag="h2">Отримуючі навички</Htag>
      {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
    </div>
  );
};
