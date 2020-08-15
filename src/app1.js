import "./app1.css";
import $ from "jquery";

const $add = $("#add");
const $minus = $("#minus");
const $multiply = $("#multiply");
const $division = $("#division");
const $content = $("#content");
const n = localStorage.getItem("n");
$content.text(n || 100);

$add.on("click", () => {
  let n = parseInt($content.text());
  n += 2;
  localStorage.setItem("n", n);
  $content.text(n);
});
$minus.on("click", () => {
  let n = parseInt($content.text());
  n -= 2;
  localStorage.setItem("n", n);
  $content.text(n);
});
$multiply.on("click", () => {
  let n = parseInt($content.text());
  n *= 2;
  localStorage.setItem("n", n);
  $content.text(n);
});
$division.on("click", () => {
  let n = parseInt($content.text());
  n /= 2;
  localStorage.setItem("n", n);
  $content.text(n);
});
