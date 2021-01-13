---
layout: pagelayout.njk
title: 📝 Posts
description: "Where I'll post any thoughts, when I get around to writing them."
---

{% capture newline %}
{% endcapture %}

Thoughts on code, robots, and life, delivered at random.

## Adventures in Tech Series

{%- for post in collections.adventures reversed -%}

{{newline}}

{%- if post.data.headerimage -%}
!["{{post.data.title}}" Header Image]({{post.data.headerimage}}#responsivesmall)
{{newline}}
{%- endif -%}

### [{{ post.data.title }}]( {{post.data.externalurl}} )

{{newline}}

> {{ post.data.description | safe }}

{{newline}}

[Read more →]({{post.url}})

{{newline}}

{%- endfor -%}

{{newline}}

## Posts on [Dev](https://dev.to)

{%- for post in collections.dev reversed -%}

{{newline}}

{%- if post.data.headerimage -%}
!["{{post.data.title}}" Header Image]({{post.data.headerimage}}#responsivesmall)
{{newline}}
{%- endif -%}

### [{{ post.data.title }}]( {{post.data.externalurl}} )

{{newline}}

> {{ post.data.description | safe }}

{{newline}}

[Read at Dev]({{post.data.externalurl}}) | [Read at ryandlewis.dev]({{post.url}})

{{newline}}

{%- endfor -%}
