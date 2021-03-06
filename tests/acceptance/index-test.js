import { module, test } from "qunit";
import startApp from "github-ui/tests/helpers/start-app";
import Pretender from "pretender";
import { run } from "@ember/runloop";
import $ from "jquery";

function json(obj, status = 200) {
  return [status, { "Content-Type": "text/json" }, JSON.stringify(obj)];
}

let server;

module("Acceptance | index", {
  beforeEach: function () {
    this.application = startApp();
    server = new Pretender(function () {
      this.get("https://api.github.com/orgs/:id", () =>
        json({
          id: 99,
          login: "emberjs",
          name: "Ember.js",
        })
      );

      this.get("https://api.github.com/orgs/:id/:repoid", () =>
        json([
          {
            id: 123,
            name: "data",
          },
        ])
      );

      this.get("https://api.github.com/repos/:id/:repoid", () =>
        json({
          id: 123,
          name: "data",
        })
      );

      this.get("https://api.github.com/repos/:id/:repoid/issues", () =>
        json([
          { id: 1, title: "Issue 1" },
          { id: 2, title: "Issue 2" },
        ])
      );

      this.get("https://api.github.com/repos/:id/:repoid/contributors", () =>
        json([
          { id: 1, login: "contributor1" },
          { id: 2, login: "contributor2" },
        ])
      );
    });
  },

  afterEach: function () {
    server.shutdown();
    run(this.application, "destroy");
  },
});

test("visiting /index", function (assert) {
  visit("/");

  andThen(function () {
    assert.equal(currentRouteName(), "orgs", "at orgs route");
  });

  click('a[href*="org/emberjs"]');

  andThen(() => {
    assert.equal(currentURL(), "/org/emberjs/repos", "at ember org route");
  });

  click('a[href*="org/emberjs/data"]');

  andThen(() => {
    assert.equal(
      currentURL(),
      "/org/emberjs/data/issues",
      "at data repo issues section"
    );
    assert.ok($(".issues li").length > 0, "Some issues");
  });

  click('a[href*="org/emberjs/data/contributors');
  andThen(() => {
    assert.equal(
      currentURL(),
      "/org/emberjs/data/contributors",
      "at data repo contributors section"
    );
    assert.ok($(".contributors li").length > 0, "Some contributors");
  });
});
