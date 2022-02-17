// eslint-disable-next-line import/no-extraneous-dependencies
import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { Warning } from '../../dist/index';

const feature = loadFeature('./specs/features/warning.feature');

defineFeature(feature, (test) => {
    test('Show default warning', ({ when, then }) => {
        let warning;
        when(/^rendering warning component with text "(.*)" and title "(.*)"$/, (message, title) => {
            warning = renderer.create(<Warning message={message} title={title} />);
        });

        then(/^the warning has text "(.*)"$/, (text) => {
            const tree = warning.toJSON();
            expect(tree.children[2].children[0]).toBe(text);
        });
    });
});
