import { moduleForComponent, test } from "ember-qunit";
import { niceNumber } from "../../../app/helpers/nice-number";

moduleForComponent("nice-number", "helper:nice-number", {
  integration: true,
});

// Replace this with your real tests.
test("it works", function (assert) {
  assert.equal(niceNumber([42]), "42", "Anumber < 1000");
  assert.equal(niceNumber([4199]), "4.2k", "Anumber > 1000");
});
