import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { TinyStepper } from '../src/TinyStepper.js';
import '../tiny-stepper.js';

storiesOf('tiny-stepper', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(TinyStepper))
  .add(
    'Alternative Title',
    () => html`
      <tiny-stepper .title=${'Something else'}></tiny-stepper>
    `,
  );
