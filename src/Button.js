    // const title = "Action Button"

    // const config = {
    //     title: "Action Button",
    //     style: {},
    // }

// const ButtonTitle = ({
//     text
// }) => {
    
//     return (
//         <span>{text}</span>
//     )
// }

import {
    Button as RBButton
} from 'react-bootstrap'

const Button = ({
    onClick,
    title="default",
    variant="primary"
}) => {

    const getTitle = (lang) => {

        if (lang === "tr") {
            return "Giriş Yap"
        }

        return "Sign In"
    }

    return (
        <RBButton variant={variant} onClick={(e) => {
            onClick(e)
        }}>
            {title}
        </RBButton>
    )


    // return (
    //     <button onClick={(e) => {

    //         // button specific code
    //         // console.log('button clicked')

    //         // parent prop code
    //         onClick(e)

    //     }}>
    //         {title}
    //     </button>
    // )
}

export default Button