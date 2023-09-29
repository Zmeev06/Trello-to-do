/// <reference types="vite/client" />
declare module '*.svg' {
  import React = require('react')

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  // eslint-disable-next-line import/no-default-export
  export default src
}
