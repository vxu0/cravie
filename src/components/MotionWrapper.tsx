import { motion } from "framer-motion";

interface Props {
  body: any;
}

const MotionWrapper = ({ body }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {body}
    </motion.div>
  );
};

export default MotionWrapper;
