import { AdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";
import cn from "classnames";
import { Htag, P } from '../';
import CheckIcon from './check.svg'

export const Advantages = ({
  children,
  className,
}: AdvantagesProps): JSX.Element => {
  return (
    <div>
      <Htag tag="h2">Переваги</Htag>
      <div className={styles.listItem}>
        <CheckIcon className={styles.icon} />
        <div>
          <Htag tag="h3">Мобільність спеціаліста</Htag>
          <P size="m">
            Вище зазначені програми Adobe InDesign, Adobe Illustrator, Corel Draw та ними можна успішно користуватися вдома або в дорозі. Сучасні ноутбуки добре справляються з навантаженням, то навіщо заганяти фахівця в задушливий офіс. У цій професії важливим вважається натхнення, тому дизайнери шукають його у різних місцях.
          </P>
        </div>
      </div>
      <div className={styles.listItem}>
        <CheckIcon className={styles.icon} />
        <div>
          <Htag tag="h3">Мобільність спеціаліста</Htag>
          <P size="m">
            Вище зазначені програми Adobe InDesign, Adobe Illustrator, Corel Draw та ними можна успішно користуватися вдома або в дорозі. Сучасні ноутбуки добре справляються з навантаженням, то навіщо заганяти фахівця в задушливий офіс. У цій професії важливим вважається натхнення, тому дизайнери шукають його у різних місцях.
          </P>
        </div>
      </div>
      <div className={styles.listItem}>
        <CheckIcon className={styles.icon} />
        <div>
          <Htag tag="h3">Мобільність спеціаліста</Htag>
          <P size="m">
            Вище зазначені програми Adobe InDesign, Adobe Illustrator, Corel Draw та ними можна успішно користуватися вдома або в дорозі. Сучасні ноутбуки добре справляються з навантаженням, то навіщо заганяти фахівця в задушливий офіс. У цій професії важливим вважається натхнення, тому дизайнери шукають його у різних місцях.
          </P>
        </div>
      </div>
    </div>
  );
};
