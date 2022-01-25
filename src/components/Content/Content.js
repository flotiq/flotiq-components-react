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
    ...props
}) => {
    useEffect(() => {
        if (highlight) {
            highlight.highlightAll();
        }
    }, [highlight]);
    return (
        <div className={additionalClasses.join(' ')} {...props}>
            {blocks.map((block) => {
                switch (block.type) {
                case 'header':
                    return (
                        <Header
                            level={block.data.level}
                            text={block.data.text}
                            anchor={block.data.anchor}
                            alignement={block.tunes?.alignmentTuneTool?.alignment}
                            {...headerProps}
                            key={block.id}
                        />
                    );
                case 'paragraph':
                    return (
                        <Paragraph
                            text={block.data.text}
                            alignement={block.tunes?.alignementTuneTool?.alignement}
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
                            rounded="none"
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
                            content={block.data.content}
                            withHeadings={block.data.withHeadings}
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
            })}
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
    headerProps: PropTypes.shape(Header.defaultProps),
    /**
     * Additional props for paragraph component
     */
    paragraphProps: PropTypes.shape(Paragraph.defaultProps),
    /**
     * Additional props for YouTube embed component
     */
    youTubeEmbedProps: PropTypes.shape(YouTubeEmbed.defaultProps),
    /**
     * Additional props for file components
     */
    fileProps: PropTypes.shape(File.defaultProps),
    /**
     * Additional props for quote component
     */
    quoteProps: PropTypes.shape(Quote.defaultProps),
    /**
     * Additional props for table component
     */
    tableProps: PropTypes.shape(Table.defaultProps),
    /**
     * Additional props for code component
     */
    codeProps: PropTypes.shape(Code.defaultProps),
    /**
     * Additional props for warning component
     */
    warningProps: PropTypes.shape(Warning.defaultProps),
    /**
     * Additional props for delimiter component
     */
    delimiterProps: PropTypes.shape(Delimiter.defaultProps),
    /**
     * Additional components for list component
     */
    listProps: PropTypes.shape(List.defaultProps),
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
    additionalClasses: [],
};

export default Content;
