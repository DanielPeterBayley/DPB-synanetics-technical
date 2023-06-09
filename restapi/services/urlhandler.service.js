const fetch = require(`node-fetch`);

module.exports = {
	name: `urlhandler`,
	/**
	 * Actions
	 */
	actions: {
		getwc: {
			rest: {
				method: `GET`
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return urlIter(ctx.params.url);
			}
		},
		postwc: {
			rest: {
				method: `POST`
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return urlIter(ctx.params.url);
			}
		}
	}
};

async function urlIter(urls){
	let urlArr=urls;
	let results={};
	if (!Array.isArray(urls)){
		urlArr=[urls];
	}
	for(let i=0; i< urlArr.length; i++){
		if (typeof urlArr[i] === `string`){
			const response = await fetch(`http://urldatacontainer:3000/api/urldata/wordcount?url=${urlArr[i]}`);
			const fulljson = await response.json();
			if (fulljson.name === `Success`){
				results[urlArr[i]] = {bodyWcNoScripts: fulljson.htmlBodyWordCountNoScripts, fullHtmlDocWc: fulljson.fullHtmlDocWordCount};
			} else if (fulljson.name === `AbortError`){ 
				results[urlArr[i]] = {error: fulljson.name, message: `The target URL failed to respond within 5 seconds.`};
			} else {
				results[urlArr[i]] = {error: fulljson.name, message: fulljson.message};
			}
		} else{
			results[urlArr[i]] = {error:`TypeError`, message: `URL must be a string not a ${typeof urlArr[i]}`};
		}
	}
	return results;
}

