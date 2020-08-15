import "./app2.css";
import $ from "jquery";

const $nav = $("#app2 #nav");
const $content = $("#app2 #content");
// 事件代理
$nav.on("click", "li", (e) => {
  const $li = $(e.currentTarget);
  $li.addClass("active").siblings().removeClass("active");
  //   排行第几
  const index = $li.index();
  const $target = $($content.children()[index]);
  $target.addClass("active").siblings().removeClass("active");
});

// 默认为第一个
$nav.children().eq(0).trigger("click");
