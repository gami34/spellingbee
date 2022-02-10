export const flutterwaveConfigGenerator = (amount, customerInfo) => {
  return {
    public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLICKEY,
    tx_ref: Date.now().toString(),
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: customerInfo,
    customizations: {
      title: "Spelling Bee",
      description: "Payment for your students",
      logo: "https://res.cloudinary.com/givesolutions/image/upload/v1644341075/spellingbee/photo1643823862_b8lwym.jpg",
    },
  };
};
