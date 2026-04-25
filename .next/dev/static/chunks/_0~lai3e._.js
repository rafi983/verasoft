(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/site/SiteGlobalStyles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteGlobalStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
"use client";
;
;
const GlobalTemplateStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGlobalStyle"]`
  .xl-text {
    font-size: 65px;
  }

  .header {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("/images/header-background.jpg") left center no-repeat;
    background-size: cover;
    height: 600px;
  }

  .vertical-decoration {
    top: 12%;
    width: 24px;
  }

  .hr-heading {
    display: inline-block;
    width: 3.5rem;
    height: 0.125rem;
    margin-top: 0.625rem;
    border: none;
    background-color: var(--bs-primary);
    opacity: 1;
  }

  .navbar {
    transition: all 0.5s ease-in-out;
  }

  .navbar-sticky {
    opacity: 0.8;
  }

  .details .vertical-decoration {
    top: 0;
    left: 0;
    width: 24px;
  }

  .details-2 .vertical-decoration {
    top: 5%;
    right: 0;
    width: 24px;
  }

  .video-play-button {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 32px;
    height: 44px;
    border-radius: 50%;
    display: block;
    box-sizing: content-box;
    padding: 1.125rem 1.25rem 1.125rem 1.75rem;
    cursor: pointer;
  }

  .video-play-button:before {
    content: "";
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 76px;
    height: 76px;
    border-radius: 50%;
    display: block;
    background: var(--bs-primary);
    cursor: pointer;
    animation: pulse-border 1500ms ease-in-out infinite;
  }

  .video-play-button:after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: block;
    background: var(--bs-primary);
    cursor: pointer;
    transition: all 200ms;
  }

  .video-play-button span {
    position: relative;
    display: block;
    z-index: 3;
    top: 6px;
    left: 4px;
    width: 0;
    height: 0;
    border-left: 26px solid #fff;
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
  }

  @keyframes pulse-border {
    0% {
      transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
      opacity: 0;
    }
  }

  .video-modal .modal-dialog {
    max-width: 1150px;
    margin-top: 20px;
  }

  .project-modals .modal-dialog {
    max-width: 1150px;
    margin-top: 130px;
  }

  @media (max-width: 992px) {
    .xl-text {
      font-size: 50px;
    }

    .header {
      text-align: center;
      background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url("/images/header-background.jpg") center center no-repeat;
    }

    .video-points {
      padding: 0 !important;
      text-align: center;
    }

    .video-points .col-lg-4 {
      margin-bottom: 20px;
    }
  }
`;
_c = GlobalTemplateStyles;
function SiteGlobalStyles() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobalTemplateStyles, {}, void 0, false, {
        fileName: "[project]/components/site/SiteGlobalStyles.tsx",
        lineNumber: 154,
        columnNumber: 10
    }, this);
}
_c1 = SiteGlobalStyles;
var _c, _c1;
__turbopack_context__.k.register(_c, "GlobalTemplateStyles");
__turbopack_context__.k.register(_c1, "SiteGlobalStyles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/StyledComponentsRegistry.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StyledComponentsRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function StyledComponentsRegistry({ children }) {
    _s();
    const [styledComponentsStyleSheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "StyledComponentsRegistry.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServerStyleSheet"]()
    }["StyledComponentsRegistry.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerInsertedHTML"])({
        "StyledComponentsRegistry.useServerInsertedHTML": ()=>{
            const styles = styledComponentsStyleSheet.getStyleElement();
            styledComponentsStyleSheet.instance.clearTag();
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: styles
            }, void 0, false);
        }
    }["StyledComponentsRegistry.useServerInsertedHTML"]);
    if ("TURBOPACK compile-time truthy", 1) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    //TURBOPACK unreachable
    ;
}
_s(StyledComponentsRegistry, "JO0TVXMWaWpk04kGnSFOnr+4ipc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerInsertedHTML"]
    ];
});
_c = StyledComponentsRegistry;
var _c;
__turbopack_context__.k.register(_c, "StyledComponentsRegistry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0~lai3e._.js.map