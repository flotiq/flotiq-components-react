// eslint-disable-next-line import/no-extraneous-dependencies
import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { Quote } from '../../dist/index';

const feature = loadFeature('./specs/features/quote.feature');

defineFeature(feature, (test) => {
    test('Show default quote', ({ when, then, and }) => {
        let quote;
        when(/^rendering quote component with text "(.*)" and caption "(.*)"$/, (text, caption) => {
            quote = renderer.create(<Quote text={text} caption={caption} />);
        });

        then(/^the quote has classes "(.*)"$/, (classes) => {
            const tree = quote.toJSON();
            expect(tree.children[0].props.className.indexOf(classes)).toBeGreaterThan(-1);
        });

        and(/^the quote has text "(.*)"$/, (text) => {
            const tree = quote.toJSON();
            expect(tree.children[0].children[0]).toBe(text);
        });
    });
});
