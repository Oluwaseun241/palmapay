interface Transaction {
  name: string;
  type: string;
  amount: string;
  time: string;
  icon: any;
}

interface Account {
  bank: string;
  balance: string;
  accountNumber: string;
  currency: string;
  cardColor: string;
  logo: any;
  transactions: Transaction[];
}

export const accountData: Record<string, Account> = {
  NGN: {
    bank: "Gtbank",
    balance: "₦442,053.53",
    accountNumber: "0122960650",
    currency: "NG Naira",
    cardColor: "bg-yellow-400",
    logo: require("@/assets/icons/gtbank.png"),
    transactions: [
      {
        name: "Filmore House",
        type: "Cinema",
        amount: "- 5,043.00 NGN",
        time: "19:01.23",
        icon: require("@/assets/icons/cinema.png"),
      },
    ],
  },
  USD: {
    bank: "Citi",
    balance: "$8203",
    accountNumber: "0122960650",
    currency: "USD",
    cardColor: "bg-yellow-400",
    logo: require("@/assets/icons/citi.png"),
    transactions: [
      {
        name: "Creative Cloud",
        type: "Software system",
        amount: "- 34.00 USD",
        time: "21.02.21",
        icon: require("@/assets/icons/adobe.png"),
      },
    ],
  },
};
