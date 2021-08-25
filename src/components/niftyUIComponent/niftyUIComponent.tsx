import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { catsSelector } from "../../store/reducers/cat/catSlice";
import getCatFacts from "../../store/thunks/catInformation/getCatFacts";

interface NiftyUIComponentProps {}

const NiftyUIComponent: React.FC<NiftyUIComponentProps> = () => {
  const dispatch = useAppDispatch();
  const cat = useAppSelector(catsSelector);

  return (
    <>
      <button
        id={"clickable-button"}
        data-testid={"clickable-button"}
        onClick={() => dispatch(getCatFacts())}
      >
        GET A CAT FACT
      </button>
      {cat.facts.map((fact) => {
        return <p data-testid={"cat-fact"} key={Math.floor(Math.random() * 9999)}>{fact}</p>;
      })}
    </>
  );
};

export default NiftyUIComponent;
