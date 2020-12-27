const CleanCSS = require("clean-css");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
module.exports = function(eleventyConfig) {
	eleventyConfig.addFilter("cssmin", function(code) {
		return new CleanCSS({}).minify(code).styles;
	});
	eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addPassthroughCopy({"favicon/*": "/"});
	eleventyConfig.addPassthroughCopy("robots.txt");
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
};
