// eslint-disable-next-line import/no-extraneous-dependencies
import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
import renderer from 'react-test-renderer';
import { Audio } from '../../dist/index';

const feature = loadFeature('./specs/features/audio.feature');

defineFeature(feature, (test) => {
    test('Shows audio component with correct file', ({ and, when, then }) => {
        let audio;
        when(/^rendering audio component with url "(.*)" and extension "(.*)"$/, (url, extension) => {
            audio = renderer.create(<Audio url={url} extension={extension} />);
        });

        then(/^the source has type equal to "(.*)"$/, (type) => {
            const tree = audio.toJSON();
            expect(tree.children[0].children[0].props.type).toBe(type);
        });

        and(/^the source has url equal to "(.*)"$/, (url) => {
            const tree = audio.toJSON();
            expect(tree.children[0].children[0].props.src).toBe(url);
        });
    });
});
