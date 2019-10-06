# \<tiny-stepper>

Stepper component that (mostly) adheres to Material Design. Built with [lit-element](https://lit-element.polymer-project.org/) and [open-wc](https://github.com/open-wc/open-wc). Inspired by [l2t-paper-stepper](https://github.com/Link2Twenty/l2t-paper-stepper).

## Installation
```bash
npm i @kr05/tiny-stepper
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
