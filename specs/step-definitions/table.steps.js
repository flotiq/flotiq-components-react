// eslint-disable-next-line import/no-extraneous-dependencies
import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { Table } from '../../dist/index';

const feature = loadFeature('./specs/features/table.feature');

defineFeature(feature, (test) => {
    test('Show default table', ({ when, then }) => {
        let table;
        when(/^rendering table component with content from "(.*)"$/, (fileName) => {
            // eslint-disable-next-line import/no-dynamic-require
            const data = require(`../data/${fileName}`);
            table = renderer.create(<Table content={data} />);
        });

        then(/^the table has text "(.*)"$/, (text) => {
            const tree = table.toJSON();
            expect(tree.children[0].children[0].children[0].children[0]).toBe(text);
        });
    });
});
