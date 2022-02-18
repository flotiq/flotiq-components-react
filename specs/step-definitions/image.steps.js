// eslint-disable-next-line import/no-extraneous-dependencies
import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { Image } from '../../dist/index';

const feature = loadFeature('./specs/features/image.feature');

defineFeature(feature, (test) => {
    test('Show default image', ({ when, then }) => {
        let image;
        when(/^rendering image component with url "(.*)"$/, (url) => {
            image = renderer.create(<Image url={url} />);
        });

        then(/^the image has src "(.*)"$/, (src) => {
            const tree = image.toJSON();
            expect(tree.props.src).toBe(src);
        });
    });
});
