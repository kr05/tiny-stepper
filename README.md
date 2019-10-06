# \<tiny-stepper>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

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

## Testing using karma (if applied by author)
```bash
npm run test
```

## Testing using karma via browserstack (if applied by author)
```bash
npm run test:bs
```

## Demoing using storybook (if applied by author)
```bash
npm run storybook
```

## Linting (if applied by author)
```bash
npm run lint
```
