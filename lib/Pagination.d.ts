import * as React from 'react';
import { PropTypes, StandardProps } from '@material-ui/core';
import { PageButtonClassKey } from './PageButton';
export declare type PaginationClassKey = PageButtonClassKey;
export interface PaginationProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>, PaginationClassKey, 'onClick'> {
    limit: number;
    offset: number;
    total: number;
    centerRipple?: boolean;
    component?: React.ReactType<PaginationProps>;
    currentPageColor?: PropTypes.Color;
    disabled?: boolean;
    disableFocusRipple?: boolean;
    disableRipple?: boolean;
    fullWidth?: boolean;
    innerButtonCount?: number;
    nextPageLabel?: React.ReactNode;
    onClick?: ((ev: React.MouseEvent<HTMLElement>, offset: number) => void);
    otherPageColor?: PropTypes.Color;
    outerButtonCount?: number;
    previousPageLabel?: React.ReactNode;
    reduced?: boolean;
    size?: 'small' | 'medium' | 'large';
}
declare const PaginationWithStyles: React.ComponentType<PaginationProps>;
export default PaginationWithStyles;
