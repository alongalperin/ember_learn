import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("github-org", "Integration | Component | github org", {
  integration: true,
});

test("it renders", function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{github-org}}`);

  assert.equal(
    this.$().text().trim(),
    `[
  Favorite
  ]`,
    "Inline syntax basic rendering"
  );

  // Template block usage:
  this.render(hbs`
    {{#github-org}}
      template block text
    {{/github-org}}
  `);

  assert.equal(
    this.$().text().trim(),
    `[
  Favorite
  ]`,
    "Block syntax basic rendering"
  );
});

test("biding update data", function (assert) {
  // assert.expect(2);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  const org = Ember.Object.create({
    id: "my-org",
  });
  this.set("o", org);
  this.render(hbs`{{github-org org=o on-fav-clicked=on-fav-clicked}}`);

  assert.equal(
    Ember.$(".github-org a").text(),
    "my-org",
    "check if biding update data"
  );

  let actionCount = 0;
  this.set("on-fav-clicked", function () {
    actionCount++;
  });

  Ember.$(".github-org span").click();
  assert.equal(actionCount, 1, "Action was fired once");
});
