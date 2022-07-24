import * as React from "react"
import type { GatsbySSR } from "gatsby"
import PageLayout from './src/layouts/PageLayout'

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => {
  return (
    <PageLayout>
      {element}
    </PageLayout>
  )
}

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <div id="fb-root" key="0"></div>
  ]);
};