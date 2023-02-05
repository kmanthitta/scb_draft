import { RxAvatar } from "react-icons/rx";
import { motion } from "framer-motion";

const Topbar = () => {
  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5}}
      className="w-full bg-slate-800 text-white h-7"
    >
      <div className="float-left">MOSAIC LOGO</div>
      <div className="float-right mr-1">
        <RxAvatar fontSize="25px" />
      </div>
    </motion.div>
  );
};

export default Topbar;
