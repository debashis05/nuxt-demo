<!-- Please remove this file from your project -->
<template>
  <div>
    <h2>Welcome to Nuxt Js</h2>
  <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$fire.auth.signOut().then(() => {
        this.$router.push('/login');
      }).catch((e) => {
        console.log(e);
      })
    }
  }
}
</script>

