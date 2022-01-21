import React from 'react';

import { Content } from '../index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/Content',
    component: Content,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        alignement: { control: 'select' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Content {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    blocks: [
        {
            id: 'dPSax4QzPU',
            data: {
                text: 'Example level 2 header',
                level: 2,
                anchor: 'anchor',
            },
            type: 'header',
            tunes: {
                alignmentTuneTool: {
                    alignment: 'center',
                },
            },
        },
        {
            id: 'i5RZbGlOWy',
            data: {
                text: '<b>Exaple</b> <i>paragraph </i>with formatting',
            },
            type: 'paragraph',
            tunes: {
                alignmentTuneTool: {
                    alignment: 'left',
                },
            },
        },
        {
            id: 'oCJRGb2FFb',
            data: {
                items: [
                    {
                        items: [
                            {
                                items: [],
                                content: 'Example <i>list</i>',
                            },
                        ],
                        content: 'Exaple list',
                    },
                ],
                style: 'ordered',
            },
            type: 'list',
        },
        {
            id: 'XB_EtsgceZ',
            data: {
                items: [
                    {
                        items: [
                            {
                                items: [],
                                content: 'Example bullet list',
                            },
                        ],
                        content: 'Example bullet <b>list</b>',
                    },
                ],
                style: 'unordered',
            },
            type: 'list',
        },
        {
            id: 'zX1gTCKJee',
            data: {
                url: 'https://api.flotiq.com/image/0x0/_media-3a62e398-fbe3-46e8-ba5b-05a2690390ae.png',
                width: 1328,
                height: 758,
                caption: 'Example Caption',
                fileName: 'example.png',
                extension: 'png',
                stretched: true,
                withBorder: true,
                withBackground: true,
            },
            type: 'image',
        },
        {
            id: 'JIRwiQdzs9',
            data: {
                url: 'https://www.youtube.com/watch?v=w0JFqbDgKVQ',
            },
            type: 'youtubeEmbed',
        },
        {
            id: 'V7WlZmeTuJ',
            data: {
                text: 'Example quote',
                caption: 'Example quote caption',
                alignment: 'left',
            },
            type: 'quote',
        },
        {
            id: 'sVDwJq9ZCe',
            data: {
                title: 'Exaple warning name',
                message: 'Example warning message',
            },
            type: 'warning',
        },
        {
            id: 'RTJ0lo2VGB',
            data: [],
            type: 'delimiter',
        },
        {
            id: 'sVDwJq9ZCf',
            data: {
                code: 'npm run dev',
            },
            type: 'code',
        },
        {
            id: 'sVDwJq9ZCg',
            data: {
                content: [
                    [
                        'First header',
                        'Second header',
                        'Third header',
                    ],
                    [
                        'First column of the first row',
                        'Second column of the first row',
                        'Third column of the first row',
                    ],
                    [
                        'First column of the second row',
                        'Second column of the second row',
                        'Third column of the second row',
                    ],
                ],
                withHeadings: true,
            },
            type: 'table',
        },
    ],
};
