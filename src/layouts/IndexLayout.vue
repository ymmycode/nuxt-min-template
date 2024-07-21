<template>
  <main>
    <NuxtLoadingIndicator :color="'#F7941E'" :height="4" />
    <NuxtPage/>
  </main>
</template>

<script setup>
useHead({
  script: [
    {
      key: 'prevent-script',
      children: `
          window.addEventListener("nuxt-booster:run", function (e) {
            if (!e.detail.sufficient) {
              // added style class to display the content
              document.querySelector('.stage')?.classList.add('visible')
            }
          });
        `,
    },
  ],
});
</script>

<style lang="scss" scoped>

</style>