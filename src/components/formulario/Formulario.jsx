import React, { useEffect, useRef, useState } from 'react'
import {
    Button,
    Checkbox,
    Input,
    Modal,
    Text,
    Textarea,
    useModal,
} from '@nextui-org/react'
import './formulario.css'
import { useAnimation, useInView, motion } from 'framer-motion'
import { datos } from '../../data/api'
import { useNavigate } from 'react-router-dom'
import Politicas from './Politicas'
import Menu from '../menu/Menu'

export default function Formulario() {
    //navigate
    let navigate = useNavigate()

    //modal
    const { setVisible, bindings } = useModal()

    //datos
    const inputNombre = useRef('')
    const inputTlf = useRef('')
    const inputEmail = useRef('')
    const inputDudas = useRef('')

    //guardar los datos en la DB de firebase (mediante Api de firebase)
    const enviar = (e) => {
        e.preventDefault()
        datos.push({
            nombre: inputNombre,
            telefono: inputTlf,
            email: inputEmail,
            dudas: inputDudas,
        })
        
        console.log(datos)
        /* navigate('/despedida') */
    }

    //comprobar si el checkBox esta acpetado o no
    const [isChecked, setIsChecked] = useState(false)

    //animar el formulario
    const formulario = useRef(null)
    const isInView = useInView(formulario)
    const formAnimation = useAnimation()
    const inputAnimation = useAnimation()

    //Animacion inView
    useEffect(() => {
        if (isInView) {
            formAnimation.start({
                x: 0,
                transition: { duration: 1.3, type: 'spring', bounce: '0.45' },
            })

            inputAnimation.start({
                x: 0,
                opacity: [0, 0.4, 0.7, 0.9, 1],
                transition: { duration: 1.3, type: 'spring' },
            })
        }

        if (!isInView) {
            formAnimation.start({
                x: '-100vw',
            })

            inputAnimation.start({
                x: '-100vw',
                opacity: 0,
            })
        }
    }, [isInView])

    return (
        <div className="cuerpo">
            <Menu />
            <motion.div
                className="formulario"
                ref={formulario}
                animate={formAnimation}
            >
                <motion.form
                    onSubmit={enviar}
                    className="form"
                    transition={{ staggerChildren: 1 }}
                >
                    <h3>A Nosotros nos Importas</h3>

                    <motion.div className="input" animate={inputAnimation}>
                        <Input
                            bordered
                            labelPlaceholder="Nombre"
                            /* required */
                            width="90%"
                            color="primary"
                        />
                    </motion.div>

                    <motion.div className="input" animate={inputAnimation}>
                        <Input
                            bordered
                            labelPlaceholder="Telefono"
                            /* required */
                            width="90%"
                            color="primary"
                        />
                    </motion.div>

                    <motion.div className="input" animate={inputAnimation}>
                        <Input
                            bordered
                            labelPlaceholder="Email"
                            /* required */
                            width="90%"
                            color="primary"
                        />
                    </motion.div>

                    <motion.div className="input" animate={inputAnimation}>
                        <Textarea
                            bordered
                            labelPlaceholder="Tus Dudas"
                            /* required */
                            width="90%"
                            color="secondary"
                        />
                    </motion.div>

                    <motion.div className="checkbox" animate={inputAnimation}>
                        <Checkbox
                            color="success"
                            onChange={() => setIsChecked(!isChecked)}
                            aria-label="Checkbox"
                        />

                        <span onClick={() => setVisible(true)}>
                            Acepto las políticas de privacidad
                        </span>
                    </motion.div>

                    <Button
                        color="gradient"
                        className="button"
                        disabled={isChecked ? false : true}
                        type="submit"
                        /* onPress={enviar} */
                    >
                        {isChecked
                            ? 'Enviar'
                            : 'Tienes que aceptar las Políticas'}
                    </Button>
                </motion.form>
            </motion.div>
            <Modal
                scroll
                blur
                width="600px"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Modal with a lot of content
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Text id="modal-description">
                        <Politicas />
                    </Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        auto
                        flat
                        color="primary"
                        onPress={() => setVisible(false)}
                    >
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
