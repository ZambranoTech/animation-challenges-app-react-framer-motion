import { motion } from "framer-motion";
import { createPortal } from "react-dom";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={{
          hidden: { y: -30, opacity: 0 },
          visible: { opacity: 1, y: 0 },
        }}
        open
        className="modal"
        initial="hidden"
        animate="visible"
        exit={"hidden"}
        // transition={{
        //   duration: 0.5,
        // }}
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
