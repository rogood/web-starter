// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../pages_'
import ns0 from '../locales/en/common.json'
import ns1 from '../locales/en/home.json'

const namespaces = { 'common': ns0, 'home': ns1 }

export default function Page(p){
  return (
    <I18nProvider lang="en" namespaces={namespaces} isStaticMode>
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })

if(C.getInitialProps) {
  Page.getInitialProps = ctx => C.getInitialProps({ ...ctx, lang: 'en'})
}





export * from '../pages_'
