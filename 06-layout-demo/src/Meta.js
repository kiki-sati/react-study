import React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';

const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet='utf-8'/>
                <title>{props.title}</title>
                {/*SEO 태그*/}
                <meta name='description' content={props.description}/>
                <meta name='keywords' content={props.keywords}/>
                <meta name='author' content={props.author}/>
                <meta name='subject' content={props.subject}/>
                <meta name='copyright' content={props.copyright}/>
                <meta name='content-language' content="ko"/>
                <meta property='og:type' content='website'/>
                <meta property='og:title' content={props.title}/>
                <meta property='og:description' content={props.description}/>
                <meta property='og:url' content={props.url}/>
                <meta property='og:image' content={props.image}/>
                <link rel="icon" href={props.icon} type="image/png" />
                <link rel="shortcut icon" href={props.shortcutIcon} type="image/png" />
                <link rel="apple-touch-icon" href={props.appleTouchIcon} type="image/png" />
                {/* 구글 웹폰트 사용 */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,regular,500,700,900" rel="stylesheet" />


            </Helmet>
        </HelmetProvider>
    );
};

/**
 * props에 대한 기본값 설정
 */
Meta.defaultProps = {
    title: 'React Example',
    description: 'React.js 예제입니다.',
    author: '름름이',
    subject: 'React.js Frontend Programming',
    copyright: 'kimrumm',
    keywords: 'React',
    url: window.location.href,
    icon: null,
    shortcutIcon: null,
    appleTouchIcon: null
};

export default Meta;
