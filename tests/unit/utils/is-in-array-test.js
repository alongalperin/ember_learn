import isInArray from "github-ui/utils/is-in-array";
import { module, test } from "qunit";

module("Unit | Utility | is in array");

// Replace this with your real tests.
test("it works", function (assert) {
  const Type = Ember.Object.extend({
    item: 5,
    list: [1, 2, 3],
    isItemInList: isInArray("item", "list"),
  });

  const obj = Type.create();

  assert.equal(obj.get("isItemInList"), false, "Intial check for not-in-list");

  obj.get("list").addObject(5);

  assert.equal(obj.get("isItemInList"), true, "check for is-in-list");

  obj.set("item", 52);

  assert.equal(
    obj.get("isItemInList"),
    false,
    "After changing the item, is not in the list anymore"
  );
});
