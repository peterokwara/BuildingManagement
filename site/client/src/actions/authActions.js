import { TEST_DISPATCH } from "./types";

// Register user
export const registerUser = userData => {
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};
