import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@patternfly/documentation-framework/components';

const pageData = {
  "id": "PF extension test",
  "section": "extensions",
  "source": "design-guidelines",
  "slug": "/extensions/pf-extension-test/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/module/patternfly-docs/content/extensions/pf-extension-test/design-guidelines/design-guidelines.md"
};
pageData.relativeImports = {
  
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Design guidelines intro`}
    </p>
    <AutoLinkHeader {...{"id":"header","size":"h2","className":"ws-title ws-h2"}}>
      {`Header`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"sub-header","size":"h3","className":"ws-title ws-h3"}}>
      {`Sub-header`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Guidelines:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`A`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`list`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`using`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`markdown`}
      </li>
    </ol>
  </React.Fragment>
);
Component.displayName = 'ExtensionsPfExtensionTestDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
