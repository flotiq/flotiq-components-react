import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Code, { codePropTypes } from '../Code/Code';
import Delimiter, { delimiterPropTypes } from '../Delimiter/Delimiter';
import File, { filePropTypes } from '../File/File';
import Header, { headerPropTypes } from '../Header/Header';
import List, { listPropTypes } from '../List/List';
import Paragraph, { paragraphPropTypes } from '../Paragraph/Paragraph';
import Quote, { quotePropTypes } from '../Quote/Quote';
import Table, { tablePropTypes } from '../Table/Table';
import Warning, { warningPropTypes } from '../Warning/Warning';
import YouTubeEmbed, { youTubeEmbedPropTypes } from '../YouTubeEmbed/YouTubeEmbed';

export const defaults = {
    headerProps: {},
    paragraphProps: {},
    youTubeEmbedProps: {},
    fileProps: {},
    quoteProps: {},
    tableProps: {},
    codeProps: {},
    warningProps: {},
    delimiterProps: {},
    listProps: {},
    standardPadding: 'py-2',
    additionalClasses: [],
};

/**
 * Component for displaying contents of block fields (editor.js)
 */
const Content = ({
    blocks,
    highlight,
    headerProps = defaults.headerProps,
    paragraphProps = defaults.paragraphProps,
    youTubeEmbedProps = defaults.youTubeEmbedProps,
    fileProps = defaults.fileProps,
    quoteProps = defaults.quoteProps,
    tableProps = defaults.tableProps,
    codeProps = defaults.codeProps,
    warningProps = defaults.warningProps,
    delimiterProps = defaults.delimiterProps,
    listProps = defaults.listProps,
    additionalClasses = defaults.additionalClasses,
    standardPadding = defaults.standardPadding,
    ...props
}) => {
    useEffect(() => {
        if (highlight) {
            highlight.highlightAll();
        }
    }, [highlight]);

    const getBlock = (block) => {
        switch (block.type) {
        case 'header':
            return (
                <Header
                    level={block.data.level}
                    anchor={block.data.anchor}
                    alignment={block.tunes?.alignmentTuneTool?.alignment}
                    {...headerProps}
                    key={block.id}
                >
                    {block.data.text}
                </Header>
            );
        case 'paragraph':
            return (
                <Paragraph
                    alignment={block.tunes?.alignmentTuneTool?.alignment}
                    {...paragraphProps}
                    key={block.id}
                >
                    {block.data.text}
                </Paragraph>
            );
        case 'list':
            return (
                <List
                    items={block.data.items}
                    style={block.data.style}
                    {...listProps}
                    key={block.id}
                />
            );
        case 'image':
            return (
                <File
                    url={block.data.url}
                    caption={block.data.caption}
                    fileName={block.data.fileName}
                    extension={block.data.extension}
                    stretched={!!block.data.stretched}
                    {...fileProps}
                    key={block.id}
                />
            );
        case 'quote':
            return (
                <Quote
                    text={block.data.text}
                    caption={block.data.caption}
                    {...quoteProps}
                    key={block.id}
                />
            );
        case 'youtubeEmbed':
            return (
                <YouTubeEmbed
                    url={block.data.url}
                    key={block.id}
                    {...youTubeEmbedProps}
                />
            );
        case 'table':
            return (
                <Table
                    content={block.data.withHeadings ? block.data.content.slice(1) : block.data.content}
                    headers={block.data.withHeadings ? block.data.content[0] : []}
                    {...tableProps}
                    key={block.id}
                />
            );
        case 'code':
            return (
                <Code
                    {...codeProps}
                    key={block.id}
                >
                    {block.data.code}
                </Code>
            );
        case 'warning':
            return (
                <Warning
                    title={block.data.title}
                    message={block.data.message}
                    {...warningProps}
                    key={block.id}
                />
            );
        case 'delimiter':
            return <Delimiter {...delimiterProps} />;
        default:
            return null;
        }
    };

    return (
        <div className={additionalClasses.join(' ')} {...props}>
            {blocks.map((block) => (
                <div className={standardPadding} key={block.id}>
                    { getBlock(block) }
                </div>
            ))}
        </div>
    );
};

Content.propTypes = {
    /**
     * Content blocks
     */
    blocks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    /**
     * Additional props for header component, for more information check Header component
     */
    headerProps: PropTypes.shape(headerPropTypes),
    /**
     * Additional props for paragraph component, for more information check Paragraph component
     */
    paragraphProps: PropTypes.shape(paragraphPropTypes),
    /**
     * Additional props for YouTube embed component, for more information check YouTubeEmbed component
     */
    youTubeEmbedProps: PropTypes.shape(youTubeEmbedPropTypes),
    /**
     * Additional props for file components, for more information check File component
     */
    fileProps: PropTypes.shape(filePropTypes),
    /**
     * Additional props for quote component, for more information check Quote components
     */
    quoteProps: PropTypes.shape(quotePropTypes),
    /**
     * Additional props for table component, for more information check Table component
     */
    tableProps: PropTypes.shape(tablePropTypes),
    /**
     * Additional props for code component, for more information check Code component
     */
    codeProps: PropTypes.shape(codePropTypes),
    /**
     * Additional props for warning component, for more information check Warning component
     */
    warningProps: PropTypes.shape(warningPropTypes),
    /**
     * Additional props for delimiter component, for more information check Delimiter component
     */
    delimiterProps: PropTypes.shape(delimiterPropTypes),
    /**
     * Additional components for list component, for more information check List component
     */
    listProps: PropTypes.shape(listPropTypes),
    /**
     * Standard horizontal padding for block components
     */
    standardPadding: PropTypes.string,
    /**
     * Additional classes for content container
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

export default Content;
