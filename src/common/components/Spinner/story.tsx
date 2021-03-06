import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Spinner } from './';
import notes from './README.md';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add(
    'Spinner',
    () => {
        return <Spinner />;
    },
    { notes }
);
