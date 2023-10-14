import types from '../types';

const initial_state = {
  userData: {},
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case types.LOGIN:
      const loginData = action.payload;
      return {
        userData: loginData,
      };
    case types.FORGOTPASSWORD:
      const forgotPasswordData = action.payload;
      return {
        userData: forgotPasswordData,
      };
    case types.RESETPASSWORD:
      const resetPasswordData = action.payload;
      return {
        userData: resetPasswordData,
      };

    default:
      return {...state};
  }
}
