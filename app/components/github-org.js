import Component from "@ember/component";

export default Component.extend({
  tagName: "li",
  actions: {
    favoriteWasClicked() {
      this.sendAction("on-fav-clicked", this.get("org"));
    },
  },
});
