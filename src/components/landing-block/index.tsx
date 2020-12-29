import classNames from 'classnames';
import React, { useCallback, useMemo } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import ScrollableAnchor from 'react-scrollable-anchor';
import VisibilitySensor from 'react-visibility-sensor';

import './index.scss';

interface LandingBlockProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    contentClassName?: string;
    contentStyle?: React.CSSProperties;
    hashPath?: string;
    parallaxImagePath?: string;
    parallaxImageClassName?: string;
    onVisible?: (isVisible: boolean) => void;
}

export const LandingBlock: React.FC<LandingBlockProps> = ({
    children,
    className,
    style,
    contentClassName,
    contentStyle,
    hashPath,
    parallaxImagePath,
    parallaxImageClassName,
    onVisible,
}) => {
    const handleChange = useCallback(
        (isVisible) => {
            if (onVisible) {
                onVisible(isVisible);
            }
        },
        [onVisible]
    );

    // top - hide
    const content = useMemo(() => {
        return (
            <VisibilitySensor
                onChange={handleChange}
                partialVisibility={true}
                offset={{ top: 500, bottom: 600 }}>
                <div
                    className={classNames('landing-block', className)}
                    style={style}>
                    <div
                        className={classNames(
                            'landing-block__content',
                            contentClassName
                        )}
                        style={contentStyle}>
                        {children}
                    </div>
                </div>
            </VisibilitySensor>
        );
    }, [handleChange, className, children, contentClassName]);

    const scrollableContent = useMemo(() => {
        return hashPath ? (
            <ScrollableAnchor id={hashPath}>{content}</ScrollableAnchor>
        ) : (
            content
        );
    }, [content, hashPath]);

    return parallaxImagePath ? (
        <ParallaxBanner
            style={{
                height: 'auto',
                minHeight: '100vh',
            }}
            layers={[
                {
                    image: parallaxImagePath,
                    amount: 0.5,
                    props: {
                        className: parallaxImageClassName,
                    },
                },
            ]}>
            {scrollableContent}
        </ParallaxBanner>
    ) : (
        scrollableContent
    );
};
