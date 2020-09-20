import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    let orgId = Ember.get(this.modelFor("org"), "login");
    let repoId = Ember.get(this.modelFor("org.repo"), "name");

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
