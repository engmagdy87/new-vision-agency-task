<template>
  <div>
    <div
      :class="[
        'drawer-wrapper',
        'd-none',
        'd-md-block',
        expandDrawerFlag ? 'drawer-wrapper--expand' : 'drawer-wrapper--shrink'
      ]"
      align="center"
      @mouseover="setExpandDrawerFlag(true)"
      @mouseleave="setExpandDrawerFlag(false)"
    >
      <img
        class="drawer-wrapper__hamburger-icon mt-3 mb-5"
        src="../../assets/images/menu-icon.png"
        align="center"
      />
      <ListItem
        v-for="(item,index) in drawerItemsData"
        :key="index"
        :icon="item.icon"
        :text="item.text"
        :isItemActive="index===0?isItemActive:!isItemActive"
        :isDrawerExpanded="expandDrawerFlag"
      />
      <ListItem
        icon="logout-icon.png"
        text="Logout"
        :isItemActive="!isItemActive"
        :isDrawerExpanded="expandDrawerFlag"
      />
    </div>
    <div
      :class="[
        'drawer-wrapper',
        'd-block',
        'd-md-none',
        showMobileDrawerFlag ? 'drawer-wrapper--show' : 'drawer-wrapper--hide'
      ]"
      align="right"
    >
      <font-awesome-icon
        :icon="['fas', 'times']"
        class="form-control-feedback drawer-wrapper__times-icon mt-3 mb-5 mr-3"
        @click="hideMobileDrawer"
      />
      <ListItem
        v-for="(item,index) in drawerItemsData"
        :key="index"
        :icon="item.icon"
        :text="item.text"
        :isItemActive="index===0?isItemActive:!isItemActive"
        :isDrawerExpanded="expandDrawerFlag"
        :showMobileDrawerFlag="showMobileDrawerFlag"
      />
      <ListItem
        icon="logout-icon.png"
        text="Logout"
        :isItemActive="!isItemActive"
        :isDrawerExpanded="expandDrawerFlag"
        :showMobileDrawerFlag="showMobileDrawerFlag"
      />
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItem";
import drawerItemsData from "../../assets/data/drawer-items.json";

export default {
  data() {
    return {
      drawerItemsData,
      expandDrawerFlag: false,
      isItemActive: true
    };
  },
  props: ["showMobileDrawerFlag", "hideMobileDrawer"],
  methods: {
    setExpandDrawerFlag(payload) {
      this.expandDrawerFlag = payload;
    }
  },
  components: {
    ListItem
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/components/drawer.scss";
</style>
