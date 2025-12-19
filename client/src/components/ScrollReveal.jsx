import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const ScrollReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
