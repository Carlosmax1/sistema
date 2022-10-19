import styled from 'styled-components';

export const Pagina = styled.div`

    .csslider {
        position: relative;
    }

    .csslider>input {
        display: none;
    }

    .csslider>input:nth-of-type(4):checked~ul li:first-of-type {
        margin-left: -300%;
    }

    .csslider>input:nth-of-type(3):checked~ul li:first-of-type {
        margin-left: -200%;
    }

    .csslider>input:nth-of-type(2):checked~ul li:first-of-type {
        margin-left: -100%;
    }

    .csslider>input:nth-of-type(1):checked~ul li:first-of-type {
        margin-left: 0%;
    }

    .csslider>ul {
        position: relative;
        font-size: 0;
        line-height: 0;
        margin: 0 auto;
        padding: 0;
        overflow: hidden;
        white-space: nowrap;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .csslider>ul>li {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 100%;
        overflow: visible;
        font-size: 15px;
        font-size: initial;
        line-height: normal;
        -moz-transition: all 0.5s cubic-bezier(0.4, 1.3, 0.65, 1);
        -o-transition: all 0.5s ease-out;
        -webkit-transition: all 0.5s cubic-bezier(0.4, 1.3, 0.65, 1);
        transition: all 0.5s cubic-bezier(0.4, 1.3, 0.65, 1);
        vertical-align: top;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        white-space: normal;
    }

    .csslider>.navigation {
        position: absolute;
        bottom: 9%;
        left: 50%;
        z-index: 10;
        margin-bottom: -10px;
        font-size: 0;
        line-height: 0;
        text-align: center;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .csslider>.navigation>div {
        margin-left: -100%;
    }

    .csslider>.navigation label {
        position: relative;
        display: inline-block;
        cursor: pointer;
        border-radius: 50%;
        margin: 0 5px;
        background: #fff;
        width: 11px;
        height: 11px;
        transition: 0.5s all;
        -webkit-transition: 0.5s all;
        -moz-transition: 0.5s all;
        -o-transition: 0.5s all;
        -ms-transition: 0.5s all;
    }

    .csslider>.navigation label:hover:after {
        opacity: 1;
    }

    .csslider>.navigation label:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -6px;
        margin-top: -6px;
        background: #FF5722;
        border-radius: 50%;
        border: 3px solid #fff;
        opacity: 0;
        width: 13px;
        height: 13px;
        transition: 0.5s all;
        -webkit-transition: 0.5s all;
        -moz-transition: 0.5s all;
        -o-transition: 0.5s all;
        -ms-transition: 0.5s all;
    }

    .csslider.inside .navigation {
        bottom: 10px;
        margin-bottom: 10px;
    }

    .csslider.inside .navigation label {
        border: 1px solid #7e7e7e;
    }

    .csslider>input:nth-of-type(1):checked~.navigation label:nth-of-type(1):after,
    .csslider>input:nth-of-type(2):checked~.navigation label:nth-of-type(2):after,
    .csslider>input:nth-of-type(3):checked~.navigation label:nth-of-type(3):after {
        opacity: 1;
    }

    .csslider.infinity>input:first-of-type:checked~.arrows label.goto-last,
    .csslider>input:nth-of-type(1):checked~.arrows>label:nth-of-type(0),
    .csslider>input:nth-of-type(2):checked~.arrows>label:nth-of-type(1),
    .csslider>input:nth-of-type(3):checked~.arrows>label:nth-of-type(2) {
        display: block;
        left: 0;
        right: auto;
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .csslider.infinity>input:last-of-type:checked~.arrows label.goto-first,
    .csslider>input:nth-of-type(1):checked~.arrows>label:nth-of-type(2),
    .csslider>input:nth-of-type(2):checked~.arrows>label:nth-of-type(3) {
        display: block;
        right: 0;
        left: auto;
        -moz-transform: rotate(225deg);
        -ms-transform: rotate(225deg);
        -o-transform: rotate(225deg);
        -webkit-transform: rotate(225deg);
        transform: rotate(225deg);
    }

    /*#region MODULES */
    /* arrows left and right */
    .csslider>.arrows {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .csslider.inside .navigation {
        bottom: 10px;
        margin-bottom: 10px;
    }

    .csslider.inside .navigation label {
        border: 1px solid #7e7e7e;
    }

    .csslider>input:nth-of-type(1):checked~.navigation label:nth-of-type(1):after,
    .csslider>input:nth-of-type(2):checked~.navigation label:nth-of-type(2):after,
    .csslider>input:nth-of-type(3):checked~.navigation label:nth-of-type(3):after,
    .csslider>input:nth-of-type(4):checked~.navigation label:nth-of-type(4):after,
    .csslider>input:nth-of-type(5):checked~.navigation label:nth-of-type(5):after,
    .csslider>input:nth-of-type(6):checked~.navigation label:nth-of-type(6):after,
    .csslider>input:nth-of-type(7):checked~.navigation label:nth-of-type(7):after,
    .csslider>input:nth-of-type(8):checked~.navigation label:nth-of-type(8):after,
    .csslider>input:nth-of-type(9):checked~.navigation label:nth-of-type(9):after,
    .csslider>input:nth-of-type(10):checked~.navigation label:nth-of-type(10):after,
    .csslider>input:nth-of-type(11):checked~.navigation label:nth-of-type(11):after {
        opacity: 1;
    }

    .csslider>.arrows {
        position: absolute;
        top: 50%;
        width: 100%;
        height: 26px;
        z-index: 1;
        -moz-box-sizing: content-box;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
    }

    .csslider>.arrows label {
        display: none;
        position: absolute;
        top: -50%;
        padding: 9px;
        box-shadow: inset 2px -2px 0 1px #e8cd30;
        cursor: pointer;
        -moz-transition: box-shadow 0.15s, margin 0.15s;
        -o-transition: box-shadow 0.15s, margin 0.15s;
        -webkit-transition: box-shadow 0.15s, margin 0.15s;
        transition: box-shadow 0.15s, margin 0.15s;
    }

    .csslider>.arrows label:hover {
        box-shadow: inset 5px -2px 0 9px #e8cd30;
        margin: 0 0px;
    }

    .csslider>.arrows label:before {
        content: '';
        position: absolute;
        top: -100%;
        left: -100%;
        height: 300%;
        width: 300%;
    }


    @media screen and (max-width: 320px) {
        .csslider>.navigation label {
            border: 2px solid #fff;
        }
    }
    @media screen and (max-width: 568px) {
        .csslider.infinity>input:last-of-type:checked~.arrows label.goto-first, .csslider>input:nth-of-type(1):checked~.arrows>label:nth-of-type(2), .csslider>input:nth-of-type(2):checked~.arrows>label:nth-of-type(3), .csslider>input:nth-of-type(3):checked~.arrows>label:nth-of-type(4), .csslider>input:nth-of-type(4):checked~.arrows>label:nth-of-type(5), .csslider>input:nth-of-type(5):checked~.arrows>label:nth-of-type(6), .csslider>input:nth-of-type(6):checked~.arrows>label:nth-of-type(7), .csslider>input:nth-of-type(7):checked~.arrows>label:nth-of-type(8), .csslider>input:nth-of-type(8):checked~.arrows>label:nth-of-type(9), .csslider>input:nth-of-type(9):checked~.arrows>label:nth-of-type(10), .csslider>input:nth-of-type(10):checked~.arrows>label:nth-of-type(11), .csslider>input:nth-of-type(11):checked~.arrows>label:nth-of-type(12) {
            right: 6%;
        }
    }
    @media screen and (max-width: 480px) {
        .csslider.infinity>input:last-of-type:checked~.arrows label.goto-first, .csslider>input:nth-of-type(1):checked~.arrows>label:nth-of-type(2), .csslider>input:nth-of-type(2):checked~.arrows>label:nth-of-type(3), .csslider>input:nth-of-type(3):checked~.arrows>label:nth-of-type(4), .csslider>input:nth-of-type(4):checked~.arrows>label:nth-of-type(5), .csslider>input:nth-of-type(5):checked~.arrows>label:nth-of-type(6), .csslider>input:nth-of-type(6):checked~.arrows>label:nth-of-type(7), .csslider>input:nth-of-type(7):checked~.arrows>label:nth-of-type(8), .csslider>input:nth-of-type(8):checked~.arrows>label:nth-of-type(9), .csslider>input:nth-of-type(9):checked~.arrows>label:nth-of-type(10), .csslider>input:nth-of-type(10):checked~.arrows>label:nth-of-type(11), .csslider>input:nth-of-type(11):checked~.arrows>label:nth-of-type(12) {
            right: 7%;
        }
    }
    @media screen and (max-width: 414px) {
        .csslider.infinity>input:last-of-type:checked~.arrows label.goto-first, .csslider>input:nth-of-type(1):checked~.arrows>label:nth-of-type(2), .csslider>input:nth-of-type(2):checked~.arrows>label:nth-of-type(3), .csslider>input:nth-of-type(3):checked~.arrows>label:nth-of-type(4), .csslider>input:nth-of-type(4):checked~.arrows>label:nth-of-type(5), .csslider>input:nth-of-type(5):checked~.arrows>label:nth-of-type(6), .csslider>input:nth-of-type(6):checked~.arrows>label:nth-of-type(7), .csslider>input:nth-of-type(7):checked~.arrows>label:nth-of-type(8), .csslider>input:nth-of-type(8):checked~.arrows>label:nth-of-type(9), .csslider>input:nth-of-type(9):checked~.arrows>label:nth-of-type(10), .csslider>input:nth-of-type(10):checked~.arrows>label:nth-of-type(11), .csslider>input:nth-of-type(11):checked~.arrows>label:nth-of-type(12) {
            right: 8%;
            top: -15%;
        }
    }
    @media screen and (max-width: 375px) {
        .csslider.infinity>input:last-of-type:checked~.arrows label.goto-first, .csslider>input:nth-of-type(1):checked~.arrows>label:nth-of-type(2), .csslider>input:nth-of-type(2):checked~.arrows>label:nth-of-type(3), .csslider>input:nth-of-type(3):checked~.arrows>label:nth-of-type(4), .csslider>input:nth-of-type(4):checked~.arrows>label:nth-of-type(5), .csslider>input:nth-of-type(5):checked~.arrows>label:nth-of-type(6), .csslider>input:nth-of-type(6):checked~.arrows>label:nth-of-type(7), .csslider>input:nth-of-type(7):checked~.arrows>label:nth-of-type(8), .csslider>input:nth-of-type(8):checked~.arrows>label:nth-of-type(9), .csslider>input:nth-of-type(9):checked~.arrows>label:nth-of-type(10), .csslider>input:nth-of-type(10):checked~.arrows>label:nth-of-type(11), .csslider>input:nth-of-type(11):checked~.arrows>label:nth-of-type(12) {
            right: 9%;
        }
    }
    @media screen and (max-width: 320px) {
        .csslider.infinity>input:last-of-type:checked~.arrows label.goto-first, .csslider>input:nth-of-type(1):checked~.arrows>label:nth-of-type(2), .csslider>input:nth-of-type(2):checked~.arrows>label:nth-of-type(3), .csslider>input:nth-of-type(3):checked~.arrows>label:nth-of-type(4), .csslider>input:nth-of-type(4):checked~.arrows>label:nth-of-type(5), .csslider>input:nth-of-type(5):checked~.arrows>label:nth-of-type(6), .csslider>input:nth-of-type(6):checked~.arrows>label:nth-of-type(7), .csslider>input:nth-of-type(7):checked~.arrows>label:nth-of-type(8), .csslider>input:nth-of-type(8):checked~.arrows>label:nth-of-type(9), .csslider>input:nth-of-type(9):checked~.arrows>label:nth-of-type(10), .csslider>input:nth-of-type(10):checked~.arrows>label:nth-of-type(11), .csslider>input:nth-of-type(11):checked~.arrows>label:nth-of-type(12) {
            right: 10%;
        }
    }

    body {
        margin: 0;
        font-size: 100%;
        background: #fff;
        font-family: 'Thasadith', sans-serif;
    }

    html {
    scroll-behavior: smooth;
    }
    body a {
        text-decoration: none;
        transition: 0.5s all;
        -webkit-transition: 0.5s all;
        -moz-transition: 0.5s all;
        -o-transition: 0.5s all;
        -ms-transition: 0.5s all;
        font-family: 'Thasadith', sans-serif;
    }

    body img {
        max-width: 100%;
    }

    a:hover {
        text-decoration: none;
    }

    input[type="button"],
    input[type="submit"],
    input[type="text"],
    input[type="email"],
    input[type="search"] {
        transition: 0.5s all;
        -webkit-transition: 0.5s all;
        -moz-transition: 0.5s all;
        -o-transition: 0.5s all;
        -ms-transition: 0.5s all;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        color: #323648;
    }
    li {
        list-style-type: none;
    }

    p {
        margin: 0;
        font-size: 17px;
        line-height: 2em;
        letter-spacing: 2px;
        color: #707579;
        font-weight: 600;
    }

    ul {
        margin: 0;
        padding: 0;
    }


    /*-- header --*/

    header {
        position: fixed;
        top:0;
        z-index: 20;
        width: 100%;
        background-color: rgba(0, 0, 0, .7);
        padding: 1vw;
    }

    .toggle,
    [id^=drop] {
        display: none;
    }

    /* Giving a background-color to the nav container. */
    nav { 
        margin:0;
        padding: 0;
    }


    #logo a {
        float: left;
        font-size: 1.2em;
        display: initial;
        margin: 0;
        letter-spacing: 1px;
        color: #fff;
        font-weight: 600;
        padding: 3px 0;
        border: none;
    }
    #logo a span.fa {
        color: #e8cd30;
    }


    /* Since we'll have the "ul li" "float:left"
    * we need to add a clear after the container. */

    nav:after {
        content:"";
        display:table;
        clear:both;
    }

    /* Removing padding, margin and "list-style" from the "ul",
    * and adding "position:reltive" */
    nav ul {
        float: right;
        padding:0;
        margin:0;
        list-style: none;
        position: relative;
        }
        
    /* Positioning the navigation items inline */
    nav ul li {
        margin: 10px;
        display:inline-block;
        float: left;
        }

    /* Styling the links */
    nav a {
        color: #ddd;
        text-transform: capitalize;
        letter-spacing: 1px;
        padding-left: 0;
        padding-right: 0;
        padding: 10px 0;
        font-weight: 700;
    }


    nav ul li ul li:hover { background: #f8f9fa; }

    /* Background color change on Hover */
    nav a:hover { 
        color: #ddd;
    }

    .menu {
        display: flex;
    }

    .menu li.active  a{ 
        color: #fff;
    }

    .button-login{
        padding: 0;
        padding-left: 1vw;
        padding-right: 1vw;
        border-radius: 10px;
        margin-right: 1.5vw;
    }

    /* Hide Dropdowns by Default
    * and giving it a position of absolute */
    nav ul ul {
        display: none;
        position: absolute; 
        /* has to be the same number as the "line-height" of "nav a" */
        top: 30px; 
        background: #fff;
        padding: 10px;
    }
        
    /* Display Dropdowns on Hover */
    nav ul li:hover > ul {
        display:inherit;
    }
        
    /* Fisrt Tier Dropdown */
    nav ul ul li {
        width:170px;
        float:none;
        display:list-item;
        position: relative;
    }
    nav ul ul li a {
        color: #333;
        padding: 5px 10px;
        display: block;
    }
    nav ul li span {
        color: #ddd;
        text-transform: capitalize;
        letter-spacing: 1px;
        padding-left: 0;
        padding-right: 0;
        font-weight: 700;
    }
    ul.menu li span.fa {
        color: #e8cd30;
    }
    /* Second, Third and more Tiers	
    * We move the 2nd and 3rd etc tier dropdowns to the left
    * by the amount of the width of the first tier.
    */
    nav ul ul ul li {
        position: relative;
        top:-60px;
        /* has to be the same number as the "width" of "nav ul ul li" */ 
        left:170px; 
    }

    /* Change ' +' in order to change the Dropdown symbol */
    li > a:only-child:after { content: ''; }


    /* Media Queries
    --------------------------------------------- */

    @media all and (max-width : 991px) {

        #logo {
            display: block;
            padding: 0;
            width: 100%;
            text-align: center;
            float: none;
        }
        .menu li.active a {
            color: #009f4d;
        }
        nav ul li span {
            color: #333;
        }
        nav {
            margin: 0;
        }
        nav a {
            color: #333;
        }

        /* Hide the navigation menu by default */
        /* Also hide the  */
        .toggle + a,
        .menu {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1vw;
        }

        /* Stylinf the toggle lable */
        .toggle {
            display: block;
            padding: 5px 15px;
            font-size: 20px;
            text-decoration: none;
            border: none;
            float: right;
            background-color: #009f4d;
            color: #fff;
        }
        .menu .toggle {
            float: none;
            text-align: center;
            margin: auto;
            width: 30%;
            padding: 5px;
            font-weight: normal;
            font-size: 15px;
            letter-spacing: 1px;
        }

        .toggle:hover {
            color:#333;
            background-color: #fff;
        }

        /* Display Dropdown when clicked on Parent Lable */
        [id^=drop]:checked + ul {
            display: block;
            background: #fff;
            padding: 15px 0;
            width:100%;
            text-align: center;
        }

        /* Change menu item's width to 100% */
        nav ul li {
            display: block;
            width: 100%;
            padding: 7px 0;
            }
        nav a{
            padding: 5px 0;
        }
        nav a:hover {
            color: #333;
        }
        .login-icon {
            text-align: center;
        }
        nav ul ul .toggle,
        nav ul ul a {
            padding: 0 40px;
        }

        nav ul ul ul a {
            padding: 0 80px;
        }

        nav a:hover,
        nav ul ul ul a {
            background-color: transparent;
        }
    
        nav ul li ul li .toggle,
        nav ul ul a,
        nav ul ul ul a{
            padding:14px 20px;	
            color:#FFF;
            font-size:17px; 
        }
    
    
        nav ul li ul li .toggle,
        nav ul ul a {
            background-color: #fff; 
        }
        nav ul ul li a {
            font-size: 15px;
        }
        ul.inner-ul{
            padding: 0!important;
        }
        /* Hide Dropdowns by Default */
        nav ul ul {
            float: none;
            position:static;
            color: #ffffff;
            /* has to be the same number as the "line-height" of "nav a" */
        }
            
        /* Hide menus on hover */
        nav ul ul li:hover > ul,
        nav ul li:hover > ul {
            display: none;
        }
            
        /* Fisrt Tier Dropdown */
        nav ul ul li {
            display: block;
            width: 100%;
            padding: 0;
        }

        nav ul ul ul li {
            position: static;
            /* has to be the same number as the "width" of "nav ul ul li" */ 

        }

    }

    @media all and (max-width : 330px) {

        nav ul li {
            display:block;
            width: 94%;
        }

    }
    .user span.fa {
        font-size: 25px;
        color: #fff;
    }
    /*-- //header --*/

    /* banner style */
    .banner_w3lspvt {
        position: relative;
        z-index: 1;
    }

    .w3layouts-banner-info {
        padding-top: 16em;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;

    }

    .w3layouts-banner-info h3 {
        font-size: 4em;
        text-shadow: 3px 4px 6px rgba(45, 45, 45, 0.15);
        font-weight: 600;
        color: #fff;
        letter-spacing: 10px;
        text-transform: uppercase;
    }
    .w3layouts-banner-info p {
        max-width: 650px;
        color: #fff;
    }
    .w3layouts-banner-info h4 {
        color: #eee;
        letter-spacing: 5px;
        line-height: 35px;
        text-transform: capitalize;
    }

    .w3layouts-banner-info i {
        vertical-align: middle;
    }

    .banner-top{
        display: flex;
    }


    .overlay {
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.4);
        position: absolute;
        z-index: 5; 
        align-items: center;
    }
    .overlay-clr {
        background: rgba(0, 0, 0, 0.4);
        position: absolute;
        z-index: 5;
        align-items: center;
    }
    .overlay1 {
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
    }

    .button-style {
        padding: 15px 40px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 3px;
        border: 2px solid #ccc;
        background: none;
        display: inline-block;
    }

    .button-style:hover {
        color: #fff;
    }

    /*-- //banner style --*/

    /*-- about --*/
    h3.heading {
        font-size: 40px;
        letter-spacing: 2px;
        font-weight: 600;
        margin-bottom: 3vw;
    }
    p.about-text {
        align-self: center;
        width: 80%;
    }
    .feature-grids{
        margin-left: 4vw;
        margin-right: 4vw;
    }
    .feature-grids .f-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #009f4d;
        width: 70px;
        height: 70px;
        line-height: 70px;
        margin: 0.5em auto 0;
        border-radius: 50%;
    }
    .feature-grids span.fa {
        color: #fff;
        font-size: 20px;
        line-height: 70px;
    }
    .feature-grids h3 {
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 3px;
        line-height: 30px;
        text-transform: uppercase;
    }
    .feature-grids  p {
        letter-spacing: 1px;
    }
    /*-- //about --*/

    /*-- core grids --*/
    .core-grids p {
        display: flex;
        letter-spacing: 1px;
    }
    .core-left{
        display: flex;
        flex-direction: column;
        margin-left: 8vw;
    }
    .core-right{
        display: flex;
        flex-direction: column;
        margin-left: 2vw;
    }
    .core-right h4 {
        font-size: 26px;
        line-height: 42px;
        letter-spacing: 2px;
        font-weight: 600;
        text-transform: uppercase;
    }
    /*-- //core grids --*/

    /*-- works --*/
    .serives-agile {
        background: #009f4d;
    }

    .serives-agile h3.heading{
        color: #fff;
    }
    .welcome-grid {
        width: 20%;
        float: left;
    }

    .welcome-grid h4 {
        font-size: 22px;
        letter-spacing: 2px;
        color: #fff;
        font-weight: 600;
        text-transform: uppercase;
    }
    .welcome-grid span.fa {
        color: #5eca9f;
        color: #e8cd30;
        font-size: 50px;
        margin-bottom: 10px;
    }

    .welcome-grid p {
        color: #ccc;
        line-height: 1.8em;
        font-size: 16px;
    }
    /*-- //works --*/

    /*-- bg --*/
    .background-img {
        background-size: cover;
        position: relative;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        -moz-background-size: cover;
    }
    .overlay-clr {
        background: rgba(0, 0, 0, 0.5);
    }
    .bg-middle p {
        letter-spacing: 1px;
        color: #ccc;
        line-height: 28px;
    }
    .bg-right ul li {
        letter-spacing: 1px;
        color: #ddd;
        line-height: 30px;
        font-size: 17px;
        font-weight: 600;
        text-transform: capitalize;
    }
    .bg-left h4 {
        font-size: 26px;
        line-height: 42px;
        letter-spacing: 2px;
        font-weight: 600;
        text-transform: uppercase;
        color: #fff;
    }
    /*-- //bg --*/

    /*-- blog info --*/
    .row{
        display: flex;
        flex-direction: row;
    }

    .collumns{
        display: flex;
        flex-direction: column;
        margin: 1vw;
    }

    .divisao-3{
        width: 30%;
    }

    .text-wh{
        margin: 1vw;
    }

    .my-4{
        font-size: 2em;
    }

    .py-md-4{
        display: flex;
        justify-content: center;
    }

    .botoes_container{
        display: flex;
        justify-content: center;
    }

    .btn{
        margin: 2vw;
    }

    .img-contact{
        z-index: 1;
    }

    .text-sob{
        position: absolute;
        z-index: 9;
    }
    .py-5{
        padding: 5vw;
    }

    .container{
        position: relative;
        flex-direction: column;
    }
    .container-header{
        position: relative;
        display: flex;
        flex-direction: column;
        margin-left: 12vw;
        margin-top: 0.5vw;
    }
    .container-header-int{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .text-center{
        display: flex;
        justify-content: center;
    }

    .text-center2{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .blog{
        display: flex;
        margin-bottom: 8vw;
    }

    .blog-grids {
        justify-content: space-between;
        margin-left: 10vw;
        margin-right: 10vw;
        margin-bottom: 120px;
    }

    .blog-left,.blog-middle,.blog-right{
        position: relative;

    }
    .blog-info {
        background: #fff;
        padding: 30px;
        position: absolute;
        margin-top: -2em;
        left: 6%;
        right: 6%;
        top: 200px;
        box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.08), 0 5px 8px 0 rgba(0, 0, 0, 0.12), 0 1px 14px 0 rgba(0, 0, 0, 0.06);
    }
    .blog-info p {
        letter-spacing: 1px;
        line-height: 28px;
    }
    .blog-info h4 {
        font-size: 22px;
        line-height: 42px;
        letter-spacing: 2px;
        font-weight: 600;
        text-transform: uppercase;
    }
    .blog-info h4 span.fa {
        color: #009f4d;
    }
    /*-- //blog info --*/


    /*--  text --*/
    .text {
        background-size: cover;
        position: relative;
    }
    .text:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0.6;
        background: #000;
        z-index: 8;
    }
    .text h3.heading{
        margin: 4vw;
        color: #fff;
    }
    .text h3.heading span {
        color: #e8cd30;
    }
    .text p {
        color: #ccc;
        width: 80%;
        margin: auto;
        letter-spacing: 1px;
    }
    .text a.btn {
        font-size: 17px;
        letter-spacing: 2px;
        color: #333;
        font-weight: 700;
        padding: 12px 25px;
        margin-top: 30px;
        border-radius: 4px;
        background: #e8cd30;
        display: inline-block;
    }
    .text a.btn1 {
        font-size: 17px;
        letter-spacing: 2px;
        color: #fff;
        font-weight: 700;
        padding: 12px 25px;
        margin-top: 30px;
        border-radius: 4px;
        background: #009f4d;
        display: inline-block;
    }
    /*--  //text --*/

    /*-- footer --*/

    p.footer-para {
        max-width: 650px;
        font-size: 15px;
    }

    /*-- footer logo --*/
    .logo2 {
        position: relative;
    }

    .logo2 a {
        font-size: 36px;
        font-weight: 600;
        color: #fff;
        letter-spacing: 1px;
    }

    .logo2 a span.fa {
        color: #e8cd30;
    }

    /*-- //footer logo --*/

    /*-- social icons --*/
    .footercopy-social ul li,
    .contact-left-footer ul li {
        display: inline-block;
    }
    footer{
        background: #191818;
    }
    .footercopy-social ul li a {
        color: #333;
        text-align: center;
    }

    .footercopy-social ul li a span.fa {
        width: 20px;
        font-size: 20px;
        color: #666;
        transition: 0.5s all;
        -webkit-transition: 0.5s all;
        -moz-transition: 0.5s all;
        -o-transition: 0.5s all;
        -ms-transition: 0.5s all;
    }

    /*-- //social icons --*/

    /*-- address --*/
    .contact-left-footer ul li p span.fa {
        color: #aaa;
    }

    .contact-left-footer ul li p a,
    .contact-left-footer ul li p {
        color: #707579;
        font-size: 16px;
        font-weight: 600;
    }

    /*-- //address --*/

    /*-- copyright --*/
    .w3l-copy p {
        letter-spacing: 1px;
    }

    .w3l-copy p a {
        color: #aaa;
    }
    /*-- //copyright --*/
    /*-- //footer --*/

    /*-- inner banner --*/
    .inner-banner{
        background: url(../images/2.jpg) no-repeat center;
        background-size: cover;
        min-height: 250px;
        position: relative;
    }
    .inner-banner:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0.6;
        background: #000;
    }
    /*-- //inner banner --*/

    /*-- about page --*/
    .about-left h5 {
        color: #009f4d;
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 24px;
    }
    .about-left h3 {
        font-size: 32px;
        line-height: 44px;
        letter-spacing: 2px;
        font-weight: 600;
        text-transform: uppercase;
    }
    .about-left h4 {
        line-height: 1.5;
        font-size: 25px;
        letter-spacing: 2px;
        font-weight: 600;
        text-transform: capitalize;
    }
    .about-right p{
        letter-spacing: 1px;
    }

    .about span.fa-quote-left {
        font-size: 20px;
        vertical-align: top;
        color: #009f4d;
    }

    .banner-bottom {
        background: #f8f9fa;
    }

    .wthree_banner_bottom_grid_left span {
        background: #ffc168;
        color: #fff;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        text-align: center;
        font-size: 38px;
        line-height: 2;
    }

    .wthree_banner_bottom_grid_left.icons-w3pvt2 span {
        background: #ff4f81;
    }

    .wthree_banner_bottom_grid_left.icons-w3pvt3 span {
        background: #2dde98
    }


    /* about bottom */

    h4.abt-text {
        font-size: 2.5em;
        letter-spacing: 2px;
        color: #fff;
        line-height: 1.4em;
    }
    .abt_bottom{
        background: #009f4d;
    }
    .abt_bottom a.serv_link {
        font-size: 17px;
        letter-spacing: 2px;
        color: #333;
        font-weight: 700;
        padding: 12px 25px;
        border-radius: 4px;
        background: #e8cd30;
        display: inline-block;
        margin-top:10px;
    }
    /* //about bottom */

    /* stats */
    section.w3_stats {
        background: url(../images/1.jpg) no-repeat center;
        background-size: cover;
        position: relative;
    }
    section.w3_stats h3.heading {
        color: #fff;
    }
    .counter span.fa {
        color: #fff;
        font-size: 3em;
    }

    .timer {
        font-size: 3em;
        font-weight: 300;
        color: #fff;
    }

    p.count-text {
        letter-spacing: 2px;
        font-weight: 600;
        color: #fff;
    }

    /* //stats */

    /* news */
    .news{
        background: #f8f9fa;
    }
    .feedback-info h4 {
        font-size: 22px;
        line-height: 34px;
        letter-spacing: 1px;
        font-weight: 600;
        text-transform: uppercase;
    }
    .feedback-info p {
        letter-spacing: 1px;
        line-height: 1.8em;
    }

    .feedback-info h4 a {
        letter-spacing: 1px;
        line-height: 1.4;
    }


    .feedback-img {
        float: left;
        width: 25%;
    }

    .feedback-img-info {
        float: right;
        width: 68%;
        margin: 1.5em 0 0 1em;
    }

    .feedback-img-info h5 {
        color: #504e4e;
        font-size: 17px;
        letter-spacing: 1px;
        font-weight: 600;
    }
    .feedback-info {
        background: #fff;
    }
    /* //news */

    /*-- team --*/
    .team-text h4 {
        font-size: 22px;
        letter-spacing: 2px;
        font-weight: 600;
        text-transform: uppercase;
        margin-top: 1em;
    }
    .caption ul li {
        display: inline-block;
        margin: 0 5px;
    }
    .caption ul li a {
        color: #aaa;
        font-size: 14px;
    }
    /*-- //team --*/

    /*-- //about page --*/


    /*-- services page --*/
    /* home grid */

    .home-grid {
        padding: 1.5em;
        border: 1px solid #555;
        position: relative;
        text-align: center;
    }

    .home-grid span {
        color: #009f4d;
        font-size: 1.5em;
        font-weight: 700;
        position: absolute;
        top: 0;
        left: 0px;
        padding: 2px 7px;
    }


    .wthree-bnr-btn {
        display: inline-block;
        border-top: 1px solid #1dc6bc;
        border-radius: 0;
        margin-top: 1em;
        padding: 10px 0;
        color: #5341b4;
        text-transform: capitalize;
        font-size: 14px;
        letter-spacing: 0.5px;
        font-weight: 800;
    }

    h4.home-title {
        font-size: 22px;
        line-height: 42px;
        letter-spacing: 2px;
        font-weight: 600;
        text-transform: uppercase;
    }

    .home-grid p {
        letter-spacing: 1px;
    }

    .title-w3ls {
        margin-bottom: 3em;
    }

    /* //home grid */

    /* newsletter */
    .newsletter_right_w3.py-5 {
        background: #f8f9fa;
    }

    p.sub-tittle {
        max-width: 700px;
        margin: 0 auto;
        font-size: 15px;
        letter-spacing: 1px;
    }

    .n-right-w3ls {
        width: 65%;
        margin: auto;
    }
    form.newsletter {
        background: #fff;
        padding: 0.3em;
        border-radius: 4px;
        box-shadow: 0 12px 60px rgba(0, 0, 0, .2);
        -webkit-box-shadow: 0 12px 60px rgba(0, 0, 0, .2);
        -o-box-shadow: 0 12px 60px rgba(0, 0, 0, .2);
        -moz-box-shadow: 0 12px 60px rgba(0, 0, 0, .2);
        -ms-box-shadow: 0 12px 60px rgba(0, 0, 0, .2);
    }

    .newsletter .email {
        outline: none;
        padding: 12px 15px;
        color: #777;
        width: 68%;
        background: transparent;
        text-transform: capitalize;
        border: none;
        letter-spacing: 2px;
        font-weight: 600;
    }

    .newsletter button.btn {
        color: #fff;
        border: none;
        padding: 12px 15px;
        text-transform: uppercase;
        text-decoration: none;
        background: #009f4d;
        -webkit-transition: 0.5s all;
        -moz-transition: 0.5s all;
        -o-transition: 0.5s all;
        -ms-transition: 0.5s all;
        transition: 0.5s all;
        float: right;
        cursor: pointer;
        width: 27%;
        border-radius: 4px;
        font-weight: 600;
        letter-spacing: 2px;
    }

    /* //newsletter */
    /*-- //services page --*/

    /*-- contact --*/ 
    .contact-left input[type="text"],.contact-left input[type="email"]{
        border: 1px solid #ccc;
        font-size: 1em;
        color: #828282;
        background: none;
        width: 100%;
        font-weight: 600;
        letter-spacing: 1px;
        padding: 15px 20px;
        outline: none;
    }
    .contact-right textarea{
        border:1px solid #ccc;
        font-size:1em;
        color:#828282;
        background:none;
        width:100%;
        font-weight: 600;
        letter-spacing: 1px;
        padding: 15px 20px;
        outline:none;
        min-height: 8.5em;
        resize:none;
    }
    .contact-left input[type="email"]{
        margin:1.5em 0;
    }
    .contact-collun{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .contact-right button.btn { 
        padding: .8em 1em;
        color: #fff;
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 1em;
        background: #009f4d;
        -webkit-transition: 0.5s all;
        -moz-transition: 0.5s all;
        -o-transition: 0.5s all;
        -ms-transition: 0.5s all;
        transition: 0.5s all;
        outline: none;
        margin: 1em 0 0;
        border-radius: 0px;
        width: 100%;
        border:1px solid #4caf50;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
    .address-row {
        margin:0 0 2em;
    }
    .address-right {
        text-align: left;
        padding-left: 2em;
    }
    .contact-w3lsright h6 {
        font-size: 1.8em;
        color: #595c65;
        font-weight: 300;
        line-height: 1.8em;
        text-transform: uppercase; 
    }
    .contact-w3lsright h6 span {
        color: #03A9F4; 
    } 
    .address-row .contact-icon {
        background: #009f4d;
        width:60px;
        height:60px;
        line-height: 60px;
        text-align: center;
        -webkit-transition:.5s all;
        -moz-transition:.5s all; 
        transition:.5s all;
        border-radius: 50%;
    }
    .address-row span.fa {
        font-size: 1.2em;
        line-height: 60px;
        color: #fff;
    }
    .address-row h5 {
        font-size: 1.6em;
        margin-bottom: .3em;
        font-weight: 700;
    }
    .address-row p{
        letter-spacing: 1px;
    }
    .address-row p a {
        color: #707579;
    }
    .address h4 {
        font-size: 1.8em;
        color: #00BCD4;
        margin-bottom: 0.6em;
        text-transform: uppercase;
    }
    .map iframe {
        outline: none;
        border: none;
        width: 100%;
        height: 350px;
    }
    /*-- //contact --*/  

    /*-- coming sooon page --*/
    .comingsoon {
        background: url(../images/comingsoon.jpg) no-repeat center;
        background-size: cover;
        min-height: 250px;
        position: relative;
    }
    .comingsoon h4 {
        font-size: 40px;
        font-weight: 600;
        letter-spacing: 2px;
    }
    .comingsoon p {
        letter-spacing: 1px;
    }

    /*-- //coming sooon page --*/


    /*-- move top --*/
    a.move-top {
        width: 34px;
        height: 34px;
        background: url(../images/move-top.png) no-repeat;
        display: inline-block;
        position: fixed;
        bottom: 4%;
        right: 2%;
        z-index: 0;
    }
    /*-- //move top --*/


    /*-- Responsive design --*/

    @media(max-width:1366px) {
        .banner-top, .banner-top1, .banner-top2, .banner-top3,.overlay,.overlay1 {
            min-height: 750px;
        }
    }
    @media(max-width:1280px) {
        .banner-top, .banner-top1, .banner-top2, .banner-top3,.overlay,.overlay1 {
            min-height: 720px;
        }
    }
    @media(max-width:1080px) {
        .w3layouts-banner-info h3 {
            font-size: 3.5em;
        }
        .w3layouts-banner-info {
            padding-top: 14em;
        }
        .banner-top, .banner-top1, .banner-top2, .banner-top3,.overlay,.overlay1 {
            min-height: 650px;
        }
        p.about-text {
            width: 85%;
        }
        .core-right h4 {
            font-size: 23px;
        }
        .bg-left h4 {
            font-size: 21px;
        }
        .blog-grids {
            margin-bottom: 160px;
        }
        .feedback-info h4 {
            letter-spacing: 3px;
        }
        h4.abt-text {
            font-size: 2.2em;
        }
        .feedback-info h4 {
            letter-spacing: 2px;
        }
        .inner-banner {
            min-height: 200px;
        }
    }

    @media(max-width:991px) {
        .w3layouts-banner-info {
            padding-top: 12em;
        }
        h3.heading {
            font-size: 36px;
        }
        .welcome-grid {
            width: 33.33%;
            float: left;
        }
        .blog-grids {
            margin-bottom: 100px;
        }
        .text p {
            width: 100%;
        }
        .w3layouts-banner-info h4 {
            font-size: 22px;
            letter-spacing: 3px;
            line-height: 25px;
        }	
        .banner-top, .banner-top1, .banner-top2, .banner-top3,.overlay,.overlay1 {
            min-height: 600px;
        }
        .about-left h3 {
            font-size: 29px;
            letter-spacing: 1px;
        }
        .about-left h4 {
            font-size: 23px;
            letter-spacing: 1px;
        }
        h4.abt-text {
            font-size: 2em;
            letter-spacing: 1px;
        }
        .feedback-img {
            width: 10%;
        }
        .feedback-img-info {
            width: 86%;
        }
        .counter span.fa,.timer {
            font-size: 2.5em;
        }
        .n-right-w3ls {
            width: 80%;
        }
    }

    @media(max-width:800px) {
        h3.heading {
            font-size: 33px;
        }
        .logo2 a {
            font-size: 30px;
        }
        .text a.btn1,.text a.btn {
            font-size: 15px;
            padding: 10px 25px;
            letter-spacing: 1px;
        }
        .w3layouts-banner-info h3 {
            font-size: 3em;
        }
        #logo a {
            font-size: .7em;
        }
        .address-row h5 {
            font-size: 1.4em;
        }
        .address-row .contact-icon {
            width: 55px;
            height: 55px;
            line-height: 55px;
        }
        .address-row span.fa {
            font-size: 1em;
            line-height: 55px;
        }
        .map iframe {
            height: 300px;
        }
    }
    @media(max-width:736px) {
        .w3layouts-banner-info h4 {
            font-size: 18px;
            letter-spacing: 2px;
            line-height: 25px;
        }
        p.about-text {
            width: 100%;
            letter-spacing: 1px;
        }
        .welcome-grid {
            width: 50%;
        }
        .blog img {
            width: 100%;
        }
        .blog-info {
            top: 280px;
        }
        .w3l-copy p {
            font-size: 16px;
        }
        .blog-info h4 {
            font-size: 20px;
            line-height: 35px;
        }
        .welcome-grid span.fa {
            font-size: 40px;
        }
        .inner-banner {
            min-height: 150px;
        }
        .about-left h3 {
            font-size: 24px;
        }
        .about-left h4 {
            font-size: 20px;
            letter-spacing: 1px;
        }
        .n-right-w3ls {
            width: 100%;
        }
        .comingsoon h4 {
            font-size: 35px;
        }
    }
    @media(max-width:600px) {
        .core-right h4 {
            font-size: 21px;
            line-height: 38px;
        }
        p {
            font-size: 16px;
        }
        .w3layouts-banner-info p {
            font-size: 15px;
        }
        .w3layouts-banner-info h3 {
            font-size: 2.7em;
            letter-spacing: 5px;
        }
        .button-style {
            padding: 13px 35px;
            font-size: 14px;
        }
        .w3layouts-banner-info {
            padding-top: 10em;
        }
        .feature-grids h3,.welcome-grid h4 {
            font-size: 20px;
            letter-spacing: 2px;
        }
        .banner-top, .banner-top1, .banner-top2, .banner-top3, .overlay, .overlay1 {
            min-height: 570px;
        }
        .team-text h4 {
            font-size: 18px;
            letter-spacing: 1px;
        }
        h4.abt-text {
            font-size: 1.8em;
            letter-spacing: 1px;
        }
        .feedback-img {
            width: 15%;
        }
        .feedback-img-info {
            width: 81%;
        }
        h4.home-title {
            font-size: 21px;
            line-height: 35px;
        }
    }
    @media(max-width:568px) {
        
        .blog-left, .blog-middle {
            margin-bottom: 2em;
        }
        .banner-top, .banner-top1, .banner-top2, .banner-top3, .overlay, .overlay1 {
            min-height: 520px;
        }
        .blog-grids {
            margin-bottom: 70px;
        }
        .about-left h5 {
            font-size: 18px;
        }
    }
    @media(max-width:480px) {
        .logo2 a {
            font-size: 25px;
        }
        h3.heading {
            font-size: 28px;
        }
        .w3layouts-banner-info h3 {
            font-size: 2.2em;
        }
        .banner-top, .banner-top1, .banner-top2, .banner-top3, .overlay, .overlay1 {
            min-height: 500px;
        }
        .w3layouts-banner-info {
            padding-top: 8em;
        }
        .bg-left h4 {
            font-size: 20px;
            line-height: 36px;
        }
        .blog-info {
            top: 180px;
        }
        .about-left h3 {
            font-size: 22px;
            line-height: 34px;
        }
        .feedback-img {
            width: 18%;
        }
        .feedback-img-info {
            width: 76%;
        }
        .newsletter button.btn {
            width: 31%;
        }
        .comingsoon h4 {
            font-size: 30px;
            letter-spacing: 1px;
        }
    }
    @media(max-width:414px) {
        .csslider>.arrows label {
            padding: 8px !important;
        }
        #logo a {
            font-size: .65em;
        }
        .toggle {
            font-size: 17px;
        }
        .w3layouts-banner-info h3 {
            font-size: 2em;
        }
        .welcome-grid p {
            font-size: 15px;
        }
        .welcome-grid span.fa {
            font-size: 35px;
            margin-bottom: 0px;
        }
        .core-right h4 {
            font-size: 19px;
            letter-spacing: 1px;
            line-height: 36px;
        }
        .blog-left, .blog-middle {
            margin-bottom: 4em;
        }
        .blog-grids {
            margin-bottom: 85px;
        }
        .bg-left h4 {
            font-size: 19px;
            line-height: 36px;
            letter-spacing: 1px;
        }
        .contact-left-footer ul li p a, .contact-left-footer ul li p {
            font-size: 15px;
        }
        .blog-grids {
            margin-bottom: 90px;
        }
        h4.abt-text {
            font-size: 1.6em;
        }
        .abt_bottom a.serv_link {
            font-size: 15px;
            letter-spacing: 1px;
            padding: 10px 25px;
        }
        .counter span.fa, .timer {
            font-size: 2em;
        }
        p.count-text {
            letter-spacing: 2px;
            font-size: 13px;
        }
        .feedback-info h4 {
            letter-spacing: 2px;
            font-size: 18px;
        }
        h4.home-title {
            font-size: 19px;
        }
        .newsletter .email {
            width: 64%;
            font-size: 15px;
        }
        .newsletter button.btn {
            width: 35%;
            font-size: 15px;
        }
        .address-row h5 {
            font-size: 1.2em;
        }
        .address-right {
            padding-left: 1em;
        }
    }
    @media(max-width:384px) {
        .feature-grids h3, .welcome-grid h4 {
            font-size: 18px;
            letter-spacing: 2px;
        }
        .w3layouts-banner-info p {
            letter-spacing: 1px;
        }
        .blog-left, .blog-middle {
            margin-bottom: 6em;
        }
        .csslider>.arrows label {
            padding: 7px;
        }
        .blog-grids {
            margin-bottom: 100px;
        }
        .about-left h4 {
            font-size: 18px;
        }
        h4.abt-text {
            font-size: 1.4em;
        }
        .newsletter .email {
            width: 62%;
            font-size: 14px;
        }
        .newsletter button.btn {
            width: 38%;
            font-size: 14px;
        }
        .inner-banner {
            min-height: 130px;
        }
        .address-right {
            padding-left: 1.5em;
        }
        .contact-left input[type="text"], .contact-left input[type="email"],.contact-right textarea {
            padding: 12px 15px;
        }
        .contact-left input[type="email"] {
            margin: 1em 0;
        }
    }
    @media(max-width:375px) {
        
    }
    @media(max-width:320px) {
        
    }

    /*-- //Responsive design --*/

`
            