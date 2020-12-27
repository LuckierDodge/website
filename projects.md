---
layout: pagelayout.njk
title: 💻 Projects
description: "Stuff that I work on in my free time."
---

Stuff that I've worked on, by choice (weird, right?).


{%- for project in collections.project reversed -%}
<div class="project">
<h2><a href="{{ project.url }}">{{ project.data.title }}</a></h2>

> {{ project.data.description }}

Project Link: [ {{ project.data.projecturl }} ]( {{ project.data.projecturl }} )

</div>
{%- endfor -%}
