<template>
  <div
    class="tab-pane fade show active"
    id="nav-indoor"
    role="tabpanel"
    aria-labelledby="nav-home-tab"
  >
    <div class="col-12 table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">NAZWA</th>
            <th scope="col">GROSS</th>
            <th scope="col">NET</th>
            <th scope="col">VAT (32%)</th>
            <th scope="col">STOCK</th>
            <th scope="col">AVAILABILITY</th>
            <th scope="col">SOLD</th>
            <th scope="col">EXPIRE DATE</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in data" :key="index">
            <th scope="row">{{ product.nazwa }}</th>
            <td>{{ product.gross }}</td>
            <td>{{ product.net }}</td>
            <td>{{ product.vat }}</td>
            <td>{{ product.stock }}</td>
            <td>
              <p
                :class="
                  product.sold.percent < 50 ? 'text-danger' : 'text-success'
                "
              >
                {{ product.availability.num }} pcs.
              </p>
              <span>from {{ product.availability.total }} pcs.</span>
            </td>
            <td>
              <p>{{ product.sold.num }} pcs.</p>
              <div class="d-flex">
                <span>{{ product.sold.percent }}%</span>
                <div class="progress progress-bar-wrapper ml-1">
                  <div
                    :class="[
                      'progress-bar',
                      product.sold.percent < 50 ? 'bg-danger' : 'bg-success'
                    ]"
                    role="progressbar"
                    :style="`width: ${product.sold.percent}%`"
                  ></div>
                </div>
              </div>
            </td>
            <td>
              <p>{{ product.expire_date.date }}</p>
              <span>{{ product.expire_date.days }} days</span>
            </td>
            <td class="d-block d-md-flex">
              <button type="button" class="btn btn-primary">
                <font-awesome-icon
                  :icon="['fas', 'pen']"
                  class="form-control-feedback"
                />
              </button>
              <button type="button" class="btn btn-danger ml-md-2">
                <font-awesome-icon
                  :icon="['fas', 'trash']"
                  class="form-control-feedback"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/components/product-table.scss";
</style>
