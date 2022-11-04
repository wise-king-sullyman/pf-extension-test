module.exports = {
  '/extensions/pf-extension-test/design-guidelines': {
    id: "PF extension test",
    title: "PF extension test",
    toc: [{"text":"Header"},[{"text":"Sub-header"}]],
    section: "extensions",
    source: "design-guidelines",
    Component: () => import(/* webpackChunkName: "extensions/pf-extension-test/design-guidelines/index" */ './extensions/pf-extension-test/design-guidelines')
  },
  '/extensions/pf-extension-test/react': {
    id: "PF extension test",
    title: "PF extension test",
    toc: [{"text":"Basic usage"},[{"text":"Example"},{"text":"Fullscreen example"}]],
    examples: ["Example"],
    fullscreenExamples: ["Fullscreen example"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/pf-extension-test/react/index" */ './extensions/pf-extension-test/react')
  }
};