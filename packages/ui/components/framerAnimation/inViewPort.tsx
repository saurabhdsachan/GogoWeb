import { IChildren } from 'common-utils/type';
import { motion } from 'framer-motion';

const InViewPort = ({ children }: { children: IChildren }) => {
  return (
    <motion.section
      initial={{ translateY: 50, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
    >
      {children}
    </motion.section>
  );
};

export default InViewPort;
