import React from "react"
import { withTranslation } from "../../i18n"
import MainLayout from "../../components/mainLayout"

type Props = {
    t: any
}

const HomePage = ({ t }: Props) => {
    return (
        <MainLayout>
            <div>{t("welcomeText")}</div>
        </MainLayout>
    )
}

HomePage.getInitialProps = async () => ({
    namespacesRequired: ["home"],
})

export default withTranslation("home")(HomePage)
