import { useState } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
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
    </>
  );
}

export default withLayout(Home);
