import * as React from "react";
import { motion } from "framer-motion";
import { Transition, Variants } from "../utils/AnimationVariables";

function AnimateWrapper({ children }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={Variants}
      transition={Transition}
    >
      {children}
    </motion.div>
  );
}

export default AnimateWrapper;
