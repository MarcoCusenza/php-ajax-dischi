const app = new Vue({
  el: "#app",
  data: {
    albums: []
  },
  created() {
    axios.get("http://localhost:8888/php-ajax-dischi/backend.php")
      .then((response) => {
        console.log(response.data);
        this.albums = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
});