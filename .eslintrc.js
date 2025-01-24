module.exports = {
	extends: [
		'plugin:svelte/recommended',
	],
	parser: '@typescript-eslint/parser',
	overrides: [
	  {
		files: ['*.ts'],
		extends: "@standwm/eslint-config-be",
	  },
	],

  };
