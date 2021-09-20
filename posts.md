---
layout: pagelayout.njk
title: 📝 Posts
description: "Where I'll post any thoughts, when I get around to writing them."
templateEngineOverride: njk,md
---

{% set newline = "\n" %}
{% set space = " " %}

Thoughts on code, robots, and life, delivered at random.

## Adventures in Tech Series

{%- for post in collections.Adventures_in_Tech | reverse -%}
{%- if loop.index0 % 2 == 0 -%}
{{newline}}
<div class="responsive_wrapper">
{{newline}}
{%- endif -%}
{{newline}}
<div class="responsive_multi modal column2">
<div class="column2">
{{ newline }}
{%- if post.data.headerimage -%}
<div class="image">
{{newline}}
[!["{{post.data.title}}" Header Image]({{post.data.headerimage}}#responsivemedium)]({{post.url}})
{{newline}}
</div>
{{newline}}
{%- endif -%}
{{newline}}
</div>
<div class="column2">
{{newline}}
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
{%- if (loop.index0 % 2 == 1) or loop.last -%}
{{newline}}
</div>
{{newline}}
{%- endif -%}
{%- endfor -%}

{{newline}}

## Posts on [Dev](https://dev.to)

{%- for post in collections.Dev | reverse -%}
{%- if loop.index0 % 2 == 0 -%}
{{newline}}
<div class="responsive_wrapper">
{{newline}}
{%- endif -%}
{{newline}}
<div class="responsive_multi modal column2">
<div class="column2">
{{ newline }}
{%- if post.data.headerimage -%}
<div class="image">
{{newline}}
[!["{{post.data.title}}" Header Image]({{post.data.headerimage}}#responsivemedium)]({{post.url}})
{{newline}}
</div>
{{newline}}
{%- endif -%}
{{newline}}
</div>
<div class="column2">
{{newline}}
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
{%- if (loop.index0 % 2 == 1) or loop.last -%}
{{newline}}
</div>
{{newline}}
{%- endif -%}
{%- endfor -%}
