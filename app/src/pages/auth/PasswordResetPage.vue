<template>
  <q-page padding class="auth bg-card-surround">
    <AuthComponent view="passwdReset"></AuthComponent>
  </q-page>
</template>

<script setup>
import { computed } from "vue";
import AuthComponent from "../../components/AuthComponent.vue";
</script>

<style scoped>
.auth {
  margin: 0 auto;
  min-width: 300px;
  max-width: 500px;
}
</style>
