export default function Pagamento() {
  return (
    <>
      <div class="col-lg-6">
        <div class="ltn__checkout-payment-method mt-10">
          <h4 class="title-2">Payment Method</h4>
          <div id="checkout_accordion_1">
            <div class="card">
              <h5
                class="collapsed ltn__card-title"
                data-bs-toggle="collapse"
                data-bs-target="#faq-item-2-1"
                aria-expanded="false"
              >
                Check payments
              </h5>
              <div
                id="faq-item-2-1"
                class="collapse"
                data-parent="#checkout_accordion_1"
              >
                <div class="card-body">
                  <p>
                    Please send a check to Store Name, Store Street, Store Town,
                    Store State / County, Store Postcode.
                  </p>
                </div>
              </div>
            </div>

            <div class="card">
              <h5
                class="ltn__card-title"
                data-bs-toggle="collapse"
                data-bs-target="#faq-item-2-2"
                aria-expanded="true"
              >
                Cash on delivery
              </h5>
              <div
                id="faq-item-2-2"
                class="collapse show"
                data-parent="#checkout_accordion_1"
              >
                <div class="card-body">
                  <p>Pay with cash upon delivery.</p>
                </div>
              </div>
            </div>

            <div class="card">
              <h5
                class="collapsed ltn__card-title"
                data-bs-toggle="collapse"
                data-bs-target="#faq-item-2-3"
                aria-expanded="false"
              >
                PayPal <img src="img/icons/payment-3.png" alt="#" />
              </h5>
              <div
                id="faq-item-2-3"
                class="collapse"
                data-parent="#checkout_accordion_1"
              >
                <div class="card-body">
                  <p>
                    Pay via PayPal; you can pay with your credit card if you
                    don’t have a PayPal account.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="btn theme-btn-1 btn-effect-1 text-uppercase"
            type="submit"
          >
            Place order
          </button>
        </div>
      </div>
    </>
  );
}
