import { defineKatexSetup } from '@slidev/types'

// const macros = {
//   '\\abs{#1}': '\\left| #1 \\right|',
//   '\\Re': '\\renewcommand{\\Re}{\\operatorname{Re}}',
//   '\\Im': '\\renewcommand{\\Im}{\\operatorname{Im}}',
//   '\\ge': '\\geqslant',
//   '\\le': '\\leqslant',
//   '\\geq': '\\geqslant',
//   '\\leq': '\\leqslant',
//   '\\dif': '\\DeclareMathOperator{\\dif}{\\mathop{}!\\mathrm{d}}',
//   '\\upe': '\\operatorname{e}',
//   '\\cov': '\\operatorname{cov}',
//   '\\upi': '\\operatorname{i}',
//   '\\sgn': '\\operatorname{sgn}',
//   '\\grad': '\\operatorname{grad}',
// }

export default defineKatexSetup(() => {
  return {
    displayMode: true,
    strict:false,
    macros: {
      '\\abs': '\\left| #1 \\right|',
      '\\Re': '\\renewcommand{\\Re}{\\operatorname{Re}}',
      '\\Im': '\\renewcommand{\\Im}{\\operatorname{Im}}',
      '\\ge': '\\geqslant',
      '\\le': '\\leqslant',
      '\\geq': '\\geqslant',
      '\\leq': '\\leqslant',
      '\\bb': '\\mathbb{R}',
      '\\dif': '\\operatorname{\\mathop{}\\!\\mathrm{d}}',
      '\\upe': '\\operatorname{e}',
      '\\cov': '\\operatorname{cov}',
      '\\upi': '\\operatorname{i}',
      '\\sgn': '\\operatorname{sgn}',
      '\\grad': '\\operatorname{grad}',
      '\\rot': '\\operatorname{rot}',
      '\\div': '\\operatorname{div}',
      '\\uppartial': '\\partial',
    },
  }
})
