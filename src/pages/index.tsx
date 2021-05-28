import React from 'react'
import { HeroGallery } from '@fragrantjewels/gravity-brands.components.hero-gallery'
import { CategoryShopCard } from '@fragrantjewels/gravity-brands.components.category-shop-card'
import { PromiseBar } from '@fragrantjewels/gravity-brands.components.promise-bar'
import { Footer } from '@fragrantjewels/gravity-brands.components.footer'
import { InlineSignupForm } from '@fragrantjewels/gravity-brands.components.inline-signup-form'

const HomePage: React.FC = () => {
  return (
    <div className="app-re-wrapper-outer" id="app-wrapper-outer">
      <div className="app-re-wrapper" id="app-wrapper">
        <header className="app-re-header" id="app-header">
          <div className="app-promo-slider">
              <div className="app-container">
                <div className="app-promo-slider__inner" id="app-promo-slider">
                  <div>PARABEN FREE&nbsp;&nbsp;|&nbsp;&nbsp;HANDMADE IN USA&nbsp;&nbsp;|&nbsp;&nbsp;100% VEGAN</div>
                <div><span className="app-pink-clr">FREE SHIPPING</span> ON ORDERS $75+</div>
                <div>COVID-19 SHIPPING UPDATE <a
                  href="https://helpcenter.fragrantjewels.com/hc/en-us/sections/360008222572-COVID-19-Crisis-FAQ?mobile_site=true"
                  target="_blank">LEARN MORE</a></div>
              </div>
            </div>
          </div>

          <div className="app-re-header-inner">
            <div className="app-container">
              <div className="app-re-header__top">
                <div className="app-row">
                  <div className="app-col">
                    <div className="app-re-header-nav-wrapper">
                      <span id="app-hamburger" className="app-hamburger"></span>
                      <a href="/" className="app-logo">
                        <svg width="100%" height="100%" viewBox="0 0 117 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.2133 7.1902L9.8729 7.24467C9.58693 6.64548 9.24649 6.18248 8.86519 5.84203C8.47027 5.50159 7.72129 5.4335 6.63187 5.62415L3.78575 6.12801L4.68452 11.1938L7.0404 10.7853C7.63958 10.6763 8.0345 10.4721 8.21153 10.1453C8.37494 9.83205 8.45665 9.35542 8.4158 8.71539L8.76986 8.6473L9.54608 13.0186L9.19201 13.0867C9.06945 12.4194 8.85157 11.9837 8.53836 11.7522C8.22515 11.5343 7.77576 11.4662 7.20381 11.5615L4.84794 11.97L5.55606 16.0281C5.67862 16.7363 5.80118 17.172 5.92374 17.3218C6.0463 17.4852 6.23695 17.5942 6.5093 17.6623C6.78166 17.7304 7.0404 17.744 7.28552 17.7031L7.74853 17.6214L7.81662 17.9755L2.28779 18.956L2.21971 18.6019L2.68271 18.5202C3.26827 18.4113 3.62233 18.207 3.74489 17.9074C3.86745 17.5942 3.86746 17.0767 3.73128 16.355L2.26056 8.02088C2.11076 7.20381 1.92011 6.69995 1.66137 6.49569C1.40263 6.30504 1.02133 6.25057 0.531093 6.33228L0.0680931 6.41398L0 6.05992L9.58693 4.37131L10.2133 7.1902ZM27.1675 15.0749L23.7086 15.5651L18.4657 10.118C18.1525 10.1725 17.8802 10.2133 17.6759 10.2542C17.567 10.2678 17.3763 10.2951 17.104 10.3087L17.635 14.0808C17.7576 14.9387 17.9483 15.4562 18.2206 15.6468C18.493 15.8375 18.8334 15.892 19.2556 15.8375L19.7594 15.7694L19.8139 16.1235L14.2578 16.8997L14.2034 16.5456L14.6936 16.4775C15.2247 16.4094 15.5788 16.2188 15.7286 15.9056C15.8784 15.606 15.9056 15.0749 15.7966 14.3395L14.6255 5.96459C14.503 5.10667 14.3123 4.5892 14.04 4.39855C13.7676 4.22152 13.4135 4.15343 12.9778 4.2079L12.4875 4.27599L12.4331 3.92193L17.1584 3.25465C18.3159 3.09124 19.2556 3.03677 19.9909 3.09124C20.7127 3.14571 21.3799 3.41807 21.9791 3.92193C22.5783 4.42578 22.9324 5.06582 23.0413 5.84203C23.2864 7.58511 22.374 8.83795 20.3177 9.61416L23.5179 12.9505C24.3214 13.7812 24.9614 14.2851 25.4653 14.4757C25.9691 14.6664 26.5275 14.7481 27.1266 14.7208L27.1675 15.0749ZM16.2596 4.30322L17.0222 9.69587L17.567 9.61416C18.7109 9.45075 19.5824 9.08307 20.1816 8.48389C20.7944 7.89832 21.0259 7.14934 20.9033 6.25057C20.7671 5.32456 20.3995 4.6709 19.773 4.30322C19.1466 3.93554 18.4657 3.79936 17.744 3.90831C17.1312 3.99001 16.6409 4.12619 16.2596 4.30322ZM41.8202 13.6042L36.6727 14.0536L36.6455 13.6995C37.5306 13.5769 37.9528 13.2773 37.8983 12.7871C37.8711 12.5011 37.7077 12.0654 37.3945 11.4798L36.4412 9.68225L31.389 10.118L30.6809 12.256C30.5039 12.7735 30.4358 13.1548 30.463 13.4135C30.5039 13.8902 31.035 14.1217 32.0427 14.0944L32.0699 14.4485L27.9573 14.8025L27.9301 14.4485C28.4203 14.3259 28.7744 14.1489 29.0059 13.9446C29.2238 13.7404 29.5234 13.1003 29.8774 12.0109L33.527 0.871538L33.8675 0.844303L39.3554 11.3028C39.7367 12.0245 40.0908 12.542 40.404 12.828C40.7308 13.1139 41.1802 13.2501 41.7794 13.2365L41.8202 13.6042ZM36.1144 8.98774L33.4453 3.90831L31.6341 9.38266L36.1144 8.98774ZM56.9632 6.60463H56.7181C56.2279 6.61825 55.9011 6.75443 55.7513 7.0404C55.5878 7.31275 55.5197 7.81661 55.5334 8.53836L55.6015 12.542C54.1852 13.3318 52.66 13.754 51.0259 13.7812C48.7381 13.8221 46.9542 13.1956 45.6605 11.9156C44.3668 10.6355 43.6995 9.08307 43.6723 7.25828C43.645 5.99183 43.9719 4.76623 44.6255 3.58148C45.2928 2.39673 46.1099 1.52519 47.0767 0.966863C48.0572 0.408534 49.1875 0.108942 50.4676 0.081706C51.3119 0.0680882 52.306 0.258737 53.4362 0.653654C53.8039 0.776214 54.049 0.844303 54.158 0.844303C54.4439 0.844303 54.5937 0.55833 54.6074 0H54.9614L55.37 4.12619H55.0295C54.2669 1.8384 52.7962 0.708126 50.6446 0.748979C49.0241 0.776215 47.8121 1.38902 47.0086 2.58738C46.2052 3.78575 45.8239 5.17476 45.8511 6.79528C45.8783 8.6473 46.3958 10.1725 47.3763 11.3709C48.3568 12.5556 49.5688 13.1412 50.9986 13.1139C51.9519 13.1003 52.8507 12.8416 53.695 12.3377L53.6269 8.55197C53.6133 7.78938 53.4907 7.28552 53.2592 7.02678C53.0277 6.76804 52.5647 6.64548 51.8838 6.6591V6.29142L56.9496 6.20971L56.9632 6.60463ZM71.7113 13.5633L68.2115 13.5089L63.8811 7.31276C63.5542 7.32637 63.2955 7.32637 63.0912 7.31276C62.9823 7.31276 62.7917 7.29914 62.5193 7.28552L62.4512 11.0849C62.4376 11.9428 62.5465 12.5011 62.7917 12.719C63.0232 12.9369 63.3636 13.0595 63.7857 13.0595L64.3032 13.0731V13.4271L58.6927 13.3318V12.9778L59.1966 12.9914C59.7413 13.005 60.1089 12.8688 60.2996 12.5965C60.5039 12.3241 60.5992 11.8066 60.6128 11.0576L60.7626 2.601C60.7762 1.72946 60.6673 1.18475 60.4221 0.966863C60.177 0.748979 59.8502 0.626418 59.4008 0.6128L58.897 0.599182V0.245119L63.6632 0.326827C64.8343 0.354062 65.774 0.435769 66.4821 0.599182C67.1902 0.762596 67.803 1.14389 68.3069 1.72946C68.8243 2.31502 69.0695 3.00953 69.0558 3.78575C69.0286 5.54244 67.9256 6.63187 65.7739 7.08125L68.4158 10.8806C69.0695 11.8202 69.6278 12.4194 70.0908 12.6918C70.5674 12.9641 71.0985 13.1276 71.6977 13.1956L71.7113 13.5633ZM62.6282 1.2256L62.5329 6.67272L63.0776 6.68634C64.2351 6.69995 65.1612 6.46845 65.842 5.99183C66.5366 5.50159 66.8906 4.80708 66.9042 3.89469C66.9178 2.95506 66.6455 2.24694 66.0872 1.79755C65.5288 1.33454 64.8752 1.10304 64.1534 1.08942C63.527 1.06219 63.0232 1.11666 62.6282 1.2256ZM86.5411 15.1566L81.3936 14.7072L81.4208 14.3532C82.306 14.3804 82.7826 14.1625 82.8234 13.6723C82.8507 13.3863 82.7553 12.9233 82.5511 12.2969L81.9247 10.3631L76.8724 9.91375L75.7966 11.8883C75.5379 12.365 75.4017 12.7326 75.3745 12.9914C75.3336 13.468 75.8103 13.7812 76.8044 13.9446L76.7771 14.2987L72.6646 13.9446L72.6918 13.5906C73.1956 13.5497 73.577 13.4408 73.8357 13.2773C74.0944 13.1139 74.4893 12.5284 75.0341 11.5207L80.5629 1.18475L80.9033 1.21198L84.4984 12.4603C84.7572 13.2501 85.0023 13.8084 85.2746 14.1489C85.547 14.4893 85.9691 14.7072 86.5683 14.7889L86.5411 15.1566ZM81.7204 9.61416L79.9637 4.15343L77.2401 9.21925L81.7204 9.61416ZM103.441 4.76623L102.978 4.69814C102.419 4.61643 102.038 4.69814 101.82 4.94326C101.602 5.18838 101.439 5.665 101.344 6.38674L99.8048 17.3218L99.4644 17.2674L92.3831 5.62415L91.2665 13.6042C91.1439 14.4485 91.1984 14.9932 91.389 15.2383C91.5933 15.4698 91.9201 15.6196 92.3695 15.6877L92.8189 15.7558L92.7644 16.1098L88.2433 15.4698L88.2978 15.1158L88.7472 15.1838C89.1421 15.2383 89.4962 15.1838 89.7821 15.0204C90.0681 14.857 90.2724 14.3395 90.3949 13.4816L91.6614 4.46664C91.2937 3.89469 90.9396 3.48616 90.5856 3.24104C90.2315 2.99591 89.7958 2.8325 89.2919 2.76441L89.3464 2.41035L92.8734 2.90059L99.4371 13.7404L100.486 6.25057C100.608 5.40626 100.554 4.86155 100.35 4.61643C100.145 4.37131 99.8184 4.22152 99.369 4.16705L98.9197 4.09896L98.9741 3.74489L103.495 4.38493L103.441 4.76623ZM116.051 9.90014L115.697 9.83205C115.847 8.33409 115.207 7.44893 113.777 7.16296L111.952 6.8089L110.045 16.6409C109.882 17.4852 109.896 18.03 110.1 18.2751C110.291 18.5202 110.604 18.6836 111.053 18.7789L111.503 18.8606L111.434 19.2147L105.974 18.1525L106.042 17.7985L106.505 17.8938C106.9 17.9755 107.24 17.9346 107.54 17.7848C107.839 17.635 108.071 17.1312 108.234 16.2869L110.141 6.45483L108.602 6.15524C107.798 5.99183 107.158 6.03268 106.682 6.25057C106.219 6.46845 105.865 7.01316 105.62 7.87108L105.266 7.803L106.001 4.8207L116.487 6.86337L116.051 9.90014Z"
                            fill="#221F1F"></path>
                          <path
                            d="M39.0014 21.9927H38.7154C38.3477 21.9927 38.1162 22.0881 38.0073 22.2515C37.8983 22.4285 37.8575 22.7417 37.8575 23.1911V27.113C37.8575 28.0118 37.6668 28.7199 37.2855 29.2238C36.9042 29.7276 36.414 29.9864 35.8012 29.9864C35.4744 29.9864 35.202 29.9047 34.9569 29.7413C34.7118 29.5779 34.6028 29.36 34.6028 29.0876C34.6028 28.6655 34.8071 28.4612 35.202 28.4612C35.4607 28.4612 35.6922 28.7199 35.9237 29.251C36.0191 29.4689 36.128 29.5642 36.2778 29.5642C36.5774 29.5642 36.7136 29.2646 36.7136 28.6791V23.1911C36.7136 22.6872 36.6455 22.3604 36.5229 22.2106C36.4004 22.0608 36.1689 21.9791 35.842 21.9791H35.5561V21.7612H39.0014V21.9927Z"
                            fill="#221F1F"></path>
                          <path
                            d="M47.0222 27.7939L46.3277 29.8094H40.1316V29.5915H40.4176C40.7036 29.5915 40.9079 29.5234 41.0577 29.3736C41.2074 29.2238 41.2755 28.9106 41.2755 28.3931V23.1775C41.2755 22.6328 41.2074 22.3059 41.0577 22.1834C40.9079 22.0608 40.69 22.0064 40.404 22.0064H40.118V21.7885H46.3141L46.4094 23.5452H46.1779C46.069 23.0005 45.9192 22.6464 45.7286 22.483C45.5379 22.3196 45.1702 22.2242 44.6255 22.2242H42.4194V25.3972H44.1761C44.5847 25.3972 44.8979 25.3291 45.1021 25.1929C45.3064 25.0567 45.4153 24.7299 45.4426 24.2261H45.6605V27.0177H45.4426C45.3881 26.473 45.2655 26.1462 45.034 26.01C44.8162 25.8874 44.5302 25.8193 44.1761 25.8193H42.4194V28.4612C42.4194 28.8425 42.4603 29.0876 42.542 29.1966C42.6237 29.3055 42.8007 29.36 43.0867 29.36H44.4485C45.0068 29.36 45.4562 29.2646 45.7694 29.0876C46.0826 28.9106 46.4231 28.4748 46.7771 27.7803H47.0222V27.7939Z"
                            fill="#221F1F"></path>
                          <path
                            d="M59.36 21.9927C59.1285 21.9927 58.9378 22.0472 58.7744 22.1834C58.611 22.3059 58.4884 22.4694 58.4203 22.66C58.3386 22.8507 58.2433 23.1366 58.1071 23.5179L55.8738 30H55.6423L53.8039 24.8661L51.9927 30H51.7749L49.3917 23.3273C49.2692 22.9596 49.1602 22.7009 49.0922 22.5238C49.0241 22.3468 48.9151 22.2242 48.7517 22.1289C48.6019 22.0336 48.4113 21.9927 48.1661 21.9927V21.7749H51.1348V21.9927H50.9986C50.5629 21.9927 50.3586 22.1561 50.3586 22.483C50.3586 22.6328 50.4403 22.946 50.6173 23.4362L52.197 27.9437L53.5316 24.1171L53.1094 22.9051C52.8915 22.3059 52.5238 22.0064 51.9927 22.0064V21.7885H55.1248V22.0064H54.9069C54.4848 22.0064 54.2669 22.1834 54.2669 22.5238C54.2669 22.7281 54.3486 23.0822 54.5257 23.5724L56.0645 27.9437L57.5897 23.5179C57.7667 23.0141 57.8484 22.6736 57.8484 22.4966C57.8484 22.1562 57.5488 21.9927 56.9632 21.9927V21.7749H59.36V21.9927Z"
                            fill="#221F1F"></path>
                          <path
                            d="M67.3672 27.7939L66.6727 29.8094H60.4766V29.5915H60.7626C61.0486 29.5915 61.2528 29.5234 61.4026 29.3736C61.5524 29.2238 61.6205 28.9106 61.6205 28.3931V23.1775C61.6205 22.6328 61.5524 22.3059 61.4026 22.1834C61.2528 22.0608 61.035 22.0064 60.749 22.0064H60.463V21.7885H66.6591L66.768 23.5315H66.5365C66.4276 22.9868 66.2778 22.6328 66.0872 22.4694C65.8965 22.3059 65.5288 22.2106 64.9841 22.2106H62.778V25.3836H64.5347C64.9433 25.3836 65.2565 25.3155 65.4607 25.1793C65.665 25.0431 65.774 24.7163 65.8012 24.2124H66.0191V27.0041H65.8012C65.7467 26.4594 65.6242 26.1325 65.3927 25.9964C65.1748 25.8738 64.8888 25.8057 64.5347 25.8057H62.778V28.4476C62.778 28.8289 62.8189 29.074 62.9006 29.1829C62.9823 29.2919 63.1593 29.3463 63.4453 29.3463H64.8071C65.3654 29.3463 65.8148 29.251 66.128 29.074C66.4412 28.897 66.7817 28.4612 67.1357 27.7667H67.3672V27.7939Z"
                            fill="#221F1F"></path>
                          <path
                            d="M75.4154 27.6305L74.7208 29.8094H68.4975V29.5915H68.7971C69.1376 29.5915 69.369 29.5098 69.478 29.3327C69.6006 29.1557 69.655 28.8425 69.655 28.3795V23.1911C69.655 22.66 69.5733 22.3196 69.4235 22.1834C69.2737 22.0472 69.0558 21.9791 68.7971 21.9791H68.4975V21.7612H72.1335V21.9791C71.793 21.9791 71.5343 22.0064 71.33 22.0744C71.1257 22.1425 70.9896 22.2379 70.9079 22.3604C70.8262 22.483 70.7853 22.8098 70.7853 23.3137V28.3659C70.7853 28.7744 70.8398 29.0195 70.9623 29.1285C71.0849 29.2374 71.4389 29.2783 72.0245 29.2783H72.6237C73.1003 29.2783 73.468 29.251 73.7404 29.1966C74.0127 29.1421 74.2715 28.9923 74.503 28.7608C74.7481 28.5293 74.9796 28.1344 75.2111 27.576L75.4154 27.6305Z"
                            fill="#221F1F"></path>
                          <path
                            d="M76.8452 29.9864H76.6273V27.2356H76.8452C77.1176 28.7608 77.921 29.5234 79.2283 29.5234C79.6913 29.5234 80.059 29.4008 80.3722 29.1557C80.6718 28.9106 80.8352 28.5974 80.8352 28.2025C80.8352 27.7667 80.6173 27.3854 80.1679 27.0449C79.1194 26.4321 78.2479 25.901 77.567 25.4517C76.8861 25.0023 76.5592 24.4167 76.5592 23.695C76.5592 23.0958 76.7771 22.5919 77.2401 22.1834C77.6895 21.7749 78.2478 21.5706 78.9151 21.5706C79.3509 21.5706 79.8003 21.6795 80.2769 21.8838C80.4948 21.9791 80.6582 22.0336 80.7399 22.0336C80.9442 22.0336 81.0803 21.8838 81.1484 21.5706H81.3663V24.3486H81.1484C81.0259 23.5315 80.7671 22.946 80.345 22.5783C79.9228 22.2242 79.4462 22.0472 78.9287 22.0472C78.5338 22.0472 78.207 22.1698 77.921 22.4013C77.6487 22.6328 77.4989 22.9324 77.4989 23.2728C77.4989 23.4907 77.5942 23.7358 77.7848 23.9809C77.9755 24.2261 78.5474 24.621 79.5007 25.1248C80.0863 25.438 80.5356 25.6968 80.8352 25.901C81.1348 26.1053 81.3799 26.364 81.5842 26.6909C81.7885 27.0177 81.8838 27.3581 81.8838 27.7394C81.8838 28.3795 81.6387 28.9106 81.1484 29.3327C80.6582 29.7549 80.059 29.9728 79.3509 29.9728C78.9696 29.9728 78.493 29.8774 77.921 29.6868C77.567 29.5642 77.3355 29.5098 77.1993 29.5098C77.0086 29.537 76.8861 29.6868 76.8452 29.9864Z"
                            fill="#221F1F"></path>
                          <path fillRule="evenodd" clipRule="evenodd"
                            d="M83.9946 27.1403L99.6005 27.8756H83.9946V27.1403Z"
                            fill="#221F1F"></path>
                          <path fillRule="evenodd" clipRule="evenodd"
                            d="M32.4784 27.1403V27.8756H16.8861L32.4784 27.1403Z"
                            fill="#221F1F"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="app-col app-search-col" id="app-search">
                    <div className="app-search__mobile-wrapper">
                      <form action="/search" method="get" role="search" className="app-search-wrapper" autoComplete="off" style={{ position: 'relative' }}>
                        <div className="app-search__mobile-form-inner">
                          <input autoComplete="false" name="hidden" type="text" style={{ display: 'none' }} />
                          <input className="app-search" autoCorrect="off" autoCapitalize="off" placeholder="Search..." type="text" name="q" defaultValue="" autoComplete="off" />
                          <input type="hidden" name="type" defaultValue="product" autoComplete="off" />
                          <button className="app-search-btn app-search-btn__state-1" type="button">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M23 23L16.26 15.55M18.58 9.79C18.58 14.6446 14.6446 18.58 9.79001 18.58C4.93543 18.58 1 14.6446 1 9.79C1 4.93542 4.93543 1 9.79001 1C14.6446 1 18.58 4.93542 18.58 9.79Z"
                                stroke="black" strokeWidth="0.5" strokeMiterlimit="10"
                                strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </button>

                          <button className="app-search-btn app-search-btn__state-2" type="button">
                            <svg width="24" height="24" viewBox="0 0 24 24"
                                  fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M23 1L1 23M1 1L23 23" stroke="black" strokeWidth="0.5"
                                    strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </button>

                          <button type="submit" style={{ display: 'none' }}>Submit</button>
                        </div>
                        <ul className="app-autocomplete__list"></ul>
                      </form>
                    </div>
                  </div>
                  <div className="app-col">
                    <div className="app-row">
                      <div className="app-col app-customer-info-col">
                        <div className="app-re-header__customer-info">
                          <a className="app-auth-link app-auth-link__login" href="/account/login">Log In</a>
                          &nbsp;/&nbsp;
                          <a className="app-auth-link app-auth-link__login" href="/account/register">Sign Up</a>
                        </div>
                      </div>
                      <div className="app-col app-points-col">
                        <div className="app-points-wrapper-des" id="app-points-wrapper-des">
                          <a href="/pages/rewards-boutique" className="app-points">
                            <svg width="127" height="40" viewBox="0 0 127 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M38.5 1H119.205C122.815 1 125.767 3.95133 125.767 7.56133V32.4387C125.767 36.0487 122.815 39 119.205 39H24.5"
                                stroke="black" strokeWidth="0.5" strokeMiterlimit="10"
                                strokeLinecap="round" strokeLinejoin="round"></path>
                              <path
                                d="M24.2053 39L47.892 11.4247L38.6073 1H24.3827H24.522H10.2847L1 11.4247L24.6993 39"
                                fill="url(#app-points-gold-des)"></path>
                              <path
                                d="M24.4719 39L47.9305 11.4247L38.6332 1H24.4085H24.5479H10.3105L1.02588 11.4247L24.4719 39Z"
                                stroke="black" strokeWidth="0.5" strokeMiterlimit="10"
                                strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M1.02539 11.4247H47.8667" stroke="black"
                                strokeWidth="0.5" strokeMiterlimit="10"
                                strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M10.3101 1L24.5 39L38.6327 1" stroke="black"
                                strokeWidth="0.5" strokeMiterlimit="10"
                                strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M14.4395 11.5513L24.5475 1.41797L34.7821 11.222"
                                stroke="black" strokeWidth="0.5" strokeMiterlimit="10"
                                strokeLinecap="round" strokeLinejoin="round"></path>
                              <defs>
                                <linearGradient id="app-points-gold-des" x1="5" y1="5.5" x2="48" y2="28" gradientUnits="userSpaceOnUse">
                                  <animate attributeName="x1" values="5;4;5" dur="7s" repeatCount="indefinite"></animate>
                                  <animate attributeName="y1" values="5.5;4.5;5.5" dur="7s" repeatCount="indefinite"></animate>
                                  <animate attributeName="x2" values="48;108.5;48" dur="7s" repeatCount="indefinite"></animate>
                                  <stop stopColor="#D08E17"></stop>
                                  <stop offset="0.0199" stopColor="#D89C29">
                                    <animate attributeName="offset"
                                              values="0.0199;0.0309454;0.0199" dur="7s"
                                              repeatCount="indefinite"></animate>
                                  </stop>
                                  <stop offset="0.0597" stopColor="#E6B248">
                                    <animate attributeName="offset"
                                              values="0.0597;0.0697112;0.0597" dur="7s"
                                              repeatCount="indefinite"></animate>
                                  </stop>
                                  <stop offset="0.1014" stopColor="#F1C460">
                                    <animate attributeName="offset"
                                              values="0.1014;0.120298;0.1014" dur="7s"
                                              repeatCount="indefinite"></animate>
                                  </stop>
                                  <stop offset="0.1453" stopColor="#F9D072">
                                    <animate attributeName="offset"
                                              values="0.1453;0.183327;0.1453" dur="7s"
                                              repeatCount="indefinite"></animate>
                                  </stop>
                                  <stop offset="0.1929" stopColor="#FED87C">
                                    <animate attributeName="offset"
                                              values="0.1929;0.239427;0.1929" dur="7s"
                                              repeatCount="indefinite"></animate>
                                  </stop>
                                  <stop offset="0.251" stopColor="#FFDA7F">
                                    <animate attributeName="offset"
                                              values="0.251;0.33628;0.251" dur="7s"
                                              repeatCount="indefinite"></animate>
                                  </stop>
                                  <stop offset="0.3617" stopColor="#F9D072">
                                    <animate attributeName="offset"
                                              values="0.3617;0.451013;0.3617" dur="7s"
                                              repeatCount="indefinite"></animate>
                                  </stop>
                                  <stop offset="0.540309" stopColor="#E9B64E"></stop>
                                  <stop offset="0.743575" stopColor="#D08E17"></stop>
                                  <stop offset="0.808329" stopColor="#B88313"></stop>
                                  <stop offset="0.898368" stopColor="#99740F"></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                            <div className="app-points__box__value">
                              <div className="app-points__value">17</div>
                              Points
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="app-col app-re-header__icon-nav">
                        <button type="button" className="app-re-header__icon-nav__search"
                                id="app-header__icon-nav__search">
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M23 23L16.26 15.55M18.58 9.79C18.58 14.6446 14.6446 18.58 9.79001 18.58C4.93543 18.58 1 14.6446 1 9.79C1 4.93542 4.93543 1 9.79001 1C14.6446 1 18.58 4.93542 18.58 9.79Z"
                              stroke="black" strokeWidth="0.5" strokeMiterlimit="10"
                              strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </button>
                        <a href="/account/login" className="app-re-header__icon-nav__customer"
                            id="app-header__icon-nav__customer">
                          <svg width="100%" height="100%" viewBox="0 0 23 23" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M11.8833 10.78C14.8988 10.78 17.3433 8.47874 17.3433 5.64C17.3433 2.80126 14.8988 0.5 11.8833 0.5C8.86781 0.5 6.42328 2.80126 6.42328 5.64C6.42328 8.47874 8.86781 10.78 11.8833 10.78Z"
                              stroke="black" strokeWidth="0.5" strokeMiterlimit="10"
                              strokeLinecap="round" strokeLinejoin="round"></path>
                            <path
                              d="M9.19328 14.9H14.5733C19.0333 14.9 22.6533 18.3 22.6533 22.5H1.11328C1.11328 18.3 4.73328 14.9 9.19328 14.9Z"
                              stroke="black" strokeWidth="0.5" strokeMiterlimit="10"
                              strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </a>

                        <div className="app-user__dropdown__wrapper" id="app-user__dropdown__wrapper">
                          <div className="app-user__dropdown">
                            <div className="app-container">
                              <div className="app-user__dropdown__inner">
                                <h3 className="app-user__title"><a href="/account/login"
                                                                    className="app-account__title__link">My Account</a>
                                </h3>
                                <button type="button" id="app-user__close-btn" className="app-user__close-btn">
                                  <svg width="22" height="22" viewBox="0 0 22 22"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 1L1 21M1 1L21 21" stroke="black"
                                          strokeWidth="0.5" strokeLinecap="round"
                                          strokeLinejoin="round"></path>
                                  </svg>
                                </button>
                                <ul className="app-user__list">
                                  <li><a href="/pages/order-status-check">Order Status</a>
                                  </li>
                                  <li className="app-user__list__subscription"><a href="/account/login">My
                                    Subscription</a></li>
                                  <li><a href="/account/login">My Orders</a></li>
                                  <li><a href="/account/login">My FJ Rewards</a></li>
                                  <li><a href="/account/login">My Birthday Gift</a></li>

                                  <li className="app-gray-clr"><a className="app-auth-link" href="/account/login">Log
                                    In</a>&nbsp;/&nbsp;<a href="/account/register" className="app-auth-link">Sign
                                    Up</a></li>

                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <a href="/cart" className="app-re-header__icon-nav__cart">
                          <svg width="100%" height="100%" viewBox="0 0 18 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M4.78156 8.03V5.17C4.78156 2.85 6.66154 0.970001 8.98154 0.970001C11.3015 0.970001 13.1815 2.85 13.1815 5.17V8.03M14.8615 22.97H3.51154C1.80154 22.97 0.48154 21.49 0.67154 19.79L2.18155 6.16H16.1916L17.7015 19.79C17.8915 21.49 16.5615 22.97 14.8615 22.97Z"
                              stroke="black" strokeWidth="0.5" strokeMiterlimit="10"
                              strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                          <span className="app-re-header__icon-nav__cart__count"><span
                            id="app-cart-count">1</span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="app-nav">
                <div className="app-nav__inner" id="app-nav__list-wrapper">
                  <ul className="app-nav__list">
                    <li className="app-nav__list__item app-subscribe-btn-holder" style={{ display: 'list-item' }}>
                      <a href="/pages/inner-circle" className="app-btn app-btn-purple app-subscribe-btn">Subscribe</a>
                    </li>


                    <li className="app-nav__list__item">
                      <a href="/collections/spring" className="app-nav__link ">Spring</a>
                    </li>


                    <li className="app-nav__list__item">
                      <a href="/collections/bath-bombs" className="app-nav__link ">Bath Bombs</a>
                    </li>


                    <li className="app-nav__list__item">
                      <a href="https://www.fragrantjewels.com/collections/jewel-candles"
                          className="app-nav__link ">Candles</a>
                    </li>


                    <li className="app-nav__list__item app-nav__list__item__has-dropdown">
                      <a href="/collections/all-products" className="app-nav__link ">All</a>
                      <div className="app-nav__dr">
                        <div className="app-container">
                          <div className="app-row-d-2-1">
                            <div className="app-col">

                              <div className="app-row-d-3 app-nav__accordion">
                                <div className="app-col">
                                  <div className="app-nav__accordion__item">
                                    <strong className="app-nav__d__list-title app-nav__d__list-title__active">Shop
                                      by product</strong>
                                    <ul className="app-nav__d__list" style={{ display: 'block' }}>

                                      <li>
                                        <a href="/collections/bath-bombs">Bath
                                          Bombs</a>
                                      </li>

                                      <li>
                                        <a href="https://www.fragrantjewels.com/collections/jewel-candles">Candles</a>
                                      </li>

                                      <li>
                                        <a href="/collections/the-jewelry-store">Jewelry</a>
                                      </li>

                                      <li>
                                        <a href="https://www.fragrantjewels.com/collections/gift-sets">Gift
                                          Sets</a>
                                      </li>

                                      <li>
                                        <a className="app-animated-link" href="/collections/all-products"><span>Shop
                                                                                  all</span></a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="app-col">
                                  <div className="app-nav__accordion__item">
                                    <strong className="app-nav__d__list-title">Shop by
                                      Fragrance</strong>
                                    <ul className="app-nav__d__list" id="app-list__fragrance">
                                      <li><a
                                        href="/collections/all-products#fragrance=Fragrance:%20Aquatic">Aquatic</a>
                                      </li>
                                      <li><a href="/collections/all-products#fragrance=Fragrance:%20Citrus">Citrus</a>
                                      </li>
                                      <li><a href="/collections/all-products#fragrance=Fragrance:%20Floral">Floral</a>
                                      </li>
                                      <li><a href="/collections/all-products#fragrance=Fragrance:%20Floral%20Woods">Floral
                                        Woods</a></li>
                                      <li><a href="/collections/all-products#fragrance=Fragrance:%20Fresh">Fresh</a>
                                      </li>
                                      <li><a href="/collections/all-products#fragrance=Fragrance:%20Fruity">Fruity</a>
                                      </li>
                                      <li><a href="/collections/all-products#fragrance=Fragrance:%20Green">Green</a>
                                      </li>
                                      <li><a href="/collections/all-products#fragrance=Fragrance:%20Spicy/%20Smoky">Spicy/
                                        Smoky</a></li>
                                      <li><a href="/collections/all-products#fragrance=Fragrance:%20Woodsy">Woodsy</a>
                                      </li>
                                      <li><a className="app-animated-link" href="/collections/all-products"><span>Shop
                                                                                  all</span></a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="app-col">
                                  <div className="app-nav__accordion__item">
                                    <strong className="app-nav__d__list-title">Shop by
                                      Material</strong>
                                    <ul className="app-nav__d__list" id="app-list__material">
                                      <li><a
                                        href="/collections/all-products#material=Material:%2018K%20Gold%20Plated">18K
                                        Gold Plated</a></li>
                                      <li><a
                                        href="/collections/all-products#material=Material:%20925%20Sterling%20Silver">925
                                        Sterling Silver</a></li>
                                      <li><a href="/collections/all-products#material=Material:%20Rhodium%20plated">Rhodium
                                        plated</a></li>
                                      <li><a className="app-animated-link" href="/collections/all-products"><span>Shop
                                                                                  all</span></a></li>
                                    </ul>
                                  </div>
                                  <div className="app-nav__accordion__item">
                                    <strong className="app-nav__d__list-title">Shop by Metal
                                      Color</strong>
                                    <ul className="app-nav__d__list" id="app-list__color">
                                      <li><a href="/collections/all-products#color=Metal%20Color:%20Gold">Gold</a>
                                      </li>
                                      <li><a href="/collections/all-products#color=Metal%20Color:%20Rose%20Gold">Rose
                                        Gold</a></li>
                                      <li><a href="/collections/all-products#color=Metal%20Color:%20Silver">Silver</a>
                                      </li>
                                      <li><a className="app-animated-link" href="/collections/all-products"><span>Shop
                                                                                  all</span></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <a href="/products/piece-by-piece-bath-bomb"
                                className="app-col app-add-product-col app-mobile-none">
                              <img src="https://fragrantjewels.s3.amazonaws.com/app/app-nav/nav-all-img-6-dt.jpg"
                                    alt="" />
                              <div className="text-center">
                                <strong className="app-add-product-col__link-text app-animated-link"><span>Celebr/ate
                                                                  Autism Acceptance</span></strong>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>


                    <li className="app-nav__list__item app-nav__list__item__has-dropdown">

                      <a href="/pages/inner-circle" className="app-nav__link ">Subscription</a>


                      <div className="app-nav__dr">
                        <div className="app-container">
                          <div className="app-row-d-2a-1">
                            <div className="app-col">
                              <div className="app-row-d-2">

                                <a href="/pages/inner-circle" className="app-col app-add-product-col">
                                  <img
                                    src="https://fragrantjewels-assets.s3.amazonaws.com/images/under-the-sea/uts-nav-subscription.jpg"
                                    alt="" />
                                  <strong className="app-nav__d__list-title">NEW INNER CIRCLE
                                    EXCLUSIVE COLLECTIONS EVERY MONTH</strong>
                                  <p>This month discover the beauty that lies beneath with the new Under the Sea
                                    collection.</p>
                                  <div>
                                    <strong className="app-add-product-col__link-text app-animated-link"><span>Learn
                                                                          More</span></strong>
                                  </div>
                                </a>
                                <a href="/pages/rare-ic-page" className="app-col app-add-product-col">
                                  <img
                                    src="https://fragrantjewels.s3.amazonaws.com/app/app-nav/nav-subscription-img-rare.jpg"
                                    alt="" />
                                  <strong className="app-nav__d__list-title">EVERYTHING THERE
                                    IS TO KNOW ABOUT RARE COLLECTIONS</strong>
                                  <p>Start collecting unique limited edition sets not available for sale! Find out
                                    how you can qualify.
                                  </p>
                                  <div>
                                    <strong className="app-add-product-col__link-text app-animated-link"><span>Learn
                                                                          More</span></strong>
                                  </div>
                                </a>


                              </div>
                            </div>
                            <div className="app-col">
                              <strong
                                className="app-nav__d__list-title app-nav__d__list-title__main">Subscription</strong>
                              <ul className="app-nav__d__list">

                                <li>
                                  <a href="https://www.fragrantjewels.com/pages/inner-circle#how-it-works">How
                                    it Works</a>
                                </li>

                                <li>
                                  <a href="https://www.fragrantjewels.com/pages/inner-circle#join-now">Join
                                    Now</a>
                                </li>

                                <li>
                                  <a href="https://www.fragrantjewels.com/pages/inner-circle#current-box">Current
                                    Box</a>
                                </li>

                                <li>
                                  <a href="/collections/esic">Members Only Store</a>
                                </li>

                                <li>
                                  <a href="/pages/rare-ic-page">Rare Collections</a>
                                </li>


                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>


                    <li className="app-nav__list__item app-nav__list__item__has-dropdown">


                      <a href="/pages/rewards-boutique" className="app-nav__link ">Rewards</a>

                      <div className="app-nav__dr">
                        <div className="app-container">
                          <div className="app-row-d-2a-1">
                            <div className="app-col">
                              <div className="app-row-d-2">


                                <a href="/pages/rewards-boutique" className="app-col app-add-product-col">
                                  <img src="https://fragrantjewels.s3.amazonaws.com/app/app-nav/nav-rewards-img-1.jpg"
                                        alt="" />
                                  <strong className="app-nav__d__list-title">NEW REWARDS EVERY
                                    WEEK</strong>
                                  <p>Every dollar you spend earns you reward points you can use to redeem free
                                    jewelry, products and more!
                                  </p>
                                  <div>
                                    <strong className="app-add-product-col__link-text app-animated-link"><span>VIEW
                                                                          REWARDS</span></strong>
                                  </div>
                                </a>
                                <a href="/pages/rewards-explainer" className="app-col app-add-product-col">
                                  <img src="https://fragrantjewels.s3.amazonaws.com/app/app-nav/nav-rewards-img-2.jpg"
                                        alt="" />
                                  <strong className="app-nav__d__list-title">EARN PLATINUM
                                    REWARDS STATUS</strong>
                                  <p>Get exclusive access to VIP offers, 3x points and more when you earn Platinum
                                    status! </p>
                                  <div>
                                    <strong className="app-add-product-col__link-text app-animated-link"><span>Learn
                                                                          More</span></strong>
                                  </div>
                                </a>

                              </div>
                            </div>
                            <div className="app-col">
                              <strong className="app-nav__d__list-title app-nav__d__list-title__main">Rewards</strong>
                              <ul className="app-nav__d__list">

                                <li>
                                  <a href="/pages/rewards-boutique">Rewards Boutique</a>
                                </li>

                                <li>
                                  <a href="/pages/rewards-explainer">How it Works</a>
                                </li>


                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>


                    <li className="app-nav__list__item">
                      <a href="/pages/vault-appraise" className="app-nav__link ">Vault</a>
                    </li>


                  </ul>
                  <div id="app-nav__mobile-content" className="app-nav__mobile-content">
                    <a href="/products/piece-by-piece-bath-bomb" className="app-col app-add-product-col">
                      <img src="https://fragrantjewels.s3.amazonaws.com/app/app-nav/nav-all-img-6-mb.jpg" alt="" />
                      <div>
                                          <span className="app-animated-link app-nav__mobile-content__link"><span>Celebr/ate
                                                  Autism Acceptance</span></span>
                      </div>
                    </a>

                    <a href="/collections/fantasy" className="app-col app-add-product-col">
                      <img src="https://fragrantjewels.s3.amazonaws.com/app/app-nav/nav-all-img-5-mob.jpg" alt="" />
                      <div>
                                          <span className="app-animated-link app-nav__mobile-content__link"><span>FANTASY
                                                  FAVORITES</span></span>
                      </div>
                    </a>

                    <a href="/collections/spring" className="app-col app-add-product-col">
                      <img src="https://fragrantjewels.s3.amazonaws.com/app/app-nav/nav-all-img-4.jpg" alt="" />
                      <div>
                                          <span className="app-animated-link app-nav__mobile-content__link"><span>SHOP
                                                  SPRING BLING</span></span>
                      </div>
                    </a>
                  </div>

                  <div className="app-account__wrapper" id="app-account__wrapper">
                    <h3 className="app-account__title"><a href="/account/login"
                                                          className="app-account__title__link">Account</a></h3>
                    <ul className="app-account__list">
                      <li><a href="/pages/order-status-check">Order Status</a></li>
                      <li className="app-account__list__subscription"><a href="/account/login">My
                        Subscription</a></li>
                      <li><a href="/account/login">My Orders</a></li>
                      <li><a href="/account/login">My FJ Rewards</a></li>
                      <li><a href="/account/login">My Birthday Gift</a></li>
                    </ul>
                  </div>

                </div>
              </nav>
            </div>
          </div>

          <div className="app-nav__dr-wrapper" id="app-nav-secondary-desktop"></div>

          <div className="app-nav__mobile" id="app-nav-secondary-mobile">
            <div className="app-nav__mobile__overlay"></div>
            <div className="app-nav__mobile__inner">
              <div id="app-nav__mobile__top" className="app-nav__mobile__top">
                <div className="app-nav__mobile__top__inner">
                  <div className="app-nav__mobile__top__inner__left">
                    <div className="app-points-wrapper-mob" id="app-points-wrapper-mob"><a
                      href="/pages/rewards-boutique" className="app-points">
                      <svg width="127"
                            height="40" viewBox="0 0 127 40" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M38.5 1H119.205C122.815 1 125.767 3.95133 125.767 7.56133V32.4387C125.767 36.0487 122.815 39 119.205 39H24.5"
                          stroke="black" strokeWidth="0.5" strokeMiterlimit="10"
                          strokeLinecap="round" strokeLinejoin="round"></path>
                        <path
                          d="M24.2053 39L47.892 11.4247L38.6073 1H24.3827H24.522H10.2847L1 11.4247L24.6993 39"
                          fill="url(#app-points-empty-mob)"></path>
                        <path
                          d="M24.4719 39L47.9305 11.4247L38.6332 1H24.4085H24.5479H10.3105L1.02588 11.4247L24.4719 39Z"
                          stroke="black" strokeWidth="0.5" strokeMiterlimit="10"
                          strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M1.02539 11.4247H47.8667" stroke="black" strokeWidth="0.5"
                              strokeMiterlimit="10" strokeLinecap="round"
                              strokeLinejoin="round"></path>
                        <path d="M10.3101 1L24.5 39L38.6327 1" stroke="black" strokeWidth="0.5"
                              strokeMiterlimit="10" strokeLinecap="round"
                              strokeLinejoin="round"></path>
                        <path d="M14.4395 11.5513L24.5475 1.41797L34.7821 11.222" stroke="black"
                              strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round"
                              strokeLinejoin="round"></path>
                        <defs>
                          <linearGradient id="app-points-empty-mob" x1="5" y1="5.5" x2="48"
                                          y2="28" gradientUnits="userSpaceOnUse">
                            <animate attributeName="x2" values="48;83.5;48" dur="7s"
                                      repeatCount="indefinite"></animate>
                            <animate attributeName="y2" values="28;49;28" dur="7s"
                                      repeatCount="indefinite"></animate>
                            <stop stopColor="#FFF7E2">
                              <animate attributeName="stopColor" values="#FFF7E2; #FFF9EC"
                                        dur="7s" repeatCount="indefinite"></animate>
                            </stop>
                            <stop offset="0.0262039" stopColor="#FFF9EC">
                              <animate attributeName="stopColor"
                                        values="#FFF9EC; #FFF7E2;" dur="7s"
                                        repeatCount="indefinite"></animate>
                              <animate attributeName="offset"
                                        values="0.0262039;0.209294;0.0262039" dur="7s"
                                        repeatCount="indefinite"></animate>
                            </stop>
                            <stop offset="0.3617" stopColor="white">
                              <animate attributeName="offset"
                                        values="0.3617;0.353026;0.3617" dur="7s"
                                        repeatCount="indefinite"></animate>
                            </stop>
                            <stop offset="0.612777" stopColor="#FEFDFA">
                              <animate attributeName="offset"
                                        values="0.612777;0.540309;0.612777" dur="7s"
                                        repeatCount="indefinite"></animate>
                            </stop>
                            <stop offset="0.743575" stopColor="#FFF6E7"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="app-points__box__value">
                        <div className="app-points__value">0</div>
                        Points
                      </div>
                    </a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="app-re-content" id="app-content">
          <main className="app-h-main">
            <div className="HeroGallery-Container">
              <HeroGallery />
            </div>
            <section className="app-h-section app-h-products-section">
              <div className="app-h-container">
                <h2 className="app-h-section__title">What’s trending</h2>
                <div className="app-h-section__text">
                  <p>Shop our newest and best selling collections.</p>
                </div>
                <div className="app-h-product-cards">
                  <div className="app-h-product-slider" id="app-h-product-slider">

                    <div className="app-h-product-card app-h-product-card_new-product">
                      <div className="app-h-product-card__top">
                        <div className="app-h-product-card__img-wrapper">
                          <div className="app-h-product-card__img-wrapper-inner">
                            <img
                              src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/aphrodite_bb_jewelry_comp.png"
                              alt="" />
                          </div>
                        </div>
                        <div className="app-h-product-card__tag">925 Sterling Silver</div>
                        <div className="app-h-product-card__members">Members Only</div>
                        <h4 className="app-h-product-card__title">Aphrodite - Bath Bomb</h4>
                      </div>
                      <div className="app-h-product-card__bottom">
                        <div className="app-h-product-card__rating app-h-stars">
                                              <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="#9059C8" />
                                                  </svg>
                                              </span>
                          <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="#9059C8" />
                                                  </svg>
                                              </span>
                          <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="#9059C8" />
                                                  </svg>
                                              </span>
                          <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="#9059C8" />
                                                  </svg>
                                              </span>
                          <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="url(#paint0_linear)" />
                                                      <defs>
                                                          <linearGradient id="paint0_linear" x1="0.388889"
                                                                          y1="6.11111" x2="14.6111" y2="6.11111"
                                                                          gradientUnits="userSpaceOnUse">
                                                              <stop offset="0.5" stopColor="#9059C8" />
                                                              <stop offset="0.5001" stopColor="#DADADA" />
                                                              <stop offset="1" stopColor="#DADADA" />
                                                          </linearGradient>
                                                      </defs>
                                                  </svg>

                                              </span>
                          <a className="app-h-product-card__rating-link" href="#">102</a>
                        </div>
                        <div className="app-h-product-card__prices">
                          <span className="app-h-product-card__price app-h-product-card__price_compare"><del>$39.95</del></span>
                          <span className="app-h-product-card__price">$32.95</span>
                        </div>
                      </div>
                    </div>

                    <div className="app-h-product-card">
                      <div className="app-h-product-card__top">
                        <div className="app-h-product-card__img-wrapper">
                          <div className="app-h-product-card__img-wrapper-inner">
                            <img
                              src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/moulinrouge_bundle_perfume_comp_large.png"
                              alt="" />
                          </div>
                        </div>
                        <div className="app-h-product-card__tag">925 Sterling Silver</div>
                        <div className="app-h-product-card__members">Members Only</div>
                        <h4 className="app-h-product-card__title">Moulin Rouge - Satin Collection - Bath Bomb and
                          Candle Set</h4>
                      </div>
                      <div className="app-h-product-card__bottom">
                        <div className="app-h-product-card__rating app-h-stars">
                                              <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="#9059C8" />
                                                  </svg>
                                              </span>
                          <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="#9059C8" />
                                                  </svg>
                                              </span>
                          <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="#9059C8" />
                                                  </svg>
                                              </span>
                          <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="#9059C8" />
                                                  </svg>
                                              </span>
                          <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="url(#paint0_linear)" />
                                                      <defs>
                                                          <linearGradient id="paint0_linear" x1="0.388889"
                                                                          y1="6.11111" x2="14.6111" y2="6.11111"
                                                                          gradientUnits="userSpaceOnUse">
                                                              <stop offset="0.5" stopColor="#9059C8" />
                                                              <stop offset="0.5001" stopColor="#DADADA" />
                                                              <stop offset="1" stopColor="#DADADA" />
                                                          </linearGradient>
                                                      </defs>
                                                  </svg>

                                              </span>
                          <a className="app-h-product-card__rating-link" href="#">102</a>
                        </div>
                        <div className="app-h-product-card__prices">
                          <span className="app-h-product-card__price app-h-product-card__price_compare"><del>$39.95</del></span>
                          <span className="app-h-product-card__price">$32.95</span>
                        </div>
                      </div>
                    </div>

                    <div className="app-h-product-card app-h-product-card_new-product">
                      <div className="app-h-product-card__top">
                        <div className="app-h-product-card__img-wrapper">
                          <div className="app-h-product-card__img-wrapper-inner">
                            <img
                              src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/aries_2021_candle_comp_large.jpg"
                              alt="" />
                          </div>
                        </div>
                        <div className="app-h-product-card__tag">925 Sterling Silver</div>
                        <div className="app-h-product-card__members">Members Only</div>
                        <h4 className="app-h-product-card__title">Aries, The Ram - Jewel Candle</h4>
                      </div>
                      <div className="app-h-product-card__bottom">
                        <div className="app-h-product-card__rating app-h-stars">
                                              <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="#9059C8" />
                                                  </svg>
                                              </span>
                          <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="#9059C8" />
                                                  </svg>
                                              </span>
                          <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="#9059C8" />
                                                  </svg>
                                              </span>
                          <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="#9059C8" />
                                                  </svg>
                                              </span>
                          <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="url(#paint0_linear)" />
                                                      <defs>
                                                          <linearGradient id="paint0_linear" x1="0.388889"
                                                                          y1="6.11111" x2="14.6111" y2="6.11111"
                                                                          gradientUnits="userSpaceOnUse">
                                                              <stop offset="0.5" stopColor="#9059C8" />
                                                              <stop offset="0.5001" stopColor="#DADADA" />
                                                              <stop offset="1" stopColor="#DADADA" />
                                                          </linearGradient>
                                                      </defs>
                                                  </svg>
                                              </span>
                          <a className="app-h-product-card__rating-link" href="#">102</a>
                        </div>
                        <div className="app-h-product-card__prices">
                          <span className="app-h-product-card__price app-h-product-card__price_compare"><del>$39.95</del></span>
                          <span className="app-h-product-card__price">$32.95</span>
                        </div>
                      </div>
                    </div>
                    <div className="app-h-product-card">
                      <div className="app-h-product-card__top">
                        <div className="app-h-product-card__img-wrapper">
                          <div className="app-h-product-card__img-wrapper-inner">
                            <img
                              src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/moulinrouge_bundle_perfume_comp_large.png"
                              alt="" />
                          </div>
                        </div>
                        <div className="app-h-product-card__tag">925 Sterling Silver</div>
                        <div className="app-h-product-card__members">Members Only</div>
                        <h4 className="app-h-product-card__title">Moulin Rouge - Satin Collection - Bath Bomb and
                          Candle Set</h4>
                      </div>
                      <div className="app-h-product-card__bottom">
                        <div className="app-h-product-card__rating app-h-stars">
                                              <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="#9059C8" />
                                                  </svg>
                                              </span>
                          <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="#9059C8" />
                                                  </svg>
                                              </span>
                          <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="#9059C8" />
                                                  </svg>
                                              </span>
                          <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="#9059C8" />
                                                  </svg>
                                              </span>
                          <span className="app-h-product-card__star app-h-stars__star">
                                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                                        fill="url(#paint0_linear)" />
                                                      <defs>
                                                          <linearGradient id="paint0_linear" x1="0.388889"
                                                                          y1="6.11111" x2="14.6111" y2="6.11111"
                                                                          gradientUnits="userSpaceOnUse">
                                                              <stop offset="0.5" stopColor="#9059C8" />
                                                              <stop offset="0.5001" stopColor="#DADADA" />
                                                              <stop offset="1" stopColor="#DADADA" />
                                                          </linearGradient>
                                                      </defs>
                                                  </svg>

                                              </span>
                          <a className="app-h-product-card__rating-link" href="#">102</a>
                        </div>
                        <div className="app-h-product-card__prices">
                          <span className="app-h-product-card__price app-h-product-card__price_compare"><del>$39.95</del></span>
                          <span className="app-h-product-card__price">$32.95</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="app-h-progress-wrapper">
                    <div className="app-h-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
                      <span className="app-h-progress__label" id="app-h-progress__label"></span>
                    </div>
                  </div>
                </div>


              </div>
            </section>
            <section className="app-h-section">
              <div className="app-h-container">
                <h2 className="app-h-section__title app-h-section__title_mb"><span><span
                  className="app-h-section__title_part">Get addicted</span></span> to me-time
                </h2>
                <div className="app-h-section__text app-h-section__text_narrow">
                  <p>Join the Inner Circle for exciting new collections every month, available exclusively to members.
                  </p>
                </div>
                <div className="app-h-text-center">
                  <a className="app-h-link" href="#">Get Started</a>
                </div>
              </div>
              <div className="app-h-ic app-h-ic_colored">
                <div className="app-h-container">
                  <div className="app-h-row-s-1-2">
                    <div className="app-h-col app-h-col_wider">
                      <div className="app-h-ic__left">
                        <div className="app-h-ic__slider app-h-ic-slider">
                          <div className="app-h-ic-slider__slides">
                            <div className="app-h-ic-slider__slide">
                              <img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/ic-img-jewelry.jpg"
                                    alt="" />
                            </div>
                          </div>
                          <button
                            className="app-h-ic-slider__btn app-h-ic-slider__btn_prev app-h-ic-slider__btn_disable">
                            <span>Prev</span></button>
                          <button className="app-h-ic-slider__btn app-h-ic-slider__btn_next"><span>Next</span>
                          </button>
                        </div>
                        <div className="app-h-ic__img-wrapper">
                          <img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/ic-img.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="app-h-col">
                      <div className="app-h-ic__part">
                        <strong className="app-h-ic__pre-title">INNER CIRCLE EXCLUSIVE</strong>
                        <h3 className="app-h-ic__title">Moon Magic</h3>

                        <div className="app-h-ic__prices">
                          <span className="app-h-ic__price app-h-ic__price_compare"><del>$39.95</del></span>
                          <span className="app-h-ic__price">$32.95 + Free Shipping</span>
                        </div>

                        <div className="app-h-ic__selector-wrapper">
                          <strong className="app-h-ic__selector-wrapper__message">Select a ring size
                            to reserve
                            this box:</strong>
                          <div className="app-h-selector">
                            <div className="app-h-selector__btn-holder">
                              <button className="app-h-selector__btn" type="button" defaultValue="5">5</button>
                            </div>
                            <div className="app-h-selector__btn-holder">
                              <button className="app-h-selector__btn" type="button" defaultValue="6">6</button>
                            </div>
                            <div className="app-h-selector__btn-holder">
                              <button className="app-h-selector__btn" type="button" defaultValue="7">7</button>
                            </div>
                            <div className="app-h-selector__btn-holder">
                              <button className="app-h-selector__btn" type="button" defaultValue="8">8</button>
                            </div>
                            <div className="app-h-selector__btn-holder">
                              <button className="app-h-selector__btn" type="button" defaultValue="9">9</button>
                            </div>
                            <div className="app-h-selector__btn-holder">
                              <button className="app-h-selector__btn app-h-selector__btn_disable" type="button"
                                      defaultValue="10">10
                              </button>
                            </div>
                          </div>
                          <button className="app-h-link app-h-ic-btn" type="button">Reserve
                            now
                          </button>
                          <div className="app-h-ic__selector-wrapper__text">
                            <sup>*</sup>Monthly membership price does not include tax.<br /> Shipping is always free.
                            Cancel anytime.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="app-h-section app-h-section_colored app-h-section_mf">
              <div className="app-h-container">
                <h2 className="app-h-section__title">The <span><span
                  className="app-h-section__title_part">most fun</span></span> you’ve <br />ever had relaxing</h2>
                <div className="app-h-mf-slider-wrapper">
                  <div className="app-h-mf-slider" id="app-h-mf-slider">
                    <div className="app-h-mf-slider_slide app-h-mf-card">
                      <img className="app-h-mf-card__img"
                            src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/most-fun-img-1.jpg" alt="" />
                      <h4 className="app-h-mf-card__title">Guilt Free Ingredients</h4>
                      <div className="app-h-mf-card__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque,
                          posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis.</p>
                      </div>
                    </div>

                    <div className="app-h-mf-slider_slide app-h-mf-card">
                      <img className="app-h-mf-card__img"
                            src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/most-fun-img-2.jpg" alt="" />
                      <h4 className="app-h-mf-card__title">Win $10,000 Ring</h4>
                      <div className="app-h-mf-card__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque,
                          posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis.</p>
                      </div>
                    </div>

                    <div className="app-h-mf-slider_slide app-h-mf-card">
                      <img className="app-h-mf-card__img"
                            src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/most-fun-img-3.jpg" alt="" />
                      <h4 className="app-h-mf-card__title">Collectible Jewelry</h4>
                      <div className="app-h-mf-card__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque,
                          posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="app-h-section app-h-collections-section">
              <div className="app-h-container">
                <div className="app-h-row-1-2">
                  <div className="app-h-col">
                    <CategoryShopCard
                      image="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/collection-img-1.jpg"
                      title="Valentine’s Shop"
                      subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                  </div>
                  <div className="app-h-col">
                    <CategoryShopCard
                      image="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/collection-img-2.jpg"
                      title="Mythical Shop"
                      subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                  </div>
                </div>
              </div>
            </div>

            <section className="app-h-section app-h-section_full-colored app-h-review-section">
              <div className="app-h-container">
                <div className="app-h-stars">
                              <span className="app-h-stars__star">
                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                        fill="#9059C8" />
                                  </svg>
                              </span>
                  <span className="app-h-stars__star">
                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                        fill="#9059C8" />
                                  </svg>
                              </span>
                  <span className="app-h-stars__star">
                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                        fill="#9059C8" />
                                  </svg>
                              </span>
                  <span className="app-h-stars__star">
                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                        fill="#9059C8" />
                                  </svg>
                              </span>
                  <span className="app-h-stars__star">
                                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
                                        fill="#9059C8" />
                                  </svg>
                              </span>
                </div>
                <strong className="app-h-review-section__pre-title">100,600+ 5 STAR REVIEWS</strong>
                <h3 className="app-h-review-section__title">You didn’t hear it from us...</h3>
                <figure className="app-h-review-section__quote">
                  <blockquote>
                    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget
                      eget neque, posuere quis placerat arcu. Ipsum est felis varius faucibus
                      praesent.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q>
                  </blockquote>
                  <figcaption>- SAMANTHA H.</figcaption>
                </figure>
                <div className="app-h-media-slider" id="app-h-media-slider">
                  <div>
                    <img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/buzzfeed.png" alt="" />
                  </div>
                  <div>
                    <img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/cosmopolitan.png" alt="" />
                  </div>
                  <div>
                    <img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/refinery29.png" alt="" />
                  </div>
                  <div>
                    <img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/allure.png" alt="" />
                  </div>
                  <div>
                    <img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/beauty-insider.png" alt="" />
                  </div>
                  <div>
                    <img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/popsugar.png" alt="" />
                  </div>
                </div>
              </div>
            </section>
            <section className="app-h-section app-h-char-section app-h-char-section_colored">
              <div className="app-h-container">
                <PromiseBar />
              </div>
            </section>
            <section className="app-h-section app-h-form-section">
              <div>
                <div className="app-h-container">
                  <InlineSignupForm />
                </div>
                <div className="app-h-media-imgs">
                  <div>
                    <img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/press-icons-1.png" alt="" />
                  </div>
                  <div>
                    <img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/press-icons-2.png" alt="" />
                  </div>
                </div>
              </div>
            </section>
            <section className="app-h-section app-h-shop-section">
              <div className="app-h-container">
                <h2 className="app-h-section__title">Shop by Product</h2>
                <div className="app-h-shop-slider-wrapper">
                  <div className="app-h-shop-slider" id="app-h-shop-slider">
                    <div className="app-h-shop-slider_slide">
                      <img className="app-h-shop-slider__img"
                            src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-1.jpg"
                            alt="" />
                      <a href="#" className="app-h-shop-slider__btn app-h-link app-h-slide__link">Shop
                        Now</a>
                    </div>
                    <div className="app-h-shop-slider_slide">
                      <img className="app-h-shop-slider__img"
                            src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-2.jpg"
                            alt="" />
                      <a href="#" className="app-h-shop-slider__btn app-h-link app-h-slide__link">Shop
                        Now</a>
                    </div>
                    <div className="app-h-shop-slider_slide">
                      <img className="app-h-shop-slider__img"
                            src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/shop-by-product-img-3.jpg"
                            alt="" />
                      <a href="#" className="app-h-shop-slider__btn app-h-link app-h-slide__link">Shop
                        Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="app-h-section app-h-char-section app-h-char-section_colored">
              <div className="app-h-container">
                <PromiseBar />
              </div>
            </section>
            <section className="app-h-section app-h-form-section">
              <div className="app-h-container">
                <InlineSignupForm />
              </div>
            </section>
            <section className="app-h-section app-h-follow-section">
              <div className="app-h-container">
                <strong className="app-h-section__pre-title">Follow us</strong>
                <h2 className="app-h-section__title"><span><span
                  className="app-h-section__title_part">@Fragrant_Jewels</span></span>
                </h2>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer className="Footer-Colored" />
    </div>
  )
}

export default HomePage
