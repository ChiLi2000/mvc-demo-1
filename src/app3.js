import "./app3.css";
import $ from "jquery";

const $circular = $("#circular");
$circular.on("click", () => {
  $circular.addClass("change");
});
