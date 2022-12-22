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
  const [JsonFacts, setJsonFacts] = useState(null);
  const [{ end, start, type }, setFindRanges] = useState<MultipleParma>({
    start: 0,
    end: 5,
    type: "math",
  });

  const { data: fact, isLoading, isError } = useMultipleFacts(start, end, type);

  useEffect(() => {
    if (fact) {
      setJsonFacts(JSON.parse(fact));
    }
  }, [fact]);

  return (
    <AnimateWrapper>
      <ProfilerComponent id="multiple">
        <MultipleFacts setFindRanges={setFindRanges} />
      </ProfilerComponent>
      {isLoading || fact === null ? (
        <Dice />
      ) : isError ? (
        <div>{isError && "Server Timeout"}</div>
      ) : (
        <FactsList Facts={JsonFacts as any} />
      )}
    </AnimateWrapper>
  );
};

export default Multiple;
