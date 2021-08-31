// state
export const state = () => ({
  user: null,
  firestoreUsers: null
});

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_FIRSTORE_USERS(state, user) {
    state.firestoreUsers = user;
  },
  ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser, claims }) {

    if (authUser) {
      const { uid, email, emailVerified, displayName } = authUser;

      state.authUser = {
        uid,
        displayName,
        email,
        emailVerified,
        // use custom claims to control access (see https://firebase.google.com/docs/auth/admin/custom-claims)
        isAdmin: claims.custom_claim
      };
    }
  }
};

export const actions = {
  onAuthStateChangedAction: (state, { authUser, claims }) => {
    if (!authUser) {
      // claims = null
      // Perform logout operations

      console.log("NO_USER");
      state.commit("SET_USER", null);
    } else {
      console.log("user 1");
      // Do something with the authUser and the claims object...
      const { uid, email } = authUser;
      state.commit("SET_USER", { uid, email, isAdmin: claims.custom_claim });
    }
  },
  async nuxtServerInit({ dispatch, commit }, { app, res }) {
    if (res && res.locals && res.locals.user) {
      const {
        allClaims: claims,
        idToken: token,
        ...authUser
      } = res.locals.user;
      await dispatch("onAuthStateChangedAction", {
        authUser,
        claims,
        token
      });

      // or

      // commit('ON_AUTH_STATE_CHANGED_MUTATION', { authUser, claims, token })
    }
  }
};

export const getters = {
  getUser: state => {
    return state.user;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
