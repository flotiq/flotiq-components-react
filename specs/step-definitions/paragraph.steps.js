// eslint-disable-next-line import/no-extraneous-dependencies
import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { Paragraph } from '../../dist/index';

const feature = loadFeature('./specs/features/paragraph.feature');

defineFeature(feature, (test) => {
    test('Show default paragraph', ({ when, then }) => {
        let paragraph;
        when(/^rendering paragraph component with text "(.*)"$/, (text) => {
            paragraph = renderer.create(<Paragraph text={text} />);
        });

        then(/^the paragraph has text "(.*)"$/, (text) => {
            const tree = paragraph.toJSON();
            expect(tree.props.dangerouslySetInnerHTML.__html).toBe(text);
        });
    });
});
