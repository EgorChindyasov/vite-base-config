module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"plugin:unicorn/recommended",
		"plugin:prettier/recommended",
		"prettier"
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh", "react", "prettier", "unicorn"],
	parserOptions: {
		parser: "@babel/eslint-parser",
		requireConfigFile: false,
		ecmaVersion: 2020,
		sourceType: "module"
	},
	rules: {
		semi: ["error", "always"],
		"unicorn/no-fn-reference-in-iterator": "off",
		"unicorn/no-reduce": "off",
		"unicorn/no-null": "off",
		"unicorn/switch-case-braces": "off",
		"unicorn/no-array-reduce": "off",
		"unicorn/no-array-for-each": "off",
		"unicorn/no-array-callback-reference": "off",
		"unicorn/prefer-node-protocol": "off",
		"unicorn/prefer-object-from-entries": ["off"],
		"unicorn/no-useless-undefined": "off",
		"unicorn/prevent-abbreviations": ["off"],
		"no-console": ["error"],
		"no-var": ["error"],
		"no-else-return": ["error", { allowElseIf: false }]
	}
};
