<template>
  <div>
    <Drawer
      :hideMobileDrawer="hideMobileDrawer"
      :showMobileDrawerFlag="showMobileDrawerFlag"
    />
    <Header :showMobileDrawer="showMobileDrawer" />
    <div class="products-wrapper">
      <ProductsSection :productsData="ProductsData" />
    </div>
  </div>
</template>

<script>
import Drawer from "../components/Drawer";
import Header from "../components/Header";
import ProductsSection from "../components/ProductsSection";
import ProductsData from "../../assets/data/products.json";

export default {
  data() {
    return {
      ProductsData: ProductsData,
      showMobileDrawerFlag: false
    };
  },
  components: {
    Drawer,
    Header,
    ProductsSection
  },
  methods: {
    showMobileDrawer() {
      this.showMobileDrawerFlag = true;
    },
    hideMobileDrawer() {
      this.showMobileDrawerFlag = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/containers/products.scss";
</style>
