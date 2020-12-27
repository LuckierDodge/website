---
layout: "pagelayout.njk"
title: "🏠 Home"
image: "/assets/images/profile-pic-icon-192.jpg"
alt: "Profile photo of Ryan, facing down and to the left, wearing a green baseball cap."
description: "The humble internet home of Ryan D. Lewis: student, developer, researcher, roboticist, and computational mathematician."
---

{% capture newline %}
{% endcapture %}

## Student • Developer • Researcher • Roboticist • Computational Mathematician

👋 Hello, and welcome to my humble internet home!

---

## Latest Posts

The latest posts I've written.

{%- for post in collections.posts reversed -%}
{{newline}}
### [ {{ post.data.title }} ]( {{post.url}} )

{{newline}}

> {{ post.data.description }}

	{%- if forloop.index == 3 -%}
		{%- break -%}
	{%- endif -%}
{{newline}}
{%- endfor -%}

{{newline}}
[More ➡](/posts)

---

## Latest Projects

The latest projects I've started.

{%- for project in collections.project reversed -%}
{{newline}}
### [ {{ project.data.title }} ]( {{project.url}} )

{{newline}}

> {{ project.data.description }}

	{%- if forloop.index == 3 -%}
		{%- break -%}
	{%- endif -%}
{{newline}}
{%- endfor -%}

{{newline}}
[More ➡](/projects)

---

## GitHub Stats

<!--
[![My github stats](https://github-readme-stats.vercel.app/api?username=luckierdodge&count_private=true&show_icons=true&theme=dark)](https://github.com/anuraghazra/github-readme-stats)

_Stat card powered by [github-readme-stats](https://github.com/anuraghazra/github-readme-stats)_
-->

---

## Links

<div class="link-capsule">

* **[RSS Feed](https://ryandlewis.dev/feed.xml)**

</div>


### Professional

<div class="link-capsule">

<!-- * **[]()** -->
* **[Google Scholar](https://scholar.google.com/citations?user=NXd4XaoAAAAJ "Ryan D. Lewis • Google Scholar")**
* <div itemscope itemtype="https://schema.org/Person"><a itemprop="sameAs" content="https://orcid.org/0000-0002-3000-2811" title="0000-0002-3000-2811 • ORCID iD" href="https://orcid.org/0000-0002-3000-2811" target="orcid.widget" rel="me noopener noreferrer" style="vertical-align:top;"><img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" style="width:1em;margin-right:.5em;" alt="ORCID iD icon">ORCID iD</a></div> 
* **[LinkedIn](https://www.linkedin.com/in/ryan-d-lewis "Ryan D. Lewis • LinkedIn")**
* **[GitHub](https://github.com/luckierdodge "@luckierdodge • GitHub")**

</div>

### Social

<div class="link-capsule">

<!-- * **[]()** -->
* **[Dev.to](https://dev.to/luckierdodge "@luckierdodge • Dev")**
* **[Twitter](https://twitter.com/RhinoDaDino "@RhinoDaDino • Twitter")**
* <a rel="me" href="https://mastodon.online/@luckierdodge" title="@luckierdodge • Mastodon.Online"><b>Mastodon</b></a>
* **[PixelFed](https://pixelfed.social/luckierdodge "@luckierdodge • PixelFed.Social")**

</div>
