export const accountData = {
  NGN: {
    bank: "Gtbank",
    balance: "₦442,053.53",
    accountNumber: "0122960650",
    currency: "NG Naira",
    cardColor: "bg-yellow-400",
    logo: require("@/assets/icons/gtbank.svg"),
    transactions: [
      {
        name: "Filmore House",
        type: "Cinema",
        amount: "- 5,043.00 NGN",
        time: "19:01.23",
        icon: require("@/assets/icons/cinema.svg"),
      },
    ],
  },
  USD: {
    bank: "Citi",
    balance: "$8203",
    accountNumber: "0122960650",
    currency: "USD",
    cardColor: "bg-yellow-400",
    logo: require("@/assets/icons/citi.svg"),
    transactions: [
      {
        name: "Creative Cloud",
        type: "Software system",
        amount: "- 34.00 USD",
        time: "21.02.21",
        icon: require("@/assets/icons/adobe.svg"),
      },
    ],
  },
};
