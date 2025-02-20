"use strict";
(self.webpackChunkliantportfolio = self.webpackChunkliantportfolio || []).push([
  [678],
  {
    3678: (e, s, i) => {
      i.r(s), i.d(s, {default: () => o});
      i(5043);
      var l = i(3401),
        a = i(7794),
        r = i(2439),
        n = i.n(r),
        c = i(2919),
        t = i(579);
      function o(e) {
        let {prof: s} = e;
        return (
          a.zq ? (s.hireable = "Yes") : (s.hireable = "No"),
          (0, t.jsx)(c.zW, {
            bottom: !0,
            duration: 1e3,
            distance: "20px",
            children: (0, t.jsxs)("div", {
              className: "main",
              id: "contact",
              children: [
                (0, t.jsx)("h1", {
                  className: "prof-title",
                  children: "Connect with me / hire me!"
                }),
                (0, t.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "main-content-profile",
                      children: [
                        (0, t.jsx)("div", {
                          className: "blog-header",
                          children: (0, t.jsx)("p", {
                            className: "subTitle blog-subtitle",
                            children: a.r_.subtitle
                          })
                        }),
                        (0, t.jsxs)("h2", {
                          className: "bio-text",
                          children: ['"', n()(String(s.bio)), '"']
                        }),
                        null !== s.location &&
                          (0, t.jsx)("div", {
                            className: "location-div",
                            children: (0, t.jsxs)("span", {
                              className: "desc-prof",
                              children: [
                                (0, t.jsx)("svg", {
                                  viewBox: "-0.5 -2 20 19",
                                  version: "1.1",
                                  width: "22",
                                  height: "16",
                                  "aria-hidden": "true",
                                  stroke: "currentColor",
                                  children: (0, t.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                                  })
                                }),
                                s.location
                              ]
                            })
                          }),
                        (0, t.jsx)("div", {
                          className: "opp-div",
                          children: (0, t.jsxs)("span", {
                            className: "desc-prof",
                            children: ["Open for opportunities: ", s.hireable]
                          })
                        }),
                        (0, t.jsx)(l.A, {})
                      ]
                    }),
                    (0, t.jsx)("div", {
                      className: "image-content-profile",
                      children: (0, t.jsx)("img", {
                        src: s.avatarUrl,
                        alt: s.name,
                        className: "profile-image"
                      })
                    })
                  ]
                })
              ]
            })
          })
        );
      }
    }
  }
]);
//# sourceMappingURL=678.1f6d12e5.chunk.js.map
