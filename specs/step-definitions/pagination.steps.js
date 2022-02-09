// eslint-disable-next-line import/no-extraneous-dependencies
import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { Pagination } from '../../dist/index';

const feature = loadFeature('./specs/features/pagination.feature');

defineFeature(feature, (test) => {
    test('Show default pagination', ({ when, then }) => {
        let pagination;
        when(
            /^rendering pagination component with page number (\d*) and number of pages (\d*)$/,
            (page, numOfPages) => {
                pagination = renderer.create(
                    <Pagination page={parseInt(page, 10)} numOfPages={parseInt(numOfPages, 10)} />,
                );
            },
        );

        then(/^the pagination nav element has (\d*) children$/, (numOfChildren) => {
            const tree = pagination.toJSON();
            expect(tree.children[0].children[0].children.length).toBe(parseInt(numOfChildren, 10));
        });
    });
});
