<!-- Please remove this file from your project -->
<template>
  <div>
    <h2>Welcome to Nuxt Js</h2>
    <button @click="logout">Logout</button>
    <button @click="getData">Get Data</button>
    <h3 v-if="fireData">{{ fireData }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fireData: null
    };
  },

  methods: {
    logout() {
      this.$fire.auth
        .signOut()
        .then(() => {
          this.$router.push("/login");
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
