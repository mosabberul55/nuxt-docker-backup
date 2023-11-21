<template>
  <div class="mt-8 max-width- card flex justify-content-center">
    <Calendar v-model="date" />

   <div class="mt-5">
     <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
     <i class="pi pi-spin pi-cog" style="font-size: 2rem"></i>
     <Button label="Danger" severity="danger" />
   </div>

  </div>
</template>

<script setup>
const date = ref();
</script>
<style scoped lang="scss">
.card {
  max-width: 500px;
  margin: 50px auto 0;
}
</style>