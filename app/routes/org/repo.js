import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    let org = this.modelFor("org");

    return $.get(
      `https://api.github.com/repos/${org.id}/${params.repoid}`
    ).then((rawRepo) => {
      rawRepo.oldId = rawRepo.id;
      rawRepo.id = rawRepo.name;
      return rawRepo;
    });
  },
});
