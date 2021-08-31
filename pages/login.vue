<template>
  <div class="container">
    <div class="login_card">
      <h2>Login</h2>
      <input type="text" placeholder="Enter email" v-model="email" />
      <input type="text" placeholder="Enter password" v-model="password" />
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    login() {
      console.log("login");
      this.$fire.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log("Logged In");
          $nuxt.$router.push("/");
          // ...
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
}

.login_card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login_card button {
  border: none;
  background-color: rgba(6, 117, 71);
  height: 2rem;
  border-radius: 4px;
  color: #eee;
  font-weight: 500;
  transition: all 0.3s;
}
.login_card button:hover {
  background-color: rgb(12, 149, 12);
  color: #eee;
  font-weight: 500;
}
</style>
