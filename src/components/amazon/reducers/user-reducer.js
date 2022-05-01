export const ADMIN_ROLE = "ADMIN";
export const BUYER_ROLE = "BUYER";
export const USER_LOGIN = "USER_LOGIN";

const userReducer = (
  state = {
    loggedIn: false,
    role: BUYER_ROLE,
    userId: 123,
  },
  action
) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        loggedIn: true,
        role: action.role,
        userId: action.userId,
      };
    default:
      return state;
  }
};

export default userReducer;
