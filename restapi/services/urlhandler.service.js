const fetch = require(`node-fetch`);

module.exports = {
	name: `urlhandler`,
	/**
	 * Actions
	 */
	actions: {
		/**
		 * Count words on a webpage
		 *
		 * @param {String} url - Domain
		 */
		wordcountget: {
			rest: {
				method: `GET`,
				path: `/wc`
			},
			params: {
				url: `string`
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				const response = await fetch(`http://urldatacontainer:3000/api/urldata/wordcount?url=${ctx.params.url}`);
				const fulljson = await response.json();
				return {message:`SUCCESS`, data: fulljson};
			}
		},
		wordcountpost: {
			rest: {
				method: `POST`,
				path: `/wc`
			},
			params: {
				url: `string`
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				const response = await fetch(`http://urldatacontainer:3000/api/urldata/wordcount?url=${ctx.params.url}`);
				const fulljson = await response.json();
				return {message:`SUCCESS`, data: fulljson};
			}
		}
	}
};