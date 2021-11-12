!(function (e) {
    function t(l) {
        if (n[l]) return n[l].exports;
        var o = (n[l] = { i: l, l: !1, exports: {} });
        return e[l].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var n = {};
    (t.m = e),
        (t.c = n),
        (t.d = function (e, n, l) {
            t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: l });
        }),
        (t.n = function (e) {
            var n =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return t.d(n, "a", n), n;
        }),
        (t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (t.p = ""),
        t((t.s = 0));
})([
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var l = (n(1), n(6));
        n.n(l);
    },
    function (e, t, n) {
        "use strict";
        var l = n(2),
            o = (n.n(l), n(3)),
            r = n.n(o),
            s = n(4),
            a = (n.n(s), n(5)),
            __ = (n.n(a), wp.i18n.__),
            i = wp.blocks.registerBlockType,
            p = wp.element.Fragment,
            d = wp.blockEditor,
            u = d.InnerBlocks,
            c = d.InspectorControls,
            m = (d.BlockControls, wp.components),
            f = m.PanelBody,
            b = m.TextControl,
            w = m.ToggleControl,
            h = m.RangeControl,
            y = (m.BaseControl, m.ToolbarGroup, m.ToolbarButton, m.ToolbarItem, m.SVG, m.Path, ["cb/slide"]),
            v = {
                slides: { type: "number" },
                slidesToShow: { type: "number", default: 3 },
                scrollGroup: { type: "boolean", default: !1 },
                slidesToScroll: { type: "number", default: 1 },
                speed: { type: "number", default: 300 },
                slidePadding: { type: "boolean" },
                arrows: { type: "boolean", default: !0 },
                dots: { type: "boolean", default: !0 },
                fade: { type: "boolean", default: !1 },
					      autoplay: { type: "boolean", default: !1 },
                autoplaySpeed: { type: "number", default: 3e3 },
                infinite: { type: "boolean", default: !1 },
                rtl: { type: "boolean" },
                responsiveWidth: { type: "number", default: 768 },
                responsiveSlides: { type: "number", default: 1 },
            };
        i("cb/carousel", {
            title: __("Carousel Slider"),
            icon: wp.element.createElement(
                "svg",
                { xmlns: "http://www.w3.org/2000/svg" },
                wp.element.createElement("path", { d: "M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z" }),
                wp.element.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
            ),
            category: "media",
            keywords: [__("carousel"), __("slide"), __("slideshow")],
            attributes: v,
            description: __("Display a carousel. Add any blocks to the slides."),
            supports: { align: ["wide", "full"], html: !1, anchor: !0 },
            edit: function (e) {
                var t = e.attributes,
                    n = e.setAttributes,
                    l = e.className,
                    o = (t.slides, t.slidesToShow),
                    s = (t.scrollGroup, t.slidesToScroll),
                    a = t.speed,
                    i = (t.slidePadding, t.arrows),
                    d = t.dots,
                    m = t.infinite,
						        x = t.fade, 
						        v = t.autoplay,
                    g = t.autoplaySpeed,
                    S = t.rtl,
                    E = t.responsiveWidth,
                    T = t.responsiveSlides,
                    k = wp.element.createElement("div", { className: "cb-carousel-placeholder" }, __("Click plus to add slides "));
                return wp.element.createElement(
                    p,
                    null,
                    wp.element.createElement(
                        c,
                        null,
                        wp.element.createElement(
                            f,
                            { title: __("General Settings"), initialOpen: !0 },
                            wp.element.createElement(h, {
                                className: "slides-to-show",
                                label: __("Slides to show"),
                                value: o,
                                onChange: function (e) {
                                    return n({ slidesToShow: e });
                                },
                                min: 1,
                                max: 10,
                            }),
                            wp.element.createElement(b, {
                                type: "number",
                                label: __("Slides to scroll at a time"),
                                value: s,
                                onChange: function (e) {
                                    return n({ slidesToScroll: parseInt(e, 10) });
                                },
                            }),
                            wp.element.createElement(b, {
                                type: "number",
                                label: __("Slide animation speed (ms)"),
                                value: a,
                                onChange: function (e) {
                                    return n({ speed: parseInt(e, 10) });
                                },
                            }),
                            wp.element.createElement(w, {
                                label: __("Prev/Next arrows"),
                                checked: !!i,
                                onChange: function (e) {
                                    return n({ arrows: e });
                                },
                            }),
                            wp.element.createElement(w, {
                                label: __("Dots navigation"),
                                checked: !!d,
                                onChange: function (e) {
                                    return n({ dots: e });
                                },
                            }),
                            wp.element.createElement(w, {
                                label: __("Infinite loop sliding"),
                                checked: !!m,
                                onChange: function (e) {
                                    return n({ infinite: e });
                                },
                            }),
                            wp.element.createElement(w, {
                               label: __("Fade"),
                               checked: !!x,
                               onChange: function (e) {
                                 return n({ fade: e });
                               },
                            }),
                            wp.element.createElement(w, {
                                label: __("Autoplay"),
                                checked: !!v,
                                onChange: function (e) {
                                    return n({ autoplay: e });
                                },
                            }),
                            v &&
                                wp.element.createElement(b, {
                                    type: "number",
                                    label: __("Autoplay speed (ms)"),
                                    value: g,
                                    onChange: function (e) {
                                        return n({ autoplaySpeed: parseInt(e, 10) });
                                    },
                                }),
                            wp.element.createElement(w, {
                                label: __("RTL"),
                                checked: !!S,
                                onChange: function (e) {
                                    return n({ rtl: e });
                                },
                            })
                        ),
                        wp.element.createElement(
                            f,
                            { title: __("Responsive Settings"), initialOpen: !1 },
                            wp.element.createElement(b, {
                                type: "number",
                                label: __("Screen width (px)", "cb"),
                                value: E,
                                onChange: function (e) {
                                    return n({ responsiveWidth: parseInt(e, 10) });
                                },
                            }),
                            wp.element.createElement(h, {
                                label: __("Slides to show", "cb"),
                                value: T,
                                help: __("# of slides to show at given screen width", "cb"),
                                onChange: function (e) {
                                    return n({ responsiveSlides: e });
                                },
                                min: 1,
                                max: 6,
                            })
                        )
                    ),
                    wp.element.createElement("div", { className: r()(l, "cb-shows-" + o + "-slides") }, wp.element.createElement(u, { orientation: "horizontal", allowedBlocks: y, renderAppender: u.ButtonBlockAppender, placeholder: k }))
                );
            },
            save: function (e) {
                var t = e.attributes,
                    n = (t.slides, t.slidesToShow),
                    l = (t.scrollGroup, t.slidesToScroll),
                    o = t.speed,
                    s = (t.slidePadding, t.arrows),
                    a = t.dots,
                    i = t.infinite,
						  x = t.fade, 
						  p = t.autoplay,
                    d = t.autoplaySpeed,
                    c = t.rtl,
                    m = t.responsiveWidth,
                    f = t.responsiveSlides,
                    b = {
                        slidesToShow: n,
                        slidesToScroll: l,
                        speed: o,
                        arrows: s,
                        dots: a,
								        fade: x,
                        autoplay: p,
                        autoplaySpeed: d,
                        infinite: i,
                        rtl: c,
                        responsive: [Object.assign({}, m ? { breakpoint: m + 1 } : { breakpoint: 993 }, { settings: Object.assign({}, f ? { slidesToShow: f } : { slidesToShow: 1 }) })],
                    };
                return wp.element.createElement("div", { className: r()({ "cb-single-slide": 1 == n }), "data-slick": JSON.stringify(b), dir: c ? "rtl" : void 0 }, wp.element.createElement(u.Content, null));
            },
            deprecated: [
                {
                    attributes: {
                        slides: { type: "number", default: 4 },
                        slidesToShow: { type: "number", default: 3 },
                        scrollGroup: { type: "boolean", default: !1 },
                        slidesToScroll: { type: "number", default: 1 },
                        speed: { type: "number", default: 300 },
                        slidePadding: { type: "boolean", default: !0 },
                        arrows: { type: "boolean", default: !0 },
                        dots: { type: "boolean", default: !0 },
                        infinite: { type: "boolean", default: !1 },
                        responsiveWidth: { type: "number", default: 768 },
                        responsiveSlides: { type: "number", default: 1 },
                    },
                    save: function (e) {
                        var t = e.attributes,
                            n = (t.slides, t.slidesToShow),
                            l = (t.scrollGroup, t.slidesToScroll),
                            o = t.speed,
                            s = t.slidePadding,
                            a = t.arrows,
                            i = t.dots,
                            p = t.responsiveWidth,
                            d = t.responsiveSlides,
                            c = {
                                slidesToShow: n,
                                slidesToScroll: l,
                                speed: o,
                                arrows: a,
                                dots: i,
                                infinite: !1,
                                responsive: [Object.assign({}, p ? { breakpoint: p + 1 } : { breakpoint: 993 }, { settings: Object.assign({}, d ? { slidesToShow: d } : { slidesToShow: 1 }) })],
                            };
                        return wp.element.createElement("div", { className: r()({ "cb-single-slide": 1 == n, "cb-padding": s }), "data-slick": JSON.stringify(c) }, wp.element.createElement(u.Content, null));
                    },
                },
            ],
        });
    },
    function (e, t) {
        e.exports = lodash;
    },
    function (e, t, n) {
        var l, o;
        !(function () {
            "use strict";
            function n() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var l = arguments[t];
                    if (l) {
                        var o = typeof l;
                        if ("string" === o || "number" === o) e.push(l);
                        else if (Array.isArray(l)) {
                            if (l.length) {
                                var s = n.apply(null, l);
                                s && e.push(s);
                            }
                        } else if ("object" === o)
                            if (l.toString === Object.prototype.toString) for (var a in l) r.call(l, a) && l[a] && e.push(a);
                            else e.push(l.toString());
                    }
                }
                return e.join(" ");
            }
            var r = {}.hasOwnProperty;
            "undefined" !== typeof e && e.exports
                ? ((n.default = n), (e.exports = n))
                : ((l = []),
                  void 0 !==
                      (o = function () {
                          return n;
                      }.apply(t, l)) && (e.exports = o));
        })();
    },
    function (e, t) {},
    function (e, t) {},
    function (e, t) {
        var __ = wp.i18n.__,
            n = wp.blocks.registerBlockType,
            l = wp.blockEditor.InnerBlocks,
            o = wp.components,
            r = (o.SVG, o.Path, [["core/paragraph"]]);
        n("cb/slide", {
            title: __("Slide"),
            parent: ["cb/carousel-block"],
            icon: wp.element.createElement(
                "svg",
                { xmlns: "http://www.w3.org/2000/svg" },
                " ",
                wp.element.createElement("path", { d: "M 7 19 L 17 19 L 17 4 L 7 4 L 7 19 Z" }),
                " ",
                wp.element.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                " "
            ),
            description: __("A single slide within the carousel."),
            category: "layout",
            supports: { html: !1 },
            edit: function (e) {
                return wp.element.createElement(l, { templateLock: !1, template: r });
            },
            save: function () {
                return wp.element.createElement("div", null, wp.element.createElement(l.Content, null));
            },
        });
    },
]);
