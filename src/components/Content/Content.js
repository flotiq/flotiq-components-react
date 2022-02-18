import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Code from '../Code/Code';
import Delimiter from '../Delimiter/Delimiter';
import File from '../File/File';
import Header from '../Header/Header';
import List from '../List/List';
import Paragraph from '../Paragraph/Paragraph';
import Quote from '../Quote/Quote';
import Table from '../Table/Table';
import Warning from '../Warning/Warning';
import YouTubeEmbed from '../YouTubeEmbed/YouTubeEmbed';

/**
 * Component for displaying contents of block fields (editor.js)
 */
const Content = ({
    blocks,
    highlight,
    headerProps,
    paragraphProps,
    youTubeEmbedProps,
    fileProps,
    quoteProps,
    tableProps,
    codeProps,
    warningProps,
    delimiterProps,
    listProps,
    additionalClasses,
    standardPadding,
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
                    text={block.data.text}
                    anchor={block.data.anchor}
                    alignment={block.tunes?.alignmentTuneTool?.alignment}
                    {...headerProps}
                    key={block.id}
                />
            );
        case 'paragraph':
            return (
                <Paragraph
                    text={block.data.text}
                    alignment={block.tunes?.alignmentTuneTool?.alignment}
                    {...paragraphProps}
                    key={block.id}
                />
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
                    stretched={block.data.stretched}
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
                    headers={block.data.withHeadings ? block.data.content[0] : null}
                    {...tableProps}
                    key={block.id}
                />
            );
        case 'code':
            return (
                <Code
                    code={block.data.code}
                    {...codeProps}
                    key={block.id}
                />
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
     * Additional props for header component
     */
    headerProps: PropTypes.shape({}),
    /**
     * Additional props for paragraph component
     */
    paragraphProps: PropTypes.shape({}),
    /**
     * Additional props for YouTube embed component
     */
    youTubeEmbedProps: PropTypes.shape({}),
    /**
     * Additional props for file components
     */
    fileProps: PropTypes.shape({}),
    /**
     * Additional props for quote component
     */
    quoteProps: PropTypes.shape({}),
    /**
     * Additional props for table component
     */
    tableProps: PropTypes.shape({}),
    /**
     * Additional props for code component
     */
    codeProps: PropTypes.shape({}),
    /**
     * Additional props for warning component
     */
    warningProps: PropTypes.shape({}),
    /**
     * Additional props for delimiter component
     */
    delimiterProps: PropTypes.shape({}),
    /**
     * Additional components for list component
     */
    listProps: PropTypes.shape({}),
    /**
     * Standard horizontal padding for block components
     */
    standardPadding: PropTypes.string,
    /**
     * Additional classes for content container
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Content.defaultProps = {
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

export default Content;
