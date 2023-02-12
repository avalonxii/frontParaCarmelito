import React from 'react'
import { motion } from 'framer-motion'
import logo from '../../assets/img/logo.png'

export default function Logo() {
    return (
        <div className="logo">
            <motion.a href="https://campusfp.es" target="_blank" whileHover={{scale:1.1 , transition: {duration: 0.7, type: 'spring', bounce: 0.4}}}>
                <img src={logo} alt="logoCampusFP" />
            </motion.a>
        </div>
    )
}
