import { AnimatePresence, motion } from 'framer-motion';

const ParallaxElement = ({ children, style }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });
    observer.observe(ref.current);
  }, []);

  const ref = useRef();

  return (
    <div ref={ref} style={style}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ParallaxElement;
