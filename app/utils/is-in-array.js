import { computed } from "@ember/object";

export default function isInArray(itemKey, listKey) {
  return computed(itemKey, `${listKey}.[]`, function () {
    const item = this.get(itemKey);
    const list = this.get(listKey);

    return list.indexOf(item) >= 0;
  });
}
