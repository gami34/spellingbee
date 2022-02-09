export const flutterwaveConfigGerator = (amount, customerInfo) => {
  return {
    public_key: "FLWPUBK_TEST-5041a251166387d91421fca6ecb53820-X",
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
