import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
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
});
