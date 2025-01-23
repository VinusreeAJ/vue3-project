<template>
  <v-app>
    <div>
        <HeaderComponent />
        <NuxtPage class="mt-5"/>
    </div>
  </v-app>
</template>

<script>
  import HeaderComponent from '~/components/Header.vue';

  export default {
    components: {
      HeaderComponent,
    },
  };
</script>