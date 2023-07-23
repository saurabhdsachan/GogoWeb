import { IChildren } from 'common-utils/type';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const InViewPort = ({ children }: { children: IChildren }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <motion.span
        style={{
          transform: isInView ? 'none' : 'translateY(-200px)',
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </motion.span>
    </section>
  );
};

export default InViewPort;
