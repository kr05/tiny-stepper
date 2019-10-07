# \<tiny-stepper>

> This component is a WIP. Please read the [disclaimer](#Disclaimer) for more context.

Stepper component that (mostly) adheres to Material Design. Built with [lit-element](https://lit-element.polymer-project.org/) and [open-wc](https://github.com/open-wc/open-wc). Inspired by [l2t-paper-stepper](https://github.com/Link2Twenty/l2t-paper-stepper).

## Installation
```bash
npm i tiny-stepper
```

## Usage
```html
<script type="module">
  import 'tiny-stepper/tiny-stepper.js';
  import 'tiny-stepper/tiny-step.js';
</script>

<tiny-stepper>
  <tiny-step label="First step" subtitle="Edit me!" editable></tiny-step>
  <tiny-step label="Second step" subtitle="Please don't skip me." optional></tiny-step>
  <tiny-step label="Last step" lastStep></tiny-step>
</tiny-stepper>
```

## Disclaimer
This is very much a work in progress, so take precautions if you plan on using tiny-stepper in production. That being said, I depend on this component for my business needs, which means that I will continue to update and support this package for the foreseeable future. If you find that it's not working as expected or wish to see some feature added, please submit an issue and I will get right on it.
