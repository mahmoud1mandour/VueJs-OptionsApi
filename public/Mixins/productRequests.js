import axios from "axios";

export default {
  data() {
    return {
      id: "",
      products: [],
      product: {},
      title: "",
      description: "",
      price: "",
      category: "",
      stock: "",
    };
  },
  methods: {
    getAllProducts() {
      axios
        .get("http://localhost:3000/products")
        .then((p) => (this.products = p.data))
        .catch((err) => console.log(err));
    },
    getProductID() {
      this.id = this.$route.params.id;
    },
    getAProduct() {
      axios
        .get(`http://localhost:3000/products/${this.id}`)
        .then((p) => {
          this.product = p.data;
          this.title = p.data.title;
          this.price = p.data.price;
          this.category = p.data.category;
          this.description = p.data.description;
          this.stock = p.data.stock;
        })
        .catch((err) => console.log(err));
    },
    deleteOneProduct(id) {
      axios
        .delete(`http://localhost:3000/products/${id}`)
        .then(() => this.getAllProducts())
        .catch((err) => console.log(err));
    },
    addOneProduct() {
      axios
        .post(`http://localhost:3000/products`, {
          title: this.title,
          description: this.description,
          price: this.price,
          stock: this.stock,
          category: this.category,
        })
        .then(() => this.$router.push(`/products`))
        .catch((err) => console.log(err));
    },
    editOneProduct() {
      axios
        .put(`http://localhost:3000/products/${this.id}`, {
          title: this.title,
          description: this.description,
          price: this.price,
          stock: this.stock,
          category: this.category,
        })
        .then(() => this.$router.push(`/products`))
        .catch((err) => console.log(err));
    },
  },
};
