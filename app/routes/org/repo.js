import Route from "@ember/routing/route";
import $ from "jquery";

export default Route.extend({
  model(params) {
    let org = this.modelFor("org");

    return $.get(
      `https://api.github.com/repos/${org.login}/${params.repoid}`
    ).then((rawRepo) => {
      rawRepo.oldId = rawRepo.id;
      rawRepo.id = rawRepo.name;
      return rawRepo;
    });
  },
});
