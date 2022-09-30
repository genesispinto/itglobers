import React from 'react'
import PropTypes from 'prop-types'

type Props = {
    logo: string
    phone: string
    message: string
    width: number
    height: number
}
const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
    return <>
        <div className='fixed bottom-2 right-2 flex flexColumn'>
            <a
                href={` https://wa.me/${phone}?text=${message}`}
                target="_blank"
                rel="noreferrer noopener"
            >
                <img
                    src={logo}
                    height={height}
                    width={width}
                    alt="logo de WhatsApp"
                />
            </a>
        </div>
    </>
}

WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number

}

WhatsappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "12345678",
    message: "hola",
    width: "40",
    height: "40"
}

WhatsappButton.schema = {
    title: "boton de whatsApp",
    type: "object",
    properties: {
        logo: {
            title: "Logo de whastApp que se relacione con la marca",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "Telefono",
            description: "Agrega por favor nro de telefono",
            type: "string",
        },
        message: {
            title: "Mensaje",
            description: "Agrega por favor el messaje que se vera para tu cliente",
            type: "string",
            widget: {
                "ui:widget": "textarea"
            }
        },
        width: {
            title: "tamaño",
            description: "Agrega por favor nro de telefono",
            type: "number",
        },
        height: {
            title: "tamaño",
            description: "Agrega por favor nro de telefono",
            type: "number",
        },
    }
}

export default WhatsappButton