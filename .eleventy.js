const CleanCSS = require("clean-css");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const footnotes = require('eleventy-plugin-footnotes')

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addPassthroughCopy({"favicon/*": "/"});
	eleventyConfig.addPassthroughCopy("robots.txt");
	eleventyConfig.addPassthroughCopy({
		  "nord.css": "nord.css"
	});
	eleventyConfig.addFilter("cssmin", function(code) {
		return new CleanCSS({}).minify(code).styles;
	});
	eleventyConfig.setBrowserSyncConfig({
		callbacks: {
			ready: function(err, bs) {
				bs.addMiddleware("*", (req, res) => {
					const content_404 = fs.readFileSync('_site/404.html');
					// Provides the 404 content without redirect.
					res.write(content_404);
					// Add 404 http status code in request header.
					// res.writeHead(404, { "Content-Type": "text/html" });
					res.writeHead(404);
					res.end();
				});
			}
		}
	});
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(footnotes, { /* … */ })

	const markdownit = require("markdown-it");
	const markdownitanchor = require("markdown-it-anchor");
	const markdownitfootnote = require("markdown-it-footnote");
	const markdownlib = markdownit({ html: true, breaks: true, linkify: true }).use(markdownitanchor).use(markdownitfootnote);
	eleventyConfig.setLibrary("md", markdownlib);
	eleventyConfig.addCollection("posts", function (collection) {
  		const coll = collection.getFilteredByTag("post");

		for(let i = 0; i < coll.length ; i++) {
			const prevPost = coll[i-1];
			const nextPost = coll[i + 1];

			coll[i].data["prevPost"] = prevPost;
			coll[i].data["nextPost"] = nextPost;
		}

  		return coll;
	});
};
