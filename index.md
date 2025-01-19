---
layout: "pagelayout.njk"
title: "🏠 Home"
description: "The humble internet home of Ryan D. Lewis, general Technomancer and well-rounded nerd."
templateEngineOverride: njk,md
---

{% set newline = "\n" %}
{% set space = " " %}

<div class="responsive_multi modal">

<div class="column2 image super-center">

![Profile photo](/assets/images/Voxel_Profile.png#responsivemedium)

</div>

<div class="column2">

👋 Hello, and welcome to my humble internet home!

I am a developer and roboticist currently working at [Argonne National Laboratory](https://www.anl.gov) as a [Rapid Prototyping Lab](https://rpl.cels.anl.gov/) Developer.

[Learn more about me →](/aboutme)

</div>

</div>


## Latest Posts

{%- for post in collections.post | reverse -%}
{%- if loop.index <= 4 -%}
{%- if loop.index0 % 2 == 0 -%}
{{newline}}
<div class="responsive_wrapper">
{{newline}}
{%- endif -%}
{{newline}}
<div class="responsive_multi modal column2">
<div class="column2 super-center">
{%- if post.data.headerimage -%}
{{newline}}
<div class="image super-center">
{{newline}}
[!["{{post.data.title}}" Header Image]({{post.data.headerimage}}#responsivemedium)]({{post.url}})
{{newline}}
</div>
{{newline}}
{%- endif -%}
{{newline}}
</div>
<div class="column2">
{{ newline }}
### [ {{ post.data.title }} ]( {{post.url}} )
{{newline}}
<em>Tags:{{space}}
{%- for tag in post.data.tags -%}
{%- if tag == post.data.tags[0] -%}
{{ tag }}
{%- else -%}
,{{ space }} {{ tag }}
{%- endif -%}
{%- endfor -%}
</em>
{{newline}}
{{ post.data.description }}
{{newline}}
</div>
</div>
{{newline}}

{{newline}}
{%- if (loop.index0 % 2 == 1) or loop.last -%}
{{newline}}
</div>
{{newline}}
{%- endif -%}
{%- endif -%}
{%- endfor -%}
{{newline}}
[More Posts →](/posts)


## Latest Projects

{%- for project in collections.project | reverse -%}
{%- if loop.index <= 4 -%}
{%- if loop.index0 % 2 == 0 -%}
{{newline}}
<div class="responsive_wrapper">
{{newline}}
{%- endif -%}
{{newline}}
<div class="modal column2">
{{newline}}

### [ {{ project.data.title }} ]( {{project.url}} )

{{newline}}

{{ project.data.description }}

{{newline}}
</div>
{{newline}}
{%- if (loop.index0 % 2 == 1) or loop.last -%}
{{newline}}
</div>
{{newline}}
{%- endif -%}
{%- endif -%}
{%- endfor -%}

{{newline}}
[More Projects →](/projects)


## Links

<div class="responsive_wrapper">
<div class="modal column2">

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
<a rel="me" href="https://mastodon.online/@luckierdodge" title="@luckierdodge • Mastodon.Online"><b>Mastodon</b></a>
**[PixelFed](https://pixelfed.social/luckierdodge "@luckierdodge • PixelFed.Social")**
**[Dev.to](https://dev.to/luckierdodge "@luckierdodge • Dev")**
**[Twitter | Personal](https://twitter.com/RhinoDaDino "@RhinoDaDino • Twitter")**
**[Twitter | TTRPG](https://twitter.com/TheLuckierDM "@TheLuckierDM • Twitter")**

</div>

### Support

<div class="link-capsule">

**[Buy Me a Kilowatt](https://www.buymeacoffee.com/aVc18KuLq "Buy Me a Coffee")**
**[Ko-fi](https://ko-fi.com/luckierdodge "Ko-fi")**

</div>

</div>

</div>
