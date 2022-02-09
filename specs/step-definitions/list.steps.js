// eslint-disable-next-line import/no-extraneous-dependencies
import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { List } from '../../dist/index';

const feature = loadFeature('./specs/features/list.feature');

defineFeature(feature, (test) => {
    test('Show default list', ({ when, then, and }) => {
        let list;
        when(/^rendering list component with content from file "(.*)"$/, (fileName) => {
            // eslint-disable-next-line import/no-dynamic-require
            const data = require(`../data/${fileName}`);
            list = renderer.create(<List items={data} />);
        });

        then(/^the list has text "(.*)"$/, (text) => {
            const tree = list.toJSON();
            expect(tree.children[0].props.dangerouslySetInnerHTML.__html).toBe(text);
        });
    });
});
