<template>
  <div
    :class="['d-flex list-item-wrapper align-items-center mb-3', isItemActive&&isDrawerExpanded||isItemActive&&showMobileDrawerFlag?'list-item-wrapper--active':'',text=='Logout'?'list-item-wrapper__logout':'']"
  >
    <img
      :src="require(`../../assets/images/${icon}`)"
      :alt="text"
      :class="['list-item-wrapper__img ml-3 p-2', isItemActive?'list-item-wrapper__active-icon':'']"
    />
    <span
      :class="['list-item-wrapper__text','ml-5','w-25',isItemActive?'list-item-wrapper__active-text':'']"
    >{{text}}</span>
  </div>
</template>

<script>
export default {
  props: [
    "icon",
    "text",
    "isItemActive",
    "isDrawerExpanded",
    "showMobileDrawerFlag"
  ]
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/components/list-item.scss";
</style>