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
      asyncFireData: ""
    };
  },
  async asyncData({ app }) {
    try {
      const usersRef = app.$fire.firestore.collection("SERVER_DATA");
    const users = await usersRef.get();
    users.forEach(doc => {
      console.log(doc.data())
      return {
        asyncFireData : doc.data().NAME
      }
    });
    } catch (error) {
      console.log(error)
    }
  }
};
</script>
