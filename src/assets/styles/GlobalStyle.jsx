import { createGlobalStyle } from 'styled-components';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'KOTRA_BOLD-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.1/KOTRA_BOLD-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'KOTRA_BOLD-Bold', sans-serif;
}


@media screen and (max-width:576px) {
  html {
    font-size: 7px;
  }   
}

@media (min-width: 576px) and (max-width: 768px) {
  html {
  font-size: 8px;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  html {
    font-size: 9px;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  html {
    font-size: 10px;
  }
}

@media (min-width: 1201px) {
  html {
    font-size: 10px;
  }
}

* {
  box-sizing: border-box;
  font-family: 'Gothic A1', sans-serif;
  background-color: "#635151";

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  outline: none;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}

.highcharts-credits {
  display: none;
}

button {
  padding: 0; 
  background: inherit; 
  border: none; 
  box-shadow: none; 
  border-radius: 0; 
  overflow: visible; 
  cursor: pointer;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
}

body {
  line-height: 1;
}

// ol 태그 사용할 때 number가 나타나지 않는 문제가 생겨 ul, ol, li 서로 따로 분리하여 스타일 적용
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

ol {
  margin: 0;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: #f5f5f4;
    border-radius: 22px;
  }

  &::-webkit-scrollbar-thumb {
    width: 100px;
    height: 4px;
    background-color: #c5cae9;
    border-radius: 22px;
  }
}

a {
  text-decoration: none;
}
`;

export default GlobalStyle;
