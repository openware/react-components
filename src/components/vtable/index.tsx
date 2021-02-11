import React, { useCallback, useMemo } from 'react';
import { List, AutoSizer, ListRowProps } from 'react-virtualized';
import classNames from 'classnames';

import './index.scss';

import { VCell } from './vcell';

export type VColumnAlign = 'left' | 'center' | 'right';

export interface VColumnProps<TItem = any> {
    accessor: (item: TItem, index: number) => React.ReactNode;
    header: (() => string) | string | React.ReactNode;
    headerStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    className?: string | ((item: TItem) => string);
    align?: VColumnAlign;
}

interface Props<T> {
    columns: VColumnProps<T>[];
    data: T[];
    rowHeight?: number;
    loading?: boolean;
    emptyContent?: React.ReactNode;
    loadingContent?: React.ReactNode;
    className?: string;
}

export function VTable<T>({
    columns,
    data = [],
    rowHeight = 26,
    emptyContent = 'No Data',
    loading,
    loadingContent = 'Loading',
    className,
}: Props<T>): JSX.Element {
    const handleRowRenderer = useCallback(
        ({ key, index, style }: ListRowProps) => {
            const rowData = data[index];
            return (
                <div key={key} className="vtable__row-wrapper" style={style}>
                    <div className="vtable__row">
                        {columns.map(
                            ({ accessor, style, className, align }, i) => {
                                return (
                                    <div
                                        key={i}
                                        className={classNames('vtable__cell', {
                                            [`vtable__cell--${align}`]: !!align,
                                        })}
                                        style={style}>
                                        <VCell
                                            className={
                                                typeof className === 'function'
                                                    ? className(rowData)
                                                    : className
                                            }>
                                            {accessor(rowData, index)}
                                        </VCell>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            );
        },
        [data, columns]
    );

    const columnsContent = useMemo(() => {
        return columns.map(({ headerStyle, header, align }, i) => {
            const content = typeof header === 'function' ? header() : header;
            return (
                <div
                    key={i}
                    style={headerStyle}
                    className={classNames('vtable__header-cell', {
                        [`vtable__header-cell--${align}`]: !!align,
                    })}>
                    <VCell>{content}</VCell>
                </div>
            );
        });
    }, [columns]);

    return (
        <div className={classNames('vtable', className)}>
            <div className="vtable__header">{columnsContent}</div>
            <div className="vtable__body">
                <AutoSizer>
                    {({ width, height }) => {
                        return (
                            <List
                                rowHeight={rowHeight}
                                rowCount={data.length}
                                rowRenderer={handleRowRenderer}
                                width={width}
                                height={height}
                                className="vtable__body-list"
                                noRowsRenderer={() => (
                                    <div className="n-table__no-data">
                                        {loading
                                            ? loadingContent
                                            : emptyContent}
                                    </div>
                                )}
                            />
                        );
                    }}
                </AutoSizer>
            </div>
        </div>
    );
}
