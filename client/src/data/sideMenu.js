export const sideMenu = [
  {
    title: "Dashboard",
  },
  {
    title: "Staff",
    icon: "KeyboardArrowDownOutlinedIcon",
    childrens: [
      {
        title: "User",
        path: "/user",
      },
      {
        title: "Role",
      },
    ],
  },
  {
    title: "Product & Services",
    path: "/product",
  },
  {
    title: "Product Stock",
    path: "/productstock",
  },
  {
    title: "Customer",
    path: "/customer",
  },
  {
    title: "Vender",
    path: "/vendor",
  },
  {
    title: "Presale",
    icon: "KeyboardArrowDownOutlinedIcon",
    childrens: [
      {
        title: "Proposal",
        path: "/proposal",
      },
      {
        title: "Retainers",
        path: "/retainer",
      },
    ],
  },
  {
    title: "Bank",
    icon: "KeyboardArrowDownOutlinedIcon",
    childrens: [
      {
        title: "Account",
      },
      {
        title: "Transfer",
      },
    ],
  },
  {
    title: "Income",
    icon: "KeyboardArrowDownOutlinedIcon",
    childrens: [
      {
        title: "Invoice",
      },
      {
        title: "Revenue",
      },
      {
        title: "Credit Note",
      },
    ],
  },
  {
    title: "Expense",
    icon: "KeyboardArrowDownOutlinedIcon",
    childrens: [
      {
        title: "Bill",
        path: "/bill",
      },
      {
        title: "Payment",
      },
      {
        title: "Debit Note",
      },
    ],
  },
];
