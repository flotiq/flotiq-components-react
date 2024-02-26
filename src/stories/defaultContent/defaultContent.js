export const blocks = [
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
            text: '<b>Example</b> <i>paragraph </i>with formatting.'
                + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                + ' Donec condimentum augue vitae rhoncus vehicula.'
                + ' Phasellus aliquam leo eu porta scelerisque. In et vestibulum ex. Aliquam erat volutpat.'
                + ' Nullam vehicula tortor vitae lorem egestas imperdiet.'
                + ' Vestibulum molestie sem mollis, commodo neque vitae, posuere urna.'
                + ' Integer malesuada congue dui vel tincidunt.'
                + ' Nunc dictum diam et nibh ultricies, et luctus lorem porttitor.',
        },
        type: 'paragraph',
        tunes: {
            alignmentTuneTool: {
                alignment: 'left',
            },
        },
    },
    {
        id: 'V7WlZmeTuJ',
        data: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                + ' Donec condimentum augue vitae rhoncus vehicula.'
                + ' Phasellus aliquam leo eu porta scelerisque. In et vestibulum ex. Aliquam erat volutpat.'
                + ' Nullam vehicula tortor vitae lorem egestas imperdiet.'
                + ' Vestibulum molestie sem mollis, commodo neque vitae, posuere urna.'
                + ' Integer malesuada congue dui vel tincidunt.'
                + ' Nunc dictum diam et nibh ultricies, et luctus lorem porttitor.',
            caption: 'Example quote caption',
            alignment: 'left',
        },
        type: 'quote',
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
                    content: 'Example list',
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
            caption: 'Example <b>Caption</b> <i>with</i> link to <a href="http://flotiq.com">flotiq.com</a>',
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
        id: 'sVDwJq9ZCe',
        data: {
            title: 'Example warning name',
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
            code: '```javascript```\n'
                + 'const example = "Flotiq is great!"',
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
];

export const list = [{
    content: 'Lorem ipsum',
    items: [
        {
            content: 'Lorem ipsum',
            items: [
                {
                    content: 'Lorem ipsum',
                    items: [
                        {
                            content: 'Lorem ipsum',
                            items: [
                                {
                                    content: 'Lorem ipsum',
                                    items: [
                                        {
                                            content: 'Lorem ipsum',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}, {
    content: 'Dolor sit amet',
}, {
    content: 'Donec condimentum augue vitae rhoncus vehicula',
}];

export const table = [
    ['lorem', 'ipsum', 'dolor'],
    ['sit', 'amet', 'lorem'],
    ['ipsum', 'dolor', 'sit'],
];
