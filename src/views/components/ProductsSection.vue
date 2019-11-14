<template>
  <div class="product-section-wrapper my-5 mx-auto">
    <div class="row p-4">
      <div class="col-12 col-md-4 d-flex justify-content-center">
        <h2>List of Products</h2>
      </div>
      <div class="col-12 col-md-4 offset-md-4 d-flex justify-content-center justify-content-md-end">
        <button
          type="button"
          class="btn btn-lg product-section-wrapper__new-product-btn"
          data-toggle="modal"
          data-target="#newProductModal"
        >Add new product</button>
      </div>
    </div>

    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a
          class="nav-item nav-link active"
          id="nav-indoor-tab"
          data-toggle="tab"
          href="#nav-indoor"
          role="tab"
          aria-controls="nav-indoor"
          aria-selected="true"
        >Indoor Plant</a>
        <a
          class="nav-item nav-link"
          id="nav-outside-tab"
          data-toggle="tab"
          href="#nav-outside"
          role="tab"
          aria-controls="nav-outside"
          aria-selected="false"
        >Outside Plant</a>
        <a
          class="nav-item nav-link"
          id="nav-flower-tab"
          data-toggle="tab"
          href="#nav-flower"
          role="tab"
          aria-controls="nav-flower"
          aria-selected="false"
        >Flower Pots</a>
        <a
          class="nav-item nav-link"
          id="nav-soil-tab"
          data-toggle="tab"
          href="#nav-soil"
          role="tab"
          aria-controls="nav-soil"
          aria-selected="false"
        >Fertilizers and Soil</a>
      </div>
      <div class="row p-4">
        <div class="col-12 col-md-4 d-flex mb-2">
          <div class="w-100 has-search">
            <font-awesome-icon :icon="['fas', 'search']" class="form-control-feedback" />
            <input
              type="text"
              class="form-control"
              placeholder="Search a product"
              @keyup="getSearchText"
            />
          </div>
        </div>
        <div class="col-12 col-md-4 d-flex text-center mb-2 product-section-wrapper__filter-sort">
          <span v-if="filterByText" class="mr-2">
            Filter by:
            <span class="font-weight-bold">{{filterByText}}</span>
          </span>
          <span v-if="filterByText&&sortedByText">-</span>
          <span v-if="sortedByText" class="ml-2">
            Sort by:
            <span class="font-weight-bold">{{sortedByText}}</span>
          </span>
        </div>
        <div class="col-12 col-md-4 mb-2 d-flex justify-content-md-end justify-content-center">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-light dropdown-toggle btn-sm"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Filter by</button>
            <div class="dropdown-menu" @click="getFilterByItem">
              <a class="dropdown-item" href="#">Nazwa</a>
              <a class="dropdown-item" href="#">Stock</a>
            </div>
          </div>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-light dropdown-toggle btn-sm ml-2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Sort by</button>
            <div class="dropdown-menu" @click="getSortByItem">
              <a class="dropdown-item" href="#">Gross</a>
              <a class="dropdown-item" href="#">Net</a>
              <a class="dropdown-item" href="#">VAT</a>
              <a class="dropdown-item" href="#">Availability</a>
              <a class="dropdown-item" href="#">Sold</a>
            </div>
          </div>
          <div class="btn-group">
            <button type="button" class="btn btn-light btn-sm ml-2" @click="toggleOrder">
              <font-awesome-icon
                :icon="['fas', 'sort-amount-down']"
                class="form-control-feedback"
                size="lg"
                v-if="order === 'desc'"
              />
              <font-awesome-icon
                :icon="['fas', 'sort-amount-up']"
                class="form-control-feedback"
                size="lg"
                v-else
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <ProductTable :data="filteredProductsData" />
      <div class="tab-pane fade" id="nav-outside" role="tabpanel" aria-labelledby="nav-profile-tab">
        <h3 class="p-4">Outside Plant</h3>
      </div>
      <div class="tab-pane fade" id="nav-flower" role="tabpanel" aria-labelledby="nav-contact-tab">
        <h3 class="p-4">Flower Pots</h3>
      </div>
      <div class="tab-pane fade" id="nav-soil" role="tabpanel" aria-labelledby="nav-contact-tab">
        <h3 class="p-4">Fertilizers and Soil</h3>
      </div>
    </div>
    <NewProduct :addNewProduct="addNewProduct" />
  </div>
</template>

<script>
import ProductTable from "./ProductsTable";
import NewProduct from "./NewProduct";
import sortArrayOfObjects from "../../helpers/ArraysHelper";

export default {
  data() {
    return {
      filteredProductsData: this.productsData,
      filterByText: null,
      sortedByText: null,
      searchText: "",
      order: "desc"
    };
  },
  props: ["productsData"],
  methods: {
    getSearchText(e) {
      this.searchText = e.target.value;
      if (this.searchText === "") this.filteredProductsData = this.productsData;
      else this.searchInData();
    },
    getFilterByItem(e) {
      this.filterByText = e.target.innerText;
      this.searchInData();
    },
    getSortByItem(e) {
      this.sortedByText = e.target.innerText;
      this.searchInData();
    },
    toggleOrder() {
      this.order = this.order === "desc" ? "asc" : "desc";
      this.searchInData();
    },
    searchInData() {
      if (this.filterByText === null) this.filterByText = "Nazwa";
      const filteredArray = this.productsData.filter(product =>
        product[this.filterByText.toLowerCase()]
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      );

      const sortedArray = filteredArray.sort((a, b) =>
        sortArrayOfObjects(
          a,
          b,
          this.sortedByText === null ? "Gross" : this.sortedByText,
          this.getProperSortField(this.sortedByText),
          this.order
        )
      );
      this.filteredProductsData = sortedArray;
    },
    addNewProduct(newProduct) {
      this.productsData.push(newProduct);
    },
    getProperSortField(sortedByText) {
      if (sortedByText === "Availability" || sortedByText === "Sold")
        return "num";
      if (sortedByText === "Expire Date") return "date";
      return null;
    }
  },
  components: {
    ProductTable,
    NewProduct
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/components/product-section.scss";
</style>
