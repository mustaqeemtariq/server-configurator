const discountLevel = {
  title: "Rabattstufe",
  initialHeading: "Sonderangebot",
  dropDownData: [
    "Sonderangebot",
    "Ab dem 1. Rootserver",
    "Ab dem 10. Rootserver",
    "Ab dem 20. Rootserver",
    "Ab dem 30. Rootserver",
    "Ab dem 40. Rootserver",
    "Ab dem 50. Rootserver",
    "Ab dem 60. Rootserver",
    "Ab dem 70. Rootserver",
    "Ab dem 80. Rootserver",
    "Ab dem 90. Rootserver",
    "Ab dem 99. Rootserver",
  ],
};

const contractType = {
  title: "Vertragsart",
  initialHeading: "Dedicated Server",
  dropDownData: ["Hardwaremiete", "Dedicated Server"],
};

const contractDuration = {
  title: "Vertragsdauer",
  initialHeading: "1 monat",
  dropDownData: [
    {
      title: "1 monat",
      offer: false,
    },
    {
      title: "12 monat",
      offer: true,
    },
  ],
};

const paymentMethod = {
  title: "Bezahlmethode",
  initialHeading: "Bezahlmethode",
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
      title: "Lastschrift",
    },
    {
      imagePath: "/assets/images/creditcard.png",
      title: "Kreditkarte",
    },
    {
      imagePath: "/assets/images/Überweisung.png",
      title: "Uberweisung",
    },
  ],
};

module.exports = {
  discountLevel,
  paymentMethod,
  contractDuration,
  contractType,
};
