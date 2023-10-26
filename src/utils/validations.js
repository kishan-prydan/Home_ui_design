import validator from 'is_js';


//validation code
const checkEmpty = (val, key) => {
  if (validator.empty(val.trim())) {
    return `${key}`;
  } else {
    return '';
  }
};

const checkMinLength = (val, minLength, key) => {
  if (val.trim().length < minLength) {
    return `Please Enter valid ${key}`;
  } else {
    return '';
  }
};

export default function (data) {
  const {code, userName, password, confirmPassword, otp} = data;

  if (otp !== undefined) {
    let emptyValidationText = checkEmpty(otp, 'Please Enter OTP');
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(otp, 6, 'otp');
      if (minLengthValidation !== '') {
        return minLengthValidation;
      }
    }
  }

  if (code !== undefined) {
    let emptyValidationText = checkEmpty(code, 'Please Enter Dealer Code');
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(code, 5, 'code');
      if (minLengthValidation !== '') {
        return minLengthValidation;
      }
    }
  }

  if (userName !== undefined) {
    let emptyValidationText = checkEmpty(userName, 'Please Enter User Name');
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      if (!validator.email(userName)) {
        return 'Please enter valid userName';
      }
    }
  }

  if (password !== undefined) {
    let emptyValidationText = checkEmpty(password, 'Please Enter Password');
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(password, 6, 'password');
      if (minLengthValidation !== '') {
        return minLengthValidation;
      }
    }
  }

  if (confirmPassword !== undefined) {
    let emptyValidationText = checkEmpty(
      confirmPassword,
      'Please Enter Confirm Password',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(confirmPassword, 6, 'password');
      if (minLengthValidation !== '') {
        return minLengthValidation;
      } else if (confirmPassword !== password) {
        return 'New password and Confirm Password must be same';
      }
    }
  }
}
