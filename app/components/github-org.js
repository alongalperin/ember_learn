import Component from "@ember/component";
import isInArray from "github-ui/utils/is-in-array";
import { inject as service } from "@ember/service";

export default Component.extend({
  tagName: "li",
  classNames: ["github-org"],
  favorites: service(),
  isFavorited: isInArray("org", "favorites.items"),
  actions: {
    favoriteWasClicked() {
      this.sendAction("on-fav-clicked", this.get("org"));
    },
  },
});
