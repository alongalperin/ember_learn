import Service from "@ember/service";

export default Service.extend({
  init(...args) {
    this._super(...args);

    this.items = this.items || [];
  },

  favoriteItem(item) {
    this.get("items").addObject(item);
    console.log(
      this.get("items")
        .map((x) => x.id)
        .join(" ")
    );
  },
  unfavoriteItem(item) {
    this.get("items").removeObject(item);
  },
});
