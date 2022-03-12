import { Fragment, useState, useEffect } from "react";
import { useFetch } from "../utils/Hooks";
import MultipleFacts from "../Components/MultipleFacts";
import FactsList from "../Components/FactsList";
import ProfilerComponent from "../Components/ProfilerComponent";
import Dice from "../utils/DiceRoll";

const Multiple = () => {
  const [JsonFacts, setJsonFacts] = useState(null);
  const [url, setUrl] = useState(`?ApiCall=0..5/math`);
  const { loading, Error, fact } = useFetch(url);
  useEffect(() => {
    if (fact) {
      setJsonFacts(JSON.parse(fact));
    }
  }, [fact]);

  return (
    <Fragment>
      <ProfilerComponent id='multiple'>
        <MultipleFacts setUrl={setUrl} />
      </ProfilerComponent>
      {/* {loading || fact === null ? (
        <Dice />
      ) : Error ? (
        <div>{Error && "Server Timeout"}</div>
      ) : (
        <FactsList Facts={JsonFacts} />
      )} */}
    </Fragment>
  );
};

export default Multiple;
