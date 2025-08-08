import { TGenericObject } from "../types";

export const NAV_LINKS: Array<TGenericObject> = [
  { label: "Dashboard" },
  { label: "Transactions" },
  { label: "Reports" },
  { label: "Settings" },
];

export const AVATAR_GROUP: Array<TGenericObject> = [
  { src: "user1.png", alt: "User 1" },
  { src: "user2.png", alt: "User 2" },
  { src: "user3.png", alt: "User 3" },
  { src: "user4.png", alt: "User 4" },
];

export const DashboardSummary = [
  {
    title: "Total Balance",
    amount: 12345,
    percentage: "+5",
  },

  { title: "Total Credits", amount: 7890, percentage: "+3" },
  { title: "Total Debits", amount: 4455, percentage: "-2" },
  { title: "Transaction Count", amount: 150, percentage: "+10" },
  // { title: "Balance Change", amount: 250, percentage: 0.5 },
  // { title: "Credits Change", amount: 100, percentage: 0.3 },
  // { title: "Debits Change", amount: 50, percentage: 0.2 },
  // { title: "Transaction Change", amount: 10, percentage: 0.1 },
];
