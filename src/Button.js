const Button = () => {

    const getTitle = (lang) => {

        if (lang === "tr") {
            return "Giriş Yap"
        }

        return "Sign In"
    }

    const title = "Action Button"

    const config = {
        title: "Action Button",
        style: {},
    }

    return (
        <button>{getTitle("tr")}</button>
    )
}

export default Button