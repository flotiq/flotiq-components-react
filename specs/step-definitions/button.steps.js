// eslint-disable-next-line import/no-extraneous-dependencies
import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { Button } from '../../dist/index';

const feature = loadFeature('./specs/features/button.feature');

defineFeature(feature, (test) => {
    test('Show default button', ({ when, then, and }) => {
        let button;
        when(/^rendering button component with text "(.*)"$/, (text) => {
            button = renderer.create(<Button label={text} />);
        });

        then(/^the button has classes "(.*)"$/, (classes) => {
            const tree = button.toJSON();
            expect(tree.props.className.indexOf(classes)).toBeGreaterThan(-1);
        });

        and(/^the button has text "(.*)"$/, (text) => {
            const tree = button.toJSON();
            expect(tree.children[0]).toBe(text);
        });
    });
});
