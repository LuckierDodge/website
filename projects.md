---
layout: pagelayout.njk
title: 💻 Projects
description: "Stuff that I work on in my free time."
---

{% capture newline %}
{% endcapture %}

Stuff that I've worked on, by choice (weird, right?).


{%- for project in collections.project reversed -%}

{{newline}}

* [{{project.data.title}}]({{project.url}}) ([Project Link]({{project.data.projecturl}})): {{ project.data.description | safe }}


{{newline}}

{%- endfor -%}
