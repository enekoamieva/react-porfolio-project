//Styled
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    /*** NORMALIZE ***/
    /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
    html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}


    /* apply a natural box layout model to all elements, but allowing components to change */
    html {
        box-sizing: border-box;
        font-size: 62.5%; /* Now 10px = 1rem! */
    }
    
    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-size: 16px; /* px fallback */
        font-size: 1.6rem; /* default font-size for document */
        line-height: 1.5; /* a nice line-height */
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }

    button {
        font-weight: 700;
        font-size: 1.6rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: #fff;
        transition: all 0.5 ease;

        &:hover {
            background: #23d997;
            color: #fff
        }
    }


    h2 {
        font-weight: lighter;
        font-size: 4rem;
        margin: 0;
    }

    h3 {
        color: #fff;
        margin: 0;
    }

    h4 {
        font-weight: 700;
        color: #23d997;
        margin: 0;
    }

    span {
        font-weight: 700;
        color: #23d997;
    }

    p {
        padding: 3rem 0;
        color: #ccc;
        line-height: 150%;
        font-size: 1.6rem;
    }
`;

export default GlobalStyle;