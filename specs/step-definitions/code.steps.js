// eslint-disable-next-line import/no-extraneous-dependencies
import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { Code } from '../../dist/index';

const feature = loadFeature('./specs/features/code.feature');

defineFeature(feature, (test) => {
    test('Show default code', ({ when, then }) => {
        let code;
        when(/^rendering code component with text "(.*)"$/, (text) => {
            code = renderer.create(<Code code={text} />);
        });

        then(/^the code has text "(.*)"$/, (text) => {
            const tree = code.toJSON();
            expect(tree.children[0].children[0].children[0]).toBe(text);
        });
    });
});
