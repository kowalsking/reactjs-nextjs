import { Htag, Button } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">Button!</Button>
      <Button appearance="ghost">Button!</Button>
    </>
  );
}
