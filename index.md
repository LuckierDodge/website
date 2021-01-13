---
layout: "pagelayout.njk"
title: "🏠 Home"
image: "/assets/images/profile-pic-icon-192.jpg"
alt: "Profile photo"
description: "The humble internet home of Ryan D. Lewis: student, developer, researcher, roboticist, and computational mathematician."
---

{% capture newline %}
{% endcapture %}

<div class="responsive2column">

<div class="column-1 image">

<div class="vertical-center">

![Profile photo](/assets/images/profile-pic-icon-192.jpg#profileimage)

</div>

</div>

<div class="column-2">

👋 Hello, and welcome to my humble internet home!

I am a...


>Student

>Developer

>Researcher

>Roboticist

>Computational Mathematician

...currently studying and working at Northern Illinois University and Argonne National Laboratory.

[Learn more about me →](/aboutme)

</div>

</div>

---

## Latest Posts

{%- for post in collections.posts reversed -%}
{{newline}}
<div class="responsive2column">
<div class="column-1">
{{ newline }}
### [ {{ post.data.title }} ]( {{post.url}} )
{%- if post.data.headerimage -%}
{{newline}}
<div class="image">
{{newline}}
!["{{post.data.title}}" Header Image]({{post.data.headerimage}}#responsivesmall)
{{newline}}
</div>
{{newline}}
{%- endif -%}
{{newline}}
</div>
<div class="column-2">

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
