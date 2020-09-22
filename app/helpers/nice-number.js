import { helper } from "@ember/component/helper";

export function niceNumber(params) {
  if (!params) {
    return "";
  }
  const [num] = params;
  if (parseInt(num, 10) > 1000) {
    return `${Math.round(num * 0.01) * 0.1}K`;
  } else {
    return `${num}`;
  }
}

export default helper(niceNumber);
