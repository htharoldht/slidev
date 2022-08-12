import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  await Promise.all([
    // load theme
    (async () => {
      const { default: dark } = await import(
        'theme-vitesse/themes/vitesse-dark.json'
      )
      const { default: light } = await import(
        'theme-vitesse/themes/vitesse-light.json'
      )

      monaco.editor.defineTheme('vitesse-light', light as any)
      monaco.editor.defineTheme('vitesse-dark', dark as any)
    })(),
  ])
})
