<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="mr-auto d-md-none" @click="showMobileDrawer">
      <font-awesome-icon :icon="['fas', 'bars']" class="form-control-feedback" />
    </div>

    <a class="ml-auto" href="#">
      <img src="../../assets/images/logo.png" alt="plant logo" />
    </a>

    <div class="ml-auto">
      <font-awesome-icon :icon="['fas', 'bell']" class="form-control-feedback" />
      <font-awesome-icon :icon="['fas', 'user']" class="form-control-feedback ml-3" />
      <font-awesome-icon :icon="['fas', 'ellipsis-v']" class="form-control-feedback ml-3" />
    </div>
  </nav>
</template>

<script>
export default {
  props: ["showMobileDrawer"]
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/components/header.scss";
</style>
