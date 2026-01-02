import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  y = 18,
  delay = 0,
  duration = 0.55,
  once = true,
  className = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  const reduce = useReducedMotion();

  const initial = reduce ? { opacity: 1 } : { opacity: 0, y };
  const animate = reduce ? { opacity: 1 } : { opacity: 1, y: 0 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? animate : {}}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

