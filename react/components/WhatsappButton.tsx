import React from 'react'
import PropTypes from 'prop-types'

type Props = {
    logo : string
    phone: string
    message: string
}
const WhatsappButton = ({logo, phone, message}:Props) => {
    const formattedMessage = message.replace(/ /g, "20%")
    return <>
    <div className='fixed bottom-2 right-2 flex flexColumn'>
        <a
        href={` https://wa.me/${phone}?text=${formattedMessage}`}
        target="_blank"
        rel="noreferrer noopener"
        >
            <img src={logo} alt="logo de WhatsApp" />
        </a>
    </div>
    </>
}

WhatsappButton.propTypes ={
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string
}

WhatsappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "12345678",
    message: "hola"
}

WhatsappButton.schema = {
    title: "boton de whatsApp",
    type: "object",
    properties:{
        logo:{
            title: "Logo de whastApp que se relacione con la marca",
            type: "string",
            widget:{
                "ui:widget":"image-uploader"
            }
        },
        phone:{
            title: "Telefono",
            description: "Agrega por favor nro de telefono",
            type: "string",
        },
        message:{
            title: "Mensaje",
            description: "Agrega por favor el messaje que se vera para tu cliente",
            type: "string",
            widget:{
                "ui:widget":"textarea"
            }
        }
    }
}

export default WhatsappButton