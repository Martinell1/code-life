```json
{
  "editor.cursorSmoothCaretAnimation": true,
  "editor.fontFamily": "Input Mono, Fira Code, monospace",
  "editor.fontSize": 18,
  "editor.glyphMargin": true,
  "editor.guides.bracketPairs": "active",
  "editor.inlineSuggest.enabled": true,
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.suggestSelection": "first",
  "editor.tabSize": 2,
  "workbench.activityBar.visible": true,
  "workbench.editor.closeOnFileDelete": true,
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.editor.limit.enabled": true,
  "workbench.editor.limit.perEditorGroup": true,
  "workbench.editor.limit.value": 5,
  "workbench.iconTheme": "vscode-icons",
  "workbench.list.smoothScrolling": true,
  "workbench.sideBar.location": "left",
  "workbench.tree.expandMode": "singleClick",
  "workbench.tree.indent": 10,

  "git.autofetch": true,
  "git.confirmSync": false,
  "git.enableSmartCommit": true,
  "git.untrackedChanges": "separate",
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.fontWeight": "300",
  "terminal.integrated.persistentSessionReviveProcess": "never",
  "terminal.integrated.tabs.enabled": true,
  "debug.onTaskErrors": "debugAnyway",
  "search.exclude": {
    "**/.git": true,
    "**/.github": true,
    "**/.nuxt": true,
    "**/.output": true,
    "**/.pnpm": true,
    "**/.vscode": true,
    "**/.yarn": true,
    "**/bower_components": true,
    "**/dist/**": true,
    "**/logs": true,
    "**/node_modules": true,
    "**/out/**": true,
    "**/package-lock.json": true,
    "**/pnpm-lock.yaml": true,
    "**/tmp": true,
    "**/yarn.lock": true
  },
  "i18n-ally.autoDetection": false,
  "i18n-ally.displayLanguage": "en",
  "i18n-ally.ignoredLocales": [],
  "iconify.annotations": true,
  "iconify.inplace": true,
  "svg.preview.mode": "svg",

  "editor.codeActionsOnSave": {
    "source.fixAll": false,
    "source.fixAll.eslint": true, // this allows ESLint to auto fix on save
    "source.organizeImports": false
  },
  // ESLint config: https://github.com/antfu/eslint-config
  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  "eslint.quiet": true,
  "eslint.validate": [
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
  ],
  "prettier.enable": false, // I only use Prettier for manually formatting
  "prettier.printWidth": 200,
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "prettier.endOfLine": "auto",
  "files.eol": "\n",
  // "editor.formatOnSave": true,
  // "prettier.printWidth": 80, // 超过最大值换行
  // "prettier.tabWidth": 2, // 缩进字节数
  // "prettier.useTabs": true, // 缩进不使用tab，使用空格
  // "prettier.semi": false, // 句尾添加分号
  // "prettier.singleQuote": true, // 使用单引号代替双引号
  // "prettier.proseWrap": "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  // "prettier.arrowParens": "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  // "prettier.bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  // "prettier.endOfLine": "auto", // 结尾是 \n \r \n\r auto
  // "prettier.htmlWhitespaceSensitivity": "ignore",
  // "prettier.ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  // "prettier.jsxBracketSameLine": false, // 在jsx中把'>' 是否单独放一行
  // "prettier.jsxSingleQuote": true, // 在jsx中使用单引号代替双引号
  // "prettier.requireConfig": false, // Require a 'prettierconfig' to format prettier
  // "prettier.parser": "babylon", // 格式化的解析器，默认是babylon
  // "prettier.eslintIntegration": false, //不让prettier使用eslint的代码格式进行校验
  // "prettier.stylelintIntegration": false, //不让prettier使用stylelint的代码格式进行校验
  // "prettier.tslintIntegration": false, // 不让prettier使用tslint的代码格式进行校验

  // // 格式化插件设置为 prettier
  // "[html]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode"
  // },
  // "[javascript]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode"
  // },
  // "[typescript]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode"
  // },
  // "[javascriptreact]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode"
  // },
  // "[typescriptreact]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode"
  // },
  // "[less]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode"
  // },
  // "[css]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode"
  // },
  // "[json]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode"
  // },
  // "[jsonc]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode"
  // },
  // "[vue]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode"
  // }
}

```