import { Profiler } from "react";
import PropTypes from "prop-types";

function ProfilerCallback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) {
  console.log(phase);
}

const ProfilerComponent = ({ children, id }) => {
  return (
    <Profiler id={id} onRender={ProfilerCallback}>
      {children}
    </Profiler>
  );
};

ProfilerComponent.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProfilerComponent;
