    // const title = "Action Button"

    // const config = {
    //     title: "Action Button",
    //     style: {},
    // }

const Button = ({
    onClick,
    title="default"
}) => {

    const getTitle = (lang) => {

        if (lang === "tr") {
            return "Giriş Yap"
        }

        return "Sign In"
    }


    return (
        <button onClick={(e) => {

            // button specific code
            // console.log('button clicked')

            // parent prop code
            onClick(e)

        }}>{title}</button>
    )
}

export default Button