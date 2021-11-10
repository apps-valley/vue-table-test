// Vue.component("todo-item", {
//   props: ["todo"],
//   template: "<li>{{ todo.text }}</li>",
// });

const initialTableData = [
  {
    item_code: "ACC1",
    product: "Apple",
    package: "40 LB",
    available_units: "3,638,066",
    category: "Fruits",
    last_updated: "2021-02-05 08:28:36",
    edit_available_quantity: "3,638,066",
  },
  {
    item_code: "ACC1",
    product: "Pineapple crownless",
    package: "7 CT",
    available_units: "6,464,020",
    category: "Fruits",
    last_updated: "2021-02-05 08:28:36",
    edit_available_quantity: "3,638,066",
  },
  {
    item_code: "ACC1",
    product: "Banana green",
    package: "8 CT",
    available_units: "8,664,948",
    category: "Fruits",
    last_updated: "2021-02-05 08:28:36",
    edit_available_quantity: "3,638,066",
  },
  {
    item_code: "ACC1",
    product: "Banana green tip",
    package: "40 LB",
    available_units: "2,592,335",
    category: "Fruits",
    last_updated: "2021-02-05 08:28:36",
    edit_available_quantity: "3,638,066",
  },
];

const app = new Vue({
  el: "#app",
  data: {
    fields: [
      { key: "item_code" },
      { key: "product", sortable: true },
      { key: "package", sortable: true },
      { key: "available_units", sortable: true },
      { key: "category" },
      { key: "last_updated", sortable: true },
      { key: "edit_available_quantity" },
    ],
    items: initialTableData,
    searchText: "",
    sortIconNeutral:
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='black' opacity='.3' d='M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e",
    sortIconDesc:
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='black' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='black' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e",
    sortIconAsc:
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='black' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='black' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e",
    sortBy: null,
    sortDesc: false,
  },
  watch: {
    searchText(val) {},
  },
});
