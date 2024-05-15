try {
  (() => {
    var d = __STORYBOOK_API__,
      {
        ActiveTabs: u,
        Consumer: h,
        ManagerContext: S,
        Provider: _,
        addons: o,
        combineParameters: b,
        controlOrMetaKey: T,
        controlOrMetaSymbol: g,
        eventMatchesShortcut: p,
        eventToShortcut: y,
        isMacLike: O,
        isShortcutTaken: f,
        keyToSymbol: k,
        merge: v,
        mockChannel: C,
        optionOrAltSymbol: P,
        shortcutMatchesShortcut: A,
        shortcutToHumanString: M,
        types: I,
        useAddonState: x,
        useArgTypes: G,
        useArgs: B,
        useChannel: K,
        useGlobalTypes: R,
        useGlobals: Y,
        useParameter: H,
        useSharedState: N,
        useStoryPrepared: Z,
        useStorybookApi: z,
        useStorybookState: E,
      } = __STORYBOOK_API__;
    var V = __STORYBOOK_THEMING__,
      {
        CacheProvider: W,
        ClassNames: q,
        Global: D,
        ThemeProvider: F,
        background: J,
        color: Q,
        convert: X,
        create: a,
        createCache: $,
        createGlobal: ee,
        createReset: te,
        css: re,
        darken: oe,
        ensure: ae,
        ignoreSsrWarning: se,
        isPropValid: ne,
        jsx: ce,
        keyframes: le,
        lighten: ie,
        styled: me,
        themes: de,
        typography: ue,
        useTheme: he,
        withTheme: Se,
      } = __STORYBOOK_THEMING__;
    o.setConfig({
      theme: a({
        base: "light",
        fontBase: '"Inter", sans-serif',
        fontCode: '"Inter", sans-serif',
        brandTitle: "ZeroZ",
        brandImage: "/logo-sm.svg",
        brandTarget: "_blank",
        brandUrl: "https://github.com/metzevandro/Zeroz",
        colorSecondary: "#945df5",
      }),
    });
  })();
} catch (e) {
  console.error(
    "[Storybook] One of your manager-entries failed: " + import.meta.url,
    e,
  );
}
