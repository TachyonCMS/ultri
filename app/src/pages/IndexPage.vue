<template>
  <q-page class="row items-center justify-evenly">
<q-card flat class="bg-card-surround justify-center text-center">
 <q-card-section header ><h1 class="q-ma-sm q-ma-sm-md q-ma-md-lg q-ma-lg-xl">Express yourself</h1></q-card-section>
 <q-card-section ><h2 class="q-ma-sm q-ma-sm-md  q-ma-md-lg q-ma-lg-xl">Start sharing today.</h2></q-card-section>
 <q-card-actions class="justify-center" ><q-btn size="lg" class="bg-cta on-cta q-ma-sm q-ma-sm-md q-ma-md-lg q-ma-lg-xl" to="/auth/signup">Create your site</q-btn> </q-card-actions>
</q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
</script>
