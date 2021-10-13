import React from 'react'
import { createGlobalStyle } from 'styled-components'

const Styles = createGlobalStyle`
  #stamped-main-widget,
  #stamped-main-widget:after,
  .stamped-badge,
  .stamped-badge:after,
  .stamped-container:after,
  .stamped-content,
  .stamped-form-actions:after,
  .stamped-form-contact-email:after,
  .stamped-form-contact-location:after,
  .stamped-form-contact-name:after,
  .stamped-form-contact:after,
  .stamped-form-review-body:after,
  .stamped-form-review-rating,
  .stamped-form-review-rating:after,
  .stamped-form-review-title:after,
  .stamped-form-review:after,
  .stamped-header-title:after,
  .stamped-header:after,
  .stamped-loading:after,
  .stamped-review,
  .stamped-review-header-title,
  .stamped-summary:after {
    clear: both;
  }

  .stamped-review-vote a.disable-link,
  .stamped-ugc-modal {
    pointer-events: none;
  }

  @font-face {
    font-family: stamped-font;
    font-display: swap;
    src: url("https://cdn1.stamped.io/fonts/stamped-font.eot?rkevfi");
    src: url("https://cdn1.stamped.io/fonts/stamped-font.eot?rkevfi#iefix")
        format("embedded-opentype"),
      url("https://cdn1.stamped.io/fonts/stamped-font.ttf?rkevfi")
        format("truetype"),
      url("https://cdn1.stamped.io/fonts/stamped-font.woff?rkevfi") format("woff"),
      url("https://cdn1.stamped.io/fonts/stamped-font.svg?rkevfi#stamped-font")
        format("svg");
    font-weight: 400;
    font-style: normal;
  }

  .fa,
  .stamped-fa {
    display: inline-block;
    font-style: normal;
  }

  [class*=" stamped-fa-"]:before,
  [class*=" stamped-icon-"]:before,
  [class^="fa-"]:before,
  [class^="stamped-fa-"]:before,
  [class^="stamped-icon-"]:before {
    font-family: stamped-font, FontAwesome, "Font Awesome 5 Pro",
      "Font Awesome 5 Brands";
    font-style: normal;
    font-weight: 400;
    speak: none;
    text-decoration: inherit;
    width: 1em;
    margin-right: 0.2em;
    text-align: center;
    font-variant: normal;
    text-transform: none;
    line-height: 1em;
  }

  .fa-star:before,
  .stamped-fa-star:before {
    content: "\\f005";
  }

  .fa-check-circle:before,
  .stamped-fa-check-circle:before {
    content: "\\e801";
  }

  .fa-check-circle-o:before,
  .stamped-fa-check-circle-o:before {
    content: "\\f05d";
  }

  .fa-edit:before,
  .stamped-fa-edit:before {
    content: "\\e803";
  }

  .fa-star-o:before,
  .stamped-fa-star-o:before {
    content: "\\f006";
  }

  .fa-camera:before,
  .stamped-fa-camera:before {
    content: "\\e805";
  }

  .fa-comment:before,
  .stamped-fa-comment:before {
    content: "\\e809";
  }

  .fa-instagram:before,
  .stamped-fa-instagram:before {
    content: "\\f16d";
  }

  .fa-videocam:before,
  .stamped-fa-videocam:before {
    content: "\\e806";
  }

  .stamped-fa-search:before {
    content: "\e900";
  }

  .fa-thumbs-up-o:before,
  .stamped-fa-thumbs-up-o:before {
    content: "\\e807";
  }

  .fa-thumbs-down-o:before,
  .stamped-fa-thumbs-down-o:before {
    content: "\\e808";
  }

  .fa-twitter:before,
  .stamped-fa-twitter:before {
    content: "\\f099";
  }

  .fa-facebook:before,
  .stamped-fa-facebook:before {
    content: "\\f09a";
  }

  .fa-gplus:before,
  .stamped-fa-gplus:before {
    content: "\\f0d5";
  }

  .fa-chat-empty:before,
  .stamped-fa-chat-empty:before {
    content: "\\f0e6";
  }

  .fa-angle-left:before,
  .stamped-fa-angle-left:before {
    content: "\\f104";
  }

  .fa-angle-right:before,
  .stamped-fa-angle-right:before {
    content: "\\f105";
  }

  .fa-spinner:before,
  .stamped-fa-spinner:before {
    content: "\\f110";
  }

  .fa-smile-o:before,
  .stamped-fa-smile-o:before {
    content: "\\f118";
  }

  .fa-frown-o:before,
  .stamped-fa-frown-o:before {
    content: "\\f119";
  }

  .fa-meh-o:before,
  .stamped-fa-meh-o:before {
    content: "\\f11a";
  }

  .fa-star-half-o:before,
  .stamped-fa-star-half-o:before {
    content: "\\f123";
  }

  .fa-thumbs-up:before,
  .stamped-fa-thumbs-up:before {
    content: "\\f164";
  }

  .fa-thumbs-down:before,
  .stamped-fa-thumbs-down:before {
    content: "\\f165";
  }

  .fa-share-alt:before,
  .stamped-fa-share-alt:before {
    content: "\\f1e0";
  }

  .fa-facebook-official:before,
  .stamped-fa-facebook-official:before {
    content: "\\f230";
  }

  .fa-right-dir:before {
    content: "\e802";
  }

  .fa-left-dir:before {
    content: "\e800";
  }

  .fa-verified-user:before {
    content: "\e904";
  }

  .fa-favorite_border:before {
    content: "\e909";
  }

  .fa-stars:before {
    content: "\e90a";
  }

  .fa-favorite:before {
    content: "\e90c";
  }

  .fa-params:before,
  .stamped-fa-params:before {
    content: "\e901";
  }

  .fa-equalizer:before {
    content: "\e901";
  }

  .fa-preferences:before {
    content: "\e901";
  }

  .fa-settings:before {
    content: "\e901";
  }

  .fa-options:before {
    content: "\e901";
  }

  .fa-dots-three-vertical:before {
    content: "\e902";
  }

  .fa-dots-three-horizontal:before {
    content: "\e903";
  }

  .stamped-container {
    font-family: "Open Sans", Verdana, sans-serif;
    text-align: left;
  }

  .stamped-style-borderless .stamped-container {
    border: none !important;
  }

  .stamped-container:after,
  .stamped-container:before,
  .stamped-header-title:after,
  .stamped-header-title:before,
  .stamped-header:after,
  .stamped-header:before,
  .stamped-loading:after,
  .stamped-loading:before {
    content: " ";
    display: table;
  }

  .fa-star,
  .fa-star-checked,
  .fa-star-half-o,
  .fa-star-o,
  .stamped-fa-star,
  .stamped-fa-star-checked,
  .stamped-fa-star-half-o,
  .stamped-fa-star-o {
    color: #ffd200;
    padding: 0;
  }

  .fa-star-half-o:before,
  .fa-star-o:before,
  .fa-star:before,
  .stamped-fa-star-half-o:before,
  .stamped-fa-star-o:before,
  .stamped-fa-star:before {
    font-size: 18px;
    margin-right: -1px;
  }

  .stamped-form-review-rating .fa-star-half-o:before,
  .stamped-form-review-rating .fa-star-o:before,
  .stamped-form-review-rating .fa-star:before,
  .stamped-form-review-rating .stamped-fa-star-half-o:before,
  .stamped-form-review-rating .stamped-fa-star-o:before,
  .stamped-form-review-rating .stamped-fa-star:before {
    font-size: 23px;
  }

  .fa-check-circle-o,
  .fa-share-alt,
  .fa-thumbs-down,
  .fa-thumbs-up,
  .stamped-fa-check-circle-o,
  .stamped-fa-share-alt,
  .stamped-fa-thumbs-down,
  .stamped-fa-thumbs-up {
    color: #000;
    padding: 0;
  }

  .fa-check-circle-o:before,
  .fa-share-alt:before,
  .fa-thumbs-down:before,
  .fa-thumbs-up:before,
  .stamped-fa-check-circle-o:before,
  .stamped-fa-share-alt:before,
  .stamped-fa-thumbs-down:before,
  .stamped-fa-thumbs-up:before {
    font-size: 12px;
  }

  a.stamped-thumbs-up {
    margin-left: 10px;
  }

  .fa-star-checked:before,
  .stamped-fa-star-checked:before {
    font-family: stamped-font, FontAwesome;
    content: "\\f005" !important;
  }

  .fa-star-half-o:before,
  .fa-star-o:before,
  .fa-star:before,
  .stamped-fa-star-half-o:before,
  .stamped-fa-star-o:before,
  .stamped-fa-star:before {
    font-family: stamped-font, FontAwesome !important;
  }

  a.fa-star:hover,
  a.stamped-fa-star:hover {
    color: #615b0c;
  }

  .stamped-starrating a {
    text-decoration: none !important;
    color: gold;
  }

  #stamped-main-widget {
    display: block;
    overflow: hidden;
    margin: 1em 15px;
    font-style: normal;
  }

  #stamped-main-widget:after,
  #stamped-main-widget:before {
    content: " ";
    display: table;
  }

  #stamped-main-widget:not([data-product-id]) .stamped-summary-actions,
  #stamped-main-widget:not([data-product-id]) li#tab-questions,
  #stamped-main-widget[data-product-id=""] .stamped-summary-actions,
  #stamped-main-widget[data-product-id=""] li#tab-questions,
  .aggregateRating {
    display: none !important;
  }

  .stamped-loading {
    display: block;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 24px;
    text-align: center;
  }

  .stamped-header-title {
    font-size: 24px;
    margin: 0 0 30px;
    width: 100%;
  }

  .stamped-header .stamped-review-options {
    background: #fafafa;
    padding: 20px;
    margin: 20px 0;
    line-height: 10px;
    clear: both;
  }

  .stamped-starratings {
    font-size: 13px;
    margin: 0;
  }

  .stamped-icon {
    font-size: 120%;
    position: relative;
    top: 1px;
    width: 1.3em;
    height: 1.3em;
  }

  .stamped-icon.stamped-icon-star-empty {
    opacity: 0.6;
  }

  .stamped-product-reviews-badge.hide-text .stamped-badge-caption {
    display: none !important;
  }

  .stamped-badge[data-rating="0"],
  .stamped-badge[data-rating="0,0"],
  .stamped-badge[data-rating="0.0"] {
    display: none;
  }

  .stamped-main-badge .stamped-badge[data-rating="0"],
  .stamped-main-badge .stamped-badge[data-rating="0,0"],
  .stamped-main-badge .stamped-badge[data-rating="0.0"] {
    display: block;
  }

  .stamped-badge {
    min-height: auto;
    min-width: auto;
    display: block;
    cursor: pointer;
  }

  .stamped-main-badge:after,
  .stamped-main-badge:before {
    content: "";
  }

  .stamped-badge-starrating {
    color: gold;
    margin: 0 3px 0 0 !important;
    vertical-align: middle;
  }

  .stamped-badge-starrating .stamped-fa {
    font-size: 100%;
  }

  .stamped-main-badge[data-type="qna"]:empty:before {
    font-family: stamped-font, FontAwesome;
    content: "\\f0e6 ";
  }

  .stamped-main-badge[data-type="qna"]:empty:after {
    content: " Ask a question";
  }

  .stamped-badge-caption[data-questions]:before {
    content: "\f0e6 ";
    font-family: stamped-font, FontAwesome;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    text-decoration: inherit;
    padding-right: 3px;
    display: inline-block;
  }

  .stamped-badge-caption[data-questions]:after {
    content: " answered questions";
  }

  .stamped-badge-caption[data-questions="1"]:after {
    content: " answered question";
  }

  .stamped-badge-caption[data-questions="0"]:after {
    content: "Ask a question";
  }

  .stamped-badge-caption[data-reviews]:after {
    content: " reviews";
  }

  .stamped-badge-caption[data-reviews="1"]:after {
    content: " review";
  }

  .stamped-badge-caption[data-reviews="0"]:after {
    content: " No reviews";
  }

  .stamped-main-badge .stamped-badge-caption[data-reviews="0"]:after {
    content: "";
  }

  span[data-lang="fr"] .stamped-badge-caption[data-reviews]:after {
    content: " avis";
  }

  .stamped-main-badge[data-lang="fr"]
    .stamped-badge-caption[data-reviews="0"]:after {
    content: "";
  }

  span.stamped-badge[data-rating="0.0"]:not([data-lang="en"]):not([data-lang=""])
    .stamped-badge-caption:after {
    content: "";
  }

  .stamped-badge-caption[data-reviews][data-label]:after {
    content: " " attr(data-label);
  }

  .stamped-badge-caption[data-reviews][data-label][data-version="2"]:after {
    content: "" !important;
  }

  .stamped-badge-caption[data-reviews][data-label][data-version="2"] > span {
    display: inline !important;
  }

  .stamped-main-badge {
    cursor: pointer;
  }

  .stamped-tab-container {
    position: relative;
    font-size: 14px;
  }

  div.stamped-container ul.stamped-tabs,
  div.stamped-container ul.stamped-tabs li {
    max-height: 45px;
    margin-bottom: 0;
    margin-left: 0;
  }

  .stamped-container ul.stamped-tabs {
    padding: 0;
    border-bottom: 1px solid #eee;
    margin: 0 !important;
  }

  .stamped-container ul.stamped-tabs li {
    display: inline-block;
    height: 100%;
    width: auto !important;
    margin-right: 20px;
    padding-top: 6px;
    padding-bottom: 10px;
    color: #000;
    font-size: 14px;
    cursor: pointer;
    box-sizing: border-box;
  }

  .stamped-container ul.stamped-tabs li.active {
    font-weight: 700;
    border-bottom: 3px solid #000;
    background: #eee;
    padding: 10px !important;
  }

  li#tab-questions[data-count][data-new-tab]:after,
  li#tab-reviews[data-count]:after {
    content: "" attr(data-count);
    background: #f8f9fa;
    padding: 2px 5px;
    margin-left: 10px;
  }

  .stamped-file-uploader {
    vertical-align: bottom;
  }

  .stamped-file-holder {
    float: left;
    margin-top: 15px;
  }

  .stamped-file-photo {
    position: relative;
    display: inline-block;
    width: 70px;
  }

  .stamped-file-photo i {
    position: absolute;
  }

  .stamped-file-photo-remove {
    position: absolute;
    top: 0;
    right: 0;
    line-height: 12px;
    height: 15px;
    width: 15px;
    background: rgba(255, 255, 255, 0.9) !important;
    text-align: center;
    cursor: pointer;
  }

  .stamped-file-uploader label[for="stamped-file-uploader-input"] {
    margin: 0 !important;
  }

  .stamped-file-uploader label[for="stamped-file-uploader-input"] > span {
    margin-right: 5px;
    border-radius: 0;
    padding: 9px 20px;
  }

  .stamped-file-uploader-btn {
    border-radius: 0 !important;
    color: #000;
  }

  .stamped-file-uploader-btn-label2:before {
    content: " Add Photos";
  }

  .summary-overview {
    margin-bottom: 20px;
  }

  .stamped-summary {
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .stamped-summary:after,
  .stamped-summary:before {
    content: " ";
    display: table;
  }

  .stamped-summary-actions {
    display: inline;
  }

  .stamped-summary-actions-clear,
  .stamped-summary-actions-mobile-filter,
  .stamped-summary-actions-newquestion,
  .stamped-summary-actions-newreview {
    font-size: 13px;
    text-decoration: none;
    font-weight: 400;
    text-align: center;
    width: auto;
    line-height: 30px;
    background: 0 0;
    color: #000;
    border: 1px solid #ccd6e0;
    padding: 3px 20px;
    border-radius: 3px;
    font-weight: 700;
    box-shadow: 2px 3px 5px 0 #8888886b !important;
  }

  .stamped-summary-actions-newquestion:hover,
  .stamped-summary-actions-newreview:hover {
    box-shadow: none !important;
  }

  .stamped-summary-actions-clear {
    display: inline-block;
    cursor: pointer;
    margin-right: 3px !important;
    margin-top: 15px;
    font-size: 12px;
  }

  .stamped-summary-actions-clear:before {
    content: "× ";
    font-size: 18px;
    vertical-align: bottom;
  }

  .stamped-summary-actions-newquestion,
  .stamped-summary-actions-newreview {
    float: right;
    margin: 0 0 0 15px;
  }

  .stamped-summary-actions-newquestion:hover,
  .stamped-summary-actions-newreview:hover {
    text-decoration: none;
    opacity: 0.9;
  }

  .stamped-summary-actions-newquestion:before,
  .stamped-summary-actions-newreview:before {
    font-family: stamped-font, FontAwesome;
    font-style: normal;
    font-weight: 400;
    text-decoration: inherit;
    padding-right: 8px;
    display: inline-block;
  }

  .stamped-summary-actions-newreview:before {
    content: "\e803 ";
  }

  .stamped-summary-actions-newquestion:before {
    content: "\f0e6 ";
  }

  .stamped-summary-starrating {
    float: left;
    margin: 0;
  }

  .stamped-summary-starrating i:before {
    font-size: 23px;
  }

  .stamped-summary-ratings {
    width: 250px;
    float: left;
    padding-left: 20px;
    border-left: 1px solid #eee;
    color: #999;
    font-size: 12px;
    line-height: normal;
    border-right: 1px solid #eee;
    margin-right: 20px;
    margin-bottom: 15px;
  }

  .stamped-summary-ratings[data-count="0"] {
    display: none;
  }

  .stamped-summary-ratings:hover .summary-rating {
    opacity: 0.5;
  }

  .summary-rating[data-count="0"] {
    pointer-events: none;
  }

  .summary-rating:hover {
    opacity: 1 !important;
  }

  .stamped-summary-ratings.selected .summary-rating {
    opacity: 0.5;
  }

  .stamped-summary-ratings.selected .summary-rating.selected {
    opacity: 1;
  }

  .stamped-summary-caption {
    display: inline-block;
    margin-left: 2px;
    float: left;
  }

  .stamped-summary-caption-1 {
    line-height: 0;
  }

  .stamped-summary-actions-togglereviews[data-count="0"],
  .stamped-summary[data-count="0"] .stamped-summary-caption {
    display: none;
  }

  .stamped-summary-caption .stamped-summary-reviews:before {
    content: "Based on ";
  }

  .stamped-summary-caption .stamped-summary-reviews:after {
    content: " reviews";
  }

  .stamped-summary-caption .stamped-summary-text {
    font-size: 15px;
    margin-top: 10px;
  }

  .stamped-summary-text {
    display: inline-block;
    font-size: 0.9em;
  }

  .stamped-summary-caption .stamped-summary-text[data-count="0"] {
    display: none;
  }

  .stamped-summary-caption .stamped-summary-text:after,
  .stamped-summary-caption .stamped-summary-text:before {
    content: "";
  }

  .stamped-summary-text-1 {
    font-size: 37px;
    line-height: 30px;
    font-weight: 700;
    margin-right: 5px;
    margin-top: 0;
  }

  .stamped-summary-text-1[data-count="0"] {
    display: none !important;
  }

  .stamped-summary-text-2 {
    display: block !important;
    text-align: center;
    font-size: 30px;
  }

  .summary-rating {
    margin-bottom: 3px;
  }

  .summary-rating-title {
    width: 19%;
    display: inline-block;
    cursor: pointer;
  }

  .stamped-photos-title {
    font-size: 13px;
    line-height: 10px;
    display: none;
  }

  .summary-rating-bar {
    width: 59%;
    display: inline-block;
    background: #f0f0f0;
    border: none;
    text-align: center;
    cursor: pointer;
  }

  .summary-rating-bar div[data-rating="0"] {
    color: #ddd;
  }

  .summary-rating-count {
    width: 15%;
    display: inline-block;
    text-align: left;
    padding-left: 5px;
    color: #ccc;
    white-space: nowrap;
  }

  .summary-rating-bar-content {
    background: #ffd200;
    line-height: normal;
    display: flex;
    padding: 1px 0 2px;
    word-wrap: initial;
    word-break: initial;
  }

  .summary-rating-bar-content:before {
    content: "";
    display: block;
    margin: 2px;
  }

  .stamped-summary-photos {
    max-width: 470px;
    position: relative;
    color: #999;
    height: auto;
    white-space: nowrap;
    overflow-x: visible;
    overflow-y: visible;
    min-width: 280px;
    display: flex;
    margin-bottom: 20px;
  }

  .stamped-summary-photos.stamped-summary-photos-container {
    max-width: 295px;
    min-width: 295px;
    white-space: normal;
    display: inline-table;
  }

  .stamped-summary-photos-container {
    overflow-x: hidden !important;
    overflow-y: hidden !important;
  }

  .stamped-summary-photos-container
    .stamped-photos-carousel
    .photo.stamped-photo
    a {
    width: 70px;
    height: 55px;
    display: block;
    position: relative;
    cursor: zoom-in;
  }

  .stamped-summary-photos-container .stamped-photos-carousel a img {
    width: 70px;
    height: 55px !important;
    border-radius: 0;
  }

  .stamped-summary-photos-container
    .stamped-photos-carousel
    .photo.stamped-photo.stamped-video:before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    height: 100%;
    background: rgba(51, 51, 51, 0.3);
    border-radius: 5px;
    background-image: url("https://cdn.shopify.com/s/files/1/0638/7747/files/icon_play_small_1bb286c7-bcdc-483c-b2d7-f8ad4e2691ba.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80px;
    pointer-events: none;
  }

  .stamped-summary-photos-container .stamped-photos-carousel-btn-left,
  .stamped-summary-photos-container .stamped-photos-carousel-btn-right {
    display: none !important;
  }

  .stamped-summary-photos > div:nth-child(2) {
    height: auto;
  }

  .stamped-photos-carousel {
    width: 100%;
    height: auto;
    position: relative;
    left: 0;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    overflow-x: hidden;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
  }

  .stamped-photos-carousel .photo {
    display: inline-block;
    height: auto;
    padding-bottom: 0;
    padding-right: 5px;
    vertical-align: top;
    font-size: 11px;
  }

  .stamped-photos-carousel .photo.stamped-photo {
    position: relative;
    width: 70px;
    height: 55px;
    padding-right: 0;
    margin-bottom: 5px;
    margin-right: 3px;
    border: 1px solid #ccc;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center !important;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  .stamped-photos-carousel a img {
    height: 90px !important;
    border-radius: 5px;
  }

  .stamped-photos-carousel[data-count] > div:after,
  .stamped-photos-carousel[data-count] > div:before {
    position: absolute;
    width: 68px;
    height: 55px;
    display: block;
    background-color: #fff;
    box-shadow: 0 0 0 1px #ccc;
    content: "";
  }

  .stamped-photos-carousel[data-count] > div:before {
    right: 4px;
    bottom: 4px;
    z-index: 1;
  }

  .stamped-photos-carousel[data-count] > div:after {
    right: 1px;
    bottom: 1px;
    z-index: 0;
  }

  .stamped-reviews-filter-label {
    display: none;
  }

  .stamped-reviews-filter {
    width: 100%;
    margin: 0 1px;
    display: inline-block;
  }

  .stamped-reviews-filter[data-show-filters="part"],
  .stamped-reviews-filter[data-show-filters="true"] {
    padding-bottom: 30px;
    border-bottom: 1px solid #eee;
  }

  .stamped-reviews-filter[data-show-filters="part"] .stamped-reviews-filter-label,
  .stamped-reviews-filter[data-show-filters="true"]
    .stamped-reviews-filter-label {
    display: inline-block;
  }

  .stamped-reviews-filter[data-show-filters="true"] #stamped-sort-select,
  .stamped-reviews-filter[data-show-filters="true"] .stamped-sort-select-wrapper {
    display: none;
  }

  .stamped-reviews-filter[data-show-filters="true"] #stamped-sort-select2,
  .stamped-reviews-filter[data-show-filters="true"]
    .stamped-sort-select2-wrapper {
    display: inline-block !important;
    float: none !important;
  }

  .stamped-questions-filter-label,
  .stamped-reviews-filter-label {
    margin-top: 20px;
    font-weight: 700;
    font-size: 13px;
  }

  .stamped-questions-filter-label:empty:before,
  .stamped-reviews-filter-label:empty:before {
    content: "Filter Reviews:";
  }

  .stamped-filter-selects {
    margin-top: 15px;
  }

  .stamped-filter-select {
    margin-right: 15px;
    margin-bottom: 10px;
    display: inline-block;
  }

  .stamped-summary-keywords {
    clear: none;
    font-size: 13px;
    margin-top: 20px;
  }

  .stamped-summary-keywords-label {
    display: inline-block;
    margin-bottom: 5px;
    font-weight: 700;
  }

  ul.stamped-summary-keywords-list {
    margin: 0;
    padding: 0;
    font-size: 12px;
    max-width: 600px;
  }

  ul.stamped-summary-keywords-list li {
    font-size: 14px;
    color: #6b6d76;
    background: rgba(234, 234, 234, 0.7);
    padding: 6px 15px;
    margin-right: 8px;
    margin-bottom: 8px;
    margin-left: 0;
    margin-top: 0;
    border-radius: 3px;
    float: none;
    list-style: none;
    border: none;
    font-weight: 700;
    cursor: pointer;
    display: inline-block;
    text-transform: capitalize;
    line-height: 20px;
  }

  ul.stamped-summary-keywords-list li.selected {
    border-color: none;
    background: #ddd !important;
  }

  ul.stamped-summary-keywords-list li:hover {
    background: #fafafa;
    border: none;
  }

  span.stamped-keyword-highlight {
    display: inline;
    background: #feff83;
  }

  .stamped-form-actions:after,
  .stamped-form-actions:before,
  .stamped-form-contact-email:after,
  .stamped-form-contact-email:before,
  .stamped-form-contact-location:after,
  .stamped-form-contact-location:before,
  .stamped-form-contact-name:after,
  .stamped-form-contact-name:before,
  .stamped-form-contact:after,
  .stamped-form-contact:before,
  .stamped-form-review-body:after,
  .stamped-form-review-body:before,
  .stamped-form-review-rating:after,
  .stamped-form-review-rating:before,
  .stamped-form-review-title:after,
  .stamped-form-review-title:before,
  .stamped-form-review:after,
  .stamped-form-review:before {
    content: " ";
    display: table;
  }

  .stamped-form-contact-location {
    display: none;
  }

  .stamped-photos-carousel .photo.stamped-photo:nth-child(n + 9),
  .stamped-photos-carousel[data-count="0"] > div:after,
  .stamped-photos-carousel[data-count="0"] > div:before,
  .stamped-photos-carousel[data-count="1"] > div:after,
  .stamped-photos-carousel[data-count="1"] > div:before,
  .stamped-photos-carousel[data-count="2"] > div:after,
  .stamped-photos-carousel[data-count="2"] > div:before,
  .stamped-photos-carousel[data-count="3"] > div:after,
  .stamped-photos-carousel[data-count="3"] > div:before,
  .stamped-photos-carousel[data-count="4"] > div:after,
  .stamped-photos-carousel[data-count="4"] > div:before,
  .stamped-photos-carousel[data-count="5"] > div:after,
  .stamped-photos-carousel[data-count="5"] > div:before,
  .stamped-photos-carousel[data-count="6"] > div:after,
  .stamped-photos-carousel[data-count="6"] > div:before,
  .stamped-photos-carousel[data-count="7"] > div:after,
  .stamped-photos-carousel[data-count="7"] > div:before {
    display: none !important;
  }

  .stamped-photos-carousel .photo.stamped-photo:nth-child(8) {
    z-index: 2;
    position: relative;
  }

  .stamped-photos-carousel .photo.stamped-photo:nth-child(8) a:before {
    content: " ";
    border-right: 1px solid #ccc;
    width: 70px;
    height: 55px;
    position: absolute;
    top: 1px;
    border-bottom: 1px solid #ccc;
    left: 1px;
    z-index: 0;
  }

  .stamped-photos-carousel .photo.stamped-photo:nth-child(8) a:after {
    content: " ";
    border-right: 1px solid #ccc;
    width: 70px;
    height: 55px;
    position: absolute;
    top: 3px;
    border-bottom: 1px solid #ccc;
    left: 3px;
    z-index: 0;
  }

  .stamped-photos-carousel-btn-left,
  .stamped-photos-carousel-btn-right {
    position: absolute;
    top: 50%;
    vertical-align: middle;
    margin-top: -10px;
    height: 20px;
    text-align: right;
  }

  .stamped-photos-carousel-btn-left {
    left: -16px;
  }

  .stamped-photos-carousel-btn-right {
    right: -18px;
  }

  span.btn-slide-left,
  span.btn-slide-right {
    cursor: pointer;
  }

  .new-review-form,
  .stamped-content form {
    display: block;
    margin: 25px 0 0;
    padding: 25px 0 0;
  }

  .stamped-form > form {
    margin: 0;
  }

  .stamped-form-title {
    font-size: 16px;
    line-height: 24px;
    margin-top: 0;
  }

  .stamped-form-actions,
  .stamped-form-contact,
  .stamped-form-custom-questions,
  .stamped-form-review {
    padding: 0;
    border: 0;
    margin: 0;
  }

  .stamped-form-actions {
    text-align: right;
    margin-bottom: 30px;
  }

  .stamped-content {
    position: relative;
  }

  .stamped-main-widget-loading .stamped-reviews:before {
    content: "Loading more...";
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    border: none;
    margin: auto auto auto -75px;
    padding: 10px 20px;
    font-size: 14px;
    background: #eee;
    z-index: 2;
  }

  .stamped-reviews-nav,
  .stamped-reviews-ul,
  nav.stamped-reviews {
    margin: auto !important;
  }

  .stamped-main-widget-loading .stamped-reviews .stamped-review {
    opacity: 0.5;
  }

  .stamped-reviews:empty:after,
  .stamped-ugc-modal-wrapper:after {
    content: "";
  }

  .stamped-form-review-rating {
    overflow: hidden;
    margin-bottom: 15px;
  }

  .stamped-form-review-rating input {
    display: table;
    height: 5px !important;
    width: 5px !important;
    font-size: 1px !important;
    line-height: 5px !important;
    -webkit-appearance: none;
  }

  .stamped-form-review-rating a,
  .stamped-form-review-rating a:hover {
    text-decoration: none !important;
    display: inline-block !important;
    float: left !important;
  }

  .stamped-form-label {
    font-size: 14px;
    line-height: 20px;
    color: #000;
  }

  .stamped-form-input {
    margin: 0;
    font-family: inherit !important;
    font-style: normal;
  }

  .stamped-form-label + .stamped-form-input {
    font-weight: 400;
    margin: 0 0 10px;
    display: block;
    width: 100% !important;
    min-height: 30px;
    line-height: 30px;
  }

  .stamped-review-avatar[data-avatar="true"] .stamped-review-avatar-content,
  .stamped-review-header #stamped-review-avatar:empty,
  .stamped-review-header .stamped-review-avatar:empty,
  .stamped-review-reply #stamped-review-avatar:empty,
  .stamped-review-reply .stamped-review-avatar:empty {
    display: none;
  }

  input.stamped-form-input {
    height: 35px;
  }

  input.stamped-form-input-email,
  input.stamped-form-input-text,
  textarea.stamped-form-input-textarea {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100% !important;
    height: auto;
    max-width: 100%;
    margin: 0;
    padding: 5px;
    border: 1px solid #d7d7d7;
  }

  input.stamped-form-input-email,
  input.stamped-form-input-text {
    padding: 0 8px;
  }

  .stamped-form-input-textarea {
    resize: vertical;
  }

  .stamped-form-input-error,
  input[type="email"].stamped-form-input-error,
  input[type="text"].stamped-form-input-error {
    border-color: #c0363a;
  }

  .stamped-starrating.stamped-form-input-error a {
    color: #c0363a;
  }

  .stamped-form-message {
    padding: 0.8em 1em;
    margin: 0 0 1em;
  }

  .stamped-form-message-error {
    background: #c0363a;
    color: #fff;
  }

  .stamped-form-message-success {
    padding: 0;
    margin: 50px 0 0;
  }

  .stamped-button,
  .stamped-button-primary {
    width: auto;
    height: auto !important;
    margin: 0;
    min-height: 1em;
  }

  .stamped-button-primary {
    float: initial;
    border: 1px solid;
    padding: 5px 10px;
    margin-left: 10px;
    min-height: 30px;
    text-decoration: none;
    background: #000;
    color: #fff;
    cursor: pointer;
  }

  .stamped-button-primary[disabled="disabled"] {
    opacity: 0.5;
  }

  #stamped-button-submit,
  input.stamped-button.stamped-button-primary.button.button-primary.btn.btn-primary {
    background: #000;
    color: #fff;
    width: auto;
    padding: 10px 20px;
  }

  .stamped-reviews {
    margin: 0;
    position: relative;
    clear: both;
  }

  .stamped-reviews[data-filtered="true"]:empty:after {
    content: "No reviews matched the selected criteria. Clear or modify your filter and try again.";
    display: block;
    text-align: center;
    max-width: 280px;
    margin: auto;
    margin-top: 20px;
    line-height: 25px;
    font-size: 14px;
  }

  .stamped-review {
    border-top: 1px solid #eee;
    margin-bottom: 30px;
    padding-top: 25px;
  }

  .stamped-review:first-child {
    margin-top: 0;
    border-top: none;
  }

  .stamped-review:last-child {
    padding-bottom: 0;
  }

  .verified-badge .icon {
    display: none;
    background: 0 0;
    float: none;
    width: auto;
    height: auto;
    margin-right: -2px;
  }

  .stamped-review-header {
    font-size: 14px;
    width: 100%;
    line-height: 18px;
  }

  div#stamped-review-avatar img,
  div.stamped-review-avatar img {
    width: 100%;
    max-width: 55px;
    border-radius: 50%;
    vertical-align: top;
  }

  .stamped-review-header #stamped-review-avatar,
  .stamped-review-header .stamped-review-avatar,
  .stamped-review-reply #stamped-review-avatar,
  .stamped-review-reply .stamped-review-avatar {
    float: left;
  }

  .stamped-review-avatar {
    position: relative;
    float: left;
    padding: 0;
    margin-right: 10px;
    color: #bbb;
    background: #f5f5f5;
    border-radius: 50%;
    text-shadow: 1px 1px 0 #fff;
  }

  .stamped-review[data-verified="buyer"] .stamped-review-avatar:before {
    content: "\\e904";
    font-family: stamped-font;
    font-size: 21px !important;
    position: absolute;
    right: -5px;
    bottom: 0;
    color: #1cc286;
  }

  .stamped-review-reply .stamped-review-avatar:before {
    display: none;
  }

  .stamped-review-reply .stamped-review-content {
    clear: both;
    padding-top: 5px;
  }

  .stamped-review-avatar-content {
    height: 55px;
    width: 55px;
    font-size: 18px;
    vertical-align: text-bottom;
    text-align: center;
    text-transform: inherit;
    font-style: initial;
    margin-right: 10px;
  }

  .stamped-review-avatar-content {
    display: table-cell;
    vertical-align: middle;
    height: 56px;
    width: 55px;
    font-weight: 700;
  }

  .stamped-review-header .review-location {
    color: #999;
    font-size: 12px;
    font-weight: 400;
  }

  .stamped-location-flag {
    width: 18px;
    max-width: 18px;
    min-width: 18px;
    line-height: 0;
  }

  .stamped-location-flag img {
    width: 18px;
    max-width: 18px;
    min-width: 18px;
    display: inline-block;
    vertical-align: bottom;
    margin: 3px 3px 3px 1px !important;
    line-height: 0;
  }

  .stamped-location-flag img:not([src]) {
    visibility: hidden;
    height: 0;
    width: 0;
  }

  .stamped-location-flag img.stamped-lazyload.loading {
    display: none;
  }

  .stamped-review-header .verified-badge[data-type="email"]:after {
    content: " Verified Reviewer";
  }

  .stamped-review-header .verified-badge[data-type="buyer"]:after {
    content: " Verified Buyer";
  }

  .stamped-review-header
    .stamped-verified-badge[data-type="buyer"][data-verified-label]:after {
    content: attr(data-verified-label);
  }

  .stamped-review-header .stamped-verified-badge,
  .stamped-review-header .verified,
  .stamped-review-header .verified .fa-check-circle-o,
  .stamped-review-header .verified .stamped-fa-check-circle-o,
  .stamped-review-header .verified-badge,
  .stamped-review-header .verified-badge .fa-check-circle-o,
  .stamped-review-header .verified-badge .stamped-fa-check-circle-o,
  .stamped-verified-badge {
    color: #1cc286;
  }

  .stamped-review-header .created,
  .stamped-review-header-byline .created {
    float: right !important;
    color: #999;
    font-size: 12px;
    font-weight: 400;
  }

  .stamped-review-header-starratings {
    font-size: 20px;
    display: inline-block;
    margin-left: -2px;
  }

  .stamped-review-header-title {
    font-size: 15px;
    line-height: 24px;
    min-height: 15px;
    margin: 5px 0 0;
    padding: 0;
    border: none;
    font-weight: 700;
    text-align: left;
  }

  .stamped-review-reply .stamped-review-header-title {
    clear: none;
    float: left;
    margin: 0;
    font-weight: 700;
  }

  .stamped-review-content {
    margin: 0 0 15px;
    clear: both;
  }

  .stamped-review-content:after,
  .stamped-review-content:before {
    content: " ";
    display: table;
  }

  .stamped-review-content:after {
    clear: both;
  }

  .stamped-container .stamped-review-image {
    margin-top: 10px;
  }

  .stamped-container .stamped-review-image img {
    width: auto;
    border: 1px solid #ccc;
    margin-right: 0 !important;
    transition: all ease 0.2s;
    cursor: zoom-in;
  }

  .stamped-container .stamped-review-image a {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    line-height: 0;
    overflow: hidden;
  }

  .stamped-container .stamped-review-image a:hover img {
    border-color: orange;
  }

  .stamped-container .stamped-review-image a[data-featherlight="iframe"]:before {
    content: "\\25BA";
    position: absolute;
    width: 30px;
    display: inline-block;
    text-align: center;
    margin-top: 36px;
    border-radius: 50%;
    height: 30px;
    line-height: 30px;
    color: #fff;
    font-weight: 700;
    font-family: stamped-font;
    font-size: 29px;
    opacity: 0.8;
    left: 50%;
    margin-left: -15px;
    text-shadow: 0 0 4px #000;
  }

  a.stamped-review-link-video:before {
    content: " ";
    position: absolute;
    width: 100%;
    text-align: center;
    height: 100%;
    background: rgba(51, 51, 51, 0.3);
    border-radius: 5px;
    background-image: url("https://cdn.shopify.com/s/files/1/0638/7747/files/icon_play_small_1bb286c7-bcdc-483c-b2d7-f8ad4e2691ba.png?17798340297911193567");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100px;
  }

  .stamped-review-image video {
    object-fit: cover;
    margin-right: 10px;
    max-width: 300px;
  }

  .stamped-review .author {
    margin-right: 7px;
  }

  .stamped-review-content-body,
  .stamped-review-reply-body,
  .stamped-review-reply-shop {
    font-size: 1em;
    line-height: 20px;
  }

  .stamped-review-content-body {
    margin: 0;
    padding: 0;
  }

  .stamped-review-reply {
    background: 0 0;
    margin: 15px 0 0 35px;
    padding: 10px 0 0 15px;
    border-left: 5px solid #e0e0e0;
  }

  .stamped-review-reply:after,
  .stamped-review-reply:before {
    content: " ";
    display: table;
  }

  .stamped-review-reply:after {
    clear: both;
  }

  .stamped-review-reply .stamped-review-footer {
    display: none;
  }

  .stamped-review-reply-body {
    margin: 0 0 12px;
  }

  .stamped-review-reply-shop {
    display: block;
    float: right;
    font-style: italic;
  }

  p.stamped-review-content-body {
    font-size: 14px;
    white-space: pre-wrap;
    margin-bottom: 0;
  }

  .stamped-review-read-more {
    color: #2196f3;
  }

  .stamped-summary-recommend {
    display: block;
    clear: both;
    font-size: 14px;
  }

  span.stamped-summary-recommend .stamped-summary-recommend-label:empty:after {
    content: "reviewers would recommend this product";
  }

  span.stamped-summary-recommend-percent {
    background: #555;
    padding: 5px;
    color: #fff;
    font-weight: 700;
    margin-right: 7px;
  }

  span.stamped-summary-recommend-percent:after {
    content: "%";
  }

  .stamped-form-review-recommend,
  .stamped-form-review-recommend-product {
    margin-left: 1px;
  }

  .stamped-form-review-recommend-label {
    margin-bottom: 10px;
  }

  .stamped-form-review-recommend-product:before {
    content: "Do you recommend this Product?";
    display: block;
    margin-bottom: 10px;
  }

  .stamped-form-review-recommend input,
  .stamped-form-review-recommend-product input {
    height: auto;
  }

  .stamped-form-review-recommend label,
  .stamped-form-review-recommend-product label {
    margin-right: 20px;
  }

  .stamped-user-review {
    display: block;
    flex: auto;
    width: 100%;
    background: #f2f7fa !important;
    padding: 20px;
    border: 1px solid #dde2eb;
  }

  .stamped-review-recommend[data-is-recommend="true"] {
    font-size: 0.9em;
    margin: 10px 0 10px 5px;
  }

  .stamped-review-recommend[data-is-recommend="true"]:before {
    content: "\\f164";
    font-family: stamped-font;
    margin-right: 8px;
    color: #1cc186;
  }

  .stamped-review-recommend[data-is-recommend="true"]:empty:after {
    content: " I recommend this product";
    clear: both;
    display: inline-block;
  }

  .stamped-review-recommend:not([data-is-recommend="true"]) {
    display: none;
  }

  .edit-review-form {
    margin-top: 0 !important;
  }

  .edit-review-form textarea {
    margin-top: 10px;
  }

  .stamped-user-review .created {
    float: right;
  }

  .stamped-user-review:before {
    content: "Your Review";
    font-size: 20px;
    margin-bottom: 10px;
    clear: both;
    display: inline-block;
  }

  .stamped-user-review button {
    float: right;
    width: auto;
    padding: 3px 10px;
    font-size: 15px;
    background: grey;
    color: #fff;
    border: none;
  }

  button.stamped-user-review-button:before {
    content: "UPDATE";
  }

  button.stamped-button-edit:before {
    content: "Edit";
  }

  .stamped-review-footer .stamped-share-links {
    display: none;
  }

  .stamped-share-links a {
    text-decoration: none;
  }

  .stamped-messages .stamped-thank-you {
    width: 100%;
    text-align: center;
    padding: 30px 0;
    border: 1px solid #eee;
    display: none;
    margin-top: 23px;
  }

  .stamped-messages .stamped-thank-you p:first-child {
    font-size: 1.3em;
    margin: auto;
  }

  .stamped-messages .stamped-share-links {
    margin-top: 20px;
  }

  .stamped-messages .stamped-share-links a {
    text-decoration: none;
    padding: 7px 20px;
    color: #000;
    border: 1px solid #ccc;
    background: #eee;
    margin-right: 10px;
  }

  .stamped-messages .stamped-share-links a i {
    margin-right: 10px;
  }

  .stamped-messages h3 {
    text-align: center;
  }

  .stamped-review-footer {
    clear: both !important;
    font-size: 12px;
    opacity: 0.8;
    margin-top: 25px;
  }

  .stamped-review-footer:after,
  .stamped-review-footer:before {
    content: " " !important;
    display: table !important;
  }

  .stamped-review-footer:after {
    clear: both !important;
  }

  .stamped-review-footer a {
    text-decoration: none;
    border: none !important;
  }

  .stamped-review-footer #stamped-review-vote,
  .stamped-review-footer .stamped-review-vote {
    float: right !important;
  }

  .stamped-share-button {
    cursor: pointer;
    font-size: 0;
  }

  a.stamped-share-button:after {
    content: " Share";
    font-size: 12px;
  }

  #shopry-rating-holder:before {
    content: " Was this review helpful?";
  }

  .stamped-share-icon {
    cursor: pointer;
    text-decoration: none;
    padding: 2px 10px;
    border-radius: 2px;
  }

  .stamped-share-icon.stamped-active {
    box-shadow: none !important;
  }

  .stamped-review-footer #stamped-review-share,
  .stamped-review-footer .stamped-review-share {
    float: left !important;
  }

  #stamped-review-share,
  #stamped-review-vote,
  .stamped-review-share,
  .stamped-review-vote {
    margin-top: 0 !important;
  }

  #stamped-review-vote a,
  .stamped-review-vote a {
    cursor: pointer;
  }

  .stamped-review-reportreview {
    float: right;
    font-size: 11px;
    line-height: 16px;
  }

  .stamped-questions-placeholder .stamped-questions {
    clear: both;
    display: block !important;
  }

  .stamped-questions .stamped-review {
    width: 100%;
  }

  .stamped-questions .stamped-review-reply span.created {
    margin-right: 10px;
  }

  .stamped-questions .stamped-icon-comment,
  .stamped-questions .stamped-review-content-body {
    margin-top: 10px;
  }

  .stamped-questions #stamped-pagination-question {
    width: 100%;
  }

  .stamped-questions span.stamped-review-header-byline {
    display: block;
    margin-bottom: 10px !important;
    font-weight: 700;
  }

  .question-form-wrapper {
    clear: both;
  }

  .stamped-pagination {
    text-align: center;
    position: relative;
    margin: 20px 0 20px;
    padding: 0;
  }

  .stamped-pagination a {
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
  }

  .stamped-pagination a:not(.link):not(.btn) {
    border: none;
  }

  .stamped-link-disabled {
    pointer-events: none;
  }

  .stamped-pagination li {
    float: none;
    list-style: none;
    font-size: 14px;
    width: auto;
    margin: 0;
    padding: 0;
  }

  .stamped-pagination li.page {
    display: inline-block;
    padding: initial;
    margin: auto;
  }

  .stamped-pagination .page.active {
    font-weight: 700;
    text-decoration: underline !important;
  }

  .stamped-pagination .last,
  .stamped-pagination .next {
    display: inline-block;
    margin-top: 0;
    margin-left: 10px;
  }

  .stamped-pagination .first,
  .stamped-pagination .previous {
    display: inline-block;
    margin-top: 0;
    margin-right: 10px;
  }

  .stamped-pagination .first,
  .stamped-pagination .last {
    display: none !important;
  }

  .stamped-pagination-prev {
    position: absolute;
    left: 0;
  }

  .stamped-pagination-next {
    position: absolute;
    right: 0;
  }

  div[data-load-type="continue"] ul.stamped-pagination li,
  div[data-widget-load-type="continue"] ul.stamped-pagination li {
    display: none;
  }

  div[data-load-type="continue"] ul.stamped-pagination li.next,
  div[data-widget-load-type="continue"] ul.stamped-pagination li.next {
    display: block;
  }

  div[data-load-type="continue"] ul.stamped-pagination li.next a,
  div[data-widget-load-type="continue"] ul.stamped-pagination li.next a {
    font-size: 0;
    display: inline-block;
    border: 1px solid #333;
    padding: 10px 15px;
    background: #333;
    color: #fff;
    border-radius: 3px;
  }

  div[data-load-type="continue"] ul.stamped-pagination li.next a:hover,
  div[data-widget-load-type="continue"] ul.stamped-pagination li.next a:hover {
    border: 1px solid #333;
    background: #fff;
    color: #333;
  }

  div[data-load-type="continue"] ul.stamped-pagination li.next a:before,
  div[data-widget-load-type="continue"] ul.stamped-pagination li.next a:before {
    content: "Load More Reviews";
    font-size: 15px;
  }

  .stamped-sort-select {
    position: initial;
    float: right;
    font-size: 12px;
    width: auto;
    height: 30px;
    margin: auto 1px auto auto;
    max-width: initial;
    padding: 0 12px 0 10px;
    background-color: transparent;
    color: #636e7b;
    font-weight: 700;
    background-repeat: no-repeat;
    background-position: 100% center;
    line-height: 30px;
    border-radius: 0;
    z-index: 2;
    color: #333;
    position: initial;
    height: 35px;
    min-height: 35px;
    background-position: right -1px center;
    background-image: url("https://cdn.stamped.io/cdn/images/icon-arrow-down-bg.svg") !important;
    background-repeat: no-repeat;
    background-color: #fff;
    background-size: initial;
    padding-right: 0;
    padding-left: 12px;
    line-height: 1.25;
    text-indent: 0.01px;
    text-overflow: "";
    border: 1px solid #ccd6e0 !important;
    bottom: 12px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: all ease-in-out 0.2s;
    cursor: pointer;
    z-index: 2;
    border-radius: 3px;
    font-size: 11px;
    font-weight: 400;
    width: auto;
    min-width: 170px;
    margin-bottom: 15px;
  }

  #stamped-filter-select,
  #stamped-sort-select,
  #stamped-sort-select2,
  .stamped-filter-select {
    color: #333;
    position: initial;
    height: 35px;
    min-height: 35px;
    background-position: right -1px center;
    background-image: url("https://cdn.stamped.io/cdn/images/icon-arrow-down-bg.svg") !important;
    background-repeat: no-repeat;
    background-color: #fff;
    background-size: initial !important;
    padding: 0 12px !important;
    line-height: 1.25;
    text-indent: 0.01px;
    text-overflow: "";
    border: 1px solid #ccd6e0 !important;
    bottom: 12px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: all ease-in-out 0.2s;
    cursor: pointer;
    z-index: 2;
    border-radius: 3px;
    font-size: 12px;
    font-weight: 400;
    width: auto;
  }

  #stamped-sort-select,
  #stamped-sort-select2 {
    color: #333;
    position: initial;
    height: 35px;
    min-height: 35px;
    background-position: right -1px center;
    background-image: url("https://cdn.stamped.io/cdn/images/icon-arrow-down-bg.svg") !important;
    background-repeat: no-repeat;
    background-color: #fff;
    background-size: initial;
    padding-right: 0;
    padding-left: 12px;
    line-height: 1.25;
    text-indent: 0.01px;
    text-overflow: "";
    border: 1px solid #ccd6e0 !important;
    bottom: 12px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: all ease-in-out 0.2s;
    cursor: pointer;
    z-index: 2;
    border-radius: 3px;
    font-size: 11px;
    font-weight: 400;
    width: auto;
    min-width: 170px;
    margin-bottom: 15px;
  }

  #stamped-sort-select {
    margin-top: -1px;
  }

  #stamped-filter-select,
  .stamped-filter-select {
    min-width: 200px;
    padding-right: 55px !important;
  }

  .stamped-questions-search-text,
  .stamped-reviews-search-text {
    color: #000;
    margin: 15px 0 0 0;
    max-width: 435px;
    position: relative;
  }

  .stamped-questions-search-text
    .stamped-questions-search-icon.stamped-fa.stamped-fa-search,
  .stamped-reviews-search-text
    .stamped-reviews-search-icon.stamped-fa.stamped-fa-search {
    position: absolute;
    top: calc(50% - 11px);
    left: 6px;
    line-height: 0;
    font-size: 20px;
  }

  .stamped-questions-search-text .stamped-questions-search-clear,
  .stamped-reviews-search-text .stamped-reviews-search-clear {
    position: absolute;
    right: 10px;
    top: calc(50% - 12px);
    color: #000;
    cursor: pointer;
    font-size: 20px;
    line-height: 20px;
    font-family: verdana;
  }

  .stamped-questions-search-text input.stamped-questions-search-input,
  .stamped-reviews-search-text input.stamped-reviews-search-input {
    color: #333;
    position: initial;
    height: 35px;
    min-height: 35px;
    background-color: #fff;
    line-height: 1.25;
    text-indent: 0.01px;
    text-overflow: "";
    border: 1px solid #ccd6e0 !important;
    bottom: 12px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: all ease-in-out 0.2s;
    z-index: 2;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 400;
    width: 99%;
    padding-left: 27px;
    padding-right: 50px;
    box-sizing: border-box;
  }

  .stamped-form-custom-questions:empty {
    display: none;
  }

  .stamped-form-custom-question > label {
    display: block;
  }

  .stamped-form-custom-question label {
    padding-left: 1px;
  }

  .new-review-form.stamped-visible {
    border-bottom: 1px solid #eee;
  }

  .new-review-form .stamped-form-custom-question {
    margin-bottom: 15px;
  }

  .new-review-form .stamped-form-custom-question br {
    display: none;
  }

  .new-review-form .stamped-form-custom-option-scale label div {
    display: block;
    margin-top: 5px;
    font-size: 0.8em;
  }

  .new-review-form .stamped-form-custom-option-scale {
    display: inline-block;
    border-top: 1px solid #ccc;
    margin-top: 10px;
  }

  .new-review-form .stamped-form-custom-option-scale input[type="radio"] {
    display: inline-block;
    margin: 0 !important;
  }

  .new-review-form .stamped-form-custom-option-scale label {
    padding-left: 1px;
    float: left;
    width: 100px;
    text-align: center;
    margin-top: -10px;
  }

  .new-review-form .stamped-form-custom-option-scale label:nth-child(2) {
    margin-left: -40px;
  }

  .new-review-form .stamped-form-custom-option-scale label:nth-child(4) {
    margin-right: -40px;
  }

  .new-review-form .stamped-form-custom-option-scale label:first-child {
    text-align: left;
  }

  .new-review-form .stamped-form-custom-option-scale label:last-child {
    text-align: right;
  }

  @media only screen and (max-width: 480px),
    only screen and (max-device-width: 480px) {
    .new-review-form .stamped-form-custom-option-scale label {
      float: left;
      width: 80px;
      text-align: center;
      margin-top: -10px;
    }
  }

  .stamped-header .stamped-review-option-scale,
  .stamped-review-option-scale-wrapper {
    background-color: #e5e5e5;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin: 9px auto;
    width: 100%;
    position: relative;
    height: 9px;
    border: 1px solid #7c7c7c;
  }

  .stamped-header .stamped-review-option-scale span,
  .stamped-review-option-scale-wrapper span {
    content: "";
    background: #525252;
    margin-left: -2px;
    width: 15px;
    height: 15px;
    border-radius: 2px;
    position: absolute;
    top: -webkit-calc(50% - 4px);
    top: calc(50% - 7px);
  }

  .stamped-header .stamped-review-option-scale i,
  .stamped-review-option-scale-wrapper i {
    background: #7c7c7c;
    display: inline-block;
    width: 1px;
    height: 8px;
  }

  .stamped-header .stamped-review-option-scale i:nth-child(1),
  .stamped-header .stamped-review-option-scale i:nth-child(5),
  .stamped-review-option-scale-wrapper i:nth-child(1),
  .stamped-review-option-scale-wrapper i:nth-child(5) {
    background: 0 0;
  }

  .stamped-review-option-labels {
    font-size: 11px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .stamped-review-option-labels span:nth-child(2),
  .stamped-review-option-labels span:nth-child(3),
  .stamped-review-option-labels span:nth-child(4) {
    display: none;
  }

  .stamped-header .stamped-review-options ul {
    margin: 0;
    padding: 0;
  }

  .stamped-header .stamped-review-options ul li {
    width: 20%;
    margin-right: 20px;
    list-style: none;
    display: inline-block;
  }

  .stamped-header .stamped-review-option-title {
    display: block;
    padding-bottom: 0;
    font-size: 12px;
    line-height: 20px;
  }

  .stamped-header .stamped-review-option-selected {
    display: none !important;
  }

  @media only screen and (max-width: 480px),
    only screen and (max-device-width: 480px) {
    .stamped-header .stamped-review-options ul li {
      width: 100% !important;
    }
  }

  .stamped-reviews .stamped-review-option-scale {
    vertical-align: super;
    white-space: nowrap;
  }

  .stamped-reviews .stamped-review-option-scale span {
    display: inline-block;
    width: 30px;
    background: #ddd;
    border: 1px solid #fff;
    height: 9px;
    font-size: 9px;
    line-height: 30px;
    margin: 0;
    padding: 0;
    vertical-align: middle;
    white-space: nowrap;
  }

  .stamped-reviews .stamped-review-option-scale > span {
    font-size: 9px !important;
    text-align: left;
  }

  .stamped-reviews .stamped-review-option-scale span:nth-child(2),
  .stamped-reviews .stamped-review-option-scale span:nth-child(4) {
    font-size: 0 !important;
  }

  .stamped-reviews
    .stamped-review-option-scale[data-value="1"]
    span:nth-last-child(n + 5),
  .stamped-reviews
    .stamped-review-option-scale[data-value="2"]
    span:nth-last-child(n + 4),
  .stamped-reviews
    .stamped-review-option-scale[data-value="3"]
    span:nth-last-child(n + 3),
  .stamped-reviews
    .stamped-review-option-scale[data-value="4"]
    span:nth-last-child(n + 2),
  .stamped-reviews .stamped-review-option-scale[data-value="5"] span {
    background: #505050;
  }

  .stamped-reviews .stamped-review-options:empty {
    display: none;
  }

  .stamped-reviews .stamped-review-options:not(:empty) {
    clear: both;
    background: 0 0;
    margin: 15px 0 20px 0 !important;
    padding: 0;
    border: none;
    border-radius: 3px;
  }

  .stamped-reviews .stamped-review-options strong {
    width: auto;
    min-width: 110px;
    display: inline-block;
    margin-right: 10px;
    font-size: 0.9em;
  }

  .stamped-reviews .stamped-review-options ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }

  .stamped-reviews .stamped-review-options ul li {
    margin-right: 20px;
    margin-bottom: 10px;
    font-size: 13px;
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-basis: 33%;
  }

  .stamped-reviews .stamped-review-options ul li > span {
    white-space: nowrap;
  }

  .stamped-review-options > ul > li > .stamped-review-option-checkbox > span,
  .stamped-review-options > ul > li > .stamped-review-option-radio > span,
  .stamped-review-options > ul > li > .stamped-review-option-textfield > span {
    border-bottom: 1px dotted #ccc;
  }

  .stamped-reviews
    .stamped-review-options
    span.stamped-review-option-checkbox
    span:after {
    content: ", ";
  }

  .stamped-reviews
    .stamped-review-options
    span.stamped-review-option-checkbox
    span:last-child:after {
    content: "";
  }

  .stamped-review-option-labels {
    display: none !important;
  }

  @media only screen and (max-width: 480px),
    only screen and (max-device-width: 480px) {
    span.stamped-review-option-scale {
      display: block;
      margin-bottom: 8px;
      margin-top: -5px;
    }

    .stamped-reviews .stamped-review-options li {
      display: inline-block;
      margin-right: 20px;
      width: 100% !important;
    }
  }

  @media only screen and (max-width: 480px) {
    .stamped-container {
      padding: 2em 1em;
    }

    .stamped-summary-caption {
      display: inline-block;
      margin-left: 5px;
      margin-bottom: 10px;
      vertical-align: middle;
    }

    .stamped-header-title,
    .stamped-summary {
      text-align: center;
    }

    .stamped-summary-starrating {
      float: none;
      margin-right: 0;
    }

    .stamped-summary-ratings {
      float: none;
      margin-left: 0;
      padding-left: 0;
      border-left: none;
      border-right: none;
      margin-top: 0 !important;
      margin-bottom: 20px;
      width: 100% !important;
      text-align: center;
      clear: both;
    }

    .stamped-summary-recommend {
      margin-bottom: 20px;
    }

    .stamped-summary-recommend-label {
      font-size: 14px;
    }

    #stamped-filter-select,
    #stamped-sort-select,
    #stamped-sort-select2,
    .stamped-filter-select {
      font-size: 12px;
      height: 32px;
      min-height: 30px;
      min-width: 100%;
      max-width: 100%;
      padding-right: 50px;
    }

    select#stamped-sort-select {
      padding-right: 10px !important;
      min-width: unset !important;
      border-top: none !important;
      width: 100% !important;
      background-size: 25px;
      border-top: none !important;
      border-color: #eee !important;
      border-radius: 0;
    }

    .stamped-summary-actions-clear {
      font-size: 13px;
    }

    .stamped-reviews-filter[data-show-filters="true"]
      .stamped-summary-actions-mobile-filter {
      display: inline-block !important;
      font-size: 13px;
      margin-top: 15px;
    }

    .stamped-reviews-search-text input.stamped-reviews-search-input {
      font-size: 16px;
    }

    .summary-rating-count {
      width: 9% !important;
      text-align: center !important;
    }

    .summary-rating-bar {
      width: 67% !important;
    }

    .summary-overview {
      width: 100% !important;
      float: none !important;
      margin-bottom: 30px;
    }

    .stamped-summary-photos {
      width: 100% !important;
      margin: auto auto 15px !important;
      padding: 0 !important;
      border: none !important;
    }

    .stamped-photos-carousel-btn-left {
      left: -20px !important;
    }

    .stamped-summary-actions {
      display: block;
      clear: both;
      padding-top: 0;
      margin-bottom: 15px;
      white-space: initial;
    }

    .stamped-review {
      margin-bottom: 10px;
    }

    .stamped-review-reply {
      margin: 15px 0 0 15px !important;
    }

    .stamped-summary-actions-newquestion,
    .stamped-summary-actions-newreview {
      width: 99%;
      display: inline-block;
      float: none;
      margin: 0 0 10px;
      font-size: 13px;
      box-sizing: border-box;
      line-height: 30px;
      margin-right: 3px;
    }

    .stamped-summary-actions-newquestion {
      margin-left: 0;
    }

    .stamped-summary-actions-newreview:after {
      clear: both;
    }

    .stamped-review-share {
      margin-bottom: 15px;
    }

    .stamped-messages .stamped-share-links a {
      display: block;
    }

    .stamped-review-avatar-content {
      height: 45px;
      width: 45px;
    }

    .verified-badge {
      display: block;
      font-size: 12px;
      white-space: nowrap;
    }

    #stamped-review-vote {
      margin-top: 10px;
    }

    #stamped-widget-drawer.stamped-widget-drawer .stamped-review-image img {
      width: 100% !important;
    }

    .stamped-pagination .first,
    .stamped-pagination .last,
    .stamped-pagination .next,
    .stamped-pagination .previous {
      top: 30px;
    }

    .stamped-sort-select {
      width: 150px;
      max-width: 150px !important;
    }

    ul.stamped-tabs li {
      font-size: 13px !important;
      color: #000;
    }

    .featherlight.featherlight-iframe iframe {
      width: auto !important;
    }
  }

  @media (min-width: 768px) {
    .stamped-form-contact-email,
    .stamped-form-contact-location,
    .stamped-form-contact-name {
      float: left;
      width: 32.33333%;
      max-width: 300px;
      position: relative;
      min-height: 1px;
      padding-right: 15px;
    }

    .stamped-form-contact-location {
      padding-right: 0;
    }

    .featherlight.featherlight-iframe iframe {
      width: auto !important;
    }
  }

  @media only screen and (max-width: 480px),
    only screen and (max-device-width: 480px) {
    span .stamped-file-uploader {
      display: block !important;
    }

    .stamped-file-uploader label[for="stamped-file-uploader-input"] > span {
      border: 1px solid #333;
      padding: 6px 10px;
      font-size: 13px;
      border-radius: 0.3em;
      width: 100%;
      display: block;
      text-align: center;
    }

    input.stamped-button.stamped-button-primary.button.button-primary.btn.btn-primary {
      margin: 10px 0 0;
    }
  }

  button.featherlight-close-icon.featherlight-close {
    border: none;
  }

  .stamped-ugc-modal[data-modal-type="instagram"] .stamped-verified-badge {
    display: none;
  }

  .stamped-ugc-modal-wrapper,
  .stamped-ugc-modal-wrapper *,
  .stamped-ugc-modal-wrapper:after {
    -webkit-box-sizing: initial !important;
    -moz-box-sizing: initial !important;
    box-sizing: initial !important;
  }

  .stamped-ugc-modal-caption {
    margin-top: 15px;
    line-height: 20px;
    clear: both;
    border-top: 0 solid #ddd;
    padding-top: 0;
  }

  .stamped-ugc-modal-caption .fa,
  .stamped-ugc-modal-caption .stamped-fa {
    margin-right: 0;
  }

  .stamped-ugc-modal-caption .fa:before,
  .stamped-ugc-modal-caption .stamped-fa:before {
    font-size: 23px;
  }

  .stamped-ugc-modal-caption-rating {
    margin-bottom: 5px;
  }

  .stamped-ugc-modal-caption-title {
    font-size: 1.1em;
    font-weight: 700;
    margin-bottom: 5px;
    margin-top: 10px;
    clear: both;
  }

  .stamped-ugc-modal-caption-reply:not(:empty) {
    margin-top: 15px;
    border-top: 1px solid #ccc;
    padding-top: 15px;
  }

  .stamped-ugc-modal-caption-reply:not(:empty):before {
    content: "Reply:";
    display: block;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .stamped-ugc-modal-caption-options:not(:empty) {
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  .stamped-ugc-modal-caption-options ul {
    margin: 0;
    padding: 0;
  }

  .stamped-ugc-modal-caption-options ul li {
    list-style: none;
  }

  .stamped-ugc-modal-options-message {
    font-weight: 700;
  }

  .stamped-ugc-modal-options-message:after {
    content: ":";
  }

  .stamped-rewards-modal,
  .stamped-ugc-modal {
    position: fixed;
    display: flex;
    font: 14px/22px "Open Sans", Arial, sans-serif;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    background-color: rgba(116, 99, 99, 0.65);
    z-index: 99999;
    opacity: 1;
    -webkit-transition: opacity 0.2s ease-in;
    -moz-transition: opacity 0.2s ease-in;
    transition: opacity 0.2s ease-in;
    text-align: left;
    white-space: initial;
  }

  .stamped-ugc-modal.open {
    opacity: 1;
    pointer-events: auto;
    z-index: 999999;
    overflow-y: scroll;
  }

  .stamped-ugc-modal-wrapper {
    position: relative;
    height: auto;
    height: calc(100vh - 150px);
    min-height: 100px;
    margin: auto;
    padding: 0 70px;
    box-shadow: none;
  }

  .stamped-ugc-modal-wrapper:after {
    position: absolute;
    top: 0;
    right: 70px;
    bottom: 0;
    left: 70px;
    background: #fff;
  }

  .stamped-ugc-modal-date {
    color: #353333;
    margin: 0;
    font-size: 0.9em;
    float: right;
  }

  .stamped-ugc-modal-tags {
    margin-top: 20px;
    margin-bottom: 0;
    display: inline-block;
    width: 100%;
    border-top: 1px solid #eee;
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box !important;
  }

  .stamped-ugc-modal-tags > .stamped-ugc-modal-tag,
  .stamped-ugc-modal-tags > a {
    display: flex;
    clear: both;
    max-width: 49%;
    vertical-align: top;
    text-decoration: none;
    color: #000;
  }

  [data-modal-shoppable="true"] .stamped-ugc-modal-tags-btn {
    background: #000;
    color: #fff;
    padding: 3px 8px;
    text-align: center;
    font-size: 12px;
    width: 100px;
    margin: auto;
    margin-bottom: inherit;
  }

  [data-modal-shoppable="true"] .stamped-ugc-modal-tags-btn:after {
    content: "Add to Cart";
  }

  [data-modal-shoppable="true"] .stamped-ugc-modal-tag {
    flex: 1;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
  }

  .stamped-ugc-modal-tags a {
    text-decoration: none;
    color: #000;
    flex: 1;
  }

  .stamped-ugc-modal-tags a:hover {
    text-decoration: underline;
  }

  .stamped-ugc-modal-tags-product-image-wrapper {
    display: inline-block;
    padding: 10px;
    border: 1px solid #ececec;
    line-height: 0;
    text-align: center;
    width: 100%;
    box-sizing: border-box !important;
  }

  .stamped-ugc-modal-tags-product-image-wrapper:hover {
    border-color: #777 !important;
  }

  .stamped-ugc-modal-tags-product-image {
    max-height: 100px;
    height: auto;
    width: auto;
  }

  .stamped-ugc-modal-tags-product-title {
    align-items: center;
    margin-top: 10px;
    margin-bottom: 15px;
    min-height: 40px;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
  }

  .stamped-ugc-modal-tags-button {
    float: left;
    background: #333;
    margin: 10px 0 20px 0;
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
  }

  .stamped-ugc-modal-tags-button:after {
    content: "Shop Now";
    display: block;
  }

  .stamped-ugc-modal-nav-previous,
  .stamped-ugc-nav-previous {
    left: 0;
  }

  .stamped-ugc-modal-nav-next,
  .stamped-ugc-nav-next {
    right: 0;
  }

  .stamped-ugc-modal-nav:focus {
    outline: 0;
    border: none;
    -moz-outline-style: none;
  }

  .stamped-ugc-modal-nav-next i,
  .stamped-ugc-modal-nav-previous i,
  .stamped-ugc-nav-next i,
  .stamped-ugc-nav-previous i {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -13px 0 0 -9px;
    font-size: 45px;
    color: #eee;
  }

  .stamped-ugc-modal-nav-next,
  .stamped-ugc-modal-nav-previous,
  .stamped-ugc-nav-next,
  .stamped-ugc-nav-previous {
    position: absolute;
    top: 0;
    width: 50px;
    height: 100%;
    padding: 0;
    border: none;
    background: 0 0;
    color: #bfbfbf;
    z-index: 2;
    cursor: pointer;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .stamped-ugc-modal-content {
    display: inline-block;
    width: 38%;
    vertical-align: top;
    height: 100%;
    overflow-y: auto;
    position: relative;
    z-index: 3;
  }

  .stamped-ugc-modal-content-wrapper {
    padding: 0 20px 50px 0;
    height: 100%;
    margin-top: 60px;
  }

  .stamped-ugc-modal-content-wrapper h1.stamped-ugc-modal-user-username {
    font-size: 18px;
    margin-bottom: 0;
  }

  .stamped-ugc-media-hover-content-wrapper:before {
    content: "\\f16d";
    display: block;
    font-family: stamped-font, FontAwesome;
    font-size: 19px;
    margin-top: -10px;
  }

  .stamped-ugc-modal .stamped-modal-close {
    cursor: pointer;
    background: 0 0;
    color: #fff;
    line-height: 30px;
    position: relative;
    right: 10px;
    top: 10px;
    text-align: center;
    width: 45px;
    text-decoration: none;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 0;
    z-index: 5;
    display: block;
    height: 50px;
    box-shadow: none;
    font-weight: 400;
    font-size: 0;
    float: right;
  }

  .stamped-ugc-modal .stamped-modal-close:after,
  .stamped-ugc-modal .stamped-modal-close:before {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #000;
  }

  .stamped-ugc-modal-image,
  .stamped-ugc-modal-image-wrapper {
    position: relative;
    min-height: initial;
    z-index: 1;
    background: 0 0;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    display: inline-block;
    margin: 0;
  }

  .stamped-ugc-modal .stamped-modal-close:after {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .stamped-ugc-modal .stamped-modal-close:before {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .stamped-ugc-modal-image {
    box-sizing: border-box;
    vertical-align: top;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    background-size: contain !important;
    -webkit-backface-visibility: hidden;
    width: calc(100% - 40px);
    margin: 20px;
    min-width: 300px;
  }

  .stamped-ugc-modal-image img {
    max-width: 100%;
    width: 100%;
  }

  .stamped-ugc-modal-user {
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    width: 100%;
  }

  .stamped-ugc-modal-user-username {
    float: left;
    margin-top: 6px;
  }

  .stamped-ugc-modal-user-username .stamped-verified-badge {
    margin-left: 7px;
  }

  .stamped-ugc-modal-user-username[data-verified-type="0"]
    .stamped-verified-badge {
    display: none;
  }

  .stamped-ugc-modal-user-source {
    float: right;
    text-transform: uppercase;
    border: 1px solid #ddd;
    padding: 8px 20px;
    border-radius: 30px;
    font-size: 0.9em;
    display: none;
  }

  .stamped-ugc-modal-votes {
    font-size: 15px;
    text-align: right;
    margin-top: 15px;
  }

  span.stamped-ugc-modal-vote-down,
  span.stamped-ugc-modal-vote-up {
    letter-spacing: 3px;
    cursor: pointer;
  }

  span.stamped-ugc-modal-vote-up {
    margin-right: 15px;
  }

  span.stamped-ugc-modal-vote-down:after,
  span.stamped-ugc-modal-vote-up:after {
    content: attr(data-count);
  }

  .stamped-ugc-modal-image-wrapper ul {
    color: #fff;
    position: absolute;
    bottom: 10px;
    list-style: none;
    text-align: center;
    margin: 0 0 0 -100px;
    padding: 0;
    z-index: 3;
    width: 200px;
    left: 50%;
    display: none;
  }

  .stamped-ugc-modal-image-wrapper ul li {
    padding: 2px;
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: #fff;
    border-radius: 50%;
    margin: 0 6px 0 0;
    font-size: 0;
    cursor: pointer;
    border: 1px solid #777;
  }

  .stamped-ugc-modal-image-wrapper ul li.active {
    background: gold;
  }

  .stamped-ugc-modal-list-photos {
    background: 0 0 !important;
    position: absolute;
    text-align: center;
    width: 100%;
    left: 0;
    right: 0;
    margin-top: 10px;
    white-space: nowrap;
    height: 56px !important;
    overflow: hidden;
  }

  .stamped-ugc-modal-list-photos ul {
    padding: 0;
    margin: 0 100px;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 9;
  }

  .stamped-ugc-modal-list-photos ul li {
    background-repeat: no-repeat;
    display: inline-block;
    width: 80px;
    height: 50px;
    margin-right: 6px;
    border: 3px solid #d4d4d4;
    background-size: cover !important;
    -ms-background-size: cover !important;
    -o-background-size: cover !important;
    -moz-background-size: cover !important;
    -webkit-background-size: cover !important;
    font-size: 0;
    opacity: 0.6;
    cursor: pointer;
    background-position-y: center !important;
    vertical-align: top;
  }

  .stamped-ugc-modal-list-photos ul li:last-child {
    margin-right: 0;
  }

  .stamped-ugc-modal-list-photos ul li.active {
    opacity: 1;
    border-style: dashed;
  }

  .stamped-rewards-modal-content {
    margin: auto;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
  }

  .stamped-rewards-modal-header {
    background: #eee;
    padding: 10px 15px;
  }

  .stamped-rewards-modal-body {
    padding: 10px 15px;
    text-align: center;
  }

  .stamped-ugc-modal-wrapper {
    display: table !important;
    height: calc(100vh - 100px) !important;
    top: -20px;
  }

  .stamped-ugc-modal-content,
  .stamped-ugc-modal-image-wrapper {
    display: table-cell;
    vertical-align: top;
  }

  .stamped-ugc-modal-content,
  .stamped-ugc-modal-content-wrapper {
    width: 410px;
  }

  .stamped-ugc-modal-content-wrapper {
    height: initial !important;
    box-sizing: border-box !important;
  }

  .stamped-ugc-modal-caption-body {
    line-height: 25px;
    word-break: break-word;
  }

  .stamped-ugc-modal-list-photos {
    bottom: -70px;
  }

  .stamped-ugc-modal-image img,
  .stamped-ugc-modal-video {
    max-width: 100%;
    width: unset;
    min-width: 50%;
    max-width: 100%;
    background-color: #fff;
    display: inline-block;
    vertical-align: middle;
    max-height: calc(100vh - 100px);
  }

  @media only screen and (max-width: 798px) {
    .stamped-ugc-modal-content,
    .stamped-ugc-modal-image-wrapper {
      display: initial !important;
    }

    .stamped-ugc-modal-content,
    .stamped-ugc-modal-content-wrapper {
      width: 100%;
      margin-top: 10px;
      padding: 0;
    }
  }

  @media screen and (min-width: 1600px) {
    .stamped-ugc-modal-wrapper {
      max-width: 1600px !important;
    }
  }

  @media screen and (min-width: 1000px) {
    .stamped-ugc-modal-image {
      min-height: 300px;
    }

    .featherlight.featherlight-iframe iframe {
      width: 700px !important;
    }
  }

  @media screen and (min-width: 1200px) {
    .featherlight.featherlight-iframe iframe {
      width: 800px !important;
    }
  }

  @media screen and (min-width: 1400px) {
    .featherlight.featherlight-iframe iframe {
      width: 960px !important;
    }
  }

  @media only screen and (max-width: 790px),
    only screen and (max-device-width: 790px) {
    .stamped-ugc-modal.open {
      overflow-y: scroll;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      padding: 0 10px 10px 10px !important;
    }

    .stamped-ugc-modal > div {
      height: 100% !important;
      width: 100% !important;
      margin: 0 auto !important;
      padding: 0 !important;
      margin-top: 30px !important;
      display: block !important;
      background: #fff;
    }

    .stamped-ugc-modal-content {
      background: #fff;
      overflow: visible !important;
      width: 100% !important;
      height: auto !important;
      min-height: 300px;
      max-height: none !important;
      margin-top: -6px;
      float: left;
    }

    .stamped-ugc-modal-content .stamped-modal-close {
      display: none;
    }

    .stamped-ugc-modal-wrapper .stamped-modal-close.show-mobile {
      display: inline-block !important;
      position: absolute;
    }

    .stamped-ugc-modal-content-wrapper > div {
      padding: 20px !important;
      margin-top: 0 !important;
    }

    .stamped-ugc-modal-wrapper:after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: 0 0;
      box-shadow: none;
      content: "";
    }

    .stamped-ugc-modal-list-photos {
      margin-bottom: 100px;
    }

    .stamped-ugc-modal-list-photos ul {
      margin: 0 !important;
      padding: 0;
    }

    .stamped-ugc-modal-image,
    .stamped-ugc-modal-image-wrapper {
      width: 100% !important;
      min-width: 100%;
      height: initial !important;
      min-height: 250px;
      background-size: contain !important;
      margin: 0 !important;
      line-height: 0;
    }

    .stamped-ugc-modal-image img {
      max-width: 100%;
      width: 100%;
    }

    .stamped-ugc-modal-nav-next,
    .stamped-ugc-modal-nav-previous {
      height: 50%;
      min-height: 300px;
      max-height: 300px;
    }

    .stamped-ugc-modal-tags-product-title {
      min-height: initial;
    }

    .stamped-ugc-modal-tags-button {
      float: left !important;
      margin-top: 5px !important;
    }

    .stamped-ugc-modal-wrapper .stamped-modal-close {
      background: #fff !important;
      color: #000 !important;
      -moz-box-shadow: none !important;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
      opacity: 0.8;
      top: 0;
      right: 0;
      z-index: 3;
      font-size: 0;
    }

    .stamped-ugc-modal-image ul li {
      width: 10px;
      height: 10px;
    }
  }

  .stamped-empty-state {
    margin-top: 50px;
  }

  .stamped-tab-container[style="display:none;"] {
    display: block !important;
  }

  .stamped-container[data-count="0"] .stamped-reviews-filter {
    display: none !important;
  }

  .stamped-container[data-count="0"][data-widget-language=""]
    .stamped-empty-state,
  .stamped-container[data-count="0"][data-widget-language="en"]
    .stamped-empty-state {
    display: block !important;
  }

  .stamped-container[data-count="0"][data-widget-language=""]
    .stamped-empty-state
    > div,
  .stamped-container[data-count="0"][data-widget-language="en"]
    .stamped-empty-state
    > div {
    display: block;
    width: 100%;
    text-align: center;
    color: #777;
    font-size: 14px;
    margin-top: 5px;
  }

  .stamped-container[data-count="0"] .stamped-empty-state:before {
    content: "\\f005\f005\f005\f005\f005";
    text-align: center;
    display: block;
    font-size: 19px;
    font-family: stamped-font;
    color: #aaa;
  }

  div[data-widget-style*="standard"][data-count="0"] .stamped-header,
  div[data-widget-style] div[data-count="0"] .stamped-header {
    margin-bottom: 0 !important;
  }

  div[data-count="0"] .summary-overview,
  div[data-widget-style*="standard"][data-count="0"] .summary-overview {
    margin: auto;
    float: none !important;
    width: 100% !important;
    text-align: center;
  }

  [data-count="0"] .stamped-summary-starrating {
    float: none;
    margin: 0;
    width: 100%;
    text-align: center;
    display: inline-block;
  }

  [data-count="0"] .stamped-summary-starrating i:before {
    font-size: 30px !important;
    color: #777;
  }

  div[data-widget-style] div[data-count="0"] .new-review-form,
  div[data-widget-style] div[data-count="0"] .stamped-content form,
  div[data-widget-style][data-count="0"] .new-review-form,
  div[data-widget-style][data-count="0"] .stamped-content form {
    border-top: none !important;
  }

  div.stamped-container[data-widget-style],
  div[data-widget-style] div.stamped-container {
    max-width: 1200px;
    margin: 30px auto !important;
    border: none !important;
    padding: 0 !important;
  }

  div[data-widget-style*="standard"] .stamped-form-title,
  div[data-widget-style*="standard"] .stamped-header-title {
    display: none;
  }

  div[data-widget-style]
    .summary-rating:nth-child(1)
    .summary-rating-title:before,
  div[data-widget-style]
    .summary-rating:nth-child(2)
    .summary-rating-title:before,
  div[data-widget-style]
    .summary-rating:nth-child(3)
    .summary-rating-title:before,
  div[data-widget-style]
    .summary-rating:nth-child(4)
    .summary-rating-title:before,
  div[data-widget-style]
    .summary-rating:nth-child(5)
    .summary-rating-title:before {
    font-family: stamped-font !important;
    font-size: 17px;
    width: 200px !important;
    letter-spacing: -1px;
    color: #777;
  }

  div[data-widget-style*="standard"]
    .summary-rating:nth-child(1)
    .summary-rating-title:before {
    content: "\\f005\f005\f005\f005\f005";
  }

  div[data-widget-style*="standard"]
    .summary-rating:nth-child(2)
    .summary-rating-title:before {
    content: "\\f005\f005\f005\f005\f006";
  }

  div[data-widget-style*="standard"]
    .summary-rating:nth-child(3)
    .summary-rating-title:before {
    content: "\\f005\f005\f005\f006\f006";
  }

  div[data-widget-style*="standard"]
    .summary-rating:nth-child(4)
    .summary-rating-title:before {
    content: "\\f005\f005\f006\f006\f006";
  }

  div[data-widget-style*="standard"]
    .summary-rating:nth-child(5)
    .summary-rating-title:before {
    content: "\\f005\f006\f006\f006\f006";
  }

  div[data-widget-style*="standard"] .summary-rating-count:before {
    content: "(";
  }

  div[data-widget-style*="standard"] .summary-rating-count:after {
    content: ")";
  }

  div[data-widget-style*="standard"] .summary-rating-title {
    font-size: 0 !important;
    width: 95px !important;
  }

  div[data-widget-style*="standard"] .stamped-summary-ratings {
    width: 300px !important;
    margin-bottom: 20px !important;
  }

  div[data-widget-style*="standard"] .summary-rating-bar {
    height: 15px !important;
    width: 130px !important;
  }

  div[data-widget-style*="standard"] .summary-rating-count {
    color: #333 !important;
  }

  div[data-widget-style*="standard"] .summary-rating-bar > div {
    font-size: 0 !important;
    height: 15px;
    line-height: 0;
    padding: 0;
  }

  div[data-widget-style*="standard"] .stamped-summary-starrating i:before {
    font-size: 26px !important;
  }

  div[data-widget-style*="standard"] span.stamped-review-option-labels {
    display: flex !important;
  }

  div[data-widget-style*="standard"] .stamped-summary {
    position: relative;
  }

  div[data-widget-style*="standard"] .stamped-header {
    margin-bottom: 20px;
  }

  div[data-widget-style*="standard"] .stamped-tab-container {
    position: relative;
    font-size: 14px;
    height: 45px;
  }

  div[data-widget-style*="standard"] .stamped-tab-container ul.stamped-tabs {
    height: 45px;
    padding: 0 !important;
    margin-bottom: 0;
  }

  div[data-widget-style*="standard"] .stamped-summary-actions {
    margin-top: 0 !important;
    display: block !important;
    float: right;
    position: initial;
    z-index: 3;
    right: 0;
    bottom: 45px;
  }

  div[data-widget-style*="standard"] label[for="stamped-sort-select"] {
    float: right;
    margin-right: 1px;
  }

  div[data-widget-style*="standard"] .new-review-form,
  div[data-widget-style*="standard"] .stamped-content form,
  div[data-widget-style*="standard"] .stamped-reviews {
    margin: 0 !important;
  }

  div[data-widget-style*="standard"] .stamped-review:first-child {
    margin-top: 0 !important;
  }

  @media only screen and (max-width: 480px) {
    .stamped-hide-mobile {
      display: none !important;
    }

    .stamped-pagination a {
      padding: 9px;
      font-size: 17px;
    }

    .stamped-reviews-filter[data-show-filters="true"] .stamped-filters-wrapper {
      display: none;
    }

    ul.stamped-summary-keywords-list {
      max-height: 80px;
      overflow-y: scroll;
    }

    div[data-widget-style*="standard"] .stamped-summary-actions {
      position: initial !important;
      float: none !important;
      clear: both !important;
      display: inline-block !important;
      width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    div[data-widget-style*="standard"] .stamped-summary-ratings {
      width: 100% !important;
      margin: 10px auto 20px !important;
    }

    .stamped-ugc-modal-image,
    .stamped-ugc-modal-image-wrapper {
      min-height: 350px;
    }

    .stamped-tab-container[style="display:none;"] {
      display: block !important;
      height: 0 !important;
    }

    .stamped-tab-container[style="display:none;"] > div {
      height: 0 !important;
    }

    .stamped-tab-container[style="display:none;"] ul {
      height: 1px !important;
    }

    .stamped-tab-container[style="display:none;"] ul li {
      display: none;
    }
  }

  .stamped-container[data-widget-show-avatar="false"] .stamped-review-avatar,
  .stamped-container[data-widget-show-date-qna="false"]
    .stamped-questions
    .stamped-review
    .created,
  .stamped-container[data-widget-show-date="false"] .stamped-review-date,
  .stamped-container[data-widget-show-date="false"]
    .stamped-reviews
    .stamped-review
    .created,
  .stamped-container[data-widget-show-filter-keywords="false"]
    .stamped-reviews-filter-label,
  .stamped-container[data-widget-show-filter-keywords="false"]
    .stamped-summary-keywords,
  .stamped-container[data-widget-show-graph="false"] .stamped-summary-ratings,
  .stamped-container[data-widget-show-location="false"] .review-location,
  .stamped-container[data-widget-show-product-variant="false"]
    .stamped-review-product,
  .stamped-container[data-widget-show-product-variant="false"]
    .stamped-review-variant,
  .stamped-container[data-widget-show-qna="false"]
    .stamped-summary-actions-newquestion,
  .stamped-container[data-widget-show-qna="false"] li#tab-questions,
  .stamped-container[data-widget-show-share="false"] .stamped-review-share,
  .stamped-container[data-widget-show-sort="false"] #stamped-sort-select,
  .stamped-container[data-widget-show-sort="false"] .stamped-sort-select-wrapper,
  .stamped-container[data-widget-show-sort="false"] .stamped-sort-select2-wrapper,
  .stamped-container[data-widget-show-summary-photo="false"]
    .stamped-photos-carousel,
  .stamped-container[data-widget-show-summary-recommend="false"]
    .stamped-review-recommend,
  .stamped-container[data-widget-show-summary-recommend="false"]
    .stamped-summary-recommend,
  .stamped-container[data-widget-show-tab-qna="false"]
    .stamped-tabs
    li#tab-questions,
  .stamped-container[data-widget-show-tab-reviews="false"]
    .stamped-tabs
    li#tab-reviews,
  .stamped-container[data-widget-show-verified="false"]
    .stamped-review[data-verified="buyer"]
    .stamped-review-avatar:before,
  .stamped-container[data-widget-show-verified="false"] .stamped-verified-badge,
  .stamped-container[data-widget-show-verified="false"] .verified-badge,
  .stamped-container[data-widget-show-votes="false"] .stamped-review-vote,
  .stamped-container[data-widget-show-votes="false"] div.stamped-review-vote {
    display: none !important;
  }

  .stamped-container .stamped-review-product,
  .stamped-container .stamped-review-variant {
    display: none;
  }

  .stamped-container[data-widget-show-product-variant="true"]
    .stamped-review-product,
  .stamped-container[data-widget-show-product-variant="true"]
    .stamped-review-variant {
    display: inline-block !important;
    font-size: 13px;
  }

  .stamped-container[data-widget-show-product-variant="true"]
    .stamped-review-product
    a,
  .stamped-container[data-widget-show-product-variant="true"]
    .stamped-review-variant
    a {
    text-decoration: none !important;
    color: #000;
  }

  .stamped-container[data-widget-show-product-variant="true"]
    .stamped-review-variant:not(:empty):before {
    content: " - ";
  }

  .stamped-container[data-widget-show-upload="true"] .stamped-file-uploader {
    display: inline-block !important;
    vertical-align: middle !important;
  }

  .stamped-container[data-widget-show-filter-search="true"]
    .stamped-reviews-search-text {
    display: block !important;
    clear: both;
  }

  .stamped-container[data-widget-show-filter-keywords="false"]
    #stamped-reviews-filter {
    border: none !important;
  }

  .stamped-container input:focus,
  .stamped-container select,
  .stamped-container textarea:focus {
    outline: 0;
  }

  div[data-widget-style*="standard"] .stamped-questions,
  div[data-widget-style="two-columns"] .stamped-reviews {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: 24px !important;
  }

  div[data-widget-style="two-columns"] .stamped-review {
    vertical-align: top !important;
    width: calc(50% + -17.5px) !important;
    float: left !important;
    margin-top: 0 !important;
    position: relative;
  }

  div[data-widget-style="two-columns"] .stamped-review:first-child {
    margin-top: 24px;
    padding-top: 25px !important;
  }

  div[data-widget-style="two-columns"] .stamped-review:nth-child(2) {
    border-top: none !important;
  }

  div[data-widget-style="two-columns"] .stamped-review:nth-child(odd) {
    margin-right: 35px;
  }

  div[data-widget-style="two-columns"] .stamped-pagination {
    margin-top: 55px;
    margin-top: 3.4375rem;
    clear: both;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }

  div[data-widget-style="two-columns"] .stamped-container {
    border: none !important;
    padding: 2em 0 !important;
  }

  div[data-widget-style="two-columns"] .stamped-review-footer {
    clear: both !important;
    font-size: 11px;
    opacity: 0.5;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  @media only screen and (max-width: 768px),
    only screen and (max-device-width: 768px) {
    div[data-widget-style="two-columns"] .stamped-review {
      width: 100% !important;
      padding: 22px !important;
      margin-right: 0 !important;
    }

    div[data-widget-style="two-columns"] .stamped-reviews {
      margin-top: 24px !important;
    }

    div[data-widget-style="two-columns"] .stamped-sort-select {
      top: -2px !important;
    }
  }

  #stamped-main-widget.stamped-ecwid {
    font-family: -apple-system, "Open Sans", sans-serif;
    background: #fff;
    border-radius: 10px;
  }

  #stamped-main-widget.stamped-ecwid .stamped-container {
    border: none;
  }

  #stamped-main-widget.stamped-ecwid .summary-rating-bar > div[data-rating="0"] {
    display: flex !important;
  }

  #stamped-main-widget.stamped-ecwid
    .stamped-review-header
    .stamped-review-avatar {
    height: 60px !important;
    width: 60px !important;
    font-size: 23px !important;
    vertical-align: text-bottom !important;
    text-align: center !important;
    text-transform: inherit !important;
    font-style: initial !important;
    color: #ccc !important;
    float: left !important;
    margin-right: 10px !important;
    background: #fafafa !important;
    text-shadow: 1px 1px 0 #fff !important;
  }

  #stamped-main-widget-holder .stamped-button {
    background: #eee !important;
    padding: 8px 10px !important;
  }

  #stamped-main-widget-holder .stamped-review {
    padding: 24px 0 !important;
    border-top: 1px solid #dfdfdf !important;
    border-top: 1px solid rgba(0, 0, 0, 0.1) !important;
  }

  #stamped-main-widget-holder .stamped-review:first-child {
    margin-top: 24px;
  }

  #stamped-main-widget-holder .stamped-container {
    padding-bottom: 20px !important;
  }

  #stamped-main-widget-holder .stamped-summary-starrating {
    float: left !important;
    margin: 0 6px 20px 0 !important;
  }

  #stamped-main-widget-holder .stamped-summary-ratings {
    float: left !important;
    margin-left: 20px !important;
    padding-left: 20px !important;
    border-left: 1px solid #eee !important;
    color: #999 !important;
  }

  #stamped-main-widget-holder .stamped-summary {
    margin-bottom: 20px !important;
  }

  #stamped-badge-widget-holder {
    display: inline-block;
  }

  #stamped-badge-widget-holder .fa-star:before,
  #stamped-badge-widget-holder .stamped-fa-star:before {
    font-size: 14px !important;
  }

  #stamped-badge-widget-holder.hide-text .stamped-badge-caption {
    display: none !important;
  }

  #stamped-badge-widget-holder .stamped-badge[data-rating="0.0"] {
    display: block !important;
  }

  #stamped-reviews-widget {
    font-family: "Open Sans";
  }

  #stamped-reviews-widget[data-widget-type^="full-page"]:empty:before,
  #stamped-reviews-widget[data-widget-type^="instagram"]:empty:before,
  #stamped-reviews-widget[data-widget-type^="rewards"]:empty:before,
  #stamped-reviews-widget[data-widget-type^="visual"]:empty:before,
  #stamped-rewards-widget:empty:before {
    content: "";
    display: block;
    margin: auto;
    font-size: 2px;
    text-indent: -9999em;
    border: 1em solid rgba(0, 0, 0, 0.3);
    border-left: 1em solid #fff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: stamped-view-loader 1.1s infinite linear;
    animation: stamped-view-loader 1.1s infinite linear;
    align-items: center;
    border-radius: 50%;
    width: 20px !important;
    height: 20px;
    padding: 5px;
    margin: 30px auto;
  }

  #stamped-reviews-widget[data-widget-type="full-page"]:empty:before {
    content: "Loading...";
    text-align: center;
    width: 100%;
    display: block;
  }

  [data-widget-style="profile"] #stamped-main-widget,
  [data-widget-style="profile"] #stamped-main-widget h3,
  [data-widget-style="profile"] #stamped-main-widget p {
    font-family: "Open Sans", arial, san-serif !important;
    letter-spacing: initial;
    text-transform: initial;
  }

  [data-widget-style="profile"] .stamped-review-product a,
  [data-widget-style="profile"] .stamped-review-variant {
    font-size: 13px;
    color: #000;
    text-decoration: none;
  }

  [data-widget-style="profile"] .stamped-review-product:before {
    content: "Reviewing: ";
    display: block;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  [data-widget-style="profile"]
    .stamped-reviews-filter[data-show-filters="true"] {
    border-bottom: none !important;
  }

  [data-widget-style="profile"] .stamped-review:first-child {
    margin-top: 20px !important;
    padding-top: 0 !important;
  }

  [data-widget-style="profile"] .stamped-review {
    position: relative;
    display: inline-block;
    width: 100%;
    border: 1px solid #ddd;
    padding-top: 0;
    font-size: 16px;
    margin-bottom: 10px;
  }

  [data-widget-style="profile"] .stamped-summary-text {
    display: block;
  }

  [data-widget-style="profile"] .stamped-summary-text-1 {
    background: grey;
    padding: 13px 15px !important;
    margin: 0 !important;
    color: #fff;
    font-size: 20px !important;
    font-weight: 700;
  }

  [data-widget-style="profile"] .stamped-review > .stamped-review-header {
    font-size: 0.9em !important;
    float: left;
    width: 30%;
    padding: 20px !important;
  }

  [data-widget-style="profile"] .summary-overview {
    width: 100% !important;
    padding: 20px;
  }

  [data-widget-style="profile"] .stamped-summary-caption {
    margin-left: 0;
  }

  [data-widget-style="profile"] .stamped-header-left {
    display: inline-block;
    width: 30%;
    vertical-align: top;
    border-right: none;
    line-height: 25px;
  }

  [data-widget-style="profile"] .stamped-header-right {
    display: inline-block;
    width: 67%;
    max-width: 67%;
    min-height: 260px;
    vertical-align: top;
    line-height: 20px;
    padding-top: 15px;
    padding-bottom: 20px;
    padding-left: 20px;
    border-left: 1px solid #ddd;
  }

  [data-widget-style="profile"] .stamped-summary-recommend {
    margin-bottom: 30px;
    margin-top: 10px;
  }

  [data-widget-style="profile"] .stamped-header .stamped-review-options {
    margin-top: 0;
  }

  [data-widget-style="profile"] .stamped-header .stamped-review-options ul li {
    width: 30%;
  }

  [data-widget-style="profile"] .stamped-review > .stamped-review-content {
    min-height: 250px;
    width: 70%;
    margin: 0;
    float: left;
    clear: none;
    border-left: 1px solid #d0d0d0;
    padding-left: 20px;
    padding-top: 15px;
    padding-right: 15px;
    padding-bottom: 25px;
  }

  [data-widget-style="profile"] .stamped-verified-badge {
    display: block;
    margin: 3px 0;
    font-size: 13px;
  }

  [data-widget-style="profile"] .summary-rating-title {
    font-size: 14px;
    margin-bottom: 3px;
    padding-left: 0;
    width: 10%;
  }

  [data-widget-style="profile"] .summary-rating-bar {
    width: 64%;
  }

  [data-widget-style="profile"] div.stamped-summary-ratings {
    width: 100% !important;
    padding: 0;
    margin: 0;
    margin-top: 5px;
    margin-left: 21px;
    color: #333;
    border: none !important;
  }

  [data-widget-style="profile"] .stamped-summary-starrating {
    float: none !important;
  }

  [data-widget-style="profile"] .stamped-summary {
    border: 1px solid #ddd;
    padding: 0;
    margin-bottom: 20px;
    line-height: 0;
  }

  [data-widget-style="profile"] .stamped-summary[data-count="0"] {
    display: none;
  }

  [data-widget-style="profile"] .stamped-review-header-title {
    margin: 10px 0 5px 0;
    clear: both;
    display: inline-block;
  }

  #stamped-main-widget [data-widget-style="profile"] div.stamped-review-product {
    display: block !important;
    margin-top: 15px !important;
    padding-top: 10px;
    clear: both;
    border-top: 1px solid #ddd;
  }

  #stamped-main-widget [data-widget-style="profile"] .stamped-review-variant {
    display: none !important;
  }

  [data-widget-style="profile"] .created {
    float: right;
    font-size: 13px;
    color: #999;
  }

  [data-widget-style="profile"] .stamped-review .fa-star-half-o:before,
  [data-widget-style="profile"] .stamped-review .fa-star-o:before,
  [data-widget-style="profile"] .stamped-review .fa-star:before,
  [data-widget-style="profile"] .stamped-review .stamped-fa-star-half-o:before,
  [data-widget-style="profile"] .stamped-review .stamped-fa-star-o:before,
  [data-widget-style="profile"] .stamped-review .stamped-fa-star:before {
    font-size: 27px;
  }

  [data-widget-style="profile"] .stamped-review-reply {
    clear: both;
    border: none !important;
    padding: 0 !important;
    margin: 0 !important;
    border-top: 1px solid #ddd !important;
    padding-top: 15px !important;
    margin-top: 15px !important;
  }

  @media only screen and (max-width: 700px) {
    [data-widget-style="profile"] .stamped-header-left {
      width: 100%;
      border-right: none;
      padding-bottom: 0;
    }

    [data-widget-style="profile"] .stamped-header-right {
      display: block;
      width: 100%;
      max-width: 100%;
    }

    [data-widget-style="profile"] .stamped-summary-ratings {
      margin-top: 10px !important;
    }

    [data-widget-style="profile"] .summary-rating-title {
      width: 19%;
      text-align: right;
      padding-right: 10px;
    }

    [data-widget-style="profile"] .summary-overview {
      margin: auto;
      text-align: center;
    }

    [data-widget-style="profile"]
      .stamped-summary-photos.stamped-summary-photos-container {
      max-width: 100%;
      min-width: 100%;
      text-align: center;
    }

    [data-widget-style="profile"] .stamped-summary-recommend {
      text-align: center;
    }

    [data-widget-style="profile"] .stamped-header .stamped-review-options ul li {
      width: 95% !important;
    }

    [data-widget-style="profile"] .stamped-review > .stamped-review-header {
      width: 100%;
      padding-bottom: 0 !important;
    }

    [data-widget-style="profile"] .stamped-review > .stamped-review-content {
      min-height: auto !important;
      width: 100%;
      float: none !important;
      border-left: none !important;
    }

    [data-widget-style="profile"]
      .stamped-review-recommend[data-is-recommend="true"] {
      margin: 10px 0 !important;
    }
  }

  [data-widget-style="slider"] .slick-track {
    display: flex !important;
  }

  [data-widget-style="slider"] .stamped-review {
    clear: none !important;
    padding: 20px;
    box-shadow: 0 3px 6px #eee;
    margin: 10px 10px 10px 5px;
    height: auto !important;
    position: relative;
    border: 1px solid #e5e5e5;
  }

  div[data-widget-style="slider"] div.stamped-review:first-child {
    margin-top: 10px !important;
  }

  [data-widget-style="slider"] .stamped-review > .stamped-review-header {
    min-height: 70px;
  }

  [data-widget-style="slider"]
    .stamped-review-body
    > .stamped-review-header-title {
    min-height: 50px;
    margin-top: 10px;
    line-height: 20px;
    margin-bottom: 0 !important;
    font-size: 13px;
  }

  [data-widget-style="slider"] .stamped-review-header-starratings {
    display: block;
    margin-bottom: 15px;
  }

  [data-widget-style="slider"] .stamped-review-footer {
    bottom: 16px;
    position: absolute;
    margin-right: 15px;
  }

  [data-widget-style="slider"] .stamped-review-options {
    display: none;
  }

  [data-widget-style="slider"] .stamped-review-options ul li strong {
    display: block !important;
  }

  [data-widget-style="slider"] .stamped-review-avatar {
    display: none !important;
  }

  [data-widget-style="slider"]
    .stamped-verified-badge[data-type="buyer"][data-verified-label]:after {
    font-size: 12px !important;
  }

  [data-widget-style="slider"]
    .stamped-review-recommend[data-is-recommend="true"] {
    font-size: 12px;
    margin: 0 !important;
  }

  [data-widget-style="slider"] .stamped-review-content-body {
    min-height: 100px;
    margin-bottom: 50px;
  }

  [data-widget-style="slider"] .stamped-review-body {
    margin-bottom: 20px;
  }

  [data-widget-style="slider"] a.stamped-review-link-photo {
    vertical-align: top;
    min-height: 110px;
  }

  [data-widget-style="slider"] .stamped-reviews-filter[data-show-filters="true"] {
    border-bottom: none !important;
  }

  [data-widget-style="slider"] .stamped-review-image img {
    max-width: 80px;
    height: auto !important;
  }

  [data-widget-style="slider"] .stamped-reviews .stamped-review-reply {
    background: rgba(255, 255, 255, 0.5);
    border: none;
    border-top: 1px solid #ddd;
    margin-top: 20px !important;
    margin-left: 0;
    margin-bottom: 25px !important;
    padding-left: 10px;
    display: inline-block;
  }

  [data-widget-style="slider"] .stamped-review-footer #stamped-review-vote,
  [data-widget-style="slider"] .stamped-review-footer .stamped-review-vote {
    float: none !important;
    display: block !important;
    clear: both;
  }

  [data-widget-style="slider"] button.slick-next.slick-arrow.slick-disabled {
    pointer-events: none !important;
  }

  [data-widget-style="slider"] ul.stamped-pagination {
    visibility: hidden;
    height: 0;
    width: 0;
    line-height: 0;
  }

  [data-widget-style="slider"] .slick-next:before {
    content: "\f105" !important;
    font-family: stamped-font !important;
    font-size: 40px !important;
  }

  [data-widget-style="slider"] .slick-prev:before {
    content: "\f104" !important;
    font-family: stamped-font !important;
    font-size: 40px !important;
  }

  @media only screen and (max-width: 480px) {
    [data-widget-style="slider"] .stamped-reviews {
      margin: 0 30px !important;
    }
  }

  [data-widget-style="slider"] .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  [data-widget-style="slider"] .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  [data-widget-style="slider"] .slick-list:focus {
    outline: 0;
  }

  [data-widget-style="slider"] .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  [data-widget-style="slider"] .slick-slider .slick-list,
  [data-widget-style="slider"] .slick-slider .slick-track {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  [data-widget-style="slider"] .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  [data-widget-style="slider"] .slick-track:after,
  [data-widget-style="slider"] .slick-track:before {
    display: table;
    content: "";
  }

  [data-widget-style="slider"] .slick-track:after {
    clear: both;
  }

  [data-widget-style="slider"] .slick-loading .slick-track {
    visibility: hidden;
  }

  [data-widget-style="slider"] .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }

  [data-widget-style="slider"] [dir="rtl"] .slick-slide {
    float: right;
  }

  [data-widget-style="slider"] .slick-slide img {
    display: block;
  }

  [data-widget-style="slider"] .slick-slide.slick-loading img {
    display: none;
  }

  [data-widget-style="slider"] .slick-slide.dragging img {
    pointer-events: none;
  }

  [data-widget-style="slider"] .slick-initialized .slick-slide {
    display: block;
  }

  [data-widget-style="slider"] .slick-loading .slick-slide {
    visibility: hidden;
  }

  [data-widget-style="slider"] .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }

  [data-widget-style="slider"] .slick-arrow.slick-hidden {
    display: none;
  }

  [data-widget-style="slider"] .slick-next,
  [data-widget-style="slider"] .slick-prev {
    position: absolute;
    display: block;
    height: 20px;
    width: 20px;
    line-height: 0;
    font-size: 0;
    cursor: pointer;
    background: 0 0;
    color: transparent;
    top: 50%;
    margin-top: -10px;
    padding: 0;
    border: none;
    outline: 0;
  }

  [data-widget-style="slider"] .slick-prev {
    left: -25px;
  }

  [data-widget-style="slider"] .slick-next {
    right: -25px;
  }

  [data-widget-style="slider"] .slick-next.slick-disabled:before,
  [data-widget-style="slider"] .slick-prev.slick-disabled:before {
    opacity: 0.25;
  }

  [data-widget-style="slider"] .slick-next:before,
  [data-widget-style="slider"] .slick-prev:before {
    font-size: 20px;
    line-height: 1;
    color: #1c1d1d;
    opacity: 0.75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [data-widget-type="masonry"] .stamped-review {
    border: 1px solid #e0e0e0 !important;
    padding: 0 !important;
    border-radius: 5px;
    transition: box-shadow 0.3s ease-in-out;
    overflow: hidden;
  }

  [data-widget-type="masonry"] .stamped-review:hover {
    box-shadow: 0 5px 11px #e5e5e5;
  }

  [data-widget-type="masonry"] .stamped-questions .stamped-review {
    padding: 20px !important;
  }

  [data-widget-type="masonry"] .stamped-reviews-filter[data-show-filters="part"],
  [data-widget-type="masonry"] .stamped-reviews-filter[data-show-filters="true"] {
    border-bottom: none !important;
  }

  [data-widget-type="masonry"] .created {
    float: right;
    font-size: 12px;
    color: #999;
    margin-bottom: 10px;
  }

  [data-widget-type="masonry"] .stamped-verified-badge {
    display: inline-block;
    font-size: 12px;
  }

  [data-widget-type="masonry"] .stamped-review-header-starratings {
    margin-bottom: 10px;
    line-height: 20px;
  }

  [data-widget-type="masonry"]
    .stamped-review-recommend[data-is-recommend="true"] {
    margin: 0 !important;
  }

  [data-widget-type="masonry"] .stamped-review-image {
    margin: 0 !important;
    overflow: hidden;
  }

  [data-widget-type="masonry"] .stamped-review-image a:nth-child(2),
  [data-widget-type="masonry"] .stamped-review-image a:nth-child(3) {
    display: none !important;
  }

  [data-widget-type="masonry"] .stamped-review-image a {
    margin: 0 !important;
    display: block;
    width: 100%;
  }

  [data-widget-type="masonry"] .stamped-review-image img,
  [data-widget-type="masonry"] .stamped-review-image video {
    width: 100% !important;
    height: auto !important;
  }

  [data-widget-type="masonry"] .stamped-review-avatar {
    display: none;
  }

  [data-widget-type="masonry"] .stamped-review-footer #stamped-review-vote,
  [data-widget-type="masonry"] .stamped-review-footer .stamped-review-vote {
    float: none !important;
    clear: both !important;
    padding-top: 5px !important;
  }

  [data-widget-type="masonry"] .stamped-reviews {
    margin-bottom: 80px;
  }

  [data-widget-type="masonry"] .stamped-reviews .stamped-review-options strong {
    display: block;
    font-size: 11px;
  }

  [data-widget-type="masonry"] .stamped-reviews .stamped-review-options li {
    font-size: 13px;
  }

  [data-widget-type="masonry"] ul.stamped-pagination {
    top: auto !important;
    bottom: -70px !important;
    left: auto !important;
    clear: both !important;
    width: 100% !important;
  }

  [data-widget-type="masonry"]
    .stamped-reviews
    .stamped-review-options:not(:empty) {
    padding: 5px 10px !important;
  }

  [data-widget-type="masonry"] .stamped-review-reply {
    margin: 0 !important;
    margin-top: 15px !important;
    padding-top: 0 !important;
  }

  [data-widget-style="standard2"] .stamped-review-header-title {
    display: inline-block;
  }

  [data-widget-style="standard2"] .stamped-review-avatar-content {
    height: 46px;
    width: 45px;
  }

  [data-widget-style="standard2"]
    .stamped-reviews
    .stamped-review-options:not(:empty) {
    margin: 20px 0 20px 0 !important;
  }

  [data-widget-style="standard2"] .stamped-review-content {
    margin-top: 15px;
  }

  [data-widget-style="standard2"] .stamped-review-header-starratings {
    margin-right: 5px;
  }

  @media only screen and (max-width: 480px) {
    [data-widget-type="masonry"] ul.stamped-pagination {
      bottom: -50px !important;
    }
  }

  [data-widget-type="minimal"] .summary-overview {
    width: 100% !important;
    float: none !important;
    text-align: center;
    margin-bottom: 25px;
  }

  [data-widget-type="minimal"] .stamped-review > .stamped-review-content {
    margin: 0 0 0 65px !important;
  }

  [data-widget-type="minimal"][data-widget-show-avatar="false"]
    .stamped-review-content {
    margin: 0 !important;
  }

  [data-widget-type="minimal"] .stamped-review-recommend {
    display: none !important;
  }

  [data-widget-type="minimal"] .stamped-review-header-starratings {
    margin-bottom: 10px;
  }

  [data-widget-type="minimal"] .stamped-summary-starrating {
    float: none;
    margin: 0 10px;
  }

  [data-widget-type="minimal"] .stamped-summary-starrating i:before {
    font-size: 26px !important;
  }

  [data-widget-type="minimal"]
    .stamped-summary-photos.stamped-summary-photos-container,
  [data-widget-type="minimal"] .stamped-summary-ratings {
    display: none;
  }

  [data-widget-type="minimal"] .stamped-summary-recommend {
    text-align: center;
    margin-top: 30px;
    display: none;
  }

  [data-version="2"] .stamped-summary-caption {
    display: inline-block !important;
    margin: 0 !important;
    clear: both;
    float: none;
    vertical-align: text-bottom;
  }

  [data-version="2"] .stamped-summary-starrating {
    float: none;
    white-space: nowrap;
  }

  [data-version="2"] .stamped-summary {
    padding-bottom: 0;
    margin-bottom: 0;
  }

  [data-version="2"] .stamped-summary-caption {
    float: none;
  }

  #stamped-main-widget[data-dir="rtl"] * {
    direction: rtl !important;
    text-align: right;
  }

  #stamped-main-widget[data-dir="rtl"]
    .stamped-review-header
    #stamped-review-avatar,
  #stamped-main-widget[data-dir="rtl"]
    .stamped-review-header
    .stamped-review-avatar,
  #stamped-main-widget[data-dir="rtl"]
    .stamped-review-reply
    #stamped-review-avatar,
  #stamped-main-widget[data-dir="rtl"]
    .stamped-review-reply
    .stamped-review-avatar {
    float: right !important;
  }

  #stamped-main-widget[data-dir="rtl"] .stamped-summary-ratings {
    float: right !important;
    padding-left: 0 !important;
    padding-right: 20px !important;
  }

  #stamped-main-widget[data-dir="rtl"] .stamped-review-avatar-content {
    text-align: center !important;
  }

  #stamped-main-widget[data-dir="rtl"] #stamped-sort-select {
    padding-right: 50px !important;
  }

  #stamped-main-widget[data-dir="rtl"] .stamped-summary-actions {
    float: left !important;
    right: auto !important;
    left: 0;
  }

  #stamped-main-widget[data-dir="rtl"] .stamped-form-input.stamped-starrating {
    float: right !important;
  }

  @media (min-width: 768px) {
    #stamped-main-widget[data-dir="rtl"] .stamped-form-contact-email,
    #stamped-main-widget[data-dir="rtl"] .stamped-form-contact-location,
    #stamped-main-widget[data-dir="rtl"] .stamped-form-contact-name {
      float: right !important;
      padding-right: 0 !important;
      padding-left: 15px !important;
    }
  }

  #stamped-main-widget[data-dir="rtl"] .stamped-ugc-modal-date {
    font-size: 0;
  }

  @-webkit-keyframes fadeInStamped {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeInStamped {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .fadeIn {
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeInStamped;
    animation-name: fadeInStamped;
  }

  @-webkit-keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  .fadeOut {
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
  }

  @-webkit-keyframes rotateIn {
    from {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: rotate3d(0, 0, 1, -200deg);
      transform: rotate3d(0, 0, 1, -200deg);
      opacity: 0;
    }

    to {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @keyframes rotateIn {
    from {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: rotate3d(0, 0, 1, -200deg);
      transform: rotate3d(0, 0, 1, -200deg);
      opacity: 0;
    }

    to {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  .rotateIn {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: rotateIn;
    animation-name: rotateIn;
  }

  @-webkit-keyframes rotateOut {
    from {
      -webkit-transform-origin: center;
      transform-origin: center;
      opacity: 1;
    }

    to {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: rotate3d(0, 0, 1, 200deg);
      transform: rotate3d(0, 0, 1, 200deg);
      opacity: 0;
    }
  }

  @keyframes rotateOut {
    from {
      -webkit-transform-origin: center;
      transform-origin: center;
      opacity: 1;
    }

    to {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: rotate3d(0, 0, 1, 200deg);
      transform: rotate3d(0, 0, 1, 200deg);
      opacity: 0;
    }
  }

  .rotateOut {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: rotateOut;
    animation-name: rotateOut;
  }

  @-webkit-keyframes zoomOut {
    from {
      opacity: 1;
    }

    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }

    to {
      opacity: 0;
    }
  }

  @keyframes zoomOut {
    from {
      opacity: 1;
    }

    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }

    to {
      opacity: 0;
    }
  }

  .zoomOut {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: zoomOut;
    animation-name: zoomOut;
  }

  @-webkit-keyframes zoomIn {
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
      opacity: 1;
    }
  }

  @keyframes zoomIn {
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
      opacity: 1;
    }
  }

  .zoomIn {
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn;
  }

  @-webkit-keyframes scaleInWidth {
    from {
      width: auto;
    }

    to {
      width: 40px;
    }
  }

  .scaleInWidth {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: scaleInWidth;
    animation-name: scaleInWidth;
  }

  @-webkit-keyframes scaleOutWidth {
    from {
      width: auto;
    }

    to {
      width: auto;
    }
  }

  .scaleOutWidth {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: scaleOutWidth;
    animation-name: scaleOutWidth;
  }

  @-webkit-keyframes navScaleSmall {
    from {
      height: 213px;
    }

    to {
      height: 75px;
    }
  }

  .fal:before,
  .far:before {
    font-family: "Font Awesome 5 Pro";
  }

  .st-clearboth {
    clear: both;
  }

  .st-pt-10 {
    padding-top: 10px;
  }

  .st-p-10 {
    padding: 10px;
  }

  .st-mt-0 {
    margin-top: 0 !important;
  }

  .st-mt-5 {
    margin-top: 5px;
  }

  .st-mt-10 {
    margin-top: 10px;
  }

  .st-mt-15 {
    margin-top: 15px;
  }

  .st-mb-5 {
    margin-bottom: 5px;
  }

  .st-mb-10 {
    margin-bottom: 10px;
  }

  .st-mb-15 {
    margin-bottom: 15px;
  }

  .st-f-l {
    float: left;
  }

  .st-f-r {
    float: right;
  }

  .st-br-5 {
    border-radius: 5px;
  }

  .st-w-100 {
    width: 100%;
  }

  .st-bt {
    border-top: 1px solid #eee;
  }

  .st-bold {
    font-weight: 700;
  }

  .stamped-launcher-icon-opened .fad:before,
  .stamped-rewards-window .fad:before {
    font-family: inherit !important;
    width: inherit !important;
  }

  #stamped-rewards-init iframe {
    position: absolute !important;
    height: 0 !important;
    max-height: 100% !important;
    max-width: 100% !important;
    min-height: 100% !important;
    min-width: 100% !important;
    width: 0 !important;
    border: 0 !important;
    outline: 0 !important;
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
  }

  .stamped-launcher-button iframe {
    pointer-events: none;
  }

  .stamped-rewards-nav-small .stamped-rewards-header {
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: navScaleSmall;
    animation-name: navScaleSmall;
  }

  .stamped-fa-icon-pro-before:before,
  .stamped-fa-pro-icon {
    font-family: "Font Awesome 5 Pro", "Font Awesome 5 Brands";
    font-size: 18px;
    font-weight: 600;
  }

  .stamped-launcher-button {
    outline: 0;
    position: fixed;
    display: block;
    min-width: 60px;
    max-width: 300px;
    height: 60px;
    padding: 0 !important;
    margin: 0 !important;
    border: 0;
    border-radius: 100px;
    cursor: pointer;
    background: linear-gradient(135deg, #f57c00, #ffc800);
    transition: all 0.2s ease-in-out;
    z-index: 99999999999;
    box-sizing: border-box;
  }

  .stamped-launcher-button:hover {
    transform: scale(1.1);
  }

  .stamped-rewards-launcher.hidden {
    display: none !important;
  }

  .stamped-rewards-position-left {
    bottom: 40px;
    left: 40px;
  }

  .stamped-rewards-position-right {
    bottom: 40px;
    right: 40px;
  }

  @media only screen and (max-width: 480px) {
    .stamped-rewards-launcher.desktop {
      display: none !important;
    }
  }

  .stamped-icon--close {
    position: absolute;
    width: 14px;
    height: 14px;
    top: 23px;
    left: 23px;
  }

  .stamped-launcher-badge {
    position: absolute;
    top: -50%;
    right: -50%;
    background: #fe556d;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    color: #fff;
    line-height: 24px;
    -webkit-transform: translate(-100%, 100%);
    transform: translate(-100%, 100%);
  }

  .stamped-launcher-icon-opened i,
  .stamped-launcher-icon-opened svg {
    vertical-align: middle;
    margin-right: 5px;
    font-size: 27px;
    min-width: 27px;
    display: inline-block;
  }

  .stamped-launcher-icon-opened i:before {
    margin: 0 !important;
    line-height: initial !important;
  }

  .stamped-rewards-base {
    font-family: "Open Sans", sans-serif;
    z-index: 99999999999;
    position: fixed;
    width: 376px;
    min-height: 250px;
    max-height: 704px;
    box-shadow: rgba(0, 0, 0, 0.16) 0 5px 40px;
    opacity: 1;
    height: calc(100% - 120px);
    border-radius: 13px;
    overflow: hidden;
    display: none;
  }

  .stamped-rewards-window {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: start;
    justify-content: flex-start;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background: #fff;
  }

  .stamped-rewards-background {
    position: relative;
    height: 200px;
    min-height: 70px;
    color: #fff;
    transition: height 160ms ease-out 0s;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background-size: 69px 60px, cover;
    pointer-events: none;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 3px 0;
    transition: height 160ms ease-out 0s;
    background: linear-gradient(135deg, #f78f00 0, #fdbc00 100%);
  }

  .stamped-rewards-nav-small .stamped-rewards-background {
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: navScaleSmall;
    animation-name: navScaleSmall;
  }

  .stamped-rewards-header {
    position: relative;
    color: #fff;
    overflow: hidden;
    min-height: 70px;
  }

  .stamped-rewards-header::before {
    content: "";
    opacity: 0.35;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background-size: 69px 60px, cover;
    pointer-events: none;
  }

  .stamped-rewards-header-container {
    box-sizing: border-box;
    font-size: 20px;
  }

  .stamped-rewards-header-content {
    margin-bottom: 15px;
  }

  .stamped-rewards-header-main-title {
    margin-top: 0;
    display: inline-block;
  }

  .stamped-rewards-header-main-subtitle {
    display: block;
    margin-top: 17px;
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
  }

  .stamped-rewards-header-main-subtitle h3 {
    font-size: 21px;
    font-weight: 700;
    margin: 5px 0 0 0 !important;
    line-height: 28px;
  }

  .stamped-rewards-header-main,
  .stamped-rewards-header-small {
    padding: 20px 30px 0;
  }

  .stamped-rewards-header-menu {
    text-align: center;
    margin-top: 0;
    display: inline-block;
    width: 100%;
    margin-top: 20px;
    white-space: nowrap;
  }

  .stamped-rewards-header-menu span {
    border-radius: 50px;
    font-size: 15px;
    padding: 7px 20px;
    cursor: pointer;
    white-space: nowrap;
    display: inline-block;
  }

  .stamped-rewards-header-menu span.active {
    background: rgba(6, 0, 0, 0.1);
  }

  .stamped-rewards-header-menu svg {
    font-size: 16px;
    margin-right: 1px;
  }

  .stamped-rewards-header-main-points {
    float: right;
  }

  .stamped-rewards-header-main-points[data-name]:after,
  .stamped-rewards-header-small-points[data-name]:after {
    content: " " attr(data-name);
    font-size: 13px;
    vertical-align: middle;
  }

  .stamped-rewards-header-nav {
    vertical-align: -webkit-baseline-middle;
    padding: 9px 12px;
    margin-top: -13px;
    margin-left: -15px;
    cursor: pointer;
    display: inline-block;
    line-height: 25px;
    margin-right: 3px;
    border-radius: 5px;
    text-align: center;
  }

  .stamped-rewards-header-nav:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .stamped-rewards-header-nav svg {
    font-size: 20px;
  }

  .stamped-rewards-header-small {
    display: none;
  }

  .stamped-rewards-header-small-title {
    font-weight: 700;
    font-size: 15px;
  }

  .stamped-rewards-header-main-points,
  .stamped-rewards-header-small-points {
    float: right;
    background: rgba(255, 255, 255, 0.2);
    padding: 5px 10px;
    margin-top: 0;
    margin-right: 0;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
  }

  .stamped-rewards-header-close {
    position: absolute;
    top: 10px;
    right: 10px;
    height: 15px;
    width: 15px;
    z-index: 9;
    background-image: url("https://cdn.shopify.com/s/files/1/0638/7747/files/launcher-close-icon.png?12659");
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.3s ease-in-out;
  }

  .stamped-rewards-header-close:hover {
    opacity: 1 !important;
  }

  .stamped-rewards-footer {
    min-height: 40px;
    color: #fff;
    transition: height 160ms ease-out 0s;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 10%, #fff 65%);
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 99999999999;
    text-align: center;
  }

  .stamped-rewards-content {
    position: relative;
    background-color: transparent;
    box-shadow: none;
    flex: 1 1 0%;
  }

  .stamped-rewards-content-container {
    z-index: 2147483002;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
  }

  .stamped-rewards-nav-small .stamped-rewards-content-container {
    top: 0;
    padding-top: 0;
  }

  .stamped-rewards-cards {
    display: flex;
    position: relative;
    flex-direction: column;
    box-sizing: border-box;
    min-height: 100%;
    padding: 0 20px 55px;
  }

  .stamped-rewards-cards:before {
    content: "";
    margin-top: -25px;
    display: inline-block;
    position: absolute;
    width: 86%;
    box-shadow: 0 2px 11px rgba(0, 0, 0, 0.3);
    height: 5px;
    border-radius: 50%;
    display: none;
  }

  .stamped-rewards-nav-small .stamped-rewards-cards:before {
    margin-top: -30px;
  }

  .stamped-rewards-card {
    padding: 20px 24px 20px;
    line-height: 1.6;
    margin-bottom: 17px;
    border-radius: 5px;
    font-size: 13px;
    color: #000;
    overflow: hidden;
    position: relative;
    -webkit-box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.1), inset 0 2px 0 0 #ffb100;
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1),
      inset 0 2px 0 0 #ffb100;
    background: #fff;
  }

  #stamped-rewards-cards > div {
    background-color: #fff;
  }

  div#stamped-rewards-cards[data-target="reviews"]:before {
    content: "Your Reviews";
    color: #fff;
    font-weight: 700;
    text-align: center;
    width: 100%;
    display: inline-block;
    height: 35px;
    margin-top: -2px;
    display: none !important;
  }

  #stamped-rewards-views {
    margin-top: 15px;
  }

  #stamped-rewards-views.loading .stamped-view-loader,
  #stamped-rewards-views.loading .stamped-view-loader :after {
    border-radius: 50%;
    width: 7em;
    height: 7em;
  }

  #stamped-rewards-views.loading .stamped-view-loader {
    margin: auto;
    font-size: 9px;
    text-indent: -9999em;
    border: 0.5em solid rgba(0, 0, 0, 0.1);
    border-left: 0.5em solid #737373;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: stamped-view-loader 1.1s infinite linear;
    animation: stamped-view-loader 1.1s infinite linear;
    align-items: center;
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 40px);
  }

  @-webkit-keyframes stamped-view-loader {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }

    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes stamped-view-loader {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }

    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .stamped-rewards-card.stamped-rewards-card-earn,
  .stamped-rewards-card.stamped-rewards-card-spend {
    padding: 15px 10px 20px;
    margin-bottom: 5px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-bottom: 1px solid #eee;
  }

  .stamped-rewards-card.stamped-rewards-card-vip-tier {
    padding: 10px 0;
    margin-bottom: 5px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-bottom: 1px solid #eee;
  }

  .stamped-reward-card-title {
    display: block;
    font-size: 1.1em;
    font-weight: 600;
  }

  .stamped-rewards-card-main .stamped-reward-card-title {
    margin-bottom: 10px;
  }

  .stamped-rewards-content-button {
    background: #fff;
    color: #000;
    font-size: 14px;
    padding: 10px 15px 10px;
    margin: 15px 0 10px 0;
    border-radius: 30px;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid #c7cdd1;
    box-shadow: 0 1px 2px #dde1e3;
  }

  .stamped-rewards-content-button:hover {
    border-color: #999;
  }

  .stamped-rewards-card-main .stamped-rewards-content-button {
    min-width: 100%;
  }

  .stamped-rewards-content-button-large {
    font-size: 15px;
    padding: 10px 20px;
    white-space: nowrap;
  }

  .stamped-reward-card-subtitle {
    display: block;
    margin-top: 5px;
    color: #555;
  }

  .stamped-reward-card-button-wrapper {
    text-align: center;
    margin-top: 15px;
  }

  [data-logged-in="false"] .stamped-reward-card-button-earn {
    display: none !important;
  }

  [data-logged-in="false"] .stamped-rewards-header-main-points,
  [data-logged-in="false"] .stamped-rewards-header-small-points {
    display: none;
  }

  [data-logged-in="false"] .stamped-rewards-header-menu {
    display: none !important;
  }

  [data-branding="true"] .stamped-rewards-footer:before {
    content: "\\01F381 ";
    display: inline-block;
    font-size: 18px;
    vertical-align: middle;
  }

  [data-branding="true"] .stamped-rewards-footer:after {
    content: "by Stamped.io";
    text-align: center;
    display: inline-block;
    font-size: 12px;
    color: #aaa;
    margin-top: 11px;
  }

  [data-branding="true"] .stamped-rewards-footer {
    background: #fff;
    border-top: 1px solid #ddd;
  }

  .stamped-reward-card-button-earn,
  .stamped-reward-card-button-spend,
  .stamped-rewards-content-action-button,
  .stamped-rewards-window a.stamped-rewards-content-action-button {
    background: #ffb100;
    display: inline-block;
    width: auto;
    padding: 10px 15px;
    margin-left: 5px;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
  }

  .stamped-reward-card-button-earn,
  .stamped-reward-card-button-spend {
    display: none;
    float: right;
  }

  .stamped-rewards-earnings .stamped-reward-card-icon,
  .stamped-rewards-spendings .stamped-reward-card-icon,
  .stamped-rewards-vip-tiers .stamped-reward-card-icon {
    margin-right: 10px;
    display: block;
    font-size: 18px;
    font-weight: 300;
    height: 40px;
    width: 40px;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    line-height: 28px;
    min-width: auto;
    position: relative;
    display: block;
    overflow: hidden;
    box-sizing: border-box;
    float: left;
    opacity: 0.7;
  }

  .stamped-rewards-earnings .stamped-reward-card-icon,
  .stamped-rewards-spendings .stamped-reward-card-icon {
    margin-bottom: 10px;
  }

  .stamped-rewards-spendings .stamped-reward-card-icon {
    font-size: 23px;
    padding-left: 0;
    margin-right: 5px;
    margin-left: 5px;
  }

  .stamped-rewards-vip-tiers {
    margin-top: 10px;
  }

  .stamped-rewards-vip-tiers .stamped-reward-card-icon {
    font-size: 21px !important;
  }

  .stamped-rewards-vip-tiers > .stamped-rewards-card {
    cursor: pointer;
    padding: 10px 0 15px;
    margin-top: 0;
    margin-bottom: 0;
  }

  .stamped-rewards-vip-tiers > .stamped-rewards-card:last-child {
    border: none !important;
  }

  .stamped-rewards-vip-tiers
    > .stamped-rewards-card[data-current="true"]
    .stamped-reward-card-button-earn {
    padding: 5px 10px;
    margin-top: 5px;
    margin-right: 7px;
    display: block;
  }

  .stamped-rewards-vip-tiers
    > .stamped-rewards-card[data-current="true"]
    .stamped-reward-card-button-earn:before {
    content: "Current";
  }

  .stamped-rewards-vip-tiers > .stamped-rewards-card:hover {
    background: #fafafa;
  }

  .stamped-rewards-earnings
    [data-event-type="ReviewPhoto"]
    .stamped-reward-card-button-earn,
  .stamped-rewards-earnings
    [data-event-type="ReviewVideo"]
    .stamped-reward-card-button-earn,
  .stamped-rewards-earnings
    [data-event-type="Review"]
    .stamped-reward-card-button-earn,
  .stamped-rewards-earnings
    [data-event-type="SocialFollowFacebook"]
    .stamped-reward-card-button-earn,
  .stamped-rewards-earnings
    [data-event-type="SocialFollowInstagram"]
    .stamped-reward-card-button-earn,
  .stamped-rewards-earnings
    [data-event-type="SocialFollowPinterest"]
    .stamped-reward-card-button-earn,
  .stamped-rewards-earnings
    [data-event-type="SocialFollowTiktok"]
    .stamped-reward-card-button-earn,
  .stamped-rewards-earnings
    [data-event-type="SocialFollowTwitter"]
    .stamped-reward-card-button-earn,
  .stamped-rewards-earnings
    [data-event-type="SocialShareFacebook"]
    .stamped-reward-card-button-earn,
  .stamped-rewards-earnings
    [data-event-type="SocialShareTwitter"]
    .stamped-reward-card-button-earn,
  .stamped-rewards-earnings
    [data-event-type="SocialYouTube"]
    .stamped-reward-card-button-earn {
    display: block;
    text-align: center;
    min-width: 50px;
    font-size: 13px;
  }

  .stamped-rewards-earnings
    [data-event-type="AccountBirthday"][data-birthday="false"]
    .stamped-reward-card-button-earn:empty:before {
    content: "Set";
    text-align: center;
  }

  .stamped-rewards-earnings
    [data-event-type="AccountBirthday"][data-birthday="false"]
    .stamped-reward-card-button-earn {
    display: block;
    text-align: center;
  }

  .stamped-rewards-earnings
    [data-event-type="SocialFollowInstagram"]
    .stamped-reward-card-button-earn:empty:before,
  .stamped-rewards-earnings
    [data-event-type="SocialFollowPinterest"]
    .stamped-reward-card-button-earn:empty:before,
  .stamped-rewards-earnings
    [data-event-type="SocialFollowTiktok"]
    .stamped-reward-card-button-earn:empty:before,
  .stamped-rewards-earnings
    [data-event-type="SocialFollowTwitter"]
    .stamped-reward-card-button-earn:empty:before {
    content: "Follow";
    display: block;
  }

  .stamped-rewards-earnings
    [data-event-type="SocialFollowFacebook"]
    .stamped-reward-card-button-earn:empty:before {
    content: "Like";
    display: block;
  }

  .stamped-rewards-earnings
    [data-event-type="SocialShareFacebook"]
    .stamped-reward-card-button-earn:empty:before,
  .stamped-rewards-earnings
    [data-event-type="SocialShareTwitter"]
    .stamped-reward-card-button-earn:empty:before {
    content: "Share";
    display: block;
  }

  .stamped-rewards-earnings
    [data-event-type="SocialYouTube"]
    .stamped-reward-card-button-earn:empty:before {
    content: "Subscribe";
    display: block;
  }

  .stamped-rewards-earnings
    [data-event-type="ReviewPhoto"]
    .stamped-reward-card-button-earn:before,
  .stamped-rewards-earnings
    [data-event-type="ReviewVideo"]
    .stamped-reward-card-button-earn:before,
  .stamped-rewards-earnings
    [data-event-type="Review"]
    .stamped-reward-card-button-earn:before {
    font-family: "Font Awesome 5 Solid";
    content: "\\f040";
    display: none;
  }

  .stamped-rewards-earnings
    [data-campaign-completed="true"]
    .stamped-reward-card-button-earn:before {
    font-family: "Font Awesome 5 Pro";
    content: "\\f00c" !important;
    display: none;
  }

  .stamped-rewards-earnings .stamped-reward-card-button-earn svg {
    height: 20px;
  }

  .stamped-rewards-earnings
    .stamped-reward-card-button-earn[data-campaign-completed="true"],
  .stamped-rewards-earnings
    [data-campaign-completed="true"]
    .stamped-reward-card-button-earn {
    opacity: 0.5;
  }

  [data-campaign-redeemable="true"] .stamped-reward-card-button-spend {
    display: block;
    text-align: center;
    font-size: 13px;
  }

  [data-campaign-redeemable="true"]
    .stamped-reward-card-button-spend:not(.stamped-button-disabled):before {
    content: "Redeem";
    display: block;
    text-align: center;
  }

  .stamped-reward-card-button-view {
    float: right;
  }

  .stamped-reward-card-button-view:before {
    content: "View";
    display: block;
  }

  .stamped-button-loading {
    display: block;
    margin: auto;
    font-size: 2px;
    text-indent: -9999em;
    border: 1em solid rgba(0, 0, 0, 0.1);
    border-left: 1em solid #fff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: stamped-view-loader 1.1s infinite linear;
    animation: stamped-view-loader 1.1s infinite linear;
    align-items: center;
    border-radius: 50%;
    width: 7em;
    height: 7em;
  }

  .stamped-button-loading:after {
    border-radius: 50%;
    width: 7em;
    height: 7em;
  }

  .stamped-button-completed:before {
    font-family: "Font Awesome 5 Pro";
    content: "\\f00c" !important;
    display: none;
  }

  .stamped-button-disabled {
    background-color: #ccc !important;
    pointer-events: none;
  }

  .stamped-rewards-coupons {
    margin-top: 10px;
  }

  .stamped-rewards-coupons-view {
    margin-top: 10px;
  }

  .stamped-rewards-coupons-view .stamped-reward-coupon-code {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    margin-top: 15px;
  }

  .stamped-rewards-coupons-view .stamped-reward-card-subtitle {
    margin: 15px 0 20px 0;
  }

  .stamped-reward-referral-link {
    background: #eee;
    padding: 10px;
    overflow-x: auto;
    max-height: 50px;
    white-space: nowrap;
    margin-top: 10px;
  }

  .stamped-reward-coupon-code {
    background: #eee;
  }

  .stamped-reward-referral-rewards {
    margin: 20px 0 10px 0;
    display: inline-block;
    width: 100%;
    border: 1px solid #eee;
    padding: 10px 0;
  }

  .stamped-reward-referral-customer {
    float: left;
    width: 49%;
    text-align: center;
  }

  .stamped-reward-referral-friend {
    float: right;
    width: 50%;
    text-align: center;
    border-left: 1px solid #eee;
  }

  .stamped-reward-referral-reward-title {
    font-weight: 700;
    font-size: 12px;
  }

  .stamped-reward-referral-platforms {
    padding: 10px 0;
    text-align: center;
  }

  .stamped-reward-referral-platforms > span {
    display: inline-block;
    width: 32%;
    font-size: 12px;
    white-space: nowrap;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
  }

  .stamped-reward-referral-platforms > span > button {
    -webkit-appearance: none !important;
    border: none !important;
    background: 0 0;
  }

  .stamped-reward-referral-email i,
  .stamped-reward-referral-email svg,
  .stamped-reward-referral-facebook i,
  .stamped-reward-referral-facebook svg,
  .stamped-reward-referral-twitter i,
  .stamped-reward-referral-twitter svg {
    font-size: 20px;
    display: block;
    margin: auto;
    margin-bottom: 7px;
  }

  .stamped-card-section-spending {
    margin-top: 10px;
    border-top: 1px solid #ccc;
    padding-top: 15px;
  }

  .stamped-card-section-earning a svg,
  .stamped-card-section-spending a svg {
    margin-right: 5px;
    margin-left: -15px;
    font-size: 18px;
  }

  .stamped-card-section-spending a svg {
    font-size: 20px;
  }

  .stamped-launcher-review-view {
    font-size: 0.9em;
  }

  .stamped-rewards-birthday-input-holder {
    position: absolute;
    z-index: 9;
    background: #fff;
    display: inline-block;
    left: 60px;
    padding-right: 20px;
  }

  .stamped-rewards-birthday-input-holder input {
    display: block;
    width: 100%;
    margin-top: 5px;
    font-size: 15px;
  }

  [data-logged-in="true"] .stamped-rewards-header-main-subtitle {
    display: none;
  }

  .opened .stamped-rewards-card,
  .opened .stamped-rewards-header-container {
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: testingUp;
    animation-name: testingUp;
  }

  .opened div#stamped-rewards-cards > div:nth-child(1) {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }

  .opened div#stamped-rewards-cards > div:nth-child(2) {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }

  .opened div#stamped-rewards-cards > div:nth-child(3) {
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
  }

  .opened div#stamped-rewards-cards > div:nth-child(4) {
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }

  .opened div#stamped-rewards-cards > div:nth-child(5) {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }

  .opened div#stamped-rewards-cards > div:nth-child(6) {
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }

  .opened div#stamped-rewards-cards > div:nth-child(7) {
    -webkit-animation-delay: 1.1s;
    animation-delay: 1.1s;
  }

  .opened div#stamped-rewards-cards > div:nth-child(8) {
    -webkit-animation-delay: 1.2s;
    animation-delay: 1.2s;
  }

  .opened div#stamped-rewards-cards > div:nth-child(9) {
    -webkit-animation-delay: 1.3s;
    animation-delay: 1.3s;
  }

  .opened div#stamped-rewards-cards > div:nth-child(10) {
    -webkit-animation-delay: 1.4s;
    animation-delay: 1.4s;
  }

  .opened .stamped-rewards-footer {
    -webkit-animation-delay: 1.3s;
    animation-delay: 1.3s;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: testingUp;
    animation-name: testingUp;
  }

  @-webkit-keyframes testingUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .stamped-launcher-list-item {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
  }

  .stamped-launcher-list-item.stamped-launcher-list-with-button
    .stamped-launcher-list-item-title {
    max-width: 140px;
    display: inline-block;
    vertical-align: middle;
    line-height: 16px;
    margin-top: 3px;
  }

  .stamped-launcher-thumbnail-wrapper {
    display: inline-block;
    max-width: 35px;
    max-height: 35px;
    overflow: hidden;
    vertical-align: middle;
    margin-right: 5px;
  }

  @media only screen and (max-width: 480px),
    only screen and (max-device-width: 480px) {
    .stamped-rewards-base {
      top: 0 !important;
      bottom: 0 !important;
      left: 0 !important;
      width: 100%;
      max-height: 100%;
      height: calc(100%);
      background: #00000026;
      border-radius: 0;
    }

    .stamped-rewards-launcher.opened {
      display: none !important;
    }

    button.stamped-launcher-button {
      width: 60px !important;
      overflow: hidden;
      box-shadow: none !important;
    }

    .stamped-rewards-position-left button.stamped-launcher-button {
      left: 20px !important;
      bottom: 20px !important;
    }

    .stamped-rewards-position-right button.stamped-launcher-button {
      right: 20px !important;
      bottom: 20px !important;
    }
  }

  body[data-mobile="true"] .stamped-rewards-header-close {
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
  }

  body[data-mobile="true"] .stamped-launcher-icon-opened i,
  body[data-mobile="true"] .stamped-launcher-icon-opened svg {
    margin-right: 0 !important;
  }

  body[data-mobile="true"] .stamped-launcher-icon-opened span {
    display: none;
  }

  .edit-review-form,
  .new-question-form {
    border: 1px solid #dddddd4d;
    padding: 15px;
    display: none;
  }

  .stamped-main-badge .stamped-badge[data-rating="0.0"] {
    display: none;
}
`

export function StampedStyles(): React.ReactElement {
  return <Styles />
}
