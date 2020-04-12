jest.mock("react-i18next", () => ({
    withTranslation: () => (component) => {
        component.defaultProps = {
            ...component.defaultProps,
            t: (key) => key,
        }
        return component
    },
}))

export {}
