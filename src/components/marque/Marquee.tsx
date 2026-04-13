import { motion } from "framer-motion";
import "./Marquee.css";

interface Props {
  text: string;
  reverse?: boolean;
  bg?: string;
}

export const Marquee = ({
  text,
  reverse = false,
  bg = "marquee--red",
}: Props) => {
  return (
    <div className={`marquee ${bg}`}>
      <motion.div
        animate={{ x: reverse ? [-1000, 0] : [0, -1000] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="marquee__track"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="marquee__text">
            {text}
            <span className="marquee__divider">///</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};