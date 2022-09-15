import { GetStaticProps } from "next";
import { useState } from "react";
import { Htag, Button, P, Tag, Rating, Input, Textarea } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Hello</Htag>
      <Button appearance="primary" arrow="right">
        Button!
      </Button>
      <Button appearance="ghost">Button!</Button>
      <P size="l">
        Lorem ipsum do debitis molesti rovident dicta veniam iusto minus?
      </P>
      <Tag size="s">small</Tag>
      <Tag size="m" color="red">
        small
      </Tag>
      <Tag size="s" color="primary">
        small
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input />
      <Textarea />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
