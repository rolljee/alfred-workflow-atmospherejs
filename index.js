'use strict';
const alfy = require('alfy');

alfy.fetch('https://atmospherejs.com/?q=modal').then(data => {
	const items = alfy
		.inputMatches(data, 'title')
		.map(x => ({
			title: x.title,
			subtitle: x.body,
			arg: x.id
		}));

	alfy.output(items);
});
