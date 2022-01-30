/* eslint-disable */
import axios from 'axios';

// const stripe = Stripe(
//   'pk_test_51KLSRjLh74scnNXz6BNkjw5pFc40jrKbBDQODMnvZ7sy2iVLdN2fDlp1I0F7A4BqiWMwcJKSfOVb7xczE8Ykiwei00DsB6UODi'
// );

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from server
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + charge credit card
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id,
    // });
  } catch (err) {
    console.log(err);
  }
};
