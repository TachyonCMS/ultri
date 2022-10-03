<template>
  <q-page class="row items-center justify-evenly">
    <q-card flat class="bg-card-surround justify-center text-center">
      <q-card-section header
        ><h1 class="q-ma-sm q-ma-sm-md q-ma-md-lg q-ma-lg-xl">
          Express yourself
        </h1></q-card-section
      >
      <template v-if="!userStore.isSignedIn()">
         <q-card-actions class="justify-center"
          ><q-btn
            size="xl"
            class="
              text-weight-bold
              bg-cta
              on-cta
              q-ma-sm q-ma-sm-md q-ma-md-lg q-ma-lg-xl
            "
            to="/auth/signup"
            >Create your site</q-btn
          >
        </q-card-actions>

        <q-card-section
          ><h2 class="q-ma-sm q-ma-sm-md q-ma-md-lg q-ma-lg-xl">
            Start sharing today
          </h2></q-card-section
        >

      </template>
      <template v-else>
        <q-card-section
          ><h2 class="q-ma-sm q-ma-sm-md q-ma-md-lg q-ma-lg-xl">
            coming soon...
          </h2></q-card-section
        >
        </template>
    </q-card>
  </q-page>
</template>

<script setup>
// USER Store - info about the auth user
import { useUserStore } from "../stores/user";
const userStore = useUserStore();
</script>
