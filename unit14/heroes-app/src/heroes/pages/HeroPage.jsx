import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

export const HeroPage = () => {
  const { id } = useParams();
  console.log(id);

  const hero = getHeroById(id);

  if (!hero) {
    <Navigate to="/marvel" />;
  }

  return (
    <>
      <div className="container mt-5">
        <p>{hero.superhero}</p>
      </div>
    </>
  );
};
