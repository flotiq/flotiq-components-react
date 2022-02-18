// eslint-disable-next-line import/no-extraneous-dependencies
import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { Video } from '../../dist/index';

const feature = loadFeature('./specs/features/video.feature');

defineFeature(feature, (test) => {
    test('Show default video', ({ when, then }) => {
        let video;
        when(/^rendering video component with url "(.*)" and extension "(.*)"$/, (url, extension) => {
            video = renderer.create(<Video url={url} extension={extension} />);
        });

        then(/^the video has src "(.*)"$/, (text) => {
            const tree = video.toJSON();
            expect(tree.children[0].children[0].props.src).toBe(text);
        });
    });
});
