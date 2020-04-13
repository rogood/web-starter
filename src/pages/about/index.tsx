import React from "react"
import { withTranslation } from "../../i18n"
import MainLayout from "../../components/mainLayout"

type Props = {
    t: any
}

const AboutPage = ({ t }: Props) => {
    return (
        <MainLayout>
            <div>{t("title")}</div>
        </MainLayout>
    )
}

export default withTranslation("about")(AboutPage)
