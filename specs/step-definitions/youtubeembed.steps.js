// eslint-disable-next-line import/no-extraneous-dependencies
import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { YouTubeEmbed } from '../../dist/index';

const feature = loadFeature('./specs/features/youtubeembed.feature');

defineFeature(feature, (test) => {
    test('Show default youtube embed', ({ when, then }) => {
        let youtube;
        when(/^rendering youtube component with url "(.*)"$/, (url) => {
            youtube = renderer.create(<YouTubeEmbed url={url} />);
        });

        then(/^the youtube has src "(.*)"$/, (src) => {
            const tree = youtube.toJSON();
            expect(tree.children[0].props.src).toBe(src);
        });
    });
});
