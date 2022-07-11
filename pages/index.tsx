import { Htag, Button, P } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">Button!</Button>
      <Button appearance="ghost">Button!</Button>
      <P size="l">Oi blyad ebanui React pizdec. Ebanui Frontend yak je ya tebe lyublyu 3</P>
    </>
  );
}
