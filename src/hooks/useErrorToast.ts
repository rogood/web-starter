import { useToasts } from 'react-toast-notifications'

const useErrorToast = () => {
    const { addToast } = useToasts()

    return {
        showErrorToast: (error: Error): void => {
            addToast('Something went wrong', {
                appearance: 'error',
                autoDismiss: true,
            })
            // eslint-disable-next-line no-undef
            console.error(error)
        },
    }
}

export default useErrorToast
