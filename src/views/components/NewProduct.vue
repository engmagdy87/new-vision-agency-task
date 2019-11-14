<template>
  <div class="modal fade" id="newProductModal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add New Product</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="nazwa">Nazwa</label>
            <input
              type="text"
              :class="['form-control',validation.isNazwaValid===false?'is-invalid':'']"
              placeholder="e.g. Monstera"
              name="nazwa"
              :value="nazwa"
              @keyup="setValue"
              required
            />
            <div class="invalid-feedback">Please provide a valid Nazwa.</div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="gross">Gross</label>
              <input
                type="number"
                :class="['form-control',validation.isGrossValid===false?'is-invalid':'']"
                placeholder="e.g. 40"
                name="gross"
                :value="gross"
                @change="setValue"
                @keyup="setValue"
              />
              <div class="invalid-feedback">Please provide a valid Gross.</div>
            </div>

            <div class="form-group col-md-6">
              <label for="net">Net</label>
              <input
                type="number"
                :class="['form-control',validation.isNetValid===false?'is-invalid':'']"
                name="net"
                :value="net"
                @change="setValue"
                @keyup="setValue"
                placeholder="e.g. 30"
              />
              <div class="invalid-feedback">Please provide a valid Net.</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="vat">Vat</label>
              <input
                type="number"
                :class="['form-control',validation.isVatValid===false?'is-invalid':'']"
                name="vat"
                :value="vat"
                @change="setValue"
                @keyup="setValue"
                placeholder="e.g. 8"
              />
              <div class="invalid-feedback">Please provide a valid Vat.</div>
            </div>
            <div class="form-group col-md-6">
              <label for="stock">Stock</label>
              <input
                type="text"
                :class="['form-control',validation.isStockValid===false?'is-invalid':'']"
                name="stock"
                :value="stock"
                @keyup="setValue"
                placeholder="e.g. A/20"
              />
              <div class="invalid-feedback">Please provide a valid Stock.</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="availability">Availability Items</label>
              <input
                type="number"
                :class="['form-control',validation.isNumValid===false?'is-invalid':'']"
                name="num"
                :value="num"
                @change="setValue"
                @keyup="setValue"
                placeholder="e.g. 50"
              />
              <div class="invalid-feedback">Please provide a valid Availability Items.</div>
            </div>
            <div class="form-group col-md-6">
              <label for="total">Total Items</label>
              <input
                type="number"
                :class="['form-control',validation.isTotalValid===false?'is-invalid':'']"
                name="total"
                :value="total"
                @change="setValue"
                @keyup="setValue"
                placeholder="e.g. 100"
              />
              <div class="invalid-feedback">Please provide a valid Total Items.</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="sold">Sold Items</label>
              <input
                type="number"
                :class="['form-control',validation.isSoldValid===false?'is-invalid':'']"
                name="sold"
                :value="sold"
                @change="setValue"
                @keyup="setValue"
                placeholder="e.g. 20"
              />
              <div class="invalid-feedback">Please provide a valid Sold Items.</div>
            </div>
            <div class="form-group col-md-6">
              <label for="percent">Percentage</label>
              <input
                type="number"
                :class="['form-control',validation.isPercentValid===false?'is-invalid':'']"
                name="percent"
                :value="percent"
                @change="setValue"
                @keyup="setValue"
                placeholder="e.g. 20"
              />
              <div class="invalid-feedback">Please provide a valid Percentage.</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="expire_date">Expire Date</label>
              <input
                type="date"
                :class="['form-control',validation.isDateValid===false?'is-invalid':'']"
                name="date"
                :value="date"
                @change="setValue"
                @keyup="setValue"
                placeholder="e.g. 22-09-2019"
              />
              <div class="invalid-feedback">Please provide a valid Expire Date.</div>
            </div>
            <div class="form-group col-md-6">
              <label for="total">Days</label>
              <input
                type="number"
                :class="['form-control',validation.isDaysValid===false?'is-invalid':'']"
                name="days"
                :value="days"
                @change="setValue"
                @keyup="setValue"
                placeholder="e.g. 30"
              />
              <div class="invalid-feedback">Please provide a valid Days.</div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="clearProductData"
          >Cancel</button>
          <button
            type="button"
            class="btn btn-primary"
            data-dismiss="modal"
            @click="sendProductData"
            :disabled="
                !(this.validation.isNazwaValid &&
                this.validation.isGrossValid &&
                this.validation.isNetValid &&
                this.validation.isVatValid &&
                this.validation.isStockValid &&
                this.validation.isNumValid &&
                this.validation.isTotalValid &&
                this.validation.isSoldValid &&
                this.validation.isPercentValid &&
                this.validation.isDateValid &&
                this.validation.isDaysValid)
            "
          >Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nazwa: null,
      gross: null,
      net: null,
      vat: null,
      stock: null,
      num: null,
      total: null,
      sold: null,
      percent: null,
      date: null,
      days: null,
      validation: {
        isNazwaValid: null,
        isGrossValid: null,
        isNetValid: null,
        isVatValid: null,
        isStockValid: null,
        isNumValid: null,
        isTotalValid: null,
        isSoldValid: null,
        isPercentValid: null,
        isDateValid: null,
        isDaysValid: null
      }
    };
  },
  props: ["addNewProduct"],
  methods: {
    setValue(e) {
      this[e.target.name] = e.target.value;

      if (e.target.value !== "") {
        if (
          (e.target.type === "number" && e.target.value >= 0) ||
          (e.target.type === "text" || e.target.type === "date")
        ) {
          const nameCapitalized =
            e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1);
          this.validation[`is${nameCapitalized}Valid`] = true;
        } else {
          const nameCapitalized =
            e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1);
          this.validation[`is${nameCapitalized}Valid`] = false;
        }
      } else {
        const nameCapitalized =
          e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1);
        this.validation[`is${nameCapitalized}Valid`] = false;
      }
    },
    sendProductData() {
      this.addNewProduct({
        nazwa: this.nazwa,
        gross: this.gross,
        net: this.net,
        vat: this.vat,
        stock: this.stock,
        availability: {
          num: this.num,
          total: this.total
        },
        sold: {
          num: this.sold,
          percent: this.percent
        },
        expire_date: {
          date: this.date,
          days: this.days
        }
      });
      this.clearProductData();

      document.getElementById("newProductModal").click();
    },
    clearProductData() {
      this.nazwa = null;
      this.gross = null;
      this.net = null;
      this.vat = null;
      this.stock = null;
      this.num = null;
      this.total = null;
      this.sold = null;
      this.percent = null;
      this.date = null;
      this.days = null;
    }
  }
};
</script>
