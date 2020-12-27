---
layout: pagelayout.njk
title: 💻 Projects
description: "Stuff that I work on in my free time."
---

Stuff that I've worked on, by choice (weird, right?).

[![My github stats](https://github-readme-stats.vercel.app/api?username=luckierdodge&count_private=true&show_icons=true&theme=dark)](https://github.com/anuraghazra/github-readme-stats)

_Stat card powered by [github-readme-stats](https://github.com/anuraghazra/github-readme-stats)_

{%- for project in collections.project reversed -%}
<div class="project">
<h2><a href="{{ project.url }}">{{ project.data.title }}</a></h2>

> {{ project.data.description }}

Project Link: [ {{ project.data.projecturl }} ]( {{ project.data.projecturl }} )

</div>
{%- endfor -%}
