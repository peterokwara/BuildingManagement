const initialState = {
  isAuthenticated: false,
  user: {},
  hello: "text"
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
