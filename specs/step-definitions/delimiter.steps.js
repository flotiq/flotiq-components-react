// eslint-disable-next-line import/no-extraneous-dependencies
import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { Delimiter } from '../../dist/index';

const feature = loadFeature('./specs/features/delimiter.feature');

defineFeature(feature, (test) => {
    test('Show default delimiter', ({ when, then, and }) => {
        let delimiter;
        when(/^rendering delimiter component$/, () => {
            delimiter = renderer.create(<Delimiter />);
        });

        then(/^the delimiter has classes "(.*)"$/, (classes) => {
            const tree = delimiter.toJSON();
            expect(tree.props.className.indexOf(classes)).toBeGreaterThan(-1);
        });
    });
});
