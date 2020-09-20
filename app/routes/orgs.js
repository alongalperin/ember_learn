import Route from "@ember/routing/route";

export default Route.extend({
  favorites: Ember.inject.service(),

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
    favoritesClicked(org) {
      this.get("favorites").favoriteItem(org);
    },
  },
});
