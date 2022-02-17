// eslint-disable-next-line import/no-extraneous-dependencies
import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { Announcement } from '../../dist/index';

const feature = loadFeature('./specs/features/announcement.feature');

defineFeature(feature, (test) => {
    test('Show default announcement', ({ when, then, and }) => {
        let announcement;
        when(/^rendering announcement component with text "(.*)"$/, (text) => {
            announcement = renderer.create(<Announcement content={text} />);
        });

        then(/^the announcement has classes "(.*)"$/, (classes) => {
            const tree = announcement.toJSON();
            expect(tree.props.className.indexOf(classes)).toBeGreaterThan(-1);
        });

        and(/^the announcement has text "(.*)"$/, (text) => {
            const tree = announcement.toJSON();
            expect(tree.children[0]).toBe(text);
        });
    });
});
