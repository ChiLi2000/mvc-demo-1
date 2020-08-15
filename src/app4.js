import "./app4.css";
import $ from "jquery";

const $square = $("#square");
$square.on("click", () => {
  $square.toggleClass("change");
});
