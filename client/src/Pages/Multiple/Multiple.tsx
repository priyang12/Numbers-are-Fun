import { Fragment, useState, useEffect } from "react";
import MultipleFacts from "./MultipleFacts";
import FactsList from "./Factslist";
import ProfilerComponent from "../../Components/ProfilerComponent";
import Dice from "../../Components/DiceRoll";
import { useMultipleFacts } from "../../Hooks/useMultipleFacts";
import AnimateWrapper from "../../Components/AnimateWrapper";

export type MultipleParma = {
  start: number;
  end: number;
  type: "math" | "trivia" | "year";
};

const Multiple = () => {
  const [ParsedFacts, setParsedFacts] = useState([]);
  const [{ end, start, type }, setFindRanges] = useState<MultipleParma>({
    start: 0,
    end: 5,
    type: "math",
  });
  const {
    data: facts,
    isLoading,
    isError,
  } = useMultipleFacts(start, end, type);

  useEffect(() => {
    const PraseFact = facts ? JSON.parse(facts) : [];
    const Array = [] as any;
    for (const i in PraseFact as string[]) {
      Array.push(PraseFact[i]);
    }
    setParsedFacts(Array);
  }, [facts]);

  return (
    <AnimateWrapper>
      <ProfilerComponent id="multiple">
        <MultipleFacts setFindRanges={setFindRanges} />
      </ProfilerComponent>
      {isLoading ? (
        <Dice />
      ) : isError ? (
        <div>{isError && "Server Timeout"}</div>
      ) : null}
      {ParsedFacts && ParsedFacts.length > 0 ? (
        <FactsList Facts={ParsedFacts} />
      ) : null}
    </AnimateWrapper>
  );
};

export default Multiple;
