$(function () {
  $("a.page-scroll").bind("click", function (o) {
    var t = $(this);
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $(t.attr("href")).offset().top },
        1500,
        "easeInOutExpo"
      ),
      o.preventDefault();
  });
}),
  (window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }),
  $("body").scrollspy({ target: ".navbar-fixed-top" }),
  $(".navbar-collapse ul li a").click(function () {
    $(".navbar-toggle:visible").click();
  });
var amountScrolled = 1400;
$(window).scroll(function () {
  $(window).scrollTop() > amountScrolled
    ? $("a.back-to-top").fadeIn("slow")
    : $("a.back-to-top").fadeOut("slow");
}),
  $("a.back-to-top").click(function () {
    return $("html, body").animate({ scrollTop: 0 }, 1200), !1;
  }),
  (function (o, t, a, e, n, l, c) {
    (o.GoogleAnalyticsObject = n),
      (o[n] =
        o[n] ||
        function () {
          (o[n].q = o[n].q || []).push(arguments);
        }),
      (o[n].l = 1 * new Date()),
      (l = t.createElement(a)),
      (c = t.getElementsByTagName(a)[0]),
      (l.async = 1),
      (l.src = e),
      c.parentNode.insertBefore(l, c);
  })(
    window,
    document,
    "script",
    "//www.google-analytics.com/analytics.js",
    "ga"
  ),
  ga("create", "UA-73347756-1", "auto"),
  ga("send", "pageview");
