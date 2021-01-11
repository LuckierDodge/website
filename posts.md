---
layout: pagelayout.njk
title: 📝 Posts
description: "Where I'll post any thoughts, when I get around to writing them."
---

{% capture newline %}
{% endcapture %}

Thoughts on code, robots, and life, delivered at random.

## Posts on [Dev](https://dev.to)

{%- for post in collections.dev reversed -%}

{{newline}}

### [{{ post.data.title }}]( {{post.data.externalurl}} )

{{newline}}

> {{ post.data.description | safe }}

{{newline}}

[Read at Dev]({{post.data.externalurl}}) | [Read at ryandlewis.dev]({{post.url}})

{{newline}}

{%- endfor -%}
