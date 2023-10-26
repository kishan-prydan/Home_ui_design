import {showMessage} from "react-native-flash-message";

//function to show the flash message
const showError = (message) => {
    showMessage({
        type: 'danger',
        icon: 'danger',
        message
    })
}

const showSuccess = (message) => {
    showMessage({
        type: 'success',
        icon: 'success',
        message
    })
}

const showInfo = (message) => {
    showMessage({
        type: 'info',
        icon: 'info',
        message
    })
}

export {
    showError, 
    showSuccess,
    showInfo
}