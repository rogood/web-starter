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

AboutPage.getInitialProps = async () => ({
    namespacesRequired: ["about"],
})

export default withTranslation("about")(AboutPage)
