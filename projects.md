---
layout: pagelayout.njk
title: 💻 Projects
description: "Stuff that I work on in my free time."
templateEngineOverride: njk,md
---

{% set newline = "\n" %}

Stuff that I've worked on, by choice (weird, right?).



{%- for project in collections.project | reverse %}

{%- if loop.index0 % 2 == 0 -%}
{{newline}}
<div class="responsive_wrapper">
{{newline}}
{%- endif -%}

{{newline}}

<div class="responsve_multi modal column2flex">
<div class="column2">
{{newline}}

<div class="responsive_text column2">
{{newline}}

## [{{project.data.title}}]({{project.url}}) 
{{newline}}
([Project Link]({{project.data.projecturl}}))
{{newline}}
</div>
{{newline}}


</div>
{{newline}}
<div class="column2">
{{newline}}
<div class="responsive_text">
{{newline}}
{{ project.data.description | safe }}
{{newline}}
</div>

{{newline}}
</div>
{{newline}}
</div>
{%- if (loop.index0 % 2 == 1) or loop.last -%}
{{newline}}
</div>
{{newline}}
{%- endif -%}

{{newline}}

{%- endfor %}

</div>