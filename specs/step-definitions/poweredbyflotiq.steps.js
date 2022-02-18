// eslint-disable-next-line import/no-extraneous-dependencies
import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { PoweredByFlotiq } from '../../dist/index';

const feature = loadFeature('./specs/features/poweredbyflotiq.feature');

defineFeature(feature, (test) => {
    test('Show default component', ({ when, then }) => {
        let code;
        when(/^rendering component$/, () => {
            code = renderer.create(<PoweredByFlotiq />);
        });

        then(/^the component has text "(.*)"$/, (text) => {
            const tree = code.toJSON();
            expect(tree.children[1].children[0].children[0]).toBe(text);
        });
    });
});
