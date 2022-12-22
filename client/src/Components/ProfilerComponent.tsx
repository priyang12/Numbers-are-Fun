// @ts-nocheck
import React, { Profiler, ProfilerOnRenderCallback } from "react";

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

const ProfilerComponent = ({
  children,
  id,
}: { id: string } & React.ComponentPropsWithoutRef<"div">) => {
  return (
    <Profiler id={id} onRender={ProfilerCallback}>
      {children}
    </Profiler>
  );
};

export default ProfilerComponent;
