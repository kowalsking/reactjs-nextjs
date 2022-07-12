import { useEffect, useState } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log("counter", counter);
    return function cleanup() {
      console.log("unmounting)");
    };
  });

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCounter((x) => x + 1)}
      >
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
      <Rating rating={4} />
    </>
  );
}
