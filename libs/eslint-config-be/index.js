module.exports = {
	plugins: [
		'@typescript-eslint',
		'simple-import-sort',
		'unused-imports'
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
    rules: {
        'no-console': 1,
		'@typescript-eslint/semi': [2, 'never'],
		'@typescript-eslint/quotes': [2, 'single'],
		'simple-import-sort/imports': 'error',
		'@typescript-eslint/no-unused-vars': 'off',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{ vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
		]
    }
}
