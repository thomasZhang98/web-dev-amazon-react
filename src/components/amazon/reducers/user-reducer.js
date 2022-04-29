export const ADMIN_ROLE = "ADMIN";
export const BUYER_ROLE = "BUYER";

const userReducer = (
  state = {
    loggedIn: true,
    role: BUYER_ROLE,
    user: {
      _id: 123,
      address: "103 Hemenway Street, Boston, MA 02115",
    },
  }
) => {
  return state;
};

export default userReducer;
