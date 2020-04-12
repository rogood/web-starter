import React from "react"
import { withTranslation } from "../../i18n"
import MainLayout from "../../components/mainLayout"

type Props = {
    t: any
}

const ContactPage = ({ t }: Props) => {
    return (
        <MainLayout>
            <div>{t("title")}</div>
        </MainLayout>
    )
}

ContactPage.getInitialProps = async () => ({
    namespacesRequired: ["contact"],
})

export default withTranslation("contact")(ContactPage)
