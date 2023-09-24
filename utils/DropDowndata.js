const discountLevel = {
  title: "Discount",
  initialHeading: "Special offer",
  dropDownData: [
    "Special offer",
    "from the 1. Rootserver",
    "from the 10. Rootserver",
    "from the 20. Rootserver",
    "from the 30. Rootserver",
    "from the 40. Rootserver",
    "from the 50. Rootserver",
    "from the 60. Rootserver",
    "from the 70. Rootserver",
    "from the 80. Rootserver",
    "from the 90. Rootserver",
    "from the 99. Rootserver",
  ],
};

const contractType = {
  title: "Contract type",
  initialHeading: "Dedicated Server",
  dropDownData: ["Rent Hardware", "Dedicated Server"],
};

const contractDuration = {
  title: "Contract duration",
  initialHeading: "1 month",
  dropDownData: [
    {
      title: "1 month",
      offer: false,
    },
    {
      title: "12 months",
      offer: true,
    },
  ],
};

const paymentMethod = {
  title: "Payment method",
  initialHeading: "Payment method",
  dropDownData: [
    {
      imagePath: "/assets/images/paypal.png",
      title: "Paypal",
    },
    {
      imagePath: "/assets/images/mastercard.png",
      title: "Mastercard",
    },
    {
      imagePath: "/assets/images/klarna.png",
      title: "Klarna",
    },
    {
      imagePath: "/assets/images/sepa.png",
      title: "Debit",
    },
    {
      imagePath: "/assets/images/creditcard.png",
      title: "Creditcard",
    },
    {
      imagePath: "/assets/images/Überweisung.png",
      title: "Bank transfer",
    },
  ],
};

module.exports = {
  discountLevel,
  paymentMethod,
  contractDuration,
  contractType,
};
