const getIsLoggedIn = state => state.auth.isLoggedIn;
const gteUsername = state => state.auth.user.name;
const getIsLoading = state => state.auth.isLoggedIn;

const authSelectors = { getIsLoggedIn, gteUsername, getIsLoading };

export default authSelectors;
