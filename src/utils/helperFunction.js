import {showMessage} from "react-native-flash-message";

//function to show the flash message
const showError = (message) => {
    showMessage({
        type: 'danger',
        icon: 'danger',
        message,
        duration: 4000,
    })
}

const showSuccess = (message) => {
    showMessage({
        type: 'success',
        icon: 'success',
        message,
        duration: 4000,
    })
}

const showInfo = (message) => {
    showMessage({
        type: 'info',
        icon: 'info',
        message,
        duration: 4000,
    })
}

export {
    showError, 
    showSuccess,
    showInfo
}