import Route from "@ember/routing/route";
import { get } from "@ember/object";
import $ from "jquery";

export default Route.extend({
  model() {
    let orgId = get(this.modelFor("org"), "login");
    let repoId = get(this.modelFor("org.repo"), "name");

    return $.get(
      `https://api.github.com/repos/${orgId}/${repoId}/contributors`
    ).then((rawContributors) => {
      return rawContributors.map((rawContributor) => {
        rawContributor.oldId = rawContributor.id;
        rawContributor.id = rawContributor.name;
        return rawContributor;
      });
    });
  },
});
