import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import gif from "../../assets/img/fondoInicio.gif";
import "./inicio.css";

export default function Inicio() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.1,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, type: "spring", bounce: 0.5 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="inicio"
    >
      <div className="mensaje">
        <span className="bienvenido">Bienvenid@</span>
        <span className="frase">A la formación que asegura tu futuro</span>
        <motion.div variants={item} className="flecha-down">
        <span>Empezar</span>
          <motion.span className="icon">
            <a href="#menu">
              <BsFillArrowDownCircleFill />
            </a>
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
