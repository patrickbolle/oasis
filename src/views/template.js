"use strict";

const {
  a,
  body,
  head,
  html,
  li,
  link,
  main,
  meta,
  nav,
  title,
  ul
} = require("hyperaxe");

const doctypeString = "<!DOCTYPE html>";

const toAttributes = obj =>
  Object.entries(obj)
    .map(([key, val]) => `${key}=${val}`)
    .join(", ");

module.exports = (...elements) => {
  const nodes = html(
    { lang: "en" },
    head(
      title("Oasis"),
      link({ rel: "stylesheet", href: "/theme.css" }),
      link({ rel: "stylesheet", href: "/assets/style.css" }),
      link({ rel: "stylesheet", href: "/assets/highlight.css" }),
      link({ rel: "icon", type: "image/svg+xml", href: "/assets/favicon.svg" }),
      meta({ charset: "utf-8" }),
      meta({
        name: "description",
        content: "friendly neighborhood scuttlebutt interface"
      }),
      meta({
        name: "viewport",
        content: toAttributes({ width: "device-width", "initial-scale": 1 })
      })
    ),
    body(
      nav(
        ul(
          li(a({ href: "/" }, "📣\xa0Popular")),
          li(a({ href: "/public/latest" }, "🐇\xa0Latest")),
          li(a({ href: "/public/latest/following" }, "👭\xa0Following")),
          li(a({ href: "/profile" }, "🐱\xa0Profile")),
          li(a({ href: "/mentions" }, "💬\xa0Mentions")),
          li(a({ href: "/inbox" }, "✉️\xa0Private")),
          li(a({ href: "/search" }, "🔍\xa0Search")),
          li(a({ href: "/meta" }, "⚙\xa0Settings"))
        )
      ),
      main({ id: "content" }, elements)
    )
  );

  const result = doctypeString + nodes.outerHTML;

  return result;
};
