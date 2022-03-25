// eslint-disable-next-line import/no-extraneous-dependencies
import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { Header } from '../../dist/index';

const feature = loadFeature('./specs/features/header.feature');

defineFeature(feature, (test) => {
    test('Show default header', ({ when, then, and }) => {
        let header;
        when(/^rendering header component with text "(.*)"$/, (text) => {
            header = renderer.create(<Header>{text}</Header>);
        });

        then(/^the header has classes "(.*)"$/, (classes) => {
            const tree = header.toJSON();
            expect(tree.props.className.indexOf(classes)).toBeGreaterThan(-1);
        });

        and(/^the header has text "(.*)"$/, (text) => {
            const tree = header.toJSON();
            expect(tree.props.dangerouslySetInnerHTML.__html).toBe(text);
        });
    });
});
