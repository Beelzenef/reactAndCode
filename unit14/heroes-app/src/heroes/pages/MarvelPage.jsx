import { HeroList } from "../cmps/HeroList";

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Page</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </>
  );
}