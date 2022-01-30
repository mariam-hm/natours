/* eslint-disable */
import axios from 'axios';

// const stripe = Stripe(
//   'pk_test_51KLSRjLh74scnNXz6BNkjw5pFc40jrKbBDQODMnvZ7sy2iVLdN2fDlp1I0F7A4BqiWMwcJKSfOVb7xczE8Ykiwei00DsB6UODi'
// );

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from server
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`
    );

    // 2) Create checkout form + charge credit card
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id,
    // });
  } catch (err) {
    console.log(err);
  }
};
