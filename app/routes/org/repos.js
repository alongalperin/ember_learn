import Route from "@ember/routing/route";
import { get } from "@ember/object";
import $ from "jquery";

export default Route.extend({
  model() {
    let orgId = get(this.modelFor("org"), "id");
    return $.get(`https://api.github.com/orgs/${orgId}/repos`).then(
      (rawRepos) => {
        return rawRepos.map((rawRepo) => {
          rawRepo.oldId = rawRepo.id;
          rawRepo.id = rawRepo.name;
          return rawRepo;
        });
      }
    );
  },
});
