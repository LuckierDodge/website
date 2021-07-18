---
layout: pagelayout.njk
title: 📝 Posts
description: "Where I'll post any thoughts, when I get around to writing them."
---

{% capture newline %}
{% endcapture %}
{% capture space %} {% endcapture %}

Thoughts on code, robots, and life, delivered at random.

## Adventures in Tech Series

{%- for post in collections.Adventures_in_Tech reversed -%}
{{newline}}
<div class="responsive2column">
<div class="column-1">
{{ newline }}
{%- if post.data.headerimage -%}
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
{%- endfor -%}

{{newline}}

## Posts on [Dev](https://dev.to)

{%- for post in collections.Dev reversed -%}
{{newline}}
<div class="responsive2column">
<div class="column-1">
{{ newline }}
{%- if post.data.headerimage -%}
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
{%- endfor -%}
