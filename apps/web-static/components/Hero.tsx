import { formatCurrency } from 'common-utils/helpers';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container, FadeIn, FadeInStagger } from 'ui';

const Hero = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 300], [0.8, 1]);

  return (
    <FadeInStagger>
      <Container>
        <div className="text-center py-20">
          <FadeIn>
            <h1
              className={`text-5xl sm:text-6xl sm:leading-normal font-bold text-gray-900 max-w-3xl mx-auto`}
            >
              Setup your online store with {'\n'}
              {formatCurrency(0)} investment
            </h1>
          </FadeIn>
          <FadeIn>
            <h2 className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto">
              Transform your customer experience with Gogo&apos;s AI-powered
              business solutions{'\n'}
              Online Store . Analytics . Engagement
            </h2>
          </FadeIn>
        </div>
        <FadeIn>
          <div className="relative flex justify-center items-center">
            <motion.div
              className="bottom-0 border border-gray-300 bg-transparent rounded-full hero-image"
              style={{ height: 700, width: 700, scale }}
            />
            <motion.div className="absolute bottom-0" style={{ scale }}>
              <img
                src="https://res.cloudinary.com/dxc5ccfcg/image/upload/v1690025760/gogo-app/deviceframes_sdn86f"
                alt="hero"
                width={700}
                height={700}
                className="zIndex-1 relative"
              />
            </motion.div>
          </div>
        </FadeIn>
      </Container>
    </FadeInStagger>
  );
};

export default Hero;
