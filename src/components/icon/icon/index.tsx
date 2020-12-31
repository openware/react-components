import React, { SVGAttributes } from 'react';
import classNames from 'classnames';
import { OwIconName } from '../names';

import './index.scss';

// Prepare icons:
// 1. Remove width and height attributes
import Apps from '../svg/apps.svg';
import ArrowBack from '../svg/arrow-back.svg';
import ArrowBackIos from '../svg/arrow-back-ios.svg';
import ArrowDownward from '../svg/arrow-downward.svg';
import ArrowDropDown from '../svg/arrow-drop-down.svg';
import ArrowDropUp from '../svg/arrow-drop-up.svg';
import ArrowForward from '../svg/arrow-forward.svg';
import ArrowForwardIos from '../svg/arrow-forward-ios.svg';
import ArrowLeft from '../svg/arrow-left.svg';
import ArrowRight from '../svg/arrow-right.svg';
import ArrowUpward from '../svg/arrow-upward.svg';
import BarChart from '../svg/bar-chart.svg';
import Calendar from '../svg/calendar.svg';
import Close from '../svg/close.svg';
import CloseCircle from '../svg/close-circle.svg';
import Dashboard from '../svg/dashboard.svg';
import Done from '../svg/done.svg';
import Download from '../svg/download.svg';
import ExitToApp from '../svg/exit-to-app.svg';
import Facebook from '../svg/facebook.svg';
import FacebookCircle from '../svg/facebook-circle.svg';
import HelpCircle from '../svg/help-circle.svg';
import HelpOutline from '../svg/help-outline.svg';
import History from '../svg/history.svg';
import KeyboardArrowDown from '../svg/keyboard-arrow-down.svg';
import KeyboardArrowLeft from '../svg/keyboard-arrow-left.svg';
import KeyboardArrowRight from '../svg/keyboard-arrow-right.svg';
import KeyboardArrowUp from '../svg/keyboard-arrow-up.svg';
import Linkedin from '../svg/linkedin.svg';
import Linkedincircle from '../svg/linkedin-circle.svg';
import Lock from '../svg/lock.svg';
import LockOpenOutline from '../svg/lock-open-outline.svg';
import LockOutline from '../svg/lock-outline.svg';
import Logout from '../svg/logout.svg';
import Menu from '../svg/menu.svg';
import Person from '../svg/person.svg';
import PersonOutline from '../svg/person-outline.svg';
import PieChart from '../svg/pie-chart.svg';
import Reddit from '../svg/reddit.svg';
import RedditCircle from '../svg/reddit-circle.svg';
import Search from '../svg/search.svg';
import Security from '../svg/security.svg';
import Settings from '../svg/settings.svg';
import Share from '../svg/share.svg';
import Shield from '../svg/shield.svg';
import ShowChart from '../svg/show-chart.svg';
import Sun from '../svg/sun.svg';
import Telegram from '../svg/telegram.svg';
import TelegramCircle from '../svg/telegram-circle.svg';
import Time from '../svg/time.svg';
import Twitter from '../svg/twitter.svg';
import TwitterCircle from '../svg/twitter-circle.svg';
import Wallet from '../svg/wallet.svg';
import Youtube from '../svg/youtube.svg';
import YoutubeCircle from '../svg/youtube-circle.svg';
import Moon from '../svg/moon.svg';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface OwIconProps extends SVGAttributes<any> {
    name: OwIconName;
}

export const OwIcon: React.FC<OwIconProps> = ({
    name,
    className,
    ...props
}) => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const svgAttrs: Partial<SVGAttributes<any>> = {
        className: classNames('ow-icon', className),
        fill: 'currentColor',
        ...props,
    };

    switch (name) {
        case 'apps':
            return <Apps {...svgAttrs} />;
        case 'arrow-back':
            return <ArrowBack {...svgAttrs} />;
        case 'arrow-back-ios':
            return <ArrowBackIos {...svgAttrs} />;
        case 'arrow-downward':
            return <ArrowDownward {...svgAttrs} />;
        case 'arrow-drop-down':
            return <ArrowDropDown {...svgAttrs} />;
        case 'arrow-drop-up':
            return <ArrowDropUp {...svgAttrs} />;
        case 'arrow-forward':
            return <ArrowForward {...svgAttrs} />;
        case 'arrow-forward-ios':
            return <ArrowForwardIos {...svgAttrs} />;
        case 'arrow-left':
            return <ArrowLeft {...svgAttrs} />;
        case 'arrow-right':
            return <ArrowRight {...svgAttrs} />;
        case 'arrow-upward':
            return <ArrowUpward {...svgAttrs} />;
        case 'bar-chart':
            return <BarChart {...svgAttrs} />;
        case 'calendar':
            return <Calendar {...svgAttrs} />;
        case 'close':
            return <Close {...svgAttrs} />;
        case 'close-circle':
            return <CloseCircle {...svgAttrs} />;
        case 'dashboard':
            return <Dashboard {...svgAttrs} />;
        case 'done':
            return <Done {...svgAttrs} />;
        case 'download':
            return <Download {...svgAttrs} />;
        case 'exit-to-app':
            return <ExitToApp {...svgAttrs} />;
        case 'facebook':
            return <Facebook {...svgAttrs} />;
        case 'facebook-circle':
            return <FacebookCircle {...svgAttrs} />;
        case 'help-circle':
            return <HelpCircle {...svgAttrs} />;
        case 'help-outline':
            return <HelpOutline {...svgAttrs} />;
        case 'history':
            return <History {...svgAttrs} />;
        case 'keyboard-arrow-down':
            return <KeyboardArrowDown {...svgAttrs} />;
        case 'keyboard-arrow-left':
            return <KeyboardArrowLeft {...svgAttrs} />;
        case 'keyboard-arrow-right':
            return <KeyboardArrowRight {...svgAttrs} />;
        case 'keyboard-arrow-up':
            return <KeyboardArrowUp {...svgAttrs} />;
        case 'linkedin':
            return <Linkedin {...svgAttrs} />;
        case 'linkedin-circle':
            return <Linkedincircle {...svgAttrs} />;
        case 'lock':
            return <Lock {...svgAttrs} />;
        case 'lock-open-outline':
            return <LockOpenOutline {...svgAttrs} />;
        case 'lock-outline':
            return <LockOutline {...svgAttrs} />;
        case 'logout':
            return <Logout {...svgAttrs} />;
        case 'menu':
            return <Menu {...svgAttrs} />;
        case 'person':
            return <Person {...svgAttrs} />;
        case 'person-outline':
            return <PersonOutline {...svgAttrs} />;
        case 'pie-chart':
            return <PieChart {...svgAttrs} />;
        case 'reddit':
            return <Reddit {...svgAttrs} />;
        case 'reddit-circle':
            return <RedditCircle {...svgAttrs} />;
        case 'search':
            return <Search {...svgAttrs} />;
        case 'security':
            return <Security {...svgAttrs} />;
        case 'settings':
            return <Settings {...svgAttrs} />;
        case 'share':
            return <Share {...svgAttrs} />;
        case 'shield':
            return <Shield {...svgAttrs} />;
        case 'show-chart':
            return <ShowChart {...svgAttrs} />;
        case 'sun':
            return <Sun {...svgAttrs} />;
        case 'telegram':
            return <Telegram {...svgAttrs} />;
        case 'telegram-circle':
            return <TelegramCircle {...svgAttrs} />;
        case 'time':
            return <Time {...svgAttrs} />;
        case 'twitter':
            return <Twitter {...svgAttrs} />;
        case 'twitter-circle':
            return <TwitterCircle {...svgAttrs} />;
        case 'wallet':
            return <Wallet {...svgAttrs} />;
        case 'youtube':
            return <Youtube {...svgAttrs} />;
        case 'youtube-circle':
            return <YoutubeCircle {...svgAttrs} />;
        case 'moon':
            return <Moon {...svgAttrs} />;
        default:
            return null;
    }
};
