import { Fragment, useState, useEffect } from "react";
import { useFetch } from "../utils/Hooks";
import MultipleFacts from "../Components/MultipleFacts";
import Factslist from "../Components/Factslist";
import Dice from "../utils/DiceRoll";

const Multiple = () => {
  const [JsonFacts, setJsonFacts] = useState(null);
  const [url, seturl] = useState(`?ApiCall=0..5/math`);
  const { loading, Error, fact } = useFetch(url);
  useEffect(() => {
    if (fact) {
      setJsonFacts(JSON.parse(fact));
    }
  }, [fact]);

  return (
    <Fragment>
      <MultipleFacts seturl={seturl} />
      {loading || fact === null ? (
        <Dice />
      ) : Error ? (
        <div>{Error && "Server Timeout"}</div>
      ) : (
        <Factslist Facts={JsonFacts} />
      )}
    </Fragment>
  );
};

export default Multiple;
