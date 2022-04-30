export const ADMIN_ROLE = "ADMIN";
export const BUYER_ROLE = "BUYER";
export const USER_LOGIN = "USER_LOGIN";

const userReducer = (
  state = {
    loggedIn: false,
    role: BUYER_ROLE,
    user: {
      _id: 123,
      address: "103 Hemenway Street, Boston, MA 02115",
    },
  },
  action
) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        loggedIn: true,
      };
    default:
      return state;
  }
};

export default userReducer;
