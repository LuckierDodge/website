---
layout: "pagelayout.njk"
title: "🏠 Home"
description: "The humble internet home of Ryan D. Lewis: student, developer, researcher, roboticist, and computational mathematician."
---

{% capture newline %}
{% endcapture %}
{% capture space %} {% endcapture %}

<div class="responsive2column">

<div class="column-1 image super-center">

![Profile photo](/assets/images/Voxel_Profile.png#responsivemedium)

</div>

<div class="column-2">

👋 Hello, and welcome to my humble internet home!

I am a...


>Student

>Developer

>Researcher

>Roboticist

>Computational Mathematician

...currently studying and working at the University of Michigan and Argonne National Laboratory.

[Learn more about me →](/aboutme)

</div>

</div>

---

## Latest Posts

{%- for post in collections.Posts reversed -%}
{{newline}}
<div class="responsive2column">
<div class="column-1">
{%- if post.data.headerimage -%}
{{newline}}
<div class="image">
{{newline}}
!["{{post.data.title}}" Header Image]({{post.data.headerimage}}#responsivemedium)
{{newline}}
</div>
{{newline}}
{%- endif -%}
{{newline}}
</div>
<div class="column-2">
{{ newline }}
### [ {{ post.data.title }} ]( {{post.url}} )
{{newline}}
<em>Tags:{{space}}
{%- for tag in post.data.tags -%}
{{ tag }},{{space}}
{%- endfor -%}
</em>
{{newline}}
> {{ post.data.description }}
{{newline}}
</div>
</div>
{{newline}}

	{%- if forloop.index == 3 -%}
		{%- break -%}
	{%- endif -%}
{{newline}}
{%- endfor -%}
{{newline}}
[More Posts →](/posts)

---

## Latest Projects

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
[More Projects →](/projects)

---

## Links

<div class="link-capsule">

**[RSS Feed](https://ryandlewis.dev/feed.xml)**

</div>


### Professional

<div class="link-capsule">

<!-- **[]()** -->
**[Google Scholar](https://scholar.google.com/citations?user=NXd4XaoAAAAJ "Ryan D. Lewis • Google Scholar")**
**[ORCID iD](https://orcid.org/0000-0002-3000-2811 "0000-0002-3000-2811 • ORCID iD")**
**[LinkedIn](https://www.linkedin.com/in/ryan-d-lewis "Ryan D. Lewis • LinkedIn")**
**[GitHub](https://github.com/luckierdodge "@luckierdodge • GitHub")**

</div>

### Social

<div class="link-capsule">

<!-- **[]()** -->
**[Dev.to](https://dev.to/luckierdodge "@luckierdodge • Dev")**
**[Twitter](https://twitter.com/RhinoDaDino "@RhinoDaDino • Twitter")**
<a rel="me" href="https://mastodon.online/@luckierdodge" title="@luckierdodge • Mastodon.Online"><b>Mastodon</b></a>
**[PixelFed](https://pixelfed.social/luckierdodge "@luckierdodge • PixelFed.Social")**

</div>

### Support

<div class="link-capsule">

**[Buy Me a Kilowatt](https://www.buymeacoffee.com/aVc18KuLq "Buy Me a Coffee")**
**[Ko-fi](https://ko-fi.com/luckierdodge "Ko-fi")**

</div>
