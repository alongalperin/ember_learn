import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  favorites: service(),

  model() {
    return [
      { id: "emberjs" },
      { id: "ember-cli" },
      { id: "microsoft" },
      { id: "yahoo" },
      { id: "netflix" },
      { id: "facebook" },
    ];
  },

  actions: {
    favoriteClicked(org) {
      if (this.get("favorites.items").indexOf(org) < 0) {
        this.get("favorites").favoriteItem(org);
      } else {
        this.get("favorites").unfavoriteItem(org);
      }
    },
  },
});
