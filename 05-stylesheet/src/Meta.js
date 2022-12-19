/**
 * @filename: Meta.js
 * @description: <head>태그 내의 SEO 처리 및 기본 참조 리소스 명시
 * @author: Jeong Y.E (jye104@nate.com)
 */
/** 패키지 참조 */
// 기본 참조 객체
import React from "react";
// SEO 처리 기능 패키지
import { Helmet, HelmetProvider } from "react-helmet-async";
// 미리보기 이미지 샘플
import sample from './assets/img/sample.png';
/**
 * SEO 처리 컴포넌트
 * @param props
 * @returns {JSX.Element}
 */

const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charset='utf-8' />
                <title>{props.title}</title>
                {/* SEO 태그 */}
                <meta name="description" content={props.description} />
                <meta name="keywords" content={props.keywords} />
                <meta name="author" content={props.author} />
                <meta name="subject" content={props.subject} />
                <meta name="copyright" content={props.copyright} />
                <meta name="content-language" content="ko" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={props.title} />
                <meta property="og:description" content={props.description} />
                <meta property="og:url" content={props.url} />
                <meta property="og:image" content={props.image} />
                <link rel="icon" href={props.icon} type="images/png" />
                <link rel="shortcut" href={props.shortcutIcon} type="images/png" />
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
    author: '예은',
    subject: 'React.js Frontend Programming',
    copyright: 'Jeong Y.E',
    keywords: 'React',
    url: window.location.href,
    image: sample,
    icon: null,
    shortcutIcon: null,
    appleTouchIcon: null
};

export default Meta ;