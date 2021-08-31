<template>
  <div>
    <Tutorial />
    <h3>{{ asyncFireData }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      asyncFireData: null
    };
  },
  async asyncData({ app }) {
    console.log("RAN");
    const usersRef = app.$fire.firestore.collection("SERVER_DATA");
    const users = await usersRef.get();
    users.forEach(doc => {
      this.asyncFireData = doc.data();
    });
  }
};
</script>
