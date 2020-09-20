import Route from "@ember/routing/route";

export default Route.extend({
  actions: {
    error(jqxhr) {
      if (jqxhr.status === 404) {
        this.intermediateTransitionTo("org.notfound");
      } else {
        return true;
      }
    },
  },
  model(params) {
    return $.get(`https://api.github.com/orgs/${params.id}`)
      .then((rawOrg) => {
        rawOrg.oldId = rawOrg.id;
        rawOrg.id = rawOrg.login;
        return rawOrg;
      })
      .then(function (data) {
        return new Ember.RSVP.Promise((res, rej) => {
          Ember.run.later(() => {
            res(data);
          }, 2000);
        });
      });
  },
});
