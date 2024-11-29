/** @type {import('prettier').Config} */
module.exports = {
   endOfLine: 'lf',
   semi: false,
   singleQuote: true,
   bracketSpacing: false,
   tabWidth: 3,
   trailingComma: 'es5',
   arrowParens: 'avoid',
   importOrderSeparation: true,
   importOrderSortSpecifiers: true,
   importOrderBuiltinModulesToTop: true,
   importOrderMergeDuplicateImports: true,
   importOrderCombineTypeAndValueImports: true,
   plugins: ['prettier-plugin-tailwindcss'],
}
