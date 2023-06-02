const fetch = require(`node-fetch`);
const jsdom = require(`jsdom`);
const { JSDOM } = jsdom;

module.exports = {
	name: `urldata`,
	/**
	 * Actions
	 */
	actions: {
		/**
		 * Count words on a webpage
		 *
		 * @param {String} url - Domain
		 */
		wordcount: {
			rest: {
				method: `GET`,
				path: `/wordcount`
			},
			params: {
				url: `string`
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				//Check if url is absolute, insert http if not
				if (ctx.params.url.toUpperCase().indexOf("HTTP") !== 0) {
					ctx.params.url = `http://${ctx.params.url}`;
				}
				//fetch full page, store html in string
				const response = await fetch(ctx.params.url);
				const fullhtml = await response.text();
				//Remove script tags from html string, and parse html with JSDOM
				const doc = new JSDOM(fullhtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')).window.document;
				//Remove all symbols excluding numbers, letters, whitespace and newlines. Remove excess whitespace before count
				const text = doc.body.textContent.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, ` `).trim();
				return {message:`SUCCESS`, fullHtmlDocWordCount: strWordCount(fullhtml), htmlBodyWordCountNoScripts: strWordCount(text), htmlBodyWordsNoScripts: text};
			}
		}
	}
};



function strWordCount(str) { 
	return str.split(` `).length;
}