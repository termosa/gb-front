import React from 'react'

const HomePage: React.FC = () => {
  return (
    <>
      <div className="app-re-wrapper-outer" id="app-wrapper-outer">
        <div className="app-re-wrapper" id="app-wrapper">
          <header className="app-re-header" id="app-header">
            <div className="app-promo-slider">
              <div className="app-container">
                <div className="app-promo-slider__inner" id="app-promo-slider">
                  <div>PARABEN FREE&nbsp;&nbsp;|&nbsp;&nbsp;HANDMADE IN USA&nbsp;&nbsp;|&nbsp;&nbsp;100% VEGAN
                  </div>
                  <div><span className="app-pink-clr">FREE SHIPPING</span> ON ORDERS $75+</div>
                  <div>COVID-19 SHIPPING UPDATE <a
                    href="https://helpcenter.fragrantjewels.com/hc/en-us/sections/360008222572-COVID-19-Crisis-FAQ?mobile_site=true"
                    target="_blank">LEARN MORE></a></div>
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
                          <svg width="100%" height="100%" viewBox="0 0 117 30" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
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
                        <form action="/search" method="get" role="search" className="app-search-wrapper"
                              autoComplete="off" style={{ position: 'relative' }}>
                          <div className="app-search__mobile-form-inner">
                            <input autoComplete="false" name="hidden" type="text" style={{ display: 'none' }} />
                            <input className="app-search" autoCorrect="off" autoCapitalize="off"
                                   placeholder="Search..." type="text" name="q" defaultValue="" autoComplete="off" />
                            <input type="hidden" name="type" defaultValue="product" autoComplete="off" />
                            <button className="app-search-btn app-search-btn__state-1" type="button">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
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

                            <a className="app-auth-link app-auth-link__login" href="/account/login">Log
                              In</a>&nbsp;/&nbsp;<a className="app-auth-link app-auth-link__login"
                                                    href="/account/register">Sign Up</a>

                          </div>
                        </div>
                        <div className="app-col app-points-col">
                          <div className="app-points-wrapper-des" id="app-points-wrapper-des">
                            <a href="/pages/rewards-boutique" className="app-points">
                              <svg width="127"
                                   height="40" viewBox="0 0 127 40" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
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
                                  <linearGradient id="app-points-gold-des" x1="5" y1="5.5"
                                                  x2="48" y2="28" gradientUnits="userSpaceOnUse">
                                    <animate attributeName="x1" values="5;4;5" dur="7s"
                                             repeatCount="indefinite"></animate>
                                    <animate attributeName="y1" values="5.5;4.5;5.5"
                                             dur="7s" repeatCount="indefinite"></animate>
                                    <animate attributeName="x2" values="48;108.5;48"
                                             dur="7s" repeatCount="indefinite"></animate>
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
              <div className="app-h-slider" id="app-h-banner-slider">
                <div className="app-h-slider__slide app-h-slide">
                  <div className="app-h-slide__content">
                    <strong className="app-h-slide__pre-title">MINISUBLINER</strong>
                    <h3 className="app-h-slide__title">SAVOR <span>the <br />quiet</span> MOMENTS</h3>
                    <div className="app-h-slide__text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque.</p>
                    </div>
                    <a className="app-h-slide__link app-h-link" href="#">Shop Now</a>
                  </div>
                </div>
                <div className="app-h-slider__slide app-h-slide">
                  <div className="app-h-slide__content">
                    <strong className="app-h-slide__pre-title">MINISUBLINER</strong>
                    <h3 className="app-h-slide__title">SAVOR <span>the <br />quiet</span> MOMENTS</h3>
                    <div className="app-h-slide__text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque.</p>
                    </div>
                    <a className="app-h-slide__link app-h-link" href="#">Shop Now</a>
                  </div>
                </div>
                <div className="app-h-slider__slide app-h-slide">
                  <div className="app-h-slide__content">
                    <strong className="app-h-slide__pre-title">MINISUBLINER</strong>
                    <h3 className="app-h-slide__title">SAVOR <span>the <br />quiet</span> MOMENTS</h3>
                    <div className="app-h-slide__text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque.</p>
                    </div>
                    <a className="app-h-slide__link app-h-link" href="#">Shop Now</a>
                  </div>
                </div>
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
                      <div className="app-h-collections-card__wrapper">
                        <div className="app-h-collections-card">
                          <img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/collection-img-1.jpg"
                               alt="" />
                          <div className="app-h-collections-card__bottom app-h-card-content">
                            <h4 className="app-h-card-content__title">Valentine’s Shop</h4>
                            <div className="app-h-card-content__text">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <a href="#" className="app-h-card-content__btn app-h-link app-h-slide__link">Shop
                              Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="app-h-col">
                      <div className="app-h-collections-card__wrapper">
                        <div className="app-h-collections-card">
                          <img src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/collection-img-2.jpg"
                               alt="" />
                          <div className="app-h-collections-card__bottom app-h-card-content">
                            <h4 className="app-h-card-content__title">Mythical Shop</h4>
                            <div className="app-h-card-content__text">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <a href="#" className="app-h-card-content__btn app-h-link app-h-slide__link">Shop
                              Now</a>
                          </div>
                        </div>
                      </div>
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
                  <h2 className="app-h-section__title">Our promise to you</h2>
                  <div className="app-h-prom-items">
                    <div className="app-h-row-3-6">
                      <div className="app-h-col app-h-prom-item">
                        <img className="app-h-prom-item__img"
                             src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/vegan-icon.png" alt="" />
                        <div className="app-h-prom-item__text">100% VEGAN</div>
                      </div>
                      <div className="app-h-col app-h-prom-item">
                        <img className="app-h-prom-item__img"
                             src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/cruelty-free-icon.png"
                             alt="" />
                        <div className="app-h-prom-item__text">CRUELTY FREE</div>
                      </div>
                      <div className="app-h-col app-h-prom-item">
                        <img className="app-h-prom-item__img"
                             src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/phthalate-free-icon.png"
                             alt="" />
                        <div className="app-h-prom-item__text">PHTHALATE FREE</div>
                      </div>
                      <div className="app-h-col app-h-prom-item">
                        <img className="app-h-prom-item__img"
                             src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/paraben-free-icon.png"
                             alt="" />
                        <div className="app-h-prom-item__text">PARABEN FREE</div>
                      </div>
                      <div className="app-h-col app-h-prom-item">
                        <img className="app-h-prom-item__img"
                             src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/hand-crafted-icon.png"
                             alt="" />
                        <div className="app-h-prom-item__text">HANDMADE</div>
                      </div>
                      <div className="app-h-col app-h-prom-item">
                        <img className="app-h-prom-item__img"
                             src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/made-in-la-icon.png"
                             alt="" />
                        <div className="app-h-prom-item__text">MADE IN LA</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="app-h-section app-h-form-section">
                <div className="app-h-container">
                  <img className="app-h-section__img_email"
                       src="https://fragrantjewels.s3.amazonaws.com/app/app-home/img/surprise-box.png"
                       style={{ maxWidth: '88px' }} alt="" />
                  <h2 className="app-h-section__title app-h-section__title_email">Thanks for signing up!</h2>
                  <div className="app-h-section__text">
                    <p>Even our emails are fun. Sign up to receive special offers, games, prizes and more.
                    </p>
                  </div>
                  <div className="app-h-form-wrapper">
                    <form className="app-h-form">
                      <input type="email" autoCorrect="off" autoCapitalize="off" placeholder="Enter your email"
                             required />
                      <button type="submit">Submit</button>
                    </form>
                  </div>
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
        <footer className="app-f-footer app-f-footer_colored">
          <div className="app-f-container">
            <div className="app-f-footer__outer">
              <div className="app-f-footer__inner">
                <ul className="app-f-social-list-mb app-f-social-list">
                  <li>
                    <a href="#">
                      <svg width="9" height="20" viewBox="0 0 9 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M2.01215 19.2705H5.83959V9.68919H8.51107L8.79364 6.47828H5.83959V4.65447C5.83959 3.90098 5.99371 3.60131 6.69583 3.60131H8.76793V0.270508H6.12211C3.27082 0.270508 1.98649 1.52064 1.98649 3.92669V6.49542H0V9.74908H1.98649L2.01215 19.2705Z"
                          fill="white"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.79811 2.38893C12.2035 2.38893 12.4807 2.38898 13.4375 2.44263C14.0085 2.45203 14.5738 2.55782 15.1096 2.75558C15.4987 2.89835 15.8503 3.12767 16.1379 3.42622C16.4393 3.71661 16.6716 4.07115 16.8175 4.46351C17.0118 4.9999 17.1146 5.56515 17.1215 6.13563C17.1215 7.08347 17.1752 7.36955 17.1752 9.76598C17.1752 12.1624 17.1752 12.4486 17.1215 13.4054C17.1146 13.9759 17.0118 14.5411 16.8175 15.0775C16.6716 15.4699 16.4393 15.8243 16.1379 16.1147C15.8503 16.4132 15.4987 16.6426 15.1096 16.7853C14.5738 16.9831 14.0085 17.0889 13.4375 17.0983C12.4896 17.0983 12.2035 17.152 9.79811 17.152C7.39275 17.152 7.11555 17.1519 6.15877 17.0983C5.58774 17.0889 5.02241 16.9831 4.48664 16.7853C4.09749 16.6426 3.74585 16.4132 3.4583 16.1147C3.15683 15.8243 2.92456 15.4699 2.77871 15.0775C2.58434 14.5411 2.48159 13.9759 2.47472 13.4054C2.43001 12.4575 2.42107 12.1713 2.42107 9.76598C2.42107 7.36061 2.42107 7.08347 2.47472 6.13563C2.48159 5.56515 2.58434 4.9999 2.77871 4.46351C2.92456 4.07115 3.15683 3.71661 3.4583 3.42622C3.74585 3.12767 4.09749 2.89835 4.48664 2.75558C5.02241 2.55782 5.58774 2.45203 6.15877 2.44263C7.1066 2.44263 7.39275 2.38893 9.79811 2.38893ZM9.79811 0.770508C7.35698 0.770508 7.044 0.770451 6.08721 0.824102C5.34138 0.839522 4.60359 0.981611 3.9054 1.24434C3.30082 1.46568 2.7538 1.82021 2.30482 2.28163C1.84904 2.73175 1.49527 3.27458 1.26753 3.87331C1.00405 4.57098 0.864869 5.30936 0.85624 6.05508C0.85624 7.0208 0.79364 7.32485 0.79364 9.76598C0.79364 12.2071 0.793647 12.5201 0.85624 13.4769C0.864194 14.2256 1.00338 14.967 1.26753 15.6676C1.49896 16.2659 1.85335 16.809 2.30771 17.2618C2.76208 17.7146 3.30633 18.0672 3.9054 18.2966C4.60359 18.5593 5.34138 18.7014 6.08721 18.7168C7.044 18.7168 7.35698 18.7705 9.79811 18.7705C12.2392 18.7705 12.5522 18.7705 13.509 18.7168C14.2548 18.7014 14.9926 18.5593 15.6908 18.2966C16.2898 18.0672 16.8342 17.7146 17.2885 17.2618C17.7429 16.809 18.0972 16.2659 18.3286 15.6676C18.592 14.9665 18.7342 14.2257 18.7489 13.4769C18.7489 12.5201 18.8026 12.2161 18.8026 9.76598C18.8026 7.3159 18.8026 7.0208 18.7489 6.05508C18.7335 5.30924 18.5914 4.57151 18.3286 3.87331C18.1009 3.27458 17.7472 2.73175 17.2914 2.28163C16.8424 1.82021 16.2954 1.46568 15.6908 1.24434C14.9926 0.981611 14.2548 0.839522 13.509 0.824102C12.5522 0.824102 12.2392 0.770508 9.79811 0.770508Z"
                          fill="white"></path>
                        <path
                          d="M9.79825 5.15194C8.88354 5.15194 7.98937 5.42336 7.22894 5.93173C6.4685 6.44011 5.87599 7.16258 5.52636 8.00784C5.17672 8.85309 5.08567 9.78313 5.26477 10.6801C5.44387 11.5771 5.88506 12.4009 6.53248 13.047C7.17991 13.6932 8.00447 14.1328 8.90183 14.3102C9.79918 14.4875 10.729 14.3947 11.5736 14.0434C12.4182 13.6921 13.1395 13.0982 13.6464 12.3368C14.1533 11.5754 14.423 10.6807 14.4212 9.76598C14.4188 8.54145 13.9307 7.36786 13.064 6.50283C12.1973 5.63779 11.0228 5.15194 9.79825 5.15194ZM9.79825 12.7704C9.20402 12.7704 8.62316 12.5942 8.12907 12.2641C7.63499 11.9339 7.24987 11.4647 7.02247 10.9157C6.79507 10.3667 6.73555 9.76263 6.85148 9.17982C6.96741 8.59701 7.25356 8.0617 7.67374 7.64152C8.09392 7.22134 8.62929 6.93519 9.2121 6.81926C9.79491 6.70334 10.399 6.7628 10.948 6.9902C11.497 7.2176 11.9662 7.60272 12.2963 8.0968C12.6265 8.59088 12.8027 9.17175 12.8027 9.76598C12.8027 10.1605 12.725 10.5512 12.574 10.9157C12.423 11.2802 12.2017 11.6114 11.9227 11.8904C11.6437 12.1694 11.3125 12.3908 10.948 12.5418C10.5835 12.6927 10.1928 12.7704 9.79825 12.7704Z"
                          fill="white"></path>
                        <path
                          d="M15.6819 4.9642C15.6819 5.17819 15.6184 5.38738 15.4995 5.5653C15.3807 5.74323 15.2116 5.88193 15.0139 5.96383C14.8162 6.04572 14.5987 6.06714 14.3888 6.02539C14.1789 5.98364 13.9862 5.88057 13.8348 5.72925C13.6835 5.57794 13.5805 5.38518 13.5387 5.1753C13.497 4.96542 13.5184 4.74788 13.6003 4.55017C13.6822 4.35247 13.8209 4.18344 13.9988 4.06455C14.1767 3.94566 14.3859 3.88226 14.5999 3.88226C14.8869 3.88226 15.162 3.99623 15.365 4.19914C15.5679 4.40204 15.6819 4.67724 15.6819 4.9642Z"
                          fill="white"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.802612 13.5745C2.46503 14.6374 4.38752 15.2232 6.3602 15.2678C8.33287 15.3123 10.2799 14.8141 11.9886 13.8274C13.6974 12.8407 15.1022 11.4034 16.0497 9.67253C16.9971 7.94171 17.4508 5.98388 17.3612 4.01273C18.1001 3.47837 18.7385 2.81759 19.2472 2.06083C18.5576 2.36503 17.8267 2.56524 17.0784 2.65491C17.8684 2.18294 18.4587 1.43832 18.738 0.561416C17.9972 1.01284 17.1835 1.33192 16.3334 1.50439C15.7681 0.882971 15.0116 0.468018 14.1838 0.325327C13.356 0.182636 12.5043 0.320377 11.7636 0.716698C11.0229 1.11302 10.4357 1.74531 10.0951 2.51321C9.75456 3.2811 9.68006 4.14067 9.88346 4.95571C8.37885 4.88247 6.90659 4.49268 5.56283 3.81187C4.21908 3.13105 3.03403 2.17457 2.08504 1.0047C1.59639 1.83685 1.44526 2.82461 1.66277 3.76479C1.88027 4.70497 2.44986 5.52603 3.25432 6.05903C2.65604 6.03952 2.071 5.87791 1.54754 5.58754C1.53016 6.47129 1.82373 7.33306 2.37696 8.02244C2.93019 8.71183 3.70796 9.18503 4.57451 9.35944C4.01854 9.51438 3.43401 9.53694 2.86773 9.42539C3.10689 10.1793 3.577 10.839 4.21157 11.3111C4.84614 11.7832 5.61305 12.0439 6.40388 12.0563C4.81017 13.2815 2.79687 13.8272 0.802612 13.5745Z"
                          fill="white"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M21.085 2.6172C20.9646 2.16373 20.7274 1.74981 20.3969 1.4168C20.0665 1.08378 19.6544 0.843352 19.2018 0.719564C17.5432 0.270504 10.887 0.270508 10.887 0.270508C10.887 0.270508 4.23076 0.270504 2.57214 0.719564C2.11961 0.843352 1.70751 1.08378 1.37704 1.4168C1.04657 1.74981 0.80932 2.16373 0.689003 2.6172C0.0999222 6.02749 0.0999222 9.51353 0.689003 12.9238C0.810647 13.3766 1.04837 13.7899 1.37863 14.1227C1.7089 14.4555 2.12027 14.6963 2.57214 14.8215C4.23076 15.2705 10.887 15.2705 10.887 15.2705C10.887 15.2705 17.5432 15.2705 19.2018 14.8215C19.6537 14.6963 20.0651 14.4555 20.3954 14.1227C20.7256 13.7899 20.9633 13.3766 21.085 12.9238C21.674 9.51353 21.674 6.02749 21.085 2.6172ZM8.71414 10.932V4.60899L14.2767 7.76688L8.71414 10.932Z"
                          fill="white"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M2.90195 12.3163C2.95737 12.3464 3.01917 12.3628 3.08224 12.3641C3.1453 12.3654 3.20777 12.3515 3.26437 12.3237C3.32097 12.2958 3.37009 12.2549 3.40755 12.2041C3.44501 12.1534 3.46976 12.0943 3.4797 12.032C3.52555 11.8303 3.65394 11.3167 3.70897 11.115C3.75202 11.0042 3.75923 10.8827 3.72962 10.7675C3.70001 10.6524 3.63502 10.5493 3.54385 10.473C3.0213 9.84378 2.75019 9.04347 2.78272 8.22622C2.7734 7.48778 2.91458 6.75515 3.19765 6.07305C3.48072 5.39096 3.89973 4.77371 4.42917 4.25886C4.95861 3.744 5.58738 3.3424 6.27712 3.0785C6.96685 2.81459 7.70309 2.69391 8.44098 2.72385C11.5223 2.72385 13.2189 4.55802 13.2189 7.12579C13.2189 10.4364 11.7516 13.2333 9.55064 13.2333C9.27135 13.2505 8.99197 13.2015 8.73517 13.0904C8.47838 12.9793 8.25137 12.8091 8.07268 12.5938C7.89398 12.3785 7.76862 12.124 7.70672 11.8511C7.64483 11.5783 7.64821 11.2947 7.71652 11.0233C8.065 9.56518 8.73444 7.99693 8.73444 6.94231C8.7606 6.72436 8.73987 6.50332 8.67366 6.29403C8.60745 6.08475 8.49728 5.89207 8.35053 5.72882C8.20378 5.56557 8.02383 5.43558 7.82276 5.34753C7.62168 5.25948 7.4041 5.21536 7.18461 5.21823C5.95575 5.21823 4.96534 6.49294 4.96534 8.1895C4.95566 8.82002 5.08069 9.44533 5.33213 10.0236L3.85567 16.278C3.60283 17.7221 3.60283 19.1992 3.85567 20.6433C3.8596 20.6726 3.8723 20.7 3.89211 20.722C3.91192 20.7439 3.93791 20.7595 3.96667 20.7664C3.99542 20.7733 4.0256 20.7714 4.05326 20.7609C4.08091 20.7504 4.10472 20.7317 4.1216 20.7074C5.03179 19.5882 5.73377 18.3147 6.19417 16.9475C6.3409 16.4339 7.01036 13.7928 7.01036 13.7928C7.31925 14.2467 7.73728 14.6155 8.22604 14.8655C8.71481 15.1155 9.25861 15.2386 9.80739 15.2234C13.4756 15.2234 16.0067 11.8578 16.0067 7.35506C16.0067 3.94359 13.1272 0.770508 8.73444 0.770508C3.27793 0.770508 0.526733 4.68632 0.526733 7.95106C0.545075 9.9044 1.29709 11.6652 2.90195 12.3163Z"
                          fill="white"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.69599 6.76393H0.992689V18.7216H4.69599V6.76393Z" fill="white"></path>
                        <path
                          d="M2.85403 5.19485C3.29238 5.19872 3.72198 5.07226 4.08834 4.83154C4.4547 4.59081 4.74126 4.2467 4.91169 3.84283C5.08212 3.43895 5.12873 2.99354 5.04559 2.56313C4.96244 2.13272 4.75329 1.73669 4.4447 1.42535C4.1361 1.11401 3.74199 0.901422 3.31234 0.814471C2.88268 0.727519 2.43688 0.770153 2.03151 0.937004C1.62614 1.10386 1.27944 1.38734 1.03548 1.75155C0.791522 2.11576 0.661294 2.54435 0.661277 2.98271C0.659994 3.27195 0.715707 3.55858 0.825209 3.82629C0.934712 4.094 1.09584 4.3375 1.29946 4.54293C1.50308 4.74836 1.74515 4.91168 2.01188 5.02355C2.27861 5.13541 2.56479 5.19358 2.85403 5.19485Z"
                          fill="white"></path>
                        <path
                          d="M10.6506 12.4457C10.6506 10.7597 11.4302 9.75587 12.9115 9.75587C14.3929 9.75587 14.9289 10.7304 14.9289 12.4457V18.7705H18.6127V11.1982C18.6127 7.99191 16.7903 6.44236 14.2564 6.44236C13.5386 6.43032 12.8298 6.60337 12.1982 6.94475C11.5667 7.28613 11.0337 7.78433 10.6506 8.39147V6.78343H7.10317V18.7705H10.6506V12.4457Z"
                          fill="white"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
                <div className="app-f-accordion" id="app-f-accordion">


                  <div className="app-f-accordion__item">
                    <div className="app-f-accordion__title">
                                    <span className="app-f-accordion__icon-wrapper">
                                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0.950195L9 8.9502L17 0.950195" stroke="white" strokeWidth="0.5"
                                                  strokeMiterlimit="10" strokeLinecap="round"
                                                  strokeLinejoin="round" />
                                            </svg>
                      </span> Shop
                    </div>
                    <div className="app-f-accordion__description">
                      <ul className="app-f-accordion__list">

                        <li>
                          <a href="/collections/bath-bombs">Bath Bombs</a>
                        </li>

                        <li>
                          <a href="/collections/jewel-candles">Candles</a>
                        </li>

                        <li>
                          <a href="/collections/the-jewelry-store">Jewelry</a>
                        </li>

                        <li>
                          <a href="/collections/gift-sets">Gift Sets</a>
                        </li>

                        <li>
                          <a href="/collections/all-products">All</a>
                        </li>

                        <li>
                          <a href="/pages/inner-circle">Subscription</a>
                        </li>

                      </ul>
                    </div>
                  </div>


                  <div className="app-f-accordion__item">
                    <div className="app-f-accordion__title">
                                    <span className="app-f-accordion__icon-wrapper">
                                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0.950195L9 8.9502L17 0.950195" stroke="white" strokeWidth="0.5"
                                                  strokeMiterlimit="10" strokeLinecap="round"
                                                  strokeLinejoin="round" />
                                            </svg>
                      </span> Customer Support
                    </div>
                    <div className="app-f-accordion__description">
                      <ul className="app-f-accordion__list">

                        <li>
                          <a href="https://helpcenter.fragrantjewels.com/hc/en-us">Help Center</a>
                        </li>

                        <li>
                          <a href="/pages/order-status-check">Order Status</a>
                        </li>

                      </ul>
                    </div>
                  </div>


                  <div className="app-f-accordion__item">
                    <div className="app-f-accordion__title">
                                    <span className="app-f-accordion__icon-wrapper">
                                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0.950195L9 8.9502L17 0.950195" stroke="white" strokeWidth="0.5"
                                                  strokeMiterlimit="10" strokeLinecap="round"
                                                  strokeLinejoin="round" />
                                            </svg>
                      </span> FAQ
                    </div>
                    <div className="app-f-accordion__description">
                      <ul className="app-f-accordion__list">

                        <li>
                          <a href="/pages/terms-and-conditions">Terms and Conditions</a>
                        </li>

                      </ul>
                    </div>
                  </div>


                  <div className="app-f-accordion__items-col">
                    <div className="app-f-accordion__item app-f-footer-item app-f-footer-item-dt">
                      <div className="app-f-accordion__title">
                                        <span className="app-f-accordion__icon-wrapper">
                                            <svg width="18" height="10" viewBox="0 0 18 10" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 0.950195L9 8.9502L17 0.950195" stroke="white"
                                                      strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round"
                                                      strokeLinejoin="round" />
                                                </svg>
                  </span> Social
                      </div>
                      <div className="app-f-accordion__description">
                        <ul className="app-f-payments-list">
                          <li>
                            <a href="#">
                              <svg width="9" height="20" viewBox="0 0 9 20" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M2.01215 19.2705H5.83959V9.68919H8.51107L8.79364 6.47828H5.83959V4.65447C5.83959 3.90098 5.99371 3.60131 6.69583 3.60131H8.76793V0.270508H6.12211C3.27082 0.270508 1.98649 1.52064 1.98649 3.92669V6.49542H0V9.74908H1.98649L2.01215 19.2705Z"
                                  fill="white"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M9.79811 2.38893C12.2035 2.38893 12.4807 2.38898 13.4375 2.44263C14.0085 2.45203 14.5738 2.55782 15.1096 2.75558C15.4987 2.89835 15.8503 3.12767 16.1379 3.42622C16.4393 3.71661 16.6716 4.07115 16.8175 4.46351C17.0118 4.9999 17.1146 5.56515 17.1215 6.13563C17.1215 7.08347 17.1752 7.36955 17.1752 9.76598C17.1752 12.1624 17.1752 12.4486 17.1215 13.4054C17.1146 13.9759 17.0118 14.5411 16.8175 15.0775C16.6716 15.4699 16.4393 15.8243 16.1379 16.1147C15.8503 16.4132 15.4987 16.6426 15.1096 16.7853C14.5738 16.9831 14.0085 17.0889 13.4375 17.0983C12.4896 17.0983 12.2035 17.152 9.79811 17.152C7.39275 17.152 7.11555 17.1519 6.15877 17.0983C5.58774 17.0889 5.02241 16.9831 4.48664 16.7853C4.09749 16.6426 3.74585 16.4132 3.4583 16.1147C3.15683 15.8243 2.92456 15.4699 2.77871 15.0775C2.58434 14.5411 2.48159 13.9759 2.47472 13.4054C2.43001 12.4575 2.42107 12.1713 2.42107 9.76598C2.42107 7.36061 2.42107 7.08347 2.47472 6.13563C2.48159 5.56515 2.58434 4.9999 2.77871 4.46351C2.92456 4.07115 3.15683 3.71661 3.4583 3.42622C3.74585 3.12767 4.09749 2.89835 4.48664 2.75558C5.02241 2.55782 5.58774 2.45203 6.15877 2.44263C7.1066 2.44263 7.39275 2.38893 9.79811 2.38893ZM9.79811 0.770508C7.35698 0.770508 7.044 0.770451 6.08721 0.824102C5.34138 0.839522 4.60359 0.981611 3.9054 1.24434C3.30082 1.46568 2.7538 1.82021 2.30482 2.28163C1.84904 2.73175 1.49527 3.27458 1.26753 3.87331C1.00405 4.57098 0.864869 5.30936 0.85624 6.05508C0.85624 7.0208 0.79364 7.32485 0.79364 9.76598C0.79364 12.2071 0.793647 12.5201 0.85624 13.4769C0.864194 14.2256 1.00338 14.967 1.26753 15.6676C1.49896 16.2659 1.85335 16.809 2.30771 17.2618C2.76208 17.7146 3.30633 18.0672 3.9054 18.2966C4.60359 18.5593 5.34138 18.7014 6.08721 18.7168C7.044 18.7168 7.35698 18.7705 9.79811 18.7705C12.2392 18.7705 12.5522 18.7705 13.509 18.7168C14.2548 18.7014 14.9926 18.5593 15.6908 18.2966C16.2898 18.0672 16.8342 17.7146 17.2885 17.2618C17.7429 16.809 18.0972 16.2659 18.3286 15.6676C18.592 14.9665 18.7342 14.2257 18.7489 13.4769C18.7489 12.5201 18.8026 12.2161 18.8026 9.76598C18.8026 7.3159 18.8026 7.0208 18.7489 6.05508C18.7335 5.30924 18.5914 4.57151 18.3286 3.87331C18.1009 3.27458 17.7472 2.73175 17.2914 2.28163C16.8424 1.82021 16.2954 1.46568 15.6908 1.24434C14.9926 0.981611 14.2548 0.839522 13.509 0.824102C12.5522 0.824102 12.2392 0.770508 9.79811 0.770508Z"
                                  fill="white"></path>
                                <path
                                  d="M9.79825 5.15194C8.88354 5.15194 7.98937 5.42336 7.22894 5.93173C6.4685 6.44011 5.87599 7.16258 5.52636 8.00784C5.17672 8.85309 5.08567 9.78313 5.26477 10.6801C5.44387 11.5771 5.88506 12.4009 6.53248 13.047C7.17991 13.6932 8.00447 14.1328 8.90183 14.3102C9.79918 14.4875 10.729 14.3947 11.5736 14.0434C12.4182 13.6921 13.1395 13.0982 13.6464 12.3368C14.1533 11.5754 14.423 10.6807 14.4212 9.76598C14.4188 8.54145 13.9307 7.36786 13.064 6.50283C12.1973 5.63779 11.0228 5.15194 9.79825 5.15194ZM9.79825 12.7704C9.20402 12.7704 8.62316 12.5942 8.12907 12.2641C7.63499 11.9339 7.24987 11.4647 7.02247 10.9157C6.79507 10.3667 6.73555 9.76263 6.85148 9.17982C6.96741 8.59701 7.25356 8.0617 7.67374 7.64152C8.09392 7.22134 8.62929 6.93519 9.2121 6.81926C9.79491 6.70334 10.399 6.7628 10.948 6.9902C11.497 7.2176 11.9662 7.60272 12.2963 8.0968C12.6265 8.59088 12.8027 9.17175 12.8027 9.76598C12.8027 10.1605 12.725 10.5512 12.574 10.9157C12.423 11.2802 12.2017 11.6114 11.9227 11.8904C11.6437 12.1694 11.3125 12.3908 10.948 12.5418C10.5835 12.6927 10.1928 12.7704 9.79825 12.7704Z"
                                  fill="white"></path>
                                <path
                                  d="M15.6819 4.9642C15.6819 5.17819 15.6184 5.38738 15.4995 5.5653C15.3807 5.74323 15.2116 5.88193 15.0139 5.96383C14.8162 6.04572 14.5987 6.06714 14.3888 6.02539C14.1789 5.98364 13.9862 5.88057 13.8348 5.72925C13.6835 5.57794 13.5805 5.38518 13.5387 5.1753C13.497 4.96542 13.5184 4.74788 13.6003 4.55017C13.6822 4.35247 13.8209 4.18344 13.9988 4.06455C14.1767 3.94566 14.3859 3.88226 14.5999 3.88226C14.8869 3.88226 15.162 3.99623 15.365 4.19914C15.5679 4.40204 15.6819 4.67724 15.6819 4.9642Z"
                                  fill="white"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M0.802612 13.5745C2.46503 14.6374 4.38752 15.2232 6.3602 15.2678C8.33287 15.3123 10.2799 14.8141 11.9886 13.8274C13.6974 12.8407 15.1022 11.4034 16.0497 9.67253C16.9971 7.94171 17.4508 5.98388 17.3612 4.01273C18.1001 3.47837 18.7385 2.81759 19.2472 2.06083C18.5576 2.36503 17.8267 2.56524 17.0784 2.65491C17.8684 2.18294 18.4587 1.43832 18.738 0.561416C17.9972 1.01284 17.1835 1.33192 16.3334 1.50439C15.7681 0.882971 15.0116 0.468018 14.1838 0.325327C13.356 0.182636 12.5043 0.320377 11.7636 0.716698C11.0229 1.11302 10.4357 1.74531 10.0951 2.51321C9.75456 3.2811 9.68006 4.14067 9.88346 4.95571C8.37885 4.88247 6.90659 4.49268 5.56283 3.81187C4.21908 3.13105 3.03403 2.17457 2.08504 1.0047C1.59639 1.83685 1.44526 2.82461 1.66277 3.76479C1.88027 4.70497 2.44986 5.52603 3.25432 6.05903C2.65604 6.03952 2.071 5.87791 1.54754 5.58754C1.53016 6.47129 1.82373 7.33306 2.37696 8.02244C2.93019 8.71183 3.70796 9.18503 4.57451 9.35944C4.01854 9.51438 3.43401 9.53694 2.86773 9.42539C3.10689 10.1793 3.577 10.839 4.21157 11.3111C4.84614 11.7832 5.61305 12.0439 6.40388 12.0563C4.81017 13.2815 2.79687 13.8272 0.802612 13.5745Z"
                                  fill="white"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg width="22" height="16" viewBox="0 0 22 16" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M21.085 2.6172C20.9646 2.16373 20.7274 1.74981 20.3969 1.4168C20.0665 1.08378 19.6544 0.843352 19.2018 0.719564C17.5432 0.270504 10.887 0.270508 10.887 0.270508C10.887 0.270508 4.23076 0.270504 2.57214 0.719564C2.11961 0.843352 1.70751 1.08378 1.37704 1.4168C1.04657 1.74981 0.80932 2.16373 0.689003 2.6172C0.0999222 6.02749 0.0999222 9.51353 0.689003 12.9238C0.810647 13.3766 1.04837 13.7899 1.37863 14.1227C1.7089 14.4555 2.12027 14.6963 2.57214 14.8215C4.23076 15.2705 10.887 15.2705 10.887 15.2705C10.887 15.2705 17.5432 15.2705 19.2018 14.8215C19.6537 14.6963 20.0651 14.4555 20.3954 14.1227C20.7256 13.7899 20.9633 13.3766 21.085 12.9238C21.674 9.51353 21.674 6.02749 21.085 2.6172ZM8.71414 10.932V4.60899L14.2767 7.76688L8.71414 10.932Z"
                                  fill="white"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg width="17" height="21" viewBox="0 0 17 21" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M2.90195 12.3163C2.95737 12.3464 3.01917 12.3628 3.08224 12.3641C3.1453 12.3654 3.20777 12.3515 3.26437 12.3237C3.32097 12.2958 3.37009 12.2549 3.40755 12.2041C3.44501 12.1534 3.46976 12.0943 3.4797 12.032C3.52555 11.8303 3.65394 11.3167 3.70897 11.115C3.75202 11.0042 3.75923 10.8827 3.72962 10.7675C3.70001 10.6524 3.63502 10.5493 3.54385 10.473C3.0213 9.84378 2.75019 9.04347 2.78272 8.22622C2.7734 7.48778 2.91458 6.75515 3.19765 6.07305C3.48072 5.39096 3.89973 4.77371 4.42917 4.25886C4.95861 3.744 5.58738 3.3424 6.27712 3.0785C6.96685 2.81459 7.70309 2.69391 8.44098 2.72385C11.5223 2.72385 13.2189 4.55802 13.2189 7.12579C13.2189 10.4364 11.7516 13.2333 9.55064 13.2333C9.27135 13.2505 8.99197 13.2015 8.73517 13.0904C8.47838 12.9793 8.25137 12.8091 8.07268 12.5938C7.89398 12.3785 7.76862 12.124 7.70672 11.8511C7.64483 11.5783 7.64821 11.2947 7.71652 11.0233C8.065 9.56518 8.73444 7.99693 8.73444 6.94231C8.7606 6.72436 8.73987 6.50332 8.67366 6.29403C8.60745 6.08475 8.49728 5.89207 8.35053 5.72882C8.20378 5.56557 8.02383 5.43558 7.82276 5.34753C7.62168 5.25948 7.4041 5.21536 7.18461 5.21823C5.95575 5.21823 4.96534 6.49294 4.96534 8.1895C4.95566 8.82002 5.08069 9.44533 5.33213 10.0236L3.85567 16.278C3.60283 17.7221 3.60283 19.1992 3.85567 20.6433C3.8596 20.6726 3.8723 20.7 3.89211 20.722C3.91192 20.7439 3.93791 20.7595 3.96667 20.7664C3.99542 20.7733 4.0256 20.7714 4.05326 20.7609C4.08091 20.7504 4.10472 20.7317 4.1216 20.7074C5.03179 19.5882 5.73377 18.3147 6.19417 16.9475C6.3409 16.4339 7.01036 13.7928 7.01036 13.7928C7.31925 14.2467 7.73728 14.6155 8.22604 14.8655C8.71481 15.1155 9.25861 15.2386 9.80739 15.2234C13.4756 15.2234 16.0067 11.8578 16.0067 7.35506C16.0067 3.94359 13.1272 0.770508 8.73444 0.770508C3.27793 0.770508 0.526733 4.68632 0.526733 7.95106C0.545075 9.9044 1.29709 11.6652 2.90195 12.3163Z"
                                  fill="white"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.69599 6.76393H0.992689V18.7216H4.69599V6.76393Z" fill="white"></path>
                                <path
                                  d="M2.85403 5.19485C3.29238 5.19872 3.72198 5.07226 4.08834 4.83154C4.4547 4.59081 4.74126 4.2467 4.91169 3.84283C5.08212 3.43895 5.12873 2.99354 5.04559 2.56313C4.96244 2.13272 4.75329 1.73669 4.4447 1.42535C4.1361 1.11401 3.74199 0.901422 3.31234 0.814471C2.88268 0.727519 2.43688 0.770153 2.03151 0.937004C1.62614 1.10386 1.27944 1.38734 1.03548 1.75155C0.791522 2.11576 0.661294 2.54435 0.661277 2.98271C0.659994 3.27195 0.715707 3.55858 0.825209 3.82629C0.934712 4.094 1.09584 4.3375 1.29946 4.54293C1.50308 4.74836 1.74515 4.91168 2.01188 5.02355C2.27861 5.13541 2.56479 5.19358 2.85403 5.19485Z"
                                  fill="white"></path>
                                <path
                                  d="M10.6506 12.4457C10.6506 10.7597 11.4302 9.75587 12.9115 9.75587C14.3929 9.75587 14.9289 10.7304 14.9289 12.4457V18.7705H18.6127V11.1982C18.6127 7.99191 16.7903 6.44236 14.2564 6.44236C13.5386 6.43032 12.8298 6.60337 12.1982 6.94475C11.5667 7.28613 11.0337 7.78433 10.6506 8.39147V6.78343H7.10317V18.7705H10.6506V12.4457Z"
                                  fill="white"></path>
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="app-f-accordion__item app-f-footer-item app-f-footer-item-dt">
                      <div className="app-f-accordion__title">
                                        <span className="app-f-accordion__icon-wrapper">
                                            <svg width="18" height="10" viewBox="0 0 18 10" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 0.950195L9 8.9502L17 0.950195" stroke="white"
                                                      strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round"
                                                      strokeLinejoin="round" />
                                                </svg>
                  </span> Accepted Payments
                      </div>
                      <div className="app-f-accordion__description">
                        <ul className="app-f-payments-list">
                          <li>
                            <svg width="26" height="27" viewBox="0 0 26 27" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M9.46002 17.8402L9.83997 18.3502C9.86014 18.3758 9.88602 18.3964 9.91553 18.4103C9.94503 18.4242 9.97741 18.431 10.01 18.4302H12.3C12.39 18.4302 12.43 18.4302 12.42 18.3002C12.41 18.1702 12.42 17.8502 12.42 17.6202C12.42 17.3902 12.42 17.5102 12.54 17.5102C12.66 17.5102 13.02 17.5102 13.26 17.5102C13.3998 17.4914 13.5372 17.4579 13.67 17.4102C13.67 17.7002 13.67 17.9802 13.67 18.2602C13.67 18.5402 13.67 18.4502 13.86 18.4502H15.22C15.32 18.4502 15.36 18.4502 15.35 18.3202V17.8502L15.74 18.3402C15.7684 18.3762 15.805 18.4049 15.8467 18.4241C15.8885 18.4432 15.9341 18.4522 15.98 18.4502H23.98C24.3635 18.4717 24.7443 18.3739 25.07 18.1702V18.2702C25.07 20.8202 25.07 23.3602 25.07 25.9102C25.07 26.0102 25.07 26.0302 24.93 26.0302H0.130005C0.0300049 26.0302 0 26.0302 0 25.9002V13.4002C0 13.3102 4.88758e-06 13.2702 0.130005 13.2702H1.04999C1.0815 13.2735 1.11314 13.2651 1.13892 13.2467C1.1647 13.2283 1.18286 13.2011 1.19 13.1702C1.25 13.0202 1.30999 12.8802 1.35999 12.7402C1.40999 12.6002 1.41999 12.6602 1.48999 12.6602H1.92999C1.94446 12.6573 1.95937 12.6574 1.97382 12.6604C1.98826 12.6634 2.00197 12.6693 2.0141 12.6777C2.02623 12.6861 2.03654 12.6968 2.04443 12.7093C2.05232 12.7218 2.0576 12.7356 2.06 12.7502C2.12 12.9002 2.17998 13.0402 2.22998 13.1802C2.27998 13.3202 2.28999 13.2702 2.35999 13.2602H11.55C11.74 13.2602 11.74 13.2602 11.74 13.0802V12.6602C11.8467 12.7814 11.9469 12.9083 12.04 13.0402C12.0911 13.119 12.1629 13.1822 12.2476 13.2228C12.3323 13.2634 12.4266 13.2798 12.52 13.2702H14.52C14.79 13.2702 14.79 13.2702 14.79 13.0102V12.8702H14.86C15.1495 13.0868 15.4986 13.209 15.86 13.2202H17.47C17.5015 13.2235 17.5331 13.2151 17.5589 13.1967C17.5847 13.1782 17.6028 13.151 17.61 13.1202C17.67 12.9702 17.72 12.8202 17.79 12.6802C17.7996 12.6613 17.8138 12.645 17.8312 12.6328C17.8487 12.6205 17.8689 12.6128 17.89 12.6102H18.4C18.4222 12.6135 18.4435 12.6214 18.4625 12.6335C18.4814 12.6455 18.4976 12.6615 18.51 12.6802L18.69 13.1202C18.6949 13.1502 18.7111 13.1773 18.7352 13.1959C18.7594 13.2144 18.7897 13.2232 18.82 13.2202H21.11C21.21 13.2202 21.24 13.2202 21.23 13.0902V12.5302L21.59 13.1002C21.6083 13.1394 21.6384 13.172 21.676 13.1935C21.7136 13.215 21.7569 13.2243 21.8 13.2202H23.26C23.36 13.2202 23.39 13.2202 23.39 13.0802C23.39 11.8502 23.39 10.6102 23.39 9.37018C23.39 9.28018 23.39 9.25018 23.27 9.25018H21.66V9.8902C21.54 9.7002 21.41 9.5202 21.3 9.3302C21.2841 9.29979 21.2593 9.27491 21.2289 9.25885C21.1986 9.24279 21.1641 9.23631 21.13 9.24023H19.62C19.52 9.24023 19.5 9.24023 19.5 9.36023C19.5 9.69023 19.5 10.0302 19.5 10.3602C19.45 10.2502 19.4 10.1402 19.36 10.0302C19.32 9.92021 19.15 9.55018 19.05 9.31018C19.0409 9.28117 19.0219 9.25631 18.9963 9.23987C18.9707 9.22342 18.9402 9.21647 18.91 9.22021H15.91C15.5496 9.2369 15.2021 9.35853 14.91 9.57019L14.8 9.65021C14.8 9.54021 14.8 9.44021 14.8 9.34021C14.8 9.24021 14.8 9.22021 14.68 9.22021H5.83997C5.81819 9.21593 5.79577 9.21622 5.77411 9.22107C5.75245 9.22592 5.73204 9.23525 5.71417 9.24841C5.6963 9.26158 5.6814 9.2783 5.67035 9.29755C5.6593 9.3168 5.65232 9.33816 5.64996 9.36023L5.39996 10.0802L5.17999 9.47021C5.08999 9.22021 5.09002 9.22021 4.83002 9.22021H3.14996C3.04996 9.22021 3.02997 9.22021 3.02997 9.34021C3.02997 9.68021 3.02997 10.0202 3.02997 10.3402L2.64001 9.43024C2.54001 9.20024 2.53999 9.2002 2.29999 9.2002H1.03998C0.929978 9.2002 0.879966 9.20019 0.839966 9.32019C0.569966 9.97019 0.30002 10.6102 0.0200195 11.2502V11.3302V1.11023C0.0200195 0.950229 0.0199927 0.950195 0.179993 0.950195H24.93C25.09 0.950195 25.09 0.950229 25.09 1.11023V14.3102C25.09 14.4702 25.09 14.4702 24.93 14.4702H10.07C10.0227 14.4653 9.97506 14.474 9.93256 14.4953C9.89005 14.5166 9.85448 14.5495 9.83002 14.5902L9.46997 15.0602C9.35997 14.9102 9.24997 14.7802 9.15997 14.6402C9.12481 14.583 9.07437 14.5367 9.01428 14.5067C8.9542 14.4766 8.8869 14.464 8.82001 14.4702H5C4.86 14.4702 4.85999 14.4702 4.85999 14.6102V18.2802C4.85999 18.4302 4.86 18.4302 5 18.4302H8.92999C8.96773 18.4322 9.00532 18.4239 9.03876 18.4063C9.0722 18.3887 9.10025 18.3624 9.12 18.3302C9.2 18.1702 9.32002 18.0102 9.46002 17.8402Z"
                                fill="white"></path>
                              <path
                                d="M6.50995 10.6006C6.50597 10.6338 6.50597 10.6673 6.50995 10.7005L5.81995 12.6305C5.81995 12.7205 5.7499 12.7605 5.6499 12.7505H5.26996C5.25151 12.7566 5.23191 12.7585 5.21265 12.756C5.19338 12.7535 5.17494 12.7468 5.15863 12.7362C5.14232 12.7257 5.12856 12.7116 5.11841 12.695C5.10825 12.6785 5.10193 12.6599 5.09991 12.6405C4.87991 11.9905 4.63991 11.3505 4.40991 10.7005C4.41389 10.6673 4.41389 10.6338 4.40991 10.6006C4.40497 10.6371 4.40497 10.674 4.40991 10.7105V12.6106C4.40991 12.7506 4.40996 12.7505 4.26996 12.7505H3.80994C3.71994 12.7505 3.68994 12.7505 3.68994 12.6305V9.90055C3.68994 9.84055 3.68996 9.81052 3.76996 9.81052H4.76996C4.79325 9.81498 4.81483 9.82573 4.83246 9.84159C4.85008 9.85745 4.86306 9.87785 4.86993 9.90055L5.45996 11.5705C5.45688 11.6105 5.45688 11.6506 5.45996 11.6905C5.45996 11.6205 5.45996 11.5906 5.45996 11.5506C5.65996 11.0006 5.84992 10.4506 6.03992 9.91056C6.04107 9.89382 6.04574 9.87747 6.05359 9.86265C6.06144 9.84782 6.07232 9.8348 6.08551 9.82444C6.0987 9.81407 6.11392 9.80659 6.13019 9.80247C6.14645 9.79835 6.1634 9.79774 6.17993 9.80057H7.17993C7.25993 9.80057 7.28992 9.80056 7.28992 9.91056C7.28992 10.8206 7.28992 11.7205 7.28992 12.6305C7.28992 12.7205 7.28992 12.7406 7.16992 12.7406H6.67993C6.58993 12.7406 6.55994 12.7405 6.55994 12.6205C6.55994 11.9905 6.55994 11.3505 6.55994 10.7105C6.55994 10.7105 6.55994 10.6306 6.55994 10.5906L6.50995 10.6006Z"
                                fill="white"></path>
                              <path
                                d="M22.17 11.6102V9.93023C22.17 9.84023 22.17 9.81017 22.28 9.81017H22.79C22.87 9.81017 22.8901 9.81021 22.8901 9.91021V12.6602C22.8901 12.7202 22.89 12.7502 22.8 12.7502H22.0801C22.029 12.7333 21.9839 12.7021 21.9501 12.6602L20.9501 11.0402C20.9188 10.9781 20.8745 10.9235 20.8201 10.8802C20.8201 10.8802 20.8201 10.9602 20.8201 11.0002C20.8201 11.5402 20.8201 12.0902 20.8201 12.6402C20.8201 12.7202 20.8201 12.7502 20.7101 12.7502H20.17C20.1 12.7502 20.0801 12.7502 20.0801 12.6502V9.92022C20.0801 9.84022 20.0801 9.81017 20.1801 9.81017H20.9301C20.9611 9.809 20.9918 9.8169 21.0184 9.83288C21.0451 9.84886 21.0665 9.87226 21.0801 9.9002C21.4201 10.4302 21.7701 10.9602 22.0801 11.5002L22.16 11.6102H22.17Z"
                                fill="white"></path>
                              <path
                                d="M16.0599 16.8502L16.9999 17.9202C16.8201 17.9102 16.6398 17.9102 16.46 17.9202C16.3472 17.9413 16.2306 17.9266 16.1266 17.8782C16.0226 17.8298 15.9364 17.7501 15.8799 17.6502C15.7199 17.4202 15.5 17.2202 15.33 16.9902C15.16 16.7602 15.0799 16.8702 14.9199 16.8802V17.8302C14.9199 17.8902 14.9199 17.9202 14.8399 17.9202H14.2799C14.1899 17.9202 14.1799 17.9202 14.1799 17.8002V16.0902C14.1799 15.7602 14.1799 15.4302 14.1799 15.0902C14.1799 15.0002 14.1799 14.9702 14.2899 14.9702H15.9299C16.1493 14.9796 16.3584 15.0653 16.5211 15.2127C16.6837 15.3601 16.7897 15.5598 16.8206 15.7772C16.8515 15.9945 16.8053 16.2158 16.6901 16.4026C16.5749 16.5895 16.398 16.7302 16.1899 16.8002L16.0599 16.8502ZM14.9199 16.2402H15.7599C15.8017 16.2459 15.8443 16.2426 15.8847 16.2307C15.9252 16.2188 15.9626 16.1985 15.9947 16.1711C16.0268 16.1438 16.0527 16.11 16.0709 16.0719C16.089 16.0338 16.0989 15.9923 16.0999 15.9502C16.1012 15.9082 16.0943 15.8663 16.0795 15.827C16.0646 15.7876 16.0421 15.7516 16.0133 15.7209C15.9845 15.6903 15.95 15.6657 15.9117 15.6484C15.8734 15.6311 15.8319 15.6215 15.7899 15.6202H14.9199V16.2402Z"
                                fill="white"></path>
                              <path
                                d="M13.4399 12.7505H12.58C12.58 12.7505 12.5099 12.7506 12.4899 12.6806L11.71 11.7706C11.6658 11.7312 11.6121 11.704 11.5542 11.6918C11.4963 11.6795 11.4363 11.6825 11.3799 11.7006C11.3733 11.7164 11.3699 11.7334 11.3699 11.7505C11.3699 11.7677 11.3733 11.7848 11.3799 11.8006C11.3799 12.0806 11.3799 12.3606 11.3799 12.6406C11.3799 12.7306 11.3799 12.7605 11.2599 12.7505H10.7499C10.6899 12.7505 10.6499 12.7506 10.6499 12.6606V9.91058C10.6499 9.84058 10.6499 9.81055 10.7499 9.81055H12.4199C12.6382 9.81482 12.8471 9.90011 13.006 10.0498C13.165 10.1995 13.2626 10.4029 13.2799 10.6205C13.3137 10.8408 13.2637 11.0659 13.1396 11.251C13.0156 11.4362 12.8265 11.568 12.6099 11.6205H12.52L13.4399 12.7505ZM12.2 11.0706C12.2415 11.0733 12.2831 11.0676 12.3224 11.0538C12.3617 11.0401 12.3978 11.0186 12.4286 10.9906C12.4594 10.9626 12.4842 10.9287 12.5016 10.8909C12.5191 10.8531 12.5287 10.8122 12.5299 10.7706C12.5299 10.7285 12.5216 10.687 12.5056 10.6481C12.4895 10.6093 12.4659 10.574 12.4362 10.5443C12.4065 10.5146 12.3712 10.491 12.3324 10.4749C12.2936 10.4588 12.252 10.4506 12.21 10.4506H11.4299C11.3599 10.4506 11.3399 10.4506 11.3399 10.5406C11.3399 10.6306 11.3399 10.8306 11.3399 10.9806C11.3399 11.1306 11.3399 11.0806 11.4299 11.0706H12.2Z"
                                fill="white"></path>
                              <path
                                d="M7.78003 9.9306C7.78003 9.8406 7.78008 9.81055 7.89008 9.81055H10.0701C10.1501 9.81055 10.18 9.81059 10.17 9.92059V10.4006C10.17 10.4806 10.1701 10.5005 10.0701 10.5005H8.63007C8.53007 10.5005 8.50006 10.5005 8.50006 10.6205C8.51005 10.7103 8.51005 10.8008 8.50006 10.8906C8.50006 10.9706 8.50005 11.0005 8.61005 11.0005H10.0001C10.1001 11.0005 10.1401 11.0005 10.1301 11.1205C10.1201 11.2405 10.1301 11.3706 10.1301 11.4906C10.1301 11.6106 10.13 11.6306 9.98004 11.6306H8.63007C8.53007 11.6306 8.50006 11.6305 8.50006 11.7505C8.51006 11.8436 8.51006 11.9375 8.50006 12.0306C8.50006 12.1206 8.50007 12.1506 8.63007 12.1506H10.05C10.15 12.1506 10.18 12.1506 10.17 12.2806V12.7206C10.17 12.7806 10.17 12.8006 10.09 12.8006H7.87006C7.79006 12.8006 7.78003 12.8006 7.78003 12.7006V9.9306Z"
                                fill="white"></path>
                              <path
                                d="M6.10995 17.2604H7.63998C7.74998 17.2604 7.76998 17.2604 7.76998 17.3904C7.75998 17.5369 7.75998 17.6839 7.76998 17.8304C7.76998 17.9004 7.76996 17.9205 7.67996 17.9205H5.45998C5.36998 17.9205 5.37997 17.8605 5.37997 17.8005V15.0704C5.37997 15.0004 5.37993 14.9805 5.46993 14.9805H7.67996C7.74996 14.9805 7.76998 14.9804 7.76998 15.0804C7.75997 15.2203 7.75997 15.3606 7.76998 15.5004C7.76998 15.5904 7.76993 15.6204 7.64993 15.6204H6.24996C6.10996 15.6204 6.10995 15.6204 6.10995 15.7504V15.9604C6.10995 16.1204 6.10994 16.1304 6.28994 16.1304H7.44998C7.72997 16.1304 7.72994 16.1305 7.72994 16.4105C7.72496 16.487 7.72496 16.5639 7.72994 16.6404C7.72994 16.7204 7.72996 16.7504 7.61996 16.7504H6.25997C6.10997 16.7504 6.10995 16.7505 6.10995 16.9005V17.2604Z"
                                fill="white"></path>
                              <path
                                d="M17.9299 17.2604H19.4699C19.5499 17.2604 19.59 17.2604 19.58 17.3704V17.8304C19.58 17.9004 19.5799 17.9205 19.4899 17.9205H17.2899C17.2099 17.9205 17.1899 17.9204 17.1899 17.8204V15.0804C17.1899 15.0104 17.1899 14.9805 17.2899 14.9805H19.4899C19.5599 14.9805 19.58 14.9804 19.58 15.0704V15.5104C19.58 15.6004 19.5799 15.6204 19.4799 15.6204H18.0499C17.9499 15.6204 17.9199 15.6204 17.9299 15.7504C17.9349 15.8337 17.9349 15.9172 17.9299 16.0004C17.9299 16.1104 17.9299 16.1404 18.0599 16.1404H19.2999C19.5399 16.1404 19.5399 16.1404 19.5399 16.3804C19.5349 16.467 19.5349 16.5538 19.5399 16.6404C19.5399 16.7304 19.5399 16.7604 19.4299 16.7604H18.0899C17.9099 16.7604 17.9299 16.7605 17.9299 16.9305V17.2604Z"
                                fill="white"></path>
                              <path
                                d="M0 12.7504L0.369995 11.9004L1.21002 9.90044C1.21729 9.86497 1.23799 9.83373 1.26782 9.81322C1.29765 9.79271 1.33428 9.78454 1.37 9.79045H2.10999C2.14407 9.78629 2.17858 9.79392 2.2077 9.81212C2.23682 9.83032 2.25883 9.85796 2.27002 9.89043C2.62002 10.7304 2.97997 11.5704 3.33997 12.4104L3.47998 12.7305H2.92999C2.65999 12.7305 2.66 12.7305 2.56 12.4805C2.56 12.4105 2.49998 12.3404 2.47998 12.2604C2.45998 12.1804 2.39002 12.1204 2.27002 12.1204H1.15997C1.07997 12.1204 1.04002 12.1204 1.02002 12.2104C1.00002 12.3004 0.909976 12.5004 0.849976 12.6404C0.842892 12.6686 0.825853 12.6933 0.801941 12.7099C0.778029 12.7264 0.748866 12.7338 0.719971 12.7305L0 12.7504ZM1.73999 10.5004L1.33997 11.5004H2.17999L1.73999 10.5004Z"
                                fill="white"></path>
                              <path
                                d="M19.9299 12.7504H19.1599C19.1599 12.7504 19.1 12.7005 19.08 12.6705L18.8999 12.2205C18.8929 12.1949 18.8769 12.1727 18.8549 12.158C18.8328 12.1433 18.8062 12.1371 18.7799 12.1405H17.5899C17.5622 12.1375 17.5345 12.1451 17.5122 12.1618C17.4899 12.1785 17.4748 12.2031 17.4699 12.2305L17.2899 12.6705C17.2899 12.6705 17.2399 12.7504 17.2199 12.7504H16.46L16.6299 12.3405C16.9799 11.5305 17.3299 10.7205 17.6299 9.91048C17.6392 9.87881 17.6593 9.85138 17.6867 9.83308C17.7141 9.81479 17.7471 9.80677 17.7799 9.81044H18.5499C18.5785 9.80906 18.6067 9.81718 18.6302 9.83345C18.6537 9.84972 18.6712 9.87326 18.6799 9.90047C19.0699 10.8205 19.4699 11.7405 19.8599 12.6705C19.8873 12.6933 19.9109 12.7203 19.9299 12.7504ZM18.2 10.5105L17.7999 11.5105H18.64L18.2 10.5105Z"
                                fill="white"></path>
                              <path
                                d="M25.0799 14.9804C24.9799 15.1904 24.8999 15.3904 24.8099 15.5804C24.8099 15.5804 24.7399 15.5804 24.6999 15.5804H23.5398C23.4807 15.5723 23.4207 15.5848 23.3697 15.6158C23.3188 15.6467 23.28 15.6942 23.2599 15.7504C23.2489 15.7819 23.2444 15.8153 23.2466 15.8485C23.2487 15.8818 23.2575 15.9143 23.2724 15.9441C23.2873 15.9739 23.3081 16.0005 23.3334 16.0222C23.3587 16.0439 23.3881 16.0602 23.4198 16.0704H24.3299C24.4444 16.0678 24.5581 16.0902 24.6631 16.136C24.7681 16.1817 24.8619 16.2497 24.938 16.3354C25.0141 16.421 25.0707 16.5221 25.1038 16.6318C25.1369 16.7415 25.1458 16.857 25.1299 16.9704C25.125 17.1962 25.0345 17.4117 24.8766 17.5733C24.7188 17.7348 24.5054 17.8303 24.2798 17.8404H22.7198C22.6398 17.8404 22.6098 17.8404 22.6098 17.7304C22.6098 17.6204 22.6098 17.4304 22.6098 17.2804C22.6098 17.1304 22.6099 17.1804 22.7099 17.1804H24.1199C24.2999 17.1804 24.4098 17.0904 24.4098 16.9404C24.4098 16.7904 24.2999 16.6904 24.1199 16.6904H23.3998C23.2656 16.6971 23.1316 16.6726 23.0085 16.6188C22.8853 16.565 22.7762 16.4834 22.6899 16.3804C22.5971 16.256 22.5376 16.1099 22.5172 15.9561C22.4968 15.8022 22.516 15.6457 22.5732 15.5014C22.6303 15.3571 22.7234 15.2298 22.8435 15.1316C22.9637 15.0334 23.1071 14.9676 23.2599 14.9404C23.3462 14.93 23.4335 14.93 23.5199 14.9404H25.0799V14.9804Z"
                                fill="white"></path>
                              <path
                                d="M22.37 14.9805L22.1 15.5704C22.0645 15.5834 22.0255 15.5834 21.99 15.5704H20.82C20.63 15.5704 20.52 15.6905 20.55 15.8605C20.58 16.0305 20.67 16.0804 20.85 16.0804H21.62C21.7441 16.076 21.8674 16.1008 21.9801 16.1528C22.0927 16.2049 22.1915 16.2828 22.2685 16.3802C22.3454 16.4776 22.3983 16.5918 22.4229 16.7134C22.4475 16.8351 22.4431 16.9608 22.41 17.0804C22.3946 17.2909 22.2988 17.4872 22.1424 17.6288C21.9859 17.7703 21.7809 17.8462 21.57 17.8405C21.22 17.8405 20.86 17.8405 20.5 17.8405H20.01C19.93 17.8405 19.91 17.8405 19.91 17.7305V17.4005C19.91 17.3305 19.91 17.3005 20.01 17.3005H21.41C21.4458 17.3046 21.482 17.3013 21.5164 17.2908C21.5508 17.2802 21.5826 17.2626 21.6099 17.2391C21.6372 17.2156 21.6593 17.1867 21.6748 17.1542C21.6903 17.1218 21.6989 17.0864 21.7 17.0505C21.7 16.9005 21.59 16.8005 21.41 16.8005H20.69C20.5771 16.808 20.4639 16.7923 20.3573 16.7545C20.2506 16.7167 20.1529 16.6574 20.07 16.5804C19.9496 16.464 19.8649 16.3155 19.8259 16.1525C19.7869 15.9896 19.7953 15.8188 19.85 15.6605C19.8926 15.5006 19.982 15.3571 20.1067 15.2484C20.2314 15.1397 20.3858 15.0708 20.55 15.0505C20.6331 15.0407 20.717 15.0407 20.8 15.0505H22.37V14.9805Z"
                                fill="white"></path>
                              <path
                                d="M11.9299 16.9504C11.9299 17.2404 11.9299 17.5205 11.9299 17.7905C11.9299 17.8905 11.9299 17.9205 11.8099 17.9205H11.2899C11.2199 17.9205 11.1899 17.9204 11.1899 17.8204V15.0804C11.1899 15.0004 11.1899 14.9805 11.2899 14.9805H12.9299C13.1706 14.9855 13.4003 15.0826 13.5715 15.252C13.7426 15.4213 13.8423 15.6498 13.8499 15.8904C13.8561 16.1202 13.7829 16.3451 13.6426 16.5273C13.5024 16.7094 13.3037 16.8377 13.08 16.8904H12.7799L11.9299 16.9504ZM11.9299 16.2905H12.7799C12.8244 16.2947 12.8693 16.2895 12.9116 16.2753C12.954 16.2611 12.9929 16.2382 13.0259 16.208C13.0588 16.1779 13.0851 16.1412 13.103 16.1003C13.121 16.0594 13.1301 16.0151 13.1299 15.9705C13.1341 15.9255 13.1289 15.8802 13.1148 15.8373C13.1007 15.7944 13.078 15.7548 13.048 15.7211C13.018 15.6873 12.9814 15.6601 12.9404 15.6411C12.8995 15.6221 12.8551 15.6117 12.8099 15.6105H11.9999C11.9839 15.6132 11.969 15.6202 11.9567 15.6308C11.9443 15.6414 11.9351 15.6551 11.9299 15.6705V16.2905Z"
                                fill="white"></path>
                              <path
                                d="M7.85986 17.9203L8.30988 17.3502C8.52988 17.0802 8.73985 16.8002 8.96985 16.5402C8.99307 16.516 9.00604 16.4838 9.00604 16.4502C9.00604 16.4167 8.99307 16.3845 8.96985 16.3603C8.60985 15.9303 8.26985 15.4902 7.96985 15.0602V15.0002H8.75989C8.8095 15.0093 8.85499 15.0338 8.88989 15.0702L9.44989 15.8102L9.52985 15.8902C9.67985 15.6902 9.84986 15.5102 9.97986 15.3102C10.0324 15.1906 10.1252 15.0931 10.2421 15.0347C10.359 14.9763 10.4926 14.9605 10.6199 14.9903C10.7831 15.0003 10.9467 15.0003 11.1099 14.9903L10.8199 15.3502L9.99988 16.3502C9.99988 16.3502 9.99988 16.4402 9.99988 16.5002L11.0499 17.8003L11.1199 17.9102H10.3099C10.2776 17.911 10.2457 17.903 10.2175 17.8872C10.1894 17.8713 10.166 17.8482 10.1498 17.8202L9.5799 17.0802L9.50989 16.9903L9.42987 17.0802L8.85986 17.8302C8.84326 17.8571 8.81952 17.8788 8.79126 17.893C8.763 17.9071 8.73136 17.9131 8.69989 17.9102L7.85986 17.9203Z"
                                fill="white"></path>
                              <path
                                d="M16.41 12.1003L16.13 12.7103C16.1074 12.7187 16.0826 12.7187 16.06 12.7103C15.73 12.715 15.4084 12.6055 15.15 12.4003C14.9273 12.2079 14.7818 11.9415 14.74 11.6503C14.6479 11.2503 14.6937 10.8309 14.87 10.4603C14.9707 10.2611 15.1232 10.0929 15.3115 9.97321C15.4999 9.85353 15.717 9.78686 15.94 9.78027C16.24 9.78027 16.55 9.78027 16.85 9.78027C16.93 9.78027 16.96 9.78026 16.95 9.89026V10.4003C16.95 10.4703 16.95 10.4903 16.86 10.4903H16.22C15.6 10.4903 15.38 10.9303 15.43 11.4203C15.4404 11.5154 15.4605 11.6092 15.49 11.7003C15.5395 11.8202 15.6223 11.9235 15.7287 11.9979C15.835 12.0723 15.9603 12.1148 16.09 12.1202L16.41 12.1003Z"
                                fill="white"></path>
                              <path
                                d="M14.3101 11.2806C14.3101 11.7306 14.3101 12.1806 14.3101 12.6306C14.3101 12.7306 14.31 12.7605 14.17 12.7505H13.67C13.6 12.7505 13.5801 12.7506 13.5801 12.6606V9.90057C13.5801 9.84057 13.58 9.81055 13.67 9.81055H14.22C14.3 9.81055 14.3 9.86059 14.3 9.92059L14.3101 11.2806Z"
                                fill="white"></path>
                            </svg>
                          </li>
                          <li>
                            <svg width="21" height="17" viewBox="0 0 21 17" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M10.2267 0.420988C11.0067 0.420988 11.7867 0.420988 12.5667 0.420988C14.77 0.501952 16.8562 1.43389 18.3867 3.02096C19.5167 4.17446 20.255 5.65445 20.4967 7.25101C20.6842 8.31672 20.6383 9.4104 20.362 10.4566C20.0858 11.5029 19.5858 12.4767 18.8967 13.311C17.6209 14.9409 15.7925 16.0472 13.7567 16.421C13.1497 16.533 12.5339 16.5899 11.9167 16.591C10.7767 16.591 9.62671 16.591 8.47671 16.591C6.55387 16.6295 4.67842 15.9925 3.17672 14.791C1.67063 13.6255 0.648477 11.9445 0.306726 10.071C0.0831922 8.99053 0.0813314 7.87585 0.301355 6.79465C0.521378 5.71344 0.958671 4.68817 1.58669 3.78097C2.27461 2.77648 3.19821 1.95586 4.2767 1.39096C5.54436 0.698358 6.97267 0.353359 8.41671 0.390959L10.2267 0.420988ZM15.7967 8.50101C15.7965 7.0296 15.3616 5.59103 14.5468 4.36581C13.732 3.14059 12.5736 2.18325 11.2168 1.61398C9.85993 1.04471 8.36522 0.888856 6.92013 1.16592C5.47504 1.44299 4.14395 2.14068 3.0939 3.17142C2.04384 4.20216 1.32157 5.52005 1.01772 6.95975C0.713876 8.39944 0.84197 9.89678 1.38595 11.2639C1.92993 12.6311 2.86552 13.8072 4.0754 14.6446C5.28528 15.482 6.71558 15.9434 8.18673 15.971C9.1822 15.9938 10.1721 15.8165 11.0978 15.4497C12.0235 15.0828 12.8661 14.5339 13.5758 13.8355C14.2854 13.137 14.8477 12.3031 15.2291 11.3834C15.6106 10.4636 15.8037 9.47669 15.7967 8.48099V8.50101Z"
                                fill="white"></path>
                              <path
                                d="M10.0767 12.7909V4.15088C10.9452 4.4913 11.6909 5.08563 12.2166 5.85626C12.7422 6.62689 13.0234 7.53805 13.0234 8.47089C13.0234 9.40372 12.7422 10.3149 12.2166 11.0856C11.6909 11.8562 10.9452 12.4505 10.0767 12.7909Z"
                                fill="white"></path>
                              <path
                                d="M6.58685 4.15088V12.7909C5.71835 12.4505 4.97262 11.8562 4.44696 11.0856C3.9213 10.3149 3.64014 9.40372 3.64014 8.47089C3.64014 7.53805 3.9213 6.62689 4.44696 5.85626C4.97262 5.08563 5.71835 4.4913 6.58685 4.15088Z"
                                fill="white"></path>
                            </svg>
                          </li>
                          <li>
                            <svg width="56" height="11" viewBox="0 0 56 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M34.9198 5.25867C34.9428 6.14144 34.7614 7.01757 34.3898 7.81866C34.0799 8.46723 33.6131 9.02823 33.0316 9.4508C32.4502 9.87338 31.7724 10.1442 31.0598 10.2387C30.2579 10.3842 29.4333 10.3431 28.6499 10.1187C27.8415 9.91699 27.1094 9.48423 26.5429 8.87335C25.9764 8.26248 25.6001 7.49992 25.4599 6.67871C25.2528 5.74886 25.2872 4.78149 25.5598 3.86871C25.7791 3.06046 26.2285 2.33335 26.8535 1.77588C27.4784 1.2184 28.2519 0.854576 29.0798 0.728698C29.9431 0.552806 30.8365 0.594035 31.6798 0.848693C32.458 1.06617 33.1598 1.49704 33.7059 2.09259C34.252 2.68814 34.6205 3.4246 34.7699 4.21869C34.8411 4.56196 34.8912 4.90925 34.9198 5.25867Z"
                                fill="white"></path>
                              <path
                                d="M0.639803 0.77864H3.14981C3.99405 0.771128 4.83423 0.895971 5.6398 1.14864C6.32407 1.343 6.93868 1.72847 7.41159 2.25984C7.88451 2.79121 8.19611 3.44644 8.30979 4.14864C8.51462 5.06061 8.51462 6.00668 8.30979 6.91865C8.17087 7.61776 7.8356 8.26277 7.34323 8.77815C6.85087 9.29354 6.22179 9.65793 5.52976 9.82863C4.87923 10.0151 4.20645 10.1127 3.52976 10.1187C2.60976 10.1187 1.69976 10.1187 0.779757 10.1187H0.689791C0.599791 9.96867 0.589803 1.13864 0.639803 0.77864ZM2.45981 8.66866C2.85981 8.66866 3.23979 8.66866 3.62979 8.66866C4.20433 8.65397 4.76165 8.46946 5.23148 8.13844C5.70131 7.80743 6.06262 7.34475 6.26981 6.80867C6.46029 6.36648 6.55348 5.88848 6.54312 5.40712C6.53277 4.92576 6.41913 4.45223 6.20981 4.01863C6.02269 3.56834 5.71959 3.17567 5.33139 2.88057C4.9432 2.58547 4.48373 2.39848 3.99979 2.33864C3.50024 2.30856 2.99934 2.30856 2.49979 2.33864L2.45981 8.66866Z"
                                fill="white"></path>
                              <path
                                d="M55.3598 10.1385H53.3598C53.2998 9.99855 53.2498 9.85857 53.1998 9.71857L52.2998 7.33856C52.2253 7.14325 52.1384 6.95286 52.0398 6.76855C51.9668 6.6235 51.8556 6.50116 51.7181 6.41479C51.5806 6.32842 51.4222 6.28132 51.2598 6.27856C50.9798 6.27856 50.6898 6.27856 50.3798 6.27856V10.1385H48.5898C48.5298 9.96855 48.5198 1.13859 48.5898 0.808594H52.0198C52.4828 0.818458 52.9415 0.899393 53.3798 1.04858C53.7957 1.16517 54.1627 1.41325 54.4258 1.75574C54.689 2.09822 54.8343 2.51666 54.8398 2.94855C54.8826 3.2827 54.8622 3.62191 54.7798 3.94855C54.6963 4.30845 54.5148 4.63824 54.2553 4.90125C53.9958 5.16425 53.6685 5.35025 53.3098 5.4386L53.1398 5.48859C53.3087 5.59906 53.4632 5.73002 53.5998 5.87854C53.7484 6.07448 53.8695 6.28982 53.9598 6.51855C54.4298 7.64855 54.8798 8.78858 55.3298 9.91858C55.3446 9.99119 55.3546 10.0646 55.3598 10.1385ZM50.3598 4.79858C50.8612 4.83242 51.3648 4.80554 51.8598 4.71857C52.0273 4.68603 52.1892 4.62875 52.3398 4.54858C52.4694 4.49135 52.5829 4.40297 52.6701 4.29132C52.7573 4.17967 52.8157 4.04818 52.8398 3.90857C52.875 3.68997 52.875 3.46719 52.8398 3.2486C52.8276 3.07399 52.7641 2.90686 52.6574 2.76813C52.5507 2.62939 52.4054 2.52517 52.2398 2.46857C52.1505 2.42487 52.0566 2.39135 51.9598 2.36859C51.7746 2.33473 51.5877 2.31136 51.3998 2.29858H50.3298L50.3598 4.79858Z"
                                fill="white"></path>
                              <path
                                d="M42.5997 0.798828H47.9998V2.28882H44.4398V4.5788H47.6798V6.02881H44.4697C44.4142 6.9046 44.4142 7.78303 44.4697 8.65881H48.0397V10.1288H42.6098C42.5598 9.96878 42.5397 1.10883 42.5997 0.798828Z"
                                fill="white"></path>
                              <path
                                d="M16.9198 3.23859L16.6798 3.10858C16.2858 2.84656 15.8587 2.63807 15.4098 2.48859C15.0445 2.35705 14.6499 2.32934 14.2698 2.40857C14.1019 2.43803 13.9468 2.5179 13.8254 2.63757C13.7039 2.75725 13.6218 2.91105 13.5898 3.07855C13.5264 3.25275 13.5182 3.44229 13.5665 3.62128C13.6149 3.80027 13.7173 3.95998 13.8598 4.07855C14.056 4.232 14.2711 4.35971 14.4998 4.45856C14.8498 4.61856 15.2198 4.73857 15.5698 4.90857C15.9163 5.05924 16.2506 5.23646 16.5698 5.4386C16.8774 5.64409 17.1295 5.92218 17.304 6.24835C17.4784 6.57452 17.5697 6.93871 17.5698 7.30859C17.5965 7.69664 17.5525 8.08627 17.4398 8.45856C17.3033 8.91301 17.0446 9.32124 16.6919 9.63867C16.3392 9.9561 15.9061 10.1705 15.4398 10.2585C14.5463 10.4568 13.6124 10.3586 12.7798 9.97858C12.4703 9.82597 12.1698 9.65568 11.8798 9.46857C11.8412 9.45415 11.808 9.42817 11.7847 9.39417C11.7615 9.36016 11.7493 9.31977 11.7498 9.27856C11.7498 8.70856 11.7498 8.13854 11.7498 7.56854V7.50854L11.9998 7.64856C12.4198 7.87856 12.8298 8.12857 13.2498 8.34857C13.6409 8.5714 14.0921 8.66586 14.5398 8.61859C14.672 8.60985 14.8028 8.58636 14.9298 8.54858C15.0776 8.49143 15.2097 8.39997 15.3152 8.28174C15.4208 8.1635 15.4967 8.02186 15.5367 7.86853C15.5768 7.7152 15.5798 7.55451 15.5456 7.39978C15.5114 7.24505 15.4408 7.1007 15.3398 6.97858C15.1683 6.79926 14.9648 6.65345 14.7398 6.54858C14.3998 6.37858 14.0398 6.24856 13.7398 6.08856C13.4288 5.9547 13.125 5.80448 12.8298 5.63855C12.4141 5.41066 12.077 5.06238 11.8628 4.6394C11.6486 4.21643 11.5674 3.73854 11.6298 3.26855C11.6394 3.06932 11.6696 2.87164 11.7198 2.67859C11.7808 2.38087 11.9007 2.09832 12.0724 1.8476C12.2441 1.59687 12.4642 1.383 12.7198 1.21857C13.2008 0.906972 13.7489 0.713698 14.319 0.654602C14.8891 0.595506 15.4651 0.672242 15.9998 0.87854C16.3052 1.00706 16.5886 1.18253 16.8398 1.39856C16.8751 1.42545 16.9034 1.46032 16.9225 1.50031C16.9416 1.54029 16.951 1.58423 16.9498 1.62854V3.13855C16.9457 3.17338 16.9356 3.20726 16.9198 3.23859Z"
                                fill="white"></path>
                              <path
                                d="M24.8098 3.28862L24.3298 3.02861C23.8624 2.76063 23.3511 2.57782 22.8198 2.48864C22.2526 2.40851 21.6742 2.48814 21.1498 2.71862C20.8604 2.84571 20.6012 3.03262 20.3892 3.26702C20.1772 3.50141 20.0172 3.77797 19.9198 4.0786C19.6096 4.9759 19.6096 5.95133 19.9198 6.84862C20.0452 7.2591 20.2901 7.62294 20.6231 7.89367C20.9562 8.16439 21.3623 8.32974 21.7898 8.36864C22.4703 8.48839 23.1713 8.38671 23.7898 8.0786C24.1098 7.9186 24.4298 7.73864 24.7898 7.55864L24.9598 7.45861C24.9641 7.52854 24.9641 7.5987 24.9598 7.66863C24.9598 8.11863 24.9598 8.56859 24.9598 9.00859C24.9692 9.08251 24.9573 9.15762 24.9254 9.22496C24.8935 9.29231 24.8429 9.34907 24.7797 9.3886C24.5406 9.56418 24.2863 9.71814 24.0198 9.84862C23.4125 10.1132 22.7572 10.2497 22.0947 10.2497C21.4323 10.2497 20.777 10.1132 20.1698 9.84862C19.6684 9.63674 19.2222 9.31304 18.8652 8.90227C18.5082 8.49151 18.2498 8.00456 18.1098 7.47863C17.8617 6.64255 17.7868 5.76462 17.8898 4.89861C17.9325 4.3079 18.0674 3.72756 18.2898 3.17864C18.5241 2.57698 18.9111 2.04666 19.4126 1.63988C19.914 1.2331 20.5127 0.963869 21.1498 0.858631C22.0596 0.664467 23.0045 0.71276 23.8898 0.998646C24.2102 1.10386 24.5134 1.25542 24.7898 1.4486C24.8281 1.47307 24.8595 1.50723 24.8805 1.5476C24.9016 1.58796 24.9116 1.63315 24.9097 1.67864V3.21862C24.8782 3.24443 24.8448 3.26784 24.8098 3.28862Z"
                                fill="white"></path>
                              <path
                                d="M34.2798 0.788574H36.2298L38.2298 5.71857L40.1498 0.788574H42.0098C42.0098 0.978574 38.6198 9.78855 38.4498 10.1385H37.8098L34.2798 0.788574Z"
                                fill="white"></path>
                              <path
                                d="M9.18985 0.798828H10.9998V10.1288H9.19986C9.14986 9.95878 9.13985 1.08883 9.18985 0.798828Z"
                                fill="white"></path>
                            </svg>
                          </li>
                          <li>
                            <svg width="37" height="11" viewBox="0 0 37 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M35.1705 5.38039L35.4606 5.46041C35.7748 5.53231 36.0597 5.69798 36.2776 5.93551C36.4955 6.17303 36.636 6.47115 36.6805 6.79036C36.7655 7.33708 36.7655 7.89367 36.6805 8.44039C36.5836 8.95486 36.3008 9.41566 35.8857 9.73476C35.4707 10.0539 34.9526 10.2089 34.4305 10.1704C33.6305 10.1704 32.8305 10.1704 32.0305 10.1704H24.8306V0.710408H33.2705C33.7068 0.705207 34.1426 0.745419 34.5706 0.830403C34.8853 0.880272 35.1866 0.993912 35.4558 1.16433C35.7251 1.33474 35.9567 1.55833 36.1365 1.82143C36.3162 2.08453 36.4403 2.38158 36.5012 2.69436C36.5621 3.00714 36.5585 3.32907 36.4906 3.6404C36.3806 4.4804 36.1005 4.81039 35.1705 5.38039ZM27.6906 6.38039V8.07039H32.9005C33.0056 8.09664 33.1155 8.09664 33.2206 8.07039C33.4199 7.97416 33.5893 7.82553 33.7106 7.6404C33.786 7.5062 33.8227 7.35363 33.8164 7.19979C33.8102 7.04595 33.7613 6.89688 33.6752 6.76925C33.589 6.64162 33.4691 6.54045 33.3287 6.47707C33.1884 6.41369 33.0333 6.39065 32.8806 6.41042H27.6906V6.38039ZM27.6906 4.44039H32.7406C32.8833 4.45646 33.0274 4.42628 33.1516 4.35427C33.2758 4.28225 33.3736 4.17218 33.4305 4.04036C33.4949 3.91557 33.5249 3.77591 33.5173 3.6357C33.5098 3.49549 33.465 3.35984 33.3876 3.2427C33.3102 3.12555 33.2029 3.03118 33.0769 2.96926C32.9509 2.90733 32.8106 2.88011 32.6705 2.8904H27.6906V4.44039Z"
                                fill="white"></path>
                              <path
                                d="M23.3806 4.12036H20.5406C20.3106 3.19036 20.0606 2.97035 19.0906 2.98035C17.8906 2.98035 16.6906 2.98035 15.5006 3.05035C15.3449 3.0423 15.1893 3.06811 15.0445 3.12592C14.8996 3.18372 14.769 3.27218 14.6616 3.38525C14.5543 3.49833 14.4726 3.63333 14.4224 3.78094C14.3721 3.92856 14.3545 4.08526 14.3706 4.24036C14.3706 5.04036 14.3706 5.84038 14.3706 6.64038C14.366 6.92168 14.4656 7.19475 14.6502 7.40704C14.8348 7.61934 15.0914 7.75583 15.3706 7.79034C15.525 7.8452 15.6869 7.87559 15.8506 7.88037C17.1006 7.88037 18.3506 7.88037 19.5906 7.88037C20.3006 7.88037 20.5306 7.47034 20.5906 6.60034H23.5205C23.6077 7.31911 23.5431 8.0482 23.3306 8.74036C23.1756 9.13574 22.9142 9.48052 22.5753 9.73645C22.2365 9.99238 21.8332 10.1495 21.4105 10.1904C20.9245 10.2721 20.4333 10.3189 19.9406 10.3304C18.3006 10.3304 16.6506 10.3304 15.0106 10.3304C14.5504 10.3211 14.092 10.2709 13.6406 10.1804C13.0563 10.087 12.5216 9.79564 12.1265 9.35504C11.7315 8.91444 11.4999 8.35144 11.4706 7.76038C11.3506 6.23273 11.3506 4.698 11.4706 3.17035C11.493 2.54891 11.7498 1.959 12.1895 1.51929C12.6292 1.07958 13.2192 0.822703 13.8406 0.800354C14.4131 0.710279 14.9911 0.660194 15.5706 0.650391C17.1206 0.650391 18.6606 0.650391 20.2106 0.650391C20.6172 0.654068 21.0224 0.697615 21.4206 0.780396C21.9511 0.83914 22.4417 1.09043 22.7992 1.48669C23.1568 1.88296 23.3565 2.39663 23.3606 2.93036C23.4106 3.29036 23.3806 3.69036 23.3806 4.12036Z"
                                fill="white"></path>
                              <path
                                d="M0.420535 6.09045H3.09052C3.0756 6.37693 3.0756 6.66397 3.09052 6.95044C3.19052 7.60044 3.45052 7.87045 4.09052 7.90045C4.73052 7.93045 5.41052 7.90045 6.09052 7.90045C6.77052 7.90045 6.90052 7.61041 6.97052 7.04041C6.97052 6.82041 6.97052 6.60043 6.97052 6.38043V0.710449H9.87049V1.03046C9.87049 3.17046 9.87049 5.30043 9.87049 7.44043C9.86739 7.77913 9.81693 8.11573 9.72052 8.44043C9.59491 8.91858 9.31724 9.34297 8.92945 9.6496C8.54165 9.95622 8.06472 10.1285 7.5705 10.1404C5.83988 10.3454 4.09116 10.3454 2.36054 10.1404C1.81145 10.117 1.29364 9.87823 0.919314 9.47583C0.544985 9.07343 0.34426 8.53977 0.360537 7.99042C0.380537 7.38042 0.420535 6.74045 0.420535 6.09045Z"
                                fill="white"></path>
                            </svg>
                          </li>
                          <li>
                            <svg width="29" height="17" viewBox="0 0 29 17" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M14.9124 14.8198C15.7711 14.0046 16.452 13.0207 16.9124 11.9298C17.0365 11.6511 17.14 11.3637 17.2223 11.0698H16.5624C16.1372 12.3411 15.4056 13.4881 14.4324 14.4099C13.4664 13.4859 12.7419 12.339 12.3224 11.0698H11.6424C12.0774 12.4906 12.8613 13.7798 13.9224 14.8198C13.9224 14.8198 13.9223 14.8198 13.8523 14.8798C12.837 15.7 11.6347 16.2565 10.3523 16.4998C8.32117 16.8828 6.22048 16.4748 4.48037 15.3593C2.74027 14.2439 1.49243 12.5054 0.992336 10.4998C0.76305 9.58533 0.692063 8.63833 0.782375 7.69985C0.919583 6.24925 1.44691 4.86286 2.3085 3.68782C3.17009 2.51279 4.33384 1.59299 5.67605 1.02596C7.01826 0.45893 8.48895 0.26584 9.93203 0.467244C11.3751 0.668647 12.7367 1.25703 13.8723 2.16988C12.8091 3.20256 12.0277 4.49002 11.6023 5.90987H12.2724C12.6907 4.64304 13.4155 3.49915 14.3824 2.57985C15.3562 3.50107 16.0879 4.64831 16.5124 5.91988H17.1824C16.7423 4.49388 15.9515 3.20107 14.8824 2.15987C16.07 1.19237 17.5077 0.581466 19.0286 0.398091C20.5494 0.214715 22.091 0.466391 23.4746 1.12386C24.8582 1.78133 26.0271 2.81762 26.8455 4.11257C27.6639 5.40751 28.0982 6.90798 28.0982 8.43984C28.0982 9.9717 27.6639 11.4722 26.8455 12.7671C26.0271 14.0621 24.8582 15.0984 23.4746 15.7559C22.091 16.4133 20.5494 16.665 19.0286 16.4816C17.5077 16.2982 16.07 15.6874 14.8824 14.7199L14.9124 14.8198ZM5.91238 6.81984H4.70242C4.66315 6.81584 4.62369 6.82566 4.59085 6.84755C4.558 6.86945 4.53377 6.90205 4.52237 6.93984L3.65237 8.85988V8.96987L3.49234 6.83986H2.15237L1.46243 10.4498H2.27237L2.51236 9.18984C2.59236 8.76984 2.67238 8.34984 2.78238 7.93984L2.99234 10.4498H3.77237L4.86233 7.99984L4.41238 10.4398H5.25235L5.91238 6.81984ZM26.3024 7.81984L26.1324 7.65987C26.0499 7.55923 25.9316 7.49467 25.8024 7.47988C25.5679 7.43478 25.3268 7.43478 25.0923 7.47988C24.8411 7.53912 24.6226 7.69319 24.4823 7.90987C24.2761 8.21023 24.1364 8.55116 24.0724 8.90987C24.0175 9.14335 24.0175 9.38635 24.0724 9.61983C24.1314 9.87189 24.2678 10.0992 24.4624 10.2699C24.5463 10.3496 24.6488 10.407 24.7606 10.4367C24.8725 10.4664 24.9899 10.4674 25.1023 10.4398C25.2634 10.4123 25.419 10.3582 25.5624 10.2799H25.6524L25.7624 10.5098C26.055 10.5377 26.3497 10.5377 26.6424 10.5098L27.3423 6.73989H26.4923L26.3024 7.81984ZM8.04239 10.4599C8.04239 10.4599 8.04239 10.3998 8.04239 10.3698C8.15239 9.83983 8.25233 9.29986 8.36233 8.76986C8.39235 8.59111 8.39235 8.40863 8.36233 8.22988C8.35128 8.08881 8.30157 7.95349 8.21865 7.83883C8.13574 7.72416 8.02286 7.63455 7.89236 7.57985C7.75025 7.52472 7.60285 7.48451 7.45242 7.45986C7.17991 7.42988 6.90486 7.42988 6.63235 7.45986C6.46235 7.45986 6.29233 7.45987 6.11233 7.52987L5.99234 8.16988H6.11233C6.44288 8.11705 6.77784 8.09695 7.11233 8.10988H7.29239C7.33292 8.11911 7.36904 8.14207 7.39456 8.17489C7.42008 8.2077 7.43344 8.24832 7.4324 8.28988V8.48989H7.27237C7.03637 8.46474 6.7984 8.46474 6.5624 8.48989C6.31007 8.52618 6.07629 8.64318 5.89602 8.82344C5.71576 9.00371 5.5987 9.23755 5.5624 9.48989C5.53991 9.61281 5.55017 9.73943 5.59231 9.85707C5.63445 9.97472 5.70697 10.0792 5.80239 10.1599C5.93036 10.2802 6.09693 10.3511 6.27237 10.3599C6.55594 10.4014 6.84513 10.3449 7.09231 10.1998L7.20242 10.3599L8.04239 10.4599ZM21.8423 10.4599C21.8458 10.4333 21.8458 10.4064 21.8423 10.3798C21.9323 9.90984 22.0323 9.44988 22.1223 8.97988C22.1757 8.76751 22.1993 8.54872 22.1924 8.32985C22.1946 8.149 22.137 7.97253 22.0285 7.82784C21.92 7.68315 21.7665 7.57838 21.5923 7.52987C21.4982 7.49714 21.4011 7.47369 21.3024 7.45986C20.8678 7.428 20.431 7.45153 20.0023 7.52987C19.981 7.53414 19.9617 7.54524 19.9473 7.56148C19.9329 7.57772 19.9241 7.59818 19.9224 7.61983C19.9224 7.78983 19.8524 7.94983 19.8224 8.11983V8.18984H19.9923C20.3228 8.13641 20.6578 8.11631 20.9923 8.12984H21.1524C21.1984 8.14049 21.2398 8.16572 21.2704 8.20174C21.301 8.23776 21.3193 8.28268 21.3224 8.32985C21.3273 8.38975 21.3273 8.44995 21.3224 8.50985H21.1524C20.918 8.50597 20.6838 8.52269 20.4524 8.55983C20.2077 8.59472 19.9799 8.70496 19.8007 8.8752C19.6215 9.04545 19.4998 9.26725 19.4524 9.50985C19.4053 9.68756 19.425 9.87641 19.508 10.0405C19.5909 10.2046 19.7313 10.3325 19.9024 10.3999C20.0309 10.4576 20.172 10.4817 20.3124 10.4699C20.5443 10.4788 20.7736 10.4197 20.9723 10.2999L21.0824 10.4599H21.8423ZM19.8423 7.13985C19.6917 6.98069 19.5048 6.86029 19.2976 6.7889C19.0904 6.71751 18.8691 6.69728 18.6524 6.72988C18.411 6.74385 18.1752 6.80798 17.96 6.91817C17.7448 7.02836 17.5548 7.18216 17.4024 7.36983C17.1762 7.63195 17.0113 7.94119 16.9196 8.27504C16.8279 8.6089 16.8117 8.95902 16.8723 9.29988C16.9072 9.58503 17.0314 9.85178 17.2272 10.062C17.423 10.2722 17.6805 10.415 17.9624 10.4699C18.233 10.5248 18.5118 10.5248 18.7824 10.4699C18.9542 10.4471 19.1203 10.3928 19.2724 10.3098C19.2724 10.3098 19.2724 10.3099 19.2724 10.2399C19.2024 10.0199 19.1324 9.80986 19.0524 9.58986H18.9524C18.8503 9.6156 18.7467 9.63562 18.6424 9.64986C18.5411 9.66538 18.4378 9.66056 18.3384 9.63564C18.239 9.61072 18.1457 9.56618 18.0637 9.50472C17.9818 9.44325 17.9129 9.36608 17.8611 9.27767C17.8094 9.18926 17.7758 9.09144 17.7624 8.98989C17.7276 8.78339 17.7422 8.57156 17.8047 8.37172C17.8673 8.17189 17.976 7.98968 18.1223 7.83986C18.2225 7.74277 18.3419 7.66769 18.4728 7.61947C18.6037 7.57124 18.7431 7.55092 18.8824 7.55983C19.0501 7.56631 19.2142 7.61076 19.3623 7.68984L19.8423 7.13985ZM14.8423 9.13985C14.9093 8.88563 14.933 8.62197 14.9124 8.35988C14.902 8.16419 14.828 7.97722 14.7017 7.82741C14.5753 7.67761 14.4036 7.57314 14.2124 7.52987C13.9874 7.49105 13.7574 7.49105 13.5324 7.52987C13.2007 7.55599 12.8923 7.71021 12.6724 7.95986C12.4782 8.17662 12.3394 8.43723 12.268 8.71938C12.1966 9.00153 12.1946 9.2968 12.2624 9.57985C12.3063 9.82205 12.4274 10.0435 12.6077 10.2111C12.7879 10.3788 13.0176 10.4836 13.2624 10.5098C13.5086 10.5299 13.7561 10.5299 14.0023 10.5098C14.1705 10.4887 14.3374 10.4587 14.5023 10.4199C14.5308 10.4176 14.5575 10.4052 14.5777 10.3851C14.5978 10.3649 14.61 10.3382 14.6123 10.3098C14.6123 10.1598 14.6724 10.0099 14.7024 9.85988V9.77987C14.3714 9.82857 14.0369 9.84864 13.7024 9.83986C13.5963 9.85504 13.4885 9.85504 13.3824 9.83986C13.3253 9.81708 13.2736 9.78287 13.2303 9.73934C13.1869 9.6958 13.153 9.64389 13.1305 9.58675C13.108 9.52961 13.0975 9.46844 13.0995 9.40706C13.1015 9.34569 13.1161 9.28541 13.1424 9.22988L14.8423 9.13985ZM8.33242 10.3698C8.36551 10.3756 8.39932 10.3756 8.4324 10.3698C8.86169 10.4713 9.30656 10.4884 9.74234 10.4199C9.95469 10.4054 10.1555 10.3178 10.3105 10.1719C10.4654 10.026 10.565 9.83092 10.5923 9.61983C10.6373 9.46918 10.628 9.30753 10.5658 9.16311C10.5037 9.01868 10.3927 8.90071 10.2523 8.82985L9.75235 8.55983C9.69592 8.52861 9.64517 8.48804 9.60232 8.43984C9.57802 8.41464 9.56119 8.38325 9.55362 8.34908C9.54604 8.31491 9.5481 8.27928 9.55947 8.24617C9.57085 8.21307 9.59108 8.18381 9.61807 8.16152C9.64505 8.13922 9.67778 8.12476 9.71243 8.11983H10.5524L10.7323 7.53988C10.264 7.38986 9.76066 7.38986 9.29239 7.53988C9.12572 7.59014 8.97908 7.69149 8.8732 7.82967C8.76732 7.96785 8.70759 8.13583 8.70242 8.30983C8.66694 8.46729 8.6913 8.63237 8.77078 8.77285C8.85026 8.91332 8.97911 9.01916 9.13235 9.06984C9.31856 9.15448 9.49899 9.25139 9.67239 9.35988C9.71952 9.38303 9.75767 9.42095 9.78115 9.46791C9.80464 9.51488 9.81215 9.56824 9.80239 9.61983C9.79541 9.6685 9.77156 9.71322 9.73501 9.74611C9.69846 9.77901 9.65146 9.79804 9.60232 9.79988C9.39232 9.79988 9.18243 9.79988 8.96243 9.79988L8.49234 9.73989L8.33242 10.3698ZM11.3324 6.72988L10.8224 9.25985C10.7795 9.44692 10.7559 9.63795 10.7523 9.82985C10.7509 9.96576 10.7956 10.0982 10.8792 10.2053C10.9627 10.3125 11.0803 10.3882 11.2124 10.4199C11.4565 10.4816 11.7145 10.4568 11.9424 10.3499H12.0224L12.0824 9.76986H11.7824C11.7356 9.76247 11.6932 9.73789 11.6636 9.70089C11.634 9.66389 11.6193 9.61713 11.6223 9.56984C11.6176 9.50326 11.6176 9.43641 11.6223 9.36983L11.7423 8.73989C11.7423 8.55989 11.8123 8.37984 11.8523 8.18984H12.2724L12.4124 7.53988H11.9823L12.1424 6.75985L11.3324 6.72988ZM22.7323 7.48989C22.5423 8.48989 22.3624 9.48989 22.1724 10.4899H22.9923C22.9923 10.4399 22.9923 10.4098 22.9923 10.3698L23.2024 9.22988C23.239 8.99489 23.3241 8.77007 23.4524 8.56984C23.5043 8.47788 23.5799 8.40154 23.6714 8.34877C23.7629 8.29601 23.8667 8.26875 23.9723 8.26986H24.0524L24.2624 7.49984C23.9758 7.48791 23.6959 7.58842 23.4823 7.77987L23.4124 7.50985L22.7323 7.48989ZM15.7323 10.4899V10.3798C15.8023 9.97984 15.8724 9.57983 15.9524 9.17983C15.9953 8.95742 16.0839 8.74633 16.2124 8.55983C16.2632 8.48179 16.3329 8.41795 16.4151 8.37423C16.4973 8.3305 16.5893 8.30831 16.6824 8.30983H16.7824C16.8524 8.05983 16.9323 7.80988 16.9923 7.53988C16.7101 7.52464 16.4332 7.62166 16.2223 7.80983L16.1524 7.45986H15.4624L14.9024 10.4599L15.7323 10.4899Z"
                                fill="white"></path>
                              <path
                                d="M26.0824 8.70004C26.0731 8.97632 25.9627 9.23958 25.7723 9.44003C25.72 9.49755 25.655 9.54207 25.5824 9.57003C25.4868 9.61963 25.3754 9.62961 25.2725 9.5978C25.1695 9.56599 25.0833 9.49496 25.0324 9.40005C24.9567 9.27396 24.9284 9.12512 24.9524 8.98007C24.9868 8.72473 25.1066 8.48852 25.2924 8.31002C25.3894 8.20811 25.5218 8.14728 25.6624 8.14004C25.7415 8.12772 25.8224 8.14553 25.889 8.18996C25.9557 8.2344 26.0033 8.30222 26.0223 8.38003C26.0523 8.46003 26.0624 8.59004 26.0824 8.70004Z"
                                fill="white"></path>
                              <path
                                d="M7.41251 9.11C7.38955 9.23494 7.35953 9.35847 7.32254 9.47999C7.28947 9.56258 7.2349 9.63485 7.16458 9.68934C7.09427 9.74384 7.01074 9.77857 6.92252 9.78999H6.70255C6.65863 9.78704 6.61627 9.77251 6.57974 9.74794C6.54322 9.72336 6.51382 9.68961 6.49454 9.65004C6.47526 9.61046 6.46672 9.5665 6.46988 9.52259C6.47304 9.47869 6.48773 9.43638 6.51248 9.39997C6.54876 9.32328 6.60177 9.25567 6.66751 9.20204C6.73325 9.14841 6.81007 9.11011 6.89249 9.08998C7.06507 9.05682 7.24298 9.06369 7.41251 9.11Z"
                                fill="white"></path>
                              <path
                                d="M21.2024 9.10984C21.1952 9.2548 21.1612 9.39717 21.1023 9.52983C21.0356 9.63625 20.9363 9.71814 20.8191 9.76322C20.7019 9.80831 20.5732 9.81414 20.4524 9.77983C20.4161 9.7682 20.3828 9.74872 20.3549 9.72282C20.3269 9.69692 20.3051 9.66522 20.2908 9.62992C20.2765 9.59463 20.2701 9.55663 20.2721 9.5186C20.2741 9.48056 20.2844 9.44343 20.3024 9.40983C20.3407 9.32986 20.3966 9.25954 20.4658 9.20414C20.5351 9.14874 20.6159 9.10967 20.7024 9.08982C20.8683 9.05688 21.0396 9.06375 21.2024 9.10984Z"
                                fill="white"></path>
                              <path
                                d="M13.1523 8.55972C13.1632 8.47038 13.1934 8.3845 13.2408 8.30801C13.2883 8.23152 13.3517 8.16627 13.4269 8.11679C13.5021 8.0673 13.5871 8.03475 13.6761 8.02145C13.7652 8.00814 13.856 8.01442 13.9424 8.03976C13.9796 8.05153 14.0139 8.07093 14.0432 8.09677C14.0725 8.1226 14.096 8.15425 14.1123 8.18972C14.1368 8.24833 14.1494 8.31121 14.1494 8.37472C14.1494 8.43823 14.1368 8.50111 14.1123 8.55972H13.1523Z"
                                fill="white"></path>
                            </svg>
                          </li>
                          <li>
                            <svg width="44" height="13" viewBox="0 0 44 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M3.80661 0.724196H5.44663C5.96734 0.721004 6.48369 0.819553 6.96665 1.01424C7.36754 1.16545 7.70926 1.44141 7.9415 1.80147C8.17374 2.16153 8.28426 2.58666 8.25669 3.01424C8.27238 3.76143 8.10047 4.5006 7.75669 5.1642C7.52894 5.62128 7.19314 6.01594 6.77841 6.31392C6.36369 6.6119 5.88254 6.80421 5.37668 6.87422C4.79746 6.959 4.21155 6.98909 3.62668 6.96419H3.31662C3.25407 6.95873 3.19107 6.96588 3.13132 6.98518C3.07157 7.00448 3.01626 7.03554 2.96872 7.07655C2.92118 7.11757 2.88243 7.16768 2.85459 7.22395C2.82674 7.28023 2.81038 7.34152 2.80661 7.40419C2.68661 8.15419 2.57663 8.90419 2.44663 9.65419C2.44457 9.71797 2.42895 9.78061 2.40085 9.8379C2.37275 9.8952 2.33284 9.94586 2.28366 9.98653C2.23449 10.0272 2.17725 10.0569 2.11569 10.0737C2.05414 10.0906 1.98964 10.0941 1.92661 10.0842H0.426608C0.166608 10.0842 0.0666614 9.95423 0.106661 9.69423L0.976657 4.15419L1.45664 1.15419C1.46032 1.0932 1.47641 1.03359 1.50388 0.979018C1.53134 0.924442 1.56964 0.876042 1.61643 0.836745C1.66321 0.797448 1.71748 0.768134 1.77597 0.750502C1.83447 0.732871 1.89593 0.727306 1.95664 0.734206L3.80661 0.724196ZM3.80661 5.09419H4.36667C4.641 5.10257 4.91055 5.02116 5.13437 4.86232C5.35819 4.70348 5.52402 4.4759 5.60666 4.21419C5.66988 4.01003 5.70353 3.79788 5.70664 3.58418C5.72653 3.36748 5.66153 3.15157 5.52536 2.98183C5.3892 2.81208 5.19251 2.70179 4.97666 2.67421C4.59644 2.61439 4.21101 2.59428 3.82663 2.61421C3.78665 2.60844 3.74586 2.61135 3.70713 2.62282C3.66839 2.63428 3.63267 2.65402 3.60227 2.68062C3.57187 2.70722 3.5476 2.74006 3.5311 2.77693C3.5146 2.8138 3.50627 2.85379 3.50669 2.89418C3.39669 3.60418 3.2866 4.31418 3.1666 5.02418C3.1666 5.09418 3.16669 5.11421 3.25669 5.11421L3.80661 5.09419Z"
                                fill="white"></path>
                              <path
                                d="M27.9366 0.724081H29.5766C30.135 0.716996 30.6881 0.83311 31.1966 1.06411C31.535 1.2182 31.8238 1.4636 32.0304 1.77273C32.2371 2.08186 32.3536 2.44248 32.3666 2.81411C32.4057 3.49697 32.2929 4.18 32.0365 4.81411C31.8402 5.35398 31.5014 5.83055 31.056 6.19326C30.6105 6.55597 30.0751 6.79127 29.5066 6.87411C29.1763 6.93109 28.8419 6.96116 28.5066 6.96407H27.5066C27.3888 6.95576 27.2725 6.99412 27.1827 7.07082C27.0929 7.14752 27.0367 7.25645 27.0265 7.37411C26.8965 8.14411 26.7765 8.9141 26.6565 9.6841C26.6565 10.0041 26.5266 10.0841 26.1866 10.0841H24.6465C24.3765 10.0841 24.2666 9.9541 24.3066 9.6841C24.5266 8.3441 24.7366 7.0041 24.9466 5.6841L25.5766 1.6841L25.6665 1.09408C25.6816 0.977387 25.7408 0.870931 25.832 0.79653C25.9231 0.722129 26.0392 0.685476 26.1565 0.694113L27.9366 0.724081ZM27.8266 5.09408C28.1256 5.1289 28.4276 5.1289 28.7266 5.09408C28.9503 5.07274 29.1631 4.98805 29.3403 4.84987C29.5174 4.7117 29.6515 4.52583 29.7266 4.31411C29.8106 4.10092 29.8514 3.87314 29.8466 3.64406C29.8634 3.53244 29.857 3.41857 29.8278 3.30953C29.7986 3.20049 29.7471 3.09864 29.6767 3.0104C29.6063 2.92215 29.5184 2.84942 29.4186 2.79671C29.3188 2.744 29.2092 2.7125 29.0966 2.70412C28.7365 2.6444 28.3711 2.62422 28.0066 2.64406C27.7766 2.64406 27.6965 2.7141 27.6565 2.9341C27.5765 3.3641 27.5166 3.79407 27.4466 4.21407C27.4466 4.46407 27.3666 4.71407 27.3166 4.96407C27.2666 5.21407 27.3166 5.14406 27.4866 5.14406L27.8266 5.09408Z"
                                fill="white"></path>
                              <path
                                d="M12.6966 9.3341C12.2766 9.74006 11.7552 10.0257 11.187 10.1612C10.6188 10.2966 10.0246 10.2769 9.46664 10.1041C9.03613 9.9719 8.65266 9.71875 8.36191 9.37481C8.07116 9.03088 7.88536 8.61064 7.82663 8.16412C7.69985 7.53608 7.73656 6.88603 7.9332 6.27624C8.12983 5.66646 8.47976 5.11742 8.94955 4.68176C9.41934 4.2461 9.9932 3.93844 10.6161 3.78826C11.2389 3.63809 11.89 3.65045 12.5067 3.82415C12.7036 3.87184 12.8886 3.95947 13.0503 4.0816C13.212 4.20373 13.3469 4.35772 13.4466 4.53411C13.4466 4.36411 13.4466 4.23412 13.5166 4.10412C13.5217 4.03162 13.5549 3.96398 13.609 3.91546C13.6631 3.86694 13.734 3.84133 13.8066 3.84411H15.4066C15.6166 3.84411 15.7266 3.98412 15.6966 4.22412C15.6266 4.62412 15.5667 5.03415 15.4967 5.44415C15.2867 6.76415 15.0767 8.08415 14.8767 9.44415C14.7967 9.95415 14.7166 10.1542 14.0866 10.1342C13.7166 10.1342 13.3366 10.1342 12.9566 10.1342C12.5766 10.1342 12.6067 10.0142 12.6267 9.76416C12.6467 9.51416 12.6966 9.4841 12.6966 9.3341ZM11.8166 5.40411H11.5366C11.1085 5.46744 10.7165 5.67964 10.4294 6.00335C10.1423 6.32706 9.97845 6.74159 9.96664 7.17413C9.93915 7.45031 10.0091 7.72743 10.1643 7.95751C10.3195 8.1876 10.5502 8.3562 10.8166 8.43414C11.088 8.52094 11.3768 8.53812 11.6566 8.48413C11.894 8.44909 12.1221 8.36667 12.327 8.24176C12.5319 8.11684 12.7096 7.952 12.8496 7.75701C12.9895 7.56203 13.0888 7.34088 13.1416 7.10675C13.1943 6.87261 13.1994 6.63025 13.1566 6.3941C13.0896 6.09503 12.9151 5.83105 12.6662 5.65222C12.4173 5.47339 12.1114 5.3922 11.8066 5.42413L11.8166 5.40411Z"
                                fill="white"></path>
                              <path
                                d="M36.7765 9.42428L36.4966 9.64425C36.0777 9.97072 35.5833 10.1867 35.0591 10.2723C34.5349 10.3579 33.9977 10.3105 33.4966 10.1343C33.081 10.0003 32.7123 9.75018 32.4341 9.41354C32.156 9.0769 31.9799 8.66772 31.9266 8.23428C31.7447 7.27672 31.9367 6.28585 32.4631 5.46554C32.9895 4.64523 33.8104 4.05789 34.7566 3.82431C35.3691 3.69397 36.004 3.71456 36.6066 3.88431C36.8014 3.93097 36.9844 4.01718 37.1443 4.1376C37.3043 4.25802 37.4378 4.41004 37.5366 4.58426C37.5366 4.42426 37.5866 4.30428 37.6066 4.17428C37.6266 4.04428 37.7266 3.89425 37.9266 3.89425H39.4766C39.5241 3.88902 39.5721 3.89562 39.6164 3.91342C39.6607 3.93122 39.7 3.9597 39.7306 3.9963C39.7613 4.03291 39.7824 4.07651 39.7922 4.12326C39.8019 4.17001 39.8 4.21849 39.7866 4.26431C39.4966 6.07431 39.2166 7.88429 38.9266 9.68429C38.9243 9.75101 38.9082 9.81655 38.8792 9.87668C38.8502 9.9368 38.8089 9.99018 38.7581 10.0335C38.7073 10.0768 38.648 10.109 38.584 10.1281C38.5201 10.1472 38.4528 10.1526 38.3865 10.1443H37.0466C36.7966 10.1443 36.6966 10.0343 36.7166 9.78427C36.7532 9.66763 36.7733 9.54648 36.7765 9.42428ZM35.9166 5.42428H35.6566C35.2407 5.47905 34.8568 5.67652 34.5705 5.98294C34.2841 6.28936 34.1131 6.68572 34.0866 7.10428C34.0467 7.35151 34.0838 7.60505 34.1929 7.83047C34.3021 8.05589 34.4779 8.24227 34.6966 8.36429C35.0071 8.51431 35.3568 8.56328 35.6966 8.5043C35.9372 8.47056 36.1685 8.38844 36.3765 8.26291C36.5846 8.13737 36.7651 7.97099 36.9072 7.77383C37.0492 7.57668 37.1498 7.35278 37.2029 7.11569C37.2561 6.8786 37.2608 6.63319 37.2166 6.39425C37.1453 6.1073 36.9768 5.85392 36.7398 5.67709C36.5028 5.50027 36.2119 5.41094 35.9166 5.42428Z"
                                fill="white"></path>
                              <path
                                d="M19.7765 7.3445L21.4466 4.89448L21.9966 4.08449C22.044 4.00851 22.1104 3.94638 22.1894 3.90425C22.2684 3.86212 22.3571 3.84148 22.4466 3.8445H23.9966C24.0555 3.83837 24.1148 3.85044 24.1667 3.87904C24.2185 3.90764 24.2603 3.95144 24.2865 4.00453C24.3179 4.05199 24.3348 4.1076 24.3348 4.1645C24.3348 4.2214 24.3179 4.27708 24.2865 4.32454C22.5065 6.90454 20.7232 9.47784 18.9366 12.0445C18.886 12.1221 18.816 12.1851 18.7336 12.2272C18.6511 12.2693 18.5591 12.289 18.4666 12.2845H16.9566C16.8959 12.2929 16.834 12.2832 16.7789 12.2565C16.7237 12.2298 16.6776 12.1874 16.6465 12.1345C16.6146 12.0836 16.5977 12.0246 16.5977 11.9645C16.5977 11.9044 16.6146 11.8455 16.6465 11.7945L18.2166 9.58449C18.2407 9.54725 18.2535 9.50384 18.2535 9.45949C18.2535 9.41513 18.2407 9.37172 18.2166 9.33449C17.6433 7.67449 17.0765 6.00782 16.5165 4.33449C16.5135 4.28119 16.5135 4.2278 16.5165 4.17451C16.5038 4.13529 16.5007 4.09362 16.5072 4.05293C16.5138 4.01224 16.5301 3.97371 16.5545 3.9405C16.5789 3.90729 16.6109 3.88031 16.6478 3.86189C16.6846 3.84347 16.7253 3.83407 16.7665 3.83449H18.4366C18.6666 3.83449 18.7866 4.0045 18.8566 4.2245C19.0566 4.9045 19.2666 5.5845 19.4666 6.2245C19.5566 6.6345 19.6965 6.9745 19.7765 7.3445Z"
                                fill="white"></path>
                              <path
                                d="M40.4065 10.0944C40.1265 10.0944 40.0165 9.97443 40.0565 9.70443C40.1465 9.16443 40.2265 8.62437 40.3165 8.08437L40.8865 4.48439C41.0665 3.31439 41.2565 2.14439 41.4365 0.984394C41.4378 0.948039 41.4464 0.91231 41.4618 0.879353C41.4772 0.846395 41.4991 0.816905 41.5261 0.792622C41.5532 0.768338 41.585 0.749778 41.6194 0.738056C41.6538 0.726334 41.6903 0.721668 41.7266 0.724384H43.2566C43.4866 0.724384 43.5865 0.864399 43.5465 1.1144C43.5065 1.3644 43.4166 1.92437 43.3566 2.33437L42.7865 5.94442C42.5865 7.18442 42.3966 8.42439 42.1966 9.66439C42.1916 9.72712 42.1741 9.78824 42.145 9.84407C42.116 9.89991 42.076 9.9493 42.0275 9.9894C41.979 10.0295 41.923 10.0595 41.8627 10.0775C41.8024 10.0956 41.7391 10.1013 41.6765 10.0944H40.4065Z"
                                fill="white"></path>
                            </svg>
                          </li>
                          <li>
                            <svg width="34" height="21" viewBox="0 0 34 21" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M32.3953 1.15995L33.3052 11.2499H30.5253L30.4452 9.76994H27.1653C27.1218 9.76346 27.0775 9.77309 27.0406 9.79704C27.0038 9.82098 26.9769 9.8576 26.9652 9.89994C26.7852 10.2999 26.5953 10.6899 26.4153 11.0899L26.3252 11.2699H23.3252C23.3252 11.2099 23.3253 11.15 23.4053 11.1L27.1152 4.09996L28.6252 1.25993C28.6452 1.21627 28.6777 1.1796 28.7188 1.15464C28.7598 1.12969 28.8073 1.11757 28.8552 1.11991H32.3552L32.3953 1.15995ZM30.1753 2.93992L27.9652 7.86991H30.3452C30.2752 6.21991 30.1253 4.57992 30.1753 2.93992Z"
                                fill="white"></path>
                              <path
                                d="M33.3654 13.6999L33.2253 17.0299L32.7253 16.9299C31.7253 16.7399 30.7754 16.5699 29.7854 16.4299C28.7954 16.2899 27.6354 16.1499 26.5454 16.0599C24.6164 15.9015 22.6796 15.8581 20.7454 15.9299C19.6654 15.9765 18.5854 16.0565 17.5054 16.1699C15.7337 16.3599 13.9741 16.6504 12.2354 17.0399C9.97008 17.5453 7.74425 18.2137 5.57532 19.0399C4.76532 19.3399 3.97541 19.6799 3.17542 20.0399L3.0354 20.0899C3.04068 20.0367 3.04068 19.9831 3.0354 19.9299V19.7799L3.14539 19.7199C5.28539 18.7199 7.44542 17.7199 9.67542 16.8499C12.1797 15.8856 14.7538 15.1134 17.3754 14.5399C18.5054 14.2899 19.6453 14.0799 20.8053 13.9199C21.8053 13.7799 22.7453 13.6599 23.7253 13.5799C25.4349 13.4399 27.1506 13.3898 28.8654 13.4299C29.9954 13.4299 31.1254 13.5199 32.2554 13.6099L33.2554 13.7099L33.3654 13.6999Z"
                                fill="white"></path>
                              <path
                                d="M6.33521 11.2595H3.49524C3.49524 11.1395 3.49524 11.0195 3.49524 10.9095L3.28528 9.06951L3.04529 6.9395C2.98529 6.3295 2.91521 5.71948 2.84521 5.10948C2.77521 4.49948 2.70524 3.8295 2.62524 3.1895C2.59396 2.94748 2.52659 2.71151 2.42529 2.48949C2.30789 2.22279 2.12389 1.99078 1.89099 1.81566C1.65809 1.64055 1.38402 1.52821 1.09521 1.48949C0.925215 1.48949 0.745176 1.48949 0.555176 1.42949V1.17949H5.15527C5.15062 1.21266 5.15062 1.24636 5.15527 1.27953C5.21527 2.27953 5.29522 3.27952 5.35522 4.32952C5.41522 5.37952 5.46526 6.32953 5.51526 7.27953C5.51526 7.45953 5.51526 7.64948 5.51526 7.85948V7.79949C5.64973 7.33109 5.84824 6.88357 6.10522 6.46953C7.08522 4.7362 8.08522 3.00619 9.10522 1.27953C9.11926 1.24626 9.14302 1.21797 9.17334 1.19835C9.20366 1.17873 9.23917 1.16865 9.27527 1.16948H12.0253L6.33521 11.2595Z"
                                fill="white"></path>
                              <path
                                d="M14.9954 10.3798L16.2954 8.37984L16.4453 8.45985C16.7353 8.61985 17.0153 8.78983 17.3053 8.93983C17.9471 9.25733 18.6606 9.40207 19.3754 9.35982C19.5451 9.35016 19.713 9.31998 19.8754 9.26985C20.0331 9.21511 20.1759 9.12416 20.2922 9.00435C20.4086 8.88453 20.4953 8.73917 20.5454 8.57985C20.5823 8.49105 20.5943 8.39391 20.5802 8.29878C20.5661 8.20366 20.5264 8.11415 20.4653 8.03987C20.3806 7.91665 20.2759 7.80848 20.1554 7.71986L19.3854 7.21986C18.8559 6.91122 18.357 6.55293 17.8954 6.14986C17.7654 6.01986 17.6354 5.88983 17.5154 5.74983C17.2701 5.47118 17.0948 5.13797 17.0044 4.77791C16.9139 4.41784 16.9109 4.04133 16.9954 3.67982C17.0679 3.30477 17.1996 2.9436 17.3854 2.60982C17.7394 2.00614 18.2849 1.53808 18.9353 1.27986C19.4803 1.05922 20.0583 0.930798 20.6454 0.899856C21.9909 0.825146 23.3225 1.20559 24.4254 1.97987C24.4911 2.02327 24.5545 2.06995 24.6154 2.11983L23.1254 3.86983L23.0054 3.78987C22.7181 3.55666 22.4062 3.35544 22.0753 3.18983C21.6094 2.96521 21.0839 2.89513 20.5753 2.98982C20.3982 3.0266 20.2289 3.09432 20.0753 3.18983C19.984 3.24743 19.9067 3.32456 19.8488 3.41566C19.7908 3.50677 19.7539 3.60963 19.7405 3.71675C19.7271 3.82387 19.7375 3.93261 19.7712 4.03517C19.8049 4.13773 19.861 4.23153 19.9353 4.30983C20.0722 4.44738 20.2194 4.57441 20.3754 4.68983C20.6854 4.89983 21.0054 5.09982 21.3754 5.29982C21.8272 5.58659 22.2464 5.92191 22.6254 6.29982C22.8712 6.54866 23.08 6.83158 23.2454 7.13985C23.3985 7.42119 23.4877 7.73282 23.5067 8.05257C23.5257 8.37232 23.4741 8.69231 23.3553 8.98982C23.1039 9.68596 22.6643 10.2987 22.0853 10.7598C21.5917 11.1283 21.0146 11.3688 20.4054 11.4599C18.5825 11.7669 16.7098 11.4122 15.1254 10.4599L14.9954 10.3798Z"
                                fill="white"></path>
                              <path
                                d="M13.1654 11.2496H10.4453L13.5054 1.13965H16.2153C16.2153 1.25965 13.2754 11.0196 13.1654 11.2496Z"
                                fill="white"></path>
                            </svg>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="app-f-accordion__item app-f-footer-item app-f-footer-item-mb">
                  <div className="app-f-accordion__title">
                                <span className="app-f-accordion__icon-wrapper">
                                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0.950195L9 8.9502L17 0.950195" stroke="white" strokeWidth="0.5"
                                              strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                  </span> Accepted Payments
                  </div>
                  <div className="app-f-accordion__description">
                    <ul className="app-f-payments-list">
                      <li>
                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.46002 17.8402L9.83997 18.3502C9.86014 18.3758 9.88602 18.3964 9.91553 18.4103C9.94503 18.4242 9.97741 18.431 10.01 18.4302H12.3C12.39 18.4302 12.43 18.4302 12.42 18.3002C12.41 18.1702 12.42 17.8502 12.42 17.6202C12.42 17.3902 12.42 17.5102 12.54 17.5102C12.66 17.5102 13.02 17.5102 13.26 17.5102C13.3998 17.4914 13.5372 17.4579 13.67 17.4102C13.67 17.7002 13.67 17.9802 13.67 18.2602C13.67 18.5402 13.67 18.4502 13.86 18.4502H15.22C15.32 18.4502 15.36 18.4502 15.35 18.3202V17.8502L15.74 18.3402C15.7684 18.3762 15.805 18.4049 15.8467 18.4241C15.8885 18.4432 15.9341 18.4522 15.98 18.4502H23.98C24.3635 18.4717 24.7443 18.3739 25.07 18.1702V18.2702C25.07 20.8202 25.07 23.3602 25.07 25.9102C25.07 26.0102 25.07 26.0302 24.93 26.0302H0.130005C0.0300049 26.0302 0 26.0302 0 25.9002V13.4002C0 13.3102 4.88758e-06 13.2702 0.130005 13.2702H1.04999C1.0815 13.2735 1.11314 13.2651 1.13892 13.2467C1.1647 13.2283 1.18286 13.2011 1.19 13.1702C1.25 13.0202 1.30999 12.8802 1.35999 12.7402C1.40999 12.6002 1.41999 12.6602 1.48999 12.6602H1.92999C1.94446 12.6573 1.95937 12.6574 1.97382 12.6604C1.98826 12.6634 2.00197 12.6693 2.0141 12.6777C2.02623 12.6861 2.03654 12.6968 2.04443 12.7093C2.05232 12.7218 2.0576 12.7356 2.06 12.7502C2.12 12.9002 2.17998 13.0402 2.22998 13.1802C2.27998 13.3202 2.28999 13.2702 2.35999 13.2602H11.55C11.74 13.2602 11.74 13.2602 11.74 13.0802V12.6602C11.8467 12.7814 11.9469 12.9083 12.04 13.0402C12.0911 13.119 12.1629 13.1822 12.2476 13.2228C12.3323 13.2634 12.4266 13.2798 12.52 13.2702H14.52C14.79 13.2702 14.79 13.2702 14.79 13.0102V12.8702H14.86C15.1495 13.0868 15.4986 13.209 15.86 13.2202H17.47C17.5015 13.2235 17.5331 13.2151 17.5589 13.1967C17.5847 13.1782 17.6028 13.151 17.61 13.1202C17.67 12.9702 17.72 12.8202 17.79 12.6802C17.7996 12.6613 17.8138 12.645 17.8312 12.6328C17.8487 12.6205 17.8689 12.6128 17.89 12.6102H18.4C18.4222 12.6135 18.4435 12.6214 18.4625 12.6335C18.4814 12.6455 18.4976 12.6615 18.51 12.6802L18.69 13.1202C18.6949 13.1502 18.7111 13.1773 18.7352 13.1959C18.7594 13.2144 18.7897 13.2232 18.82 13.2202H21.11C21.21 13.2202 21.24 13.2202 21.23 13.0902V12.5302L21.59 13.1002C21.6083 13.1394 21.6384 13.172 21.676 13.1935C21.7136 13.215 21.7569 13.2243 21.8 13.2202H23.26C23.36 13.2202 23.39 13.2202 23.39 13.0802C23.39 11.8502 23.39 10.6102 23.39 9.37018C23.39 9.28018 23.39 9.25018 23.27 9.25018H21.66V9.8902C21.54 9.7002 21.41 9.5202 21.3 9.3302C21.2841 9.29979 21.2593 9.27491 21.2289 9.25885C21.1986 9.24279 21.1641 9.23631 21.13 9.24023H19.62C19.52 9.24023 19.5 9.24023 19.5 9.36023C19.5 9.69023 19.5 10.0302 19.5 10.3602C19.45 10.2502 19.4 10.1402 19.36 10.0302C19.32 9.92021 19.15 9.55018 19.05 9.31018C19.0409 9.28117 19.0219 9.25631 18.9963 9.23987C18.9707 9.22342 18.9402 9.21647 18.91 9.22021H15.91C15.5496 9.2369 15.2021 9.35853 14.91 9.57019L14.8 9.65021C14.8 9.54021 14.8 9.44021 14.8 9.34021C14.8 9.24021 14.8 9.22021 14.68 9.22021H5.83997C5.81819 9.21593 5.79577 9.21622 5.77411 9.22107C5.75245 9.22592 5.73204 9.23525 5.71417 9.24841C5.6963 9.26158 5.6814 9.2783 5.67035 9.29755C5.6593 9.3168 5.65232 9.33816 5.64996 9.36023L5.39996 10.0802L5.17999 9.47021C5.08999 9.22021 5.09002 9.22021 4.83002 9.22021H3.14996C3.04996 9.22021 3.02997 9.22021 3.02997 9.34021C3.02997 9.68021 3.02997 10.0202 3.02997 10.3402L2.64001 9.43024C2.54001 9.20024 2.53999 9.2002 2.29999 9.2002H1.03998C0.929978 9.2002 0.879966 9.20019 0.839966 9.32019C0.569966 9.97019 0.30002 10.6102 0.0200195 11.2502V11.3302V1.11023C0.0200195 0.950229 0.0199927 0.950195 0.179993 0.950195H24.93C25.09 0.950195 25.09 0.950229 25.09 1.11023V14.3102C25.09 14.4702 25.09 14.4702 24.93 14.4702H10.07C10.0227 14.4653 9.97506 14.474 9.93256 14.4953C9.89005 14.5166 9.85448 14.5495 9.83002 14.5902L9.46997 15.0602C9.35997 14.9102 9.24997 14.7802 9.15997 14.6402C9.12481 14.583 9.07437 14.5367 9.01428 14.5067C8.9542 14.4766 8.8869 14.464 8.82001 14.4702H5C4.86 14.4702 4.85999 14.4702 4.85999 14.6102V18.2802C4.85999 18.4302 4.86 18.4302 5 18.4302H8.92999C8.96773 18.4322 9.00532 18.4239 9.03876 18.4063C9.0722 18.3887 9.10025 18.3624 9.12 18.3302C9.2 18.1702 9.32002 18.0102 9.46002 17.8402Z"
                            fill="white"></path>
                          <path
                            d="M6.50995 10.6006C6.50597 10.6338 6.50597 10.6673 6.50995 10.7005L5.81995 12.6305C5.81995 12.7205 5.7499 12.7605 5.6499 12.7505H5.26996C5.25151 12.7566 5.23191 12.7585 5.21265 12.756C5.19338 12.7535 5.17494 12.7468 5.15863 12.7362C5.14232 12.7257 5.12856 12.7116 5.11841 12.695C5.10825 12.6785 5.10193 12.6599 5.09991 12.6405C4.87991 11.9905 4.63991 11.3505 4.40991 10.7005C4.41389 10.6673 4.41389 10.6338 4.40991 10.6006C4.40497 10.6371 4.40497 10.674 4.40991 10.7105V12.6106C4.40991 12.7506 4.40996 12.7505 4.26996 12.7505H3.80994C3.71994 12.7505 3.68994 12.7505 3.68994 12.6305V9.90055C3.68994 9.84055 3.68996 9.81052 3.76996 9.81052H4.76996C4.79325 9.81498 4.81483 9.82573 4.83246 9.84159C4.85008 9.85745 4.86306 9.87785 4.86993 9.90055L5.45996 11.5705C5.45688 11.6105 5.45688 11.6506 5.45996 11.6905C5.45996 11.6205 5.45996 11.5906 5.45996 11.5506C5.65996 11.0006 5.84992 10.4506 6.03992 9.91056C6.04107 9.89382 6.04574 9.87747 6.05359 9.86265C6.06144 9.84782 6.07232 9.8348 6.08551 9.82444C6.0987 9.81407 6.11392 9.80659 6.13019 9.80247C6.14645 9.79835 6.1634 9.79774 6.17993 9.80057H7.17993C7.25993 9.80057 7.28992 9.80056 7.28992 9.91056C7.28992 10.8206 7.28992 11.7205 7.28992 12.6305C7.28992 12.7205 7.28992 12.7406 7.16992 12.7406H6.67993C6.58993 12.7406 6.55994 12.7405 6.55994 12.6205C6.55994 11.9905 6.55994 11.3505 6.55994 10.7105C6.55994 10.7105 6.55994 10.6306 6.55994 10.5906L6.50995 10.6006Z"
                            fill="white"></path>
                          <path
                            d="M22.17 11.6102V9.93023C22.17 9.84023 22.17 9.81017 22.28 9.81017H22.79C22.87 9.81017 22.8901 9.81021 22.8901 9.91021V12.6602C22.8901 12.7202 22.89 12.7502 22.8 12.7502H22.0801C22.029 12.7333 21.9839 12.7021 21.9501 12.6602L20.9501 11.0402C20.9188 10.9781 20.8745 10.9235 20.8201 10.8802C20.8201 10.8802 20.8201 10.9602 20.8201 11.0002C20.8201 11.5402 20.8201 12.0902 20.8201 12.6402C20.8201 12.7202 20.8201 12.7502 20.7101 12.7502H20.17C20.1 12.7502 20.0801 12.7502 20.0801 12.6502V9.92022C20.0801 9.84022 20.0801 9.81017 20.1801 9.81017H20.9301C20.9611 9.809 20.9918 9.8169 21.0184 9.83288C21.0451 9.84886 21.0665 9.87226 21.0801 9.9002C21.4201 10.4302 21.7701 10.9602 22.0801 11.5002L22.16 11.6102H22.17Z"
                            fill="white"></path>
                          <path
                            d="M16.0599 16.8502L16.9999 17.9202C16.8201 17.9102 16.6398 17.9102 16.46 17.9202C16.3472 17.9413 16.2306 17.9266 16.1266 17.8782C16.0226 17.8298 15.9364 17.7501 15.8799 17.6502C15.7199 17.4202 15.5 17.2202 15.33 16.9902C15.16 16.7602 15.0799 16.8702 14.9199 16.8802V17.8302C14.9199 17.8902 14.9199 17.9202 14.8399 17.9202H14.2799C14.1899 17.9202 14.1799 17.9202 14.1799 17.8002V16.0902C14.1799 15.7602 14.1799 15.4302 14.1799 15.0902C14.1799 15.0002 14.1799 14.9702 14.2899 14.9702H15.9299C16.1493 14.9796 16.3584 15.0653 16.5211 15.2127C16.6837 15.3601 16.7897 15.5598 16.8206 15.7772C16.8515 15.9945 16.8053 16.2158 16.6901 16.4026C16.5749 16.5895 16.398 16.7302 16.1899 16.8002L16.0599 16.8502ZM14.9199 16.2402H15.7599C15.8017 16.2459 15.8443 16.2426 15.8847 16.2307C15.9252 16.2188 15.9626 16.1985 15.9947 16.1711C16.0268 16.1438 16.0527 16.11 16.0709 16.0719C16.089 16.0338 16.0989 15.9923 16.0999 15.9502C16.1012 15.9082 16.0943 15.8663 16.0795 15.827C16.0646 15.7876 16.0421 15.7516 16.0133 15.7209C15.9845 15.6903 15.95 15.6657 15.9117 15.6484C15.8734 15.6311 15.8319 15.6215 15.7899 15.6202H14.9199V16.2402Z"
                            fill="white"></path>
                          <path
                            d="M13.4399 12.7505H12.58C12.58 12.7505 12.5099 12.7506 12.4899 12.6806L11.71 11.7706C11.6658 11.7312 11.6121 11.704 11.5542 11.6918C11.4963 11.6795 11.4363 11.6825 11.3799 11.7006C11.3733 11.7164 11.3699 11.7334 11.3699 11.7505C11.3699 11.7677 11.3733 11.7848 11.3799 11.8006C11.3799 12.0806 11.3799 12.3606 11.3799 12.6406C11.3799 12.7306 11.3799 12.7605 11.2599 12.7505H10.7499C10.6899 12.7505 10.6499 12.7506 10.6499 12.6606V9.91058C10.6499 9.84058 10.6499 9.81055 10.7499 9.81055H12.4199C12.6382 9.81482 12.8471 9.90011 13.006 10.0498C13.165 10.1995 13.2626 10.4029 13.2799 10.6205C13.3137 10.8408 13.2637 11.0659 13.1396 11.251C13.0156 11.4362 12.8265 11.568 12.6099 11.6205H12.52L13.4399 12.7505ZM12.2 11.0706C12.2415 11.0733 12.2831 11.0676 12.3224 11.0538C12.3617 11.0401 12.3978 11.0186 12.4286 10.9906C12.4594 10.9626 12.4842 10.9287 12.5016 10.8909C12.5191 10.8531 12.5287 10.8122 12.5299 10.7706C12.5299 10.7285 12.5216 10.687 12.5056 10.6481C12.4895 10.6093 12.4659 10.574 12.4362 10.5443C12.4065 10.5146 12.3712 10.491 12.3324 10.4749C12.2936 10.4588 12.252 10.4506 12.21 10.4506H11.4299C11.3599 10.4506 11.3399 10.4506 11.3399 10.5406C11.3399 10.6306 11.3399 10.8306 11.3399 10.9806C11.3399 11.1306 11.3399 11.0806 11.4299 11.0706H12.2Z"
                            fill="white"></path>
                          <path
                            d="M7.78003 9.9306C7.78003 9.8406 7.78008 9.81055 7.89008 9.81055H10.0701C10.1501 9.81055 10.18 9.81059 10.17 9.92059V10.4006C10.17 10.4806 10.1701 10.5005 10.0701 10.5005H8.63007C8.53007 10.5005 8.50006 10.5005 8.50006 10.6205C8.51005 10.7103 8.51005 10.8008 8.50006 10.8906C8.50006 10.9706 8.50005 11.0005 8.61005 11.0005H10.0001C10.1001 11.0005 10.1401 11.0005 10.1301 11.1205C10.1201 11.2405 10.1301 11.3706 10.1301 11.4906C10.1301 11.6106 10.13 11.6306 9.98004 11.6306H8.63007C8.53007 11.6306 8.50006 11.6305 8.50006 11.7505C8.51006 11.8436 8.51006 11.9375 8.50006 12.0306C8.50006 12.1206 8.50007 12.1506 8.63007 12.1506H10.05C10.15 12.1506 10.18 12.1506 10.17 12.2806V12.7206C10.17 12.7806 10.17 12.8006 10.09 12.8006H7.87006C7.79006 12.8006 7.78003 12.8006 7.78003 12.7006V9.9306Z"
                            fill="white"></path>
                          <path
                            d="M6.10995 17.2604H7.63998C7.74998 17.2604 7.76998 17.2604 7.76998 17.3904C7.75998 17.5369 7.75998 17.6839 7.76998 17.8304C7.76998 17.9004 7.76996 17.9205 7.67996 17.9205H5.45998C5.36998 17.9205 5.37997 17.8605 5.37997 17.8005V15.0704C5.37997 15.0004 5.37993 14.9805 5.46993 14.9805H7.67996C7.74996 14.9805 7.76998 14.9804 7.76998 15.0804C7.75997 15.2203 7.75997 15.3606 7.76998 15.5004C7.76998 15.5904 7.76993 15.6204 7.64993 15.6204H6.24996C6.10996 15.6204 6.10995 15.6204 6.10995 15.7504V15.9604C6.10995 16.1204 6.10994 16.1304 6.28994 16.1304H7.44998C7.72997 16.1304 7.72994 16.1305 7.72994 16.4105C7.72496 16.487 7.72496 16.5639 7.72994 16.6404C7.72994 16.7204 7.72996 16.7504 7.61996 16.7504H6.25997C6.10997 16.7504 6.10995 16.7505 6.10995 16.9005V17.2604Z"
                            fill="white"></path>
                          <path
                            d="M17.9299 17.2604H19.4699C19.5499 17.2604 19.59 17.2604 19.58 17.3704V17.8304C19.58 17.9004 19.5799 17.9205 19.4899 17.9205H17.2899C17.2099 17.9205 17.1899 17.9204 17.1899 17.8204V15.0804C17.1899 15.0104 17.1899 14.9805 17.2899 14.9805H19.4899C19.5599 14.9805 19.58 14.9804 19.58 15.0704V15.5104C19.58 15.6004 19.5799 15.6204 19.4799 15.6204H18.0499C17.9499 15.6204 17.9199 15.6204 17.9299 15.7504C17.9349 15.8337 17.9349 15.9172 17.9299 16.0004C17.9299 16.1104 17.9299 16.1404 18.0599 16.1404H19.2999C19.5399 16.1404 19.5399 16.1404 19.5399 16.3804C19.5349 16.467 19.5349 16.5538 19.5399 16.6404C19.5399 16.7304 19.5399 16.7604 19.4299 16.7604H18.0899C17.9099 16.7604 17.9299 16.7605 17.9299 16.9305V17.2604Z"
                            fill="white"></path>
                          <path
                            d="M0 12.7504L0.369995 11.9004L1.21002 9.90044C1.21729 9.86497 1.23799 9.83373 1.26782 9.81322C1.29765 9.79271 1.33428 9.78454 1.37 9.79045H2.10999C2.14407 9.78629 2.17858 9.79392 2.2077 9.81212C2.23682 9.83032 2.25883 9.85796 2.27002 9.89043C2.62002 10.7304 2.97997 11.5704 3.33997 12.4104L3.47998 12.7305H2.92999C2.65999 12.7305 2.66 12.7305 2.56 12.4805C2.56 12.4105 2.49998 12.3404 2.47998 12.2604C2.45998 12.1804 2.39002 12.1204 2.27002 12.1204H1.15997C1.07997 12.1204 1.04002 12.1204 1.02002 12.2104C1.00002 12.3004 0.909976 12.5004 0.849976 12.6404C0.842892 12.6686 0.825853 12.6933 0.801941 12.7099C0.778029 12.7264 0.748866 12.7338 0.719971 12.7305L0 12.7504ZM1.73999 10.5004L1.33997 11.5004H2.17999L1.73999 10.5004Z"
                            fill="white"></path>
                          <path
                            d="M19.9299 12.7504H19.1599C19.1599 12.7504 19.1 12.7005 19.08 12.6705L18.8999 12.2205C18.8929 12.1949 18.8769 12.1727 18.8549 12.158C18.8328 12.1433 18.8062 12.1371 18.7799 12.1405H17.5899C17.5622 12.1375 17.5345 12.1451 17.5122 12.1618C17.4899 12.1785 17.4748 12.2031 17.4699 12.2305L17.2899 12.6705C17.2899 12.6705 17.2399 12.7504 17.2199 12.7504H16.46L16.6299 12.3405C16.9799 11.5305 17.3299 10.7205 17.6299 9.91048C17.6392 9.87881 17.6593 9.85138 17.6867 9.83308C17.7141 9.81479 17.7471 9.80677 17.7799 9.81044H18.5499C18.5785 9.80906 18.6067 9.81718 18.6302 9.83345C18.6537 9.84972 18.6712 9.87326 18.6799 9.90047C19.0699 10.8205 19.4699 11.7405 19.8599 12.6705C19.8873 12.6933 19.9109 12.7203 19.9299 12.7504ZM18.2 10.5105L17.7999 11.5105H18.64L18.2 10.5105Z"
                            fill="white"></path>
                          <path
                            d="M25.0799 14.9804C24.9799 15.1904 24.8999 15.3904 24.8099 15.5804C24.8099 15.5804 24.7399 15.5804 24.6999 15.5804H23.5398C23.4807 15.5723 23.4207 15.5848 23.3697 15.6158C23.3188 15.6467 23.28 15.6942 23.2599 15.7504C23.2489 15.7819 23.2444 15.8153 23.2466 15.8485C23.2487 15.8818 23.2575 15.9143 23.2724 15.9441C23.2873 15.9739 23.3081 16.0005 23.3334 16.0222C23.3587 16.0439 23.3881 16.0602 23.4198 16.0704H24.3299C24.4444 16.0678 24.5581 16.0902 24.6631 16.136C24.7681 16.1817 24.8619 16.2497 24.938 16.3354C25.0141 16.421 25.0707 16.5221 25.1038 16.6318C25.1369 16.7415 25.1458 16.857 25.1299 16.9704C25.125 17.1962 25.0345 17.4117 24.8766 17.5733C24.7188 17.7348 24.5054 17.8303 24.2798 17.8404H22.7198C22.6398 17.8404 22.6098 17.8404 22.6098 17.7304C22.6098 17.6204 22.6098 17.4304 22.6098 17.2804C22.6098 17.1304 22.6099 17.1804 22.7099 17.1804H24.1199C24.2999 17.1804 24.4098 17.0904 24.4098 16.9404C24.4098 16.7904 24.2999 16.6904 24.1199 16.6904H23.3998C23.2656 16.6971 23.1316 16.6726 23.0085 16.6188C22.8853 16.565 22.7762 16.4834 22.6899 16.3804C22.5971 16.256 22.5376 16.1099 22.5172 15.9561C22.4968 15.8022 22.516 15.6457 22.5732 15.5014C22.6303 15.3571 22.7234 15.2298 22.8435 15.1316C22.9637 15.0334 23.1071 14.9676 23.2599 14.9404C23.3462 14.93 23.4335 14.93 23.5199 14.9404H25.0799V14.9804Z"
                            fill="white"></path>
                          <path
                            d="M22.37 14.9805L22.1 15.5704C22.0645 15.5834 22.0255 15.5834 21.99 15.5704H20.82C20.63 15.5704 20.52 15.6905 20.55 15.8605C20.58 16.0305 20.67 16.0804 20.85 16.0804H21.62C21.7441 16.076 21.8674 16.1008 21.9801 16.1528C22.0927 16.2049 22.1915 16.2828 22.2685 16.3802C22.3454 16.4776 22.3983 16.5918 22.4229 16.7134C22.4475 16.8351 22.4431 16.9608 22.41 17.0804C22.3946 17.2909 22.2988 17.4872 22.1424 17.6288C21.9859 17.7703 21.7809 17.8462 21.57 17.8405C21.22 17.8405 20.86 17.8405 20.5 17.8405H20.01C19.93 17.8405 19.91 17.8405 19.91 17.7305V17.4005C19.91 17.3305 19.91 17.3005 20.01 17.3005H21.41C21.4458 17.3046 21.482 17.3013 21.5164 17.2908C21.5508 17.2802 21.5826 17.2626 21.6099 17.2391C21.6372 17.2156 21.6593 17.1867 21.6748 17.1542C21.6903 17.1218 21.6989 17.0864 21.7 17.0505C21.7 16.9005 21.59 16.8005 21.41 16.8005H20.69C20.5771 16.808 20.4639 16.7923 20.3573 16.7545C20.2506 16.7167 20.1529 16.6574 20.07 16.5804C19.9496 16.464 19.8649 16.3155 19.8259 16.1525C19.7869 15.9896 19.7953 15.8188 19.85 15.6605C19.8926 15.5006 19.982 15.3571 20.1067 15.2484C20.2314 15.1397 20.3858 15.0708 20.55 15.0505C20.6331 15.0407 20.717 15.0407 20.8 15.0505H22.37V14.9805Z"
                            fill="white"></path>
                          <path
                            d="M11.9299 16.9504C11.9299 17.2404 11.9299 17.5205 11.9299 17.7905C11.9299 17.8905 11.9299 17.9205 11.8099 17.9205H11.2899C11.2199 17.9205 11.1899 17.9204 11.1899 17.8204V15.0804C11.1899 15.0004 11.1899 14.9805 11.2899 14.9805H12.9299C13.1706 14.9855 13.4003 15.0826 13.5715 15.252C13.7426 15.4213 13.8423 15.6498 13.8499 15.8904C13.8561 16.1202 13.7829 16.3451 13.6426 16.5273C13.5024 16.7094 13.3037 16.8377 13.08 16.8904H12.7799L11.9299 16.9504ZM11.9299 16.2905H12.7799C12.8244 16.2947 12.8693 16.2895 12.9116 16.2753C12.954 16.2611 12.9929 16.2382 13.0259 16.208C13.0588 16.1779 13.0851 16.1412 13.103 16.1003C13.121 16.0594 13.1301 16.0151 13.1299 15.9705C13.1341 15.9255 13.1289 15.8802 13.1148 15.8373C13.1007 15.7944 13.078 15.7548 13.048 15.7211C13.018 15.6873 12.9814 15.6601 12.9404 15.6411C12.8995 15.6221 12.8551 15.6117 12.8099 15.6105H11.9999C11.9839 15.6132 11.969 15.6202 11.9567 15.6308C11.9443 15.6414 11.9351 15.6551 11.9299 15.6705V16.2905Z"
                            fill="white"></path>
                          <path
                            d="M7.85986 17.9203L8.30988 17.3502C8.52988 17.0802 8.73985 16.8002 8.96985 16.5402C8.99307 16.516 9.00604 16.4838 9.00604 16.4502C9.00604 16.4167 8.99307 16.3845 8.96985 16.3603C8.60985 15.9303 8.26985 15.4902 7.96985 15.0602V15.0002H8.75989C8.8095 15.0093 8.85499 15.0338 8.88989 15.0702L9.44989 15.8102L9.52985 15.8902C9.67985 15.6902 9.84986 15.5102 9.97986 15.3102C10.0324 15.1906 10.1252 15.0931 10.2421 15.0347C10.359 14.9763 10.4926 14.9605 10.6199 14.9903C10.7831 15.0003 10.9467 15.0003 11.1099 14.9903L10.8199 15.3502L9.99988 16.3502C9.99988 16.3502 9.99988 16.4402 9.99988 16.5002L11.0499 17.8003L11.1199 17.9102H10.3099C10.2776 17.911 10.2457 17.903 10.2175 17.8872C10.1894 17.8713 10.166 17.8482 10.1498 17.8202L9.5799 17.0802L9.50989 16.9903L9.42987 17.0802L8.85986 17.8302C8.84326 17.8571 8.81952 17.8788 8.79126 17.893C8.763 17.9071 8.73136 17.9131 8.69989 17.9102L7.85986 17.9203Z"
                            fill="white"></path>
                          <path
                            d="M16.41 12.1003L16.13 12.7103C16.1074 12.7187 16.0826 12.7187 16.06 12.7103C15.73 12.715 15.4084 12.6055 15.15 12.4003C14.9273 12.2079 14.7818 11.9415 14.74 11.6503C14.6479 11.2503 14.6937 10.8309 14.87 10.4603C14.9707 10.2611 15.1232 10.0929 15.3115 9.97321C15.4999 9.85353 15.717 9.78686 15.94 9.78027C16.24 9.78027 16.55 9.78027 16.85 9.78027C16.93 9.78027 16.96 9.78026 16.95 9.89026V10.4003C16.95 10.4703 16.95 10.4903 16.86 10.4903H16.22C15.6 10.4903 15.38 10.9303 15.43 11.4203C15.4404 11.5154 15.4605 11.6092 15.49 11.7003C15.5395 11.8202 15.6223 11.9235 15.7287 11.9979C15.835 12.0723 15.9603 12.1148 16.09 12.1202L16.41 12.1003Z"
                            fill="white"></path>
                          <path
                            d="M14.3101 11.2806C14.3101 11.7306 14.3101 12.1806 14.3101 12.6306C14.3101 12.7306 14.31 12.7605 14.17 12.7505H13.67C13.6 12.7505 13.5801 12.7506 13.5801 12.6606V9.90057C13.5801 9.84057 13.58 9.81055 13.67 9.81055H14.22C14.3 9.81055 14.3 9.86059 14.3 9.92059L14.3101 11.2806Z"
                            fill="white"></path>
                        </svg>
                      </li>
                      <li>
                        <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.2267 0.420988C11.0067 0.420988 11.7867 0.420988 12.5667 0.420988C14.77 0.501952 16.8562 1.43389 18.3867 3.02096C19.5167 4.17446 20.255 5.65445 20.4967 7.25101C20.6842 8.31672 20.6383 9.4104 20.362 10.4566C20.0858 11.5029 19.5858 12.4767 18.8967 13.311C17.6209 14.9409 15.7925 16.0472 13.7567 16.421C13.1497 16.533 12.5339 16.5899 11.9167 16.591C10.7767 16.591 9.62671 16.591 8.47671 16.591C6.55387 16.6295 4.67842 15.9925 3.17672 14.791C1.67063 13.6255 0.648477 11.9445 0.306726 10.071C0.0831922 8.99053 0.0813314 7.87585 0.301355 6.79465C0.521378 5.71344 0.958671 4.68817 1.58669 3.78097C2.27461 2.77648 3.19821 1.95586 4.2767 1.39096C5.54436 0.698358 6.97267 0.353359 8.41671 0.390959L10.2267 0.420988ZM15.7967 8.50101C15.7965 7.0296 15.3616 5.59103 14.5468 4.36581C13.732 3.14059 12.5736 2.18325 11.2168 1.61398C9.85993 1.04471 8.36522 0.888856 6.92013 1.16592C5.47504 1.44299 4.14395 2.14068 3.0939 3.17142C2.04384 4.20216 1.32157 5.52005 1.01772 6.95975C0.713876 8.39944 0.84197 9.89678 1.38595 11.2639C1.92993 12.6311 2.86552 13.8072 4.0754 14.6446C5.28528 15.482 6.71558 15.9434 8.18673 15.971C9.1822 15.9938 10.1721 15.8165 11.0978 15.4497C12.0235 15.0828 12.8661 14.5339 13.5758 13.8355C14.2854 13.137 14.8477 12.3031 15.2291 11.3834C15.6106 10.4636 15.8037 9.47669 15.7967 8.48099V8.50101Z"
                            fill="white"></path>
                          <path
                            d="M10.0767 12.7909V4.15088C10.9452 4.4913 11.6909 5.08563 12.2166 5.85626C12.7422 6.62689 13.0234 7.53805 13.0234 8.47089C13.0234 9.40372 12.7422 10.3149 12.2166 11.0856C11.6909 11.8562 10.9452 12.4505 10.0767 12.7909Z"
                            fill="white"></path>
                          <path
                            d="M6.58685 4.15088V12.7909C5.71835 12.4505 4.97262 11.8562 4.44696 11.0856C3.9213 10.3149 3.64014 9.40372 3.64014 8.47089C3.64014 7.53805 3.9213 6.62689 4.44696 5.85626C4.97262 5.08563 5.71835 4.4913 6.58685 4.15088Z"
                            fill="white"></path>
                        </svg>
                      </li>
                      <li>
                        <svg width="56" height="11" viewBox="0 0 56 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M34.9198 5.25867C34.9428 6.14144 34.7614 7.01757 34.3898 7.81866C34.0799 8.46723 33.6131 9.02823 33.0316 9.4508C32.4502 9.87338 31.7724 10.1442 31.0598 10.2387C30.2579 10.3842 29.4333 10.3431 28.6499 10.1187C27.8415 9.91699 27.1094 9.48423 26.5429 8.87335C25.9764 8.26248 25.6001 7.49992 25.4599 6.67871C25.2528 5.74886 25.2872 4.78149 25.5598 3.86871C25.7791 3.06046 26.2285 2.33335 26.8535 1.77588C27.4784 1.2184 28.2519 0.854576 29.0798 0.728698C29.9431 0.552806 30.8365 0.594035 31.6798 0.848693C32.458 1.06617 33.1598 1.49704 33.7059 2.09259C34.252 2.68814 34.6205 3.4246 34.7699 4.21869C34.8411 4.56196 34.8912 4.90925 34.9198 5.25867Z"
                            fill="white"></path>
                          <path
                            d="M0.639803 0.77864H3.14981C3.99405 0.771128 4.83423 0.895971 5.6398 1.14864C6.32407 1.343 6.93868 1.72847 7.41159 2.25984C7.88451 2.79121 8.19611 3.44644 8.30979 4.14864C8.51462 5.06061 8.51462 6.00668 8.30979 6.91865C8.17087 7.61776 7.8356 8.26277 7.34323 8.77815C6.85087 9.29354 6.22179 9.65793 5.52976 9.82863C4.87923 10.0151 4.20645 10.1127 3.52976 10.1187C2.60976 10.1187 1.69976 10.1187 0.779757 10.1187H0.689791C0.599791 9.96867 0.589803 1.13864 0.639803 0.77864ZM2.45981 8.66866C2.85981 8.66866 3.23979 8.66866 3.62979 8.66866C4.20433 8.65397 4.76165 8.46946 5.23148 8.13844C5.70131 7.80743 6.06262 7.34475 6.26981 6.80867C6.46029 6.36648 6.55348 5.88848 6.54312 5.40712C6.53277 4.92576 6.41913 4.45223 6.20981 4.01863C6.02269 3.56834 5.71959 3.17567 5.33139 2.88057C4.9432 2.58547 4.48373 2.39848 3.99979 2.33864C3.50024 2.30856 2.99934 2.30856 2.49979 2.33864L2.45981 8.66866Z"
                            fill="white"></path>
                          <path
                            d="M55.3598 10.1385H53.3598C53.2998 9.99855 53.2498 9.85857 53.1998 9.71857L52.2998 7.33856C52.2253 7.14325 52.1384 6.95286 52.0398 6.76855C51.9668 6.6235 51.8556 6.50116 51.7181 6.41479C51.5806 6.32842 51.4222 6.28132 51.2598 6.27856C50.9798 6.27856 50.6898 6.27856 50.3798 6.27856V10.1385H48.5898C48.5298 9.96855 48.5198 1.13859 48.5898 0.808594H52.0198C52.4828 0.818458 52.9415 0.899393 53.3798 1.04858C53.7957 1.16517 54.1627 1.41325 54.4258 1.75574C54.689 2.09822 54.8343 2.51666 54.8398 2.94855C54.8826 3.2827 54.8622 3.62191 54.7798 3.94855C54.6963 4.30845 54.5148 4.63824 54.2553 4.90125C53.9958 5.16425 53.6685 5.35025 53.3098 5.4386L53.1398 5.48859C53.3087 5.59906 53.4632 5.73002 53.5998 5.87854C53.7484 6.07448 53.8695 6.28982 53.9598 6.51855C54.4298 7.64855 54.8798 8.78858 55.3298 9.91858C55.3446 9.99119 55.3546 10.0646 55.3598 10.1385ZM50.3598 4.79858C50.8612 4.83242 51.3648 4.80554 51.8598 4.71857C52.0273 4.68603 52.1892 4.62875 52.3398 4.54858C52.4694 4.49135 52.5829 4.40297 52.6701 4.29132C52.7573 4.17967 52.8157 4.04818 52.8398 3.90857C52.875 3.68997 52.875 3.46719 52.8398 3.2486C52.8276 3.07399 52.7641 2.90686 52.6574 2.76813C52.5507 2.62939 52.4054 2.52517 52.2398 2.46857C52.1505 2.42487 52.0566 2.39135 51.9598 2.36859C51.7746 2.33473 51.5877 2.31136 51.3998 2.29858H50.3298L50.3598 4.79858Z"
                            fill="white"></path>
                          <path
                            d="M42.5997 0.798828H47.9998V2.28882H44.4398V4.5788H47.6798V6.02881H44.4697C44.4142 6.9046 44.4142 7.78303 44.4697 8.65881H48.0397V10.1288H42.6098C42.5598 9.96878 42.5397 1.10883 42.5997 0.798828Z"
                            fill="white"></path>
                          <path
                            d="M16.9198 3.23859L16.6798 3.10858C16.2858 2.84656 15.8587 2.63807 15.4098 2.48859C15.0445 2.35705 14.6499 2.32934 14.2698 2.40857C14.1019 2.43803 13.9468 2.5179 13.8254 2.63757C13.7039 2.75725 13.6218 2.91105 13.5898 3.07855C13.5264 3.25275 13.5182 3.44229 13.5665 3.62128C13.6149 3.80027 13.7173 3.95998 13.8598 4.07855C14.056 4.232 14.2711 4.35971 14.4998 4.45856C14.8498 4.61856 15.2198 4.73857 15.5698 4.90857C15.9163 5.05924 16.2506 5.23646 16.5698 5.4386C16.8774 5.64409 17.1295 5.92218 17.304 6.24835C17.4784 6.57452 17.5697 6.93871 17.5698 7.30859C17.5965 7.69664 17.5525 8.08627 17.4398 8.45856C17.3033 8.91301 17.0446 9.32124 16.6919 9.63867C16.3392 9.9561 15.9061 10.1705 15.4398 10.2585C14.5463 10.4568 13.6124 10.3586 12.7798 9.97858C12.4703 9.82597 12.1698 9.65568 11.8798 9.46857C11.8412 9.45415 11.808 9.42817 11.7847 9.39417C11.7615 9.36016 11.7493 9.31977 11.7498 9.27856C11.7498 8.70856 11.7498 8.13854 11.7498 7.56854V7.50854L11.9998 7.64856C12.4198 7.87856 12.8298 8.12857 13.2498 8.34857C13.6409 8.5714 14.0921 8.66586 14.5398 8.61859C14.672 8.60985 14.8028 8.58636 14.9298 8.54858C15.0776 8.49143 15.2097 8.39997 15.3152 8.28174C15.4208 8.1635 15.4967 8.02186 15.5367 7.86853C15.5768 7.7152 15.5798 7.55451 15.5456 7.39978C15.5114 7.24505 15.4408 7.1007 15.3398 6.97858C15.1683 6.79926 14.9648 6.65345 14.7398 6.54858C14.3998 6.37858 14.0398 6.24856 13.7398 6.08856C13.4288 5.9547 13.125 5.80448 12.8298 5.63855C12.4141 5.41066 12.077 5.06238 11.8628 4.6394C11.6486 4.21643 11.5674 3.73854 11.6298 3.26855C11.6394 3.06932 11.6696 2.87164 11.7198 2.67859C11.7808 2.38087 11.9007 2.09832 12.0724 1.8476C12.2441 1.59687 12.4642 1.383 12.7198 1.21857C13.2008 0.906972 13.7489 0.713698 14.319 0.654602C14.8891 0.595506 15.4651 0.672242 15.9998 0.87854C16.3052 1.00706 16.5886 1.18253 16.8398 1.39856C16.8751 1.42545 16.9034 1.46032 16.9225 1.50031C16.9416 1.54029 16.951 1.58423 16.9498 1.62854V3.13855C16.9457 3.17338 16.9356 3.20726 16.9198 3.23859Z"
                            fill="white"></path>
                          <path
                            d="M24.8098 3.28862L24.3298 3.02861C23.8624 2.76063 23.3511 2.57782 22.8198 2.48864C22.2526 2.40851 21.6742 2.48814 21.1498 2.71862C20.8604 2.84571 20.6012 3.03262 20.3892 3.26702C20.1772 3.50141 20.0172 3.77797 19.9198 4.0786C19.6096 4.9759 19.6096 5.95133 19.9198 6.84862C20.0452 7.2591 20.2901 7.62294 20.6231 7.89367C20.9562 8.16439 21.3623 8.32974 21.7898 8.36864C22.4703 8.48839 23.1713 8.38671 23.7898 8.0786C24.1098 7.9186 24.4298 7.73864 24.7898 7.55864L24.9598 7.45861C24.9641 7.52854 24.9641 7.5987 24.9598 7.66863C24.9598 8.11863 24.9598 8.56859 24.9598 9.00859C24.9692 9.08251 24.9573 9.15762 24.9254 9.22496C24.8935 9.29231 24.8429 9.34907 24.7797 9.3886C24.5406 9.56418 24.2863 9.71814 24.0198 9.84862C23.4125 10.1132 22.7572 10.2497 22.0947 10.2497C21.4323 10.2497 20.777 10.1132 20.1698 9.84862C19.6684 9.63674 19.2222 9.31304 18.8652 8.90227C18.5082 8.49151 18.2498 8.00456 18.1098 7.47863C17.8617 6.64255 17.7868 5.76462 17.8898 4.89861C17.9325 4.3079 18.0674 3.72756 18.2898 3.17864C18.5241 2.57698 18.9111 2.04666 19.4126 1.63988C19.914 1.2331 20.5127 0.963869 21.1498 0.858631C22.0596 0.664467 23.0045 0.71276 23.8898 0.998646C24.2102 1.10386 24.5134 1.25542 24.7898 1.4486C24.8281 1.47307 24.8595 1.50723 24.8805 1.5476C24.9016 1.58796 24.9116 1.63315 24.9097 1.67864V3.21862C24.8782 3.24443 24.8448 3.26784 24.8098 3.28862Z"
                            fill="white"></path>
                          <path
                            d="M34.2798 0.788574H36.2298L38.2298 5.71857L40.1498 0.788574H42.0098C42.0098 0.978574 38.6198 9.78855 38.4498 10.1385H37.8098L34.2798 0.788574Z"
                            fill="white"></path>
                          <path
                            d="M9.18985 0.798828H10.9998V10.1288H9.19986C9.14986 9.95878 9.13985 1.08883 9.18985 0.798828Z"
                            fill="white"></path>
                        </svg>
                      </li>
                      <li>
                        <svg width="37" height="11" viewBox="0 0 37 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M35.1705 5.38039L35.4606 5.46041C35.7748 5.53231 36.0597 5.69798 36.2776 5.93551C36.4955 6.17303 36.636 6.47115 36.6805 6.79036C36.7655 7.33708 36.7655 7.89367 36.6805 8.44039C36.5836 8.95486 36.3008 9.41566 35.8857 9.73476C35.4707 10.0539 34.9526 10.2089 34.4305 10.1704C33.6305 10.1704 32.8305 10.1704 32.0305 10.1704H24.8306V0.710408H33.2705C33.7068 0.705207 34.1426 0.745419 34.5706 0.830403C34.8853 0.880272 35.1866 0.993912 35.4558 1.16433C35.7251 1.33474 35.9567 1.55833 36.1365 1.82143C36.3162 2.08453 36.4403 2.38158 36.5012 2.69436C36.5621 3.00714 36.5585 3.32907 36.4906 3.6404C36.3806 4.4804 36.1005 4.81039 35.1705 5.38039ZM27.6906 6.38039V8.07039H32.9005C33.0056 8.09664 33.1155 8.09664 33.2206 8.07039C33.4199 7.97416 33.5893 7.82553 33.7106 7.6404C33.786 7.5062 33.8227 7.35363 33.8164 7.19979C33.8102 7.04595 33.7613 6.89688 33.6752 6.76925C33.589 6.64162 33.4691 6.54045 33.3287 6.47707C33.1884 6.41369 33.0333 6.39065 32.8806 6.41042H27.6906V6.38039ZM27.6906 4.44039H32.7406C32.8833 4.45646 33.0274 4.42628 33.1516 4.35427C33.2758 4.28225 33.3736 4.17218 33.4305 4.04036C33.4949 3.91557 33.5249 3.77591 33.5173 3.6357C33.5098 3.49549 33.465 3.35984 33.3876 3.2427C33.3102 3.12555 33.2029 3.03118 33.0769 2.96926C32.9509 2.90733 32.8106 2.88011 32.6705 2.8904H27.6906V4.44039Z"
                            fill="white"></path>
                          <path
                            d="M23.3806 4.12036H20.5406C20.3106 3.19036 20.0606 2.97035 19.0906 2.98035C17.8906 2.98035 16.6906 2.98035 15.5006 3.05035C15.3449 3.0423 15.1893 3.06811 15.0445 3.12592C14.8996 3.18372 14.769 3.27218 14.6616 3.38525C14.5543 3.49833 14.4726 3.63333 14.4224 3.78094C14.3721 3.92856 14.3545 4.08526 14.3706 4.24036C14.3706 5.04036 14.3706 5.84038 14.3706 6.64038C14.366 6.92168 14.4656 7.19475 14.6502 7.40704C14.8348 7.61934 15.0914 7.75583 15.3706 7.79034C15.525 7.8452 15.6869 7.87559 15.8506 7.88037C17.1006 7.88037 18.3506 7.88037 19.5906 7.88037C20.3006 7.88037 20.5306 7.47034 20.5906 6.60034H23.5205C23.6077 7.31911 23.5431 8.0482 23.3306 8.74036C23.1756 9.13574 22.9142 9.48052 22.5753 9.73645C22.2365 9.99238 21.8332 10.1495 21.4105 10.1904C20.9245 10.2721 20.4333 10.3189 19.9406 10.3304C18.3006 10.3304 16.6506 10.3304 15.0106 10.3304C14.5504 10.3211 14.092 10.2709 13.6406 10.1804C13.0563 10.087 12.5216 9.79564 12.1265 9.35504C11.7315 8.91444 11.4999 8.35144 11.4706 7.76038C11.3506 6.23273 11.3506 4.698 11.4706 3.17035C11.493 2.54891 11.7498 1.959 12.1895 1.51929C12.6292 1.07958 13.2192 0.822703 13.8406 0.800354C14.4131 0.710279 14.9911 0.660194 15.5706 0.650391C17.1206 0.650391 18.6606 0.650391 20.2106 0.650391C20.6172 0.654068 21.0224 0.697615 21.4206 0.780396C21.9511 0.83914 22.4417 1.09043 22.7992 1.48669C23.1568 1.88296 23.3565 2.39663 23.3606 2.93036C23.4106 3.29036 23.3806 3.69036 23.3806 4.12036Z"
                            fill="white"></path>
                          <path
                            d="M0.420535 6.09045H3.09052C3.0756 6.37693 3.0756 6.66397 3.09052 6.95044C3.19052 7.60044 3.45052 7.87045 4.09052 7.90045C4.73052 7.93045 5.41052 7.90045 6.09052 7.90045C6.77052 7.90045 6.90052 7.61041 6.97052 7.04041C6.97052 6.82041 6.97052 6.60043 6.97052 6.38043V0.710449H9.87049V1.03046C9.87049 3.17046 9.87049 5.30043 9.87049 7.44043C9.86739 7.77913 9.81693 8.11573 9.72052 8.44043C9.59491 8.91858 9.31724 9.34297 8.92945 9.6496C8.54165 9.95622 8.06472 10.1285 7.5705 10.1404C5.83988 10.3454 4.09116 10.3454 2.36054 10.1404C1.81145 10.117 1.29364 9.87823 0.919314 9.47583C0.544985 9.07343 0.34426 8.53977 0.360537 7.99042C0.380537 7.38042 0.420535 6.74045 0.420535 6.09045Z"
                            fill="white"></path>
                        </svg>
                      </li>
                      <li>
                        <svg width="29" height="17" viewBox="0 0 29 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14.9124 14.8198C15.7711 14.0046 16.452 13.0207 16.9124 11.9298C17.0365 11.6511 17.14 11.3637 17.2223 11.0698H16.5624C16.1372 12.3411 15.4056 13.4881 14.4324 14.4099C13.4664 13.4859 12.7419 12.339 12.3224 11.0698H11.6424C12.0774 12.4906 12.8613 13.7798 13.9224 14.8198C13.9224 14.8198 13.9223 14.8198 13.8523 14.8798C12.837 15.7 11.6347 16.2565 10.3523 16.4998C8.32117 16.8828 6.22048 16.4748 4.48037 15.3593C2.74027 14.2439 1.49243 12.5054 0.992336 10.4998C0.76305 9.58533 0.692063 8.63833 0.782375 7.69985C0.919583 6.24925 1.44691 4.86286 2.3085 3.68782C3.17009 2.51279 4.33384 1.59299 5.67605 1.02596C7.01826 0.45893 8.48895 0.26584 9.93203 0.467244C11.3751 0.668647 12.7367 1.25703 13.8723 2.16988C12.8091 3.20256 12.0277 4.49002 11.6023 5.90987H12.2724C12.6907 4.64304 13.4155 3.49915 14.3824 2.57985C15.3562 3.50107 16.0879 4.64831 16.5124 5.91988H17.1824C16.7423 4.49388 15.9515 3.20107 14.8824 2.15987C16.07 1.19237 17.5077 0.581466 19.0286 0.398091C20.5494 0.214715 22.091 0.466391 23.4746 1.12386C24.8582 1.78133 26.0271 2.81762 26.8455 4.11257C27.6639 5.40751 28.0982 6.90798 28.0982 8.43984C28.0982 9.9717 27.6639 11.4722 26.8455 12.7671C26.0271 14.0621 24.8582 15.0984 23.4746 15.7559C22.091 16.4133 20.5494 16.665 19.0286 16.4816C17.5077 16.2982 16.07 15.6874 14.8824 14.7199L14.9124 14.8198ZM5.91238 6.81984H4.70242C4.66315 6.81584 4.62369 6.82566 4.59085 6.84755C4.558 6.86945 4.53377 6.90205 4.52237 6.93984L3.65237 8.85988V8.96987L3.49234 6.83986H2.15237L1.46243 10.4498H2.27237L2.51236 9.18984C2.59236 8.76984 2.67238 8.34984 2.78238 7.93984L2.99234 10.4498H3.77237L4.86233 7.99984L4.41238 10.4398H5.25235L5.91238 6.81984ZM26.3024 7.81984L26.1324 7.65987C26.0499 7.55923 25.9316 7.49467 25.8024 7.47988C25.5679 7.43478 25.3268 7.43478 25.0923 7.47988C24.8411 7.53912 24.6226 7.69319 24.4823 7.90987C24.2761 8.21023 24.1364 8.55116 24.0724 8.90987C24.0175 9.14335 24.0175 9.38635 24.0724 9.61983C24.1314 9.87189 24.2678 10.0992 24.4624 10.2699C24.5463 10.3496 24.6488 10.407 24.7606 10.4367C24.8725 10.4664 24.9899 10.4674 25.1023 10.4398C25.2634 10.4123 25.419 10.3582 25.5624 10.2799H25.6524L25.7624 10.5098C26.055 10.5377 26.3497 10.5377 26.6424 10.5098L27.3423 6.73989H26.4923L26.3024 7.81984ZM8.04239 10.4599C8.04239 10.4599 8.04239 10.3998 8.04239 10.3698C8.15239 9.83983 8.25233 9.29986 8.36233 8.76986C8.39235 8.59111 8.39235 8.40863 8.36233 8.22988C8.35128 8.08881 8.30157 7.95349 8.21865 7.83883C8.13574 7.72416 8.02286 7.63455 7.89236 7.57985C7.75025 7.52472 7.60285 7.48451 7.45242 7.45986C7.17991 7.42988 6.90486 7.42988 6.63235 7.45986C6.46235 7.45986 6.29233 7.45987 6.11233 7.52987L5.99234 8.16988H6.11233C6.44288 8.11705 6.77784 8.09695 7.11233 8.10988H7.29239C7.33292 8.11911 7.36904 8.14207 7.39456 8.17489C7.42008 8.2077 7.43344 8.24832 7.4324 8.28988V8.48989H7.27237C7.03637 8.46474 6.7984 8.46474 6.5624 8.48989C6.31007 8.52618 6.07629 8.64318 5.89602 8.82344C5.71576 9.00371 5.5987 9.23755 5.5624 9.48989C5.53991 9.61281 5.55017 9.73943 5.59231 9.85707C5.63445 9.97472 5.70697 10.0792 5.80239 10.1599C5.93036 10.2802 6.09693 10.3511 6.27237 10.3599C6.55594 10.4014 6.84513 10.3449 7.09231 10.1998L7.20242 10.3599L8.04239 10.4599ZM21.8423 10.4599C21.8458 10.4333 21.8458 10.4064 21.8423 10.3798C21.9323 9.90984 22.0323 9.44988 22.1223 8.97988C22.1757 8.76751 22.1993 8.54872 22.1924 8.32985C22.1946 8.149 22.137 7.97253 22.0285 7.82784C21.92 7.68315 21.7665 7.57838 21.5923 7.52987C21.4982 7.49714 21.4011 7.47369 21.3024 7.45986C20.8678 7.428 20.431 7.45153 20.0023 7.52987C19.981 7.53414 19.9617 7.54524 19.9473 7.56148C19.9329 7.57772 19.9241 7.59818 19.9224 7.61983C19.9224 7.78983 19.8524 7.94983 19.8224 8.11983V8.18984H19.9923C20.3228 8.13641 20.6578 8.11631 20.9923 8.12984H21.1524C21.1984 8.14049 21.2398 8.16572 21.2704 8.20174C21.301 8.23776 21.3193 8.28268 21.3224 8.32985C21.3273 8.38975 21.3273 8.44995 21.3224 8.50985H21.1524C20.918 8.50597 20.6838 8.52269 20.4524 8.55983C20.2077 8.59472 19.9799 8.70496 19.8007 8.8752C19.6215 9.04545 19.4998 9.26725 19.4524 9.50985C19.4053 9.68756 19.425 9.87641 19.508 10.0405C19.5909 10.2046 19.7313 10.3325 19.9024 10.3999C20.0309 10.4576 20.172 10.4817 20.3124 10.4699C20.5443 10.4788 20.7736 10.4197 20.9723 10.2999L21.0824 10.4599H21.8423ZM19.8423 7.13985C19.6917 6.98069 19.5048 6.86029 19.2976 6.7889C19.0904 6.71751 18.8691 6.69728 18.6524 6.72988C18.411 6.74385 18.1752 6.80798 17.96 6.91817C17.7448 7.02836 17.5548 7.18216 17.4024 7.36983C17.1762 7.63195 17.0113 7.94119 16.9196 8.27504C16.8279 8.6089 16.8117 8.95902 16.8723 9.29988C16.9072 9.58503 17.0314 9.85178 17.2272 10.062C17.423 10.2722 17.6805 10.415 17.9624 10.4699C18.233 10.5248 18.5118 10.5248 18.7824 10.4699C18.9542 10.4471 19.1203 10.3928 19.2724 10.3098C19.2724 10.3098 19.2724 10.3099 19.2724 10.2399C19.2024 10.0199 19.1324 9.80986 19.0524 9.58986H18.9524C18.8503 9.6156 18.7467 9.63562 18.6424 9.64986C18.5411 9.66538 18.4378 9.66056 18.3384 9.63564C18.239 9.61072 18.1457 9.56618 18.0637 9.50472C17.9818 9.44325 17.9129 9.36608 17.8611 9.27767C17.8094 9.18926 17.7758 9.09144 17.7624 8.98989C17.7276 8.78339 17.7422 8.57156 17.8047 8.37172C17.8673 8.17189 17.976 7.98968 18.1223 7.83986C18.2225 7.74277 18.3419 7.66769 18.4728 7.61947C18.6037 7.57124 18.7431 7.55092 18.8824 7.55983C19.0501 7.56631 19.2142 7.61076 19.3623 7.68984L19.8423 7.13985ZM14.8423 9.13985C14.9093 8.88563 14.933 8.62197 14.9124 8.35988C14.902 8.16419 14.828 7.97722 14.7017 7.82741C14.5753 7.67761 14.4036 7.57314 14.2124 7.52987C13.9874 7.49105 13.7574 7.49105 13.5324 7.52987C13.2007 7.55599 12.8923 7.71021 12.6724 7.95986C12.4782 8.17662 12.3394 8.43723 12.268 8.71938C12.1966 9.00153 12.1946 9.2968 12.2624 9.57985C12.3063 9.82205 12.4274 10.0435 12.6077 10.2111C12.7879 10.3788 13.0176 10.4836 13.2624 10.5098C13.5086 10.5299 13.7561 10.5299 14.0023 10.5098C14.1705 10.4887 14.3374 10.4587 14.5023 10.4199C14.5308 10.4176 14.5575 10.4052 14.5777 10.3851C14.5978 10.3649 14.61 10.3382 14.6123 10.3098C14.6123 10.1598 14.6724 10.0099 14.7024 9.85988V9.77987C14.3714 9.82857 14.0369 9.84864 13.7024 9.83986C13.5963 9.85504 13.4885 9.85504 13.3824 9.83986C13.3253 9.81708 13.2736 9.78287 13.2303 9.73934C13.1869 9.6958 13.153 9.64389 13.1305 9.58675C13.108 9.52961 13.0975 9.46844 13.0995 9.40706C13.1015 9.34569 13.1161 9.28541 13.1424 9.22988L14.8423 9.13985ZM8.33242 10.3698C8.36551 10.3756 8.39932 10.3756 8.4324 10.3698C8.86169 10.4713 9.30656 10.4884 9.74234 10.4199C9.95469 10.4054 10.1555 10.3178 10.3105 10.1719C10.4654 10.026 10.565 9.83092 10.5923 9.61983C10.6373 9.46918 10.628 9.30753 10.5658 9.16311C10.5037 9.01868 10.3927 8.90071 10.2523 8.82985L9.75235 8.55983C9.69592 8.52861 9.64517 8.48804 9.60232 8.43984C9.57802 8.41464 9.56119 8.38325 9.55362 8.34908C9.54604 8.31491 9.5481 8.27928 9.55947 8.24617C9.57085 8.21307 9.59108 8.18381 9.61807 8.16152C9.64505 8.13922 9.67778 8.12476 9.71243 8.11983H10.5524L10.7323 7.53988C10.264 7.38986 9.76066 7.38986 9.29239 7.53988C9.12572 7.59014 8.97908 7.69149 8.8732 7.82967C8.76732 7.96785 8.70759 8.13583 8.70242 8.30983C8.66694 8.46729 8.6913 8.63237 8.77078 8.77285C8.85026 8.91332 8.97911 9.01916 9.13235 9.06984C9.31856 9.15448 9.49899 9.25139 9.67239 9.35988C9.71952 9.38303 9.75767 9.42095 9.78115 9.46791C9.80464 9.51488 9.81215 9.56824 9.80239 9.61983C9.79541 9.6685 9.77156 9.71322 9.73501 9.74611C9.69846 9.77901 9.65146 9.79804 9.60232 9.79988C9.39232 9.79988 9.18243 9.79988 8.96243 9.79988L8.49234 9.73989L8.33242 10.3698ZM11.3324 6.72988L10.8224 9.25985C10.7795 9.44692 10.7559 9.63795 10.7523 9.82985C10.7509 9.96576 10.7956 10.0982 10.8792 10.2053C10.9627 10.3125 11.0803 10.3882 11.2124 10.4199C11.4565 10.4816 11.7145 10.4568 11.9424 10.3499H12.0224L12.0824 9.76986H11.7824C11.7356 9.76247 11.6932 9.73789 11.6636 9.70089C11.634 9.66389 11.6193 9.61713 11.6223 9.56984C11.6176 9.50326 11.6176 9.43641 11.6223 9.36983L11.7423 8.73989C11.7423 8.55989 11.8123 8.37984 11.8523 8.18984H12.2724L12.4124 7.53988H11.9823L12.1424 6.75985L11.3324 6.72988ZM22.7323 7.48989C22.5423 8.48989 22.3624 9.48989 22.1724 10.4899H22.9923C22.9923 10.4399 22.9923 10.4098 22.9923 10.3698L23.2024 9.22988C23.239 8.99489 23.3241 8.77007 23.4524 8.56984C23.5043 8.47788 23.5799 8.40154 23.6714 8.34877C23.7629 8.29601 23.8667 8.26875 23.9723 8.26986H24.0524L24.2624 7.49984C23.9758 7.48791 23.6959 7.58842 23.4823 7.77987L23.4124 7.50985L22.7323 7.48989ZM15.7323 10.4899V10.3798C15.8023 9.97984 15.8724 9.57983 15.9524 9.17983C15.9953 8.95742 16.0839 8.74633 16.2124 8.55983C16.2632 8.48179 16.3329 8.41795 16.4151 8.37423C16.4973 8.3305 16.5893 8.30831 16.6824 8.30983H16.7824C16.8524 8.05983 16.9323 7.80988 16.9923 7.53988C16.7101 7.52464 16.4332 7.62166 16.2223 7.80983L16.1524 7.45986H15.4624L14.9024 10.4599L15.7323 10.4899Z"
                            fill="white"></path>
                          <path
                            d="M26.0824 8.70004C26.0731 8.97632 25.9627 9.23958 25.7723 9.44003C25.72 9.49755 25.655 9.54207 25.5824 9.57003C25.4868 9.61963 25.3754 9.62961 25.2725 9.5978C25.1695 9.56599 25.0833 9.49496 25.0324 9.40005C24.9567 9.27396 24.9284 9.12512 24.9524 8.98007C24.9868 8.72473 25.1066 8.48852 25.2924 8.31002C25.3894 8.20811 25.5218 8.14728 25.6624 8.14004C25.7415 8.12772 25.8224 8.14553 25.889 8.18996C25.9557 8.2344 26.0033 8.30222 26.0223 8.38003C26.0523 8.46003 26.0624 8.59004 26.0824 8.70004Z"
                            fill="white"></path>
                          <path
                            d="M7.41251 9.11C7.38955 9.23494 7.35953 9.35847 7.32254 9.47999C7.28947 9.56258 7.2349 9.63485 7.16458 9.68934C7.09427 9.74384 7.01074 9.77857 6.92252 9.78999H6.70255C6.65863 9.78704 6.61627 9.77251 6.57974 9.74794C6.54322 9.72336 6.51382 9.68961 6.49454 9.65004C6.47526 9.61046 6.46672 9.5665 6.46988 9.52259C6.47304 9.47869 6.48773 9.43638 6.51248 9.39997C6.54876 9.32328 6.60177 9.25567 6.66751 9.20204C6.73325 9.14841 6.81007 9.11011 6.89249 9.08998C7.06507 9.05682 7.24298 9.06369 7.41251 9.11Z"
                            fill="white"></path>
                          <path
                            d="M21.2024 9.10984C21.1952 9.2548 21.1612 9.39717 21.1023 9.52983C21.0356 9.63625 20.9363 9.71814 20.8191 9.76322C20.7019 9.80831 20.5732 9.81414 20.4524 9.77983C20.4161 9.7682 20.3828 9.74872 20.3549 9.72282C20.3269 9.69692 20.3051 9.66522 20.2908 9.62992C20.2765 9.59463 20.2701 9.55663 20.2721 9.5186C20.2741 9.48056 20.2844 9.44343 20.3024 9.40983C20.3407 9.32986 20.3966 9.25954 20.4658 9.20414C20.5351 9.14874 20.6159 9.10967 20.7024 9.08982C20.8683 9.05688 21.0396 9.06375 21.2024 9.10984Z"
                            fill="white"></path>
                          <path
                            d="M13.1523 8.55972C13.1632 8.47038 13.1934 8.3845 13.2408 8.30801C13.2883 8.23152 13.3517 8.16627 13.4269 8.11679C13.5021 8.0673 13.5871 8.03475 13.6761 8.02145C13.7652 8.00814 13.856 8.01442 13.9424 8.03976C13.9796 8.05153 14.0139 8.07093 14.0432 8.09677C14.0725 8.1226 14.096 8.15425 14.1123 8.18972C14.1368 8.24833 14.1494 8.31121 14.1494 8.37472C14.1494 8.43823 14.1368 8.50111 14.1123 8.55972H13.1523Z"
                            fill="white"></path>
                        </svg>
                      </li>
                      <li>
                        <svg width="44" height="13" viewBox="0 0 44 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.80661 0.724196H5.44663C5.96734 0.721004 6.48369 0.819553 6.96665 1.01424C7.36754 1.16545 7.70926 1.44141 7.9415 1.80147C8.17374 2.16153 8.28426 2.58666 8.25669 3.01424C8.27238 3.76143 8.10047 4.5006 7.75669 5.1642C7.52894 5.62128 7.19314 6.01594 6.77841 6.31392C6.36369 6.6119 5.88254 6.80421 5.37668 6.87422C4.79746 6.959 4.21155 6.98909 3.62668 6.96419H3.31662C3.25407 6.95873 3.19107 6.96588 3.13132 6.98518C3.07157 7.00448 3.01626 7.03554 2.96872 7.07655C2.92118 7.11757 2.88243 7.16768 2.85459 7.22395C2.82674 7.28023 2.81038 7.34152 2.80661 7.40419C2.68661 8.15419 2.57663 8.90419 2.44663 9.65419C2.44457 9.71797 2.42895 9.78061 2.40085 9.8379C2.37275 9.8952 2.33284 9.94586 2.28366 9.98653C2.23449 10.0272 2.17725 10.0569 2.11569 10.0737C2.05414 10.0906 1.98964 10.0941 1.92661 10.0842H0.426608C0.166608 10.0842 0.0666614 9.95423 0.106661 9.69423L0.976657 4.15419L1.45664 1.15419C1.46032 1.0932 1.47641 1.03359 1.50388 0.979018C1.53134 0.924442 1.56964 0.876042 1.61643 0.836745C1.66321 0.797448 1.71748 0.768134 1.77597 0.750502C1.83447 0.732871 1.89593 0.727306 1.95664 0.734206L3.80661 0.724196ZM3.80661 5.09419H4.36667C4.641 5.10257 4.91055 5.02116 5.13437 4.86232C5.35819 4.70348 5.52402 4.4759 5.60666 4.21419C5.66988 4.01003 5.70353 3.79788 5.70664 3.58418C5.72653 3.36748 5.66153 3.15157 5.52536 2.98183C5.3892 2.81208 5.19251 2.70179 4.97666 2.67421C4.59644 2.61439 4.21101 2.59428 3.82663 2.61421C3.78665 2.60844 3.74586 2.61135 3.70713 2.62282C3.66839 2.63428 3.63267 2.65402 3.60227 2.68062C3.57187 2.70722 3.5476 2.74006 3.5311 2.77693C3.5146 2.8138 3.50627 2.85379 3.50669 2.89418C3.39669 3.60418 3.2866 4.31418 3.1666 5.02418C3.1666 5.09418 3.16669 5.11421 3.25669 5.11421L3.80661 5.09419Z"
                            fill="white"></path>
                          <path
                            d="M27.9366 0.724081H29.5766C30.135 0.716996 30.6881 0.83311 31.1966 1.06411C31.535 1.2182 31.8238 1.4636 32.0304 1.77273C32.2371 2.08186 32.3536 2.44248 32.3666 2.81411C32.4057 3.49697 32.2929 4.18 32.0365 4.81411C31.8402 5.35398 31.5014 5.83055 31.056 6.19326C30.6105 6.55597 30.0751 6.79127 29.5066 6.87411C29.1763 6.93109 28.8419 6.96116 28.5066 6.96407H27.5066C27.3888 6.95576 27.2725 6.99412 27.1827 7.07082C27.0929 7.14752 27.0367 7.25645 27.0265 7.37411C26.8965 8.14411 26.7765 8.9141 26.6565 9.6841C26.6565 10.0041 26.5266 10.0841 26.1866 10.0841H24.6465C24.3765 10.0841 24.2666 9.9541 24.3066 9.6841C24.5266 8.3441 24.7366 7.0041 24.9466 5.6841L25.5766 1.6841L25.6665 1.09408C25.6816 0.977387 25.7408 0.870931 25.832 0.79653C25.9231 0.722129 26.0392 0.685476 26.1565 0.694113L27.9366 0.724081ZM27.8266 5.09408C28.1256 5.1289 28.4276 5.1289 28.7266 5.09408C28.9503 5.07274 29.1631 4.98805 29.3403 4.84987C29.5174 4.7117 29.6515 4.52583 29.7266 4.31411C29.8106 4.10092 29.8514 3.87314 29.8466 3.64406C29.8634 3.53244 29.857 3.41857 29.8278 3.30953C29.7986 3.20049 29.7471 3.09864 29.6767 3.0104C29.6063 2.92215 29.5184 2.84942 29.4186 2.79671C29.3188 2.744 29.2092 2.7125 29.0966 2.70412C28.7365 2.6444 28.3711 2.62422 28.0066 2.64406C27.7766 2.64406 27.6965 2.7141 27.6565 2.9341C27.5765 3.3641 27.5166 3.79407 27.4466 4.21407C27.4466 4.46407 27.3666 4.71407 27.3166 4.96407C27.2666 5.21407 27.3166 5.14406 27.4866 5.14406L27.8266 5.09408Z"
                            fill="white"></path>
                          <path
                            d="M12.6966 9.3341C12.2766 9.74006 11.7552 10.0257 11.187 10.1612C10.6188 10.2966 10.0246 10.2769 9.46664 10.1041C9.03613 9.9719 8.65266 9.71875 8.36191 9.37481C8.07116 9.03088 7.88536 8.61064 7.82663 8.16412C7.69985 7.53608 7.73656 6.88603 7.9332 6.27624C8.12983 5.66646 8.47976 5.11742 8.94955 4.68176C9.41934 4.2461 9.9932 3.93844 10.6161 3.78826C11.2389 3.63809 11.89 3.65045 12.5067 3.82415C12.7036 3.87184 12.8886 3.95947 13.0503 4.0816C13.212 4.20373 13.3469 4.35772 13.4466 4.53411C13.4466 4.36411 13.4466 4.23412 13.5166 4.10412C13.5217 4.03162 13.5549 3.96398 13.609 3.91546C13.6631 3.86694 13.734 3.84133 13.8066 3.84411H15.4066C15.6166 3.84411 15.7266 3.98412 15.6966 4.22412C15.6266 4.62412 15.5667 5.03415 15.4967 5.44415C15.2867 6.76415 15.0767 8.08415 14.8767 9.44415C14.7967 9.95415 14.7166 10.1542 14.0866 10.1342C13.7166 10.1342 13.3366 10.1342 12.9566 10.1342C12.5766 10.1342 12.6067 10.0142 12.6267 9.76416C12.6467 9.51416 12.6966 9.4841 12.6966 9.3341ZM11.8166 5.40411H11.5366C11.1085 5.46744 10.7165 5.67964 10.4294 6.00335C10.1423 6.32706 9.97845 6.74159 9.96664 7.17413C9.93915 7.45031 10.0091 7.72743 10.1643 7.95751C10.3195 8.1876 10.5502 8.3562 10.8166 8.43414C11.088 8.52094 11.3768 8.53812 11.6566 8.48413C11.894 8.44909 12.1221 8.36667 12.327 8.24176C12.5319 8.11684 12.7096 7.952 12.8496 7.75701C12.9895 7.56203 13.0888 7.34088 13.1416 7.10675C13.1943 6.87261 13.1994 6.63025 13.1566 6.3941C13.0896 6.09503 12.9151 5.83105 12.6662 5.65222C12.4173 5.47339 12.1114 5.3922 11.8066 5.42413L11.8166 5.40411Z"
                            fill="white"></path>
                          <path
                            d="M36.7765 9.42428L36.4966 9.64425C36.0777 9.97072 35.5833 10.1867 35.0591 10.2723C34.5349 10.3579 33.9977 10.3105 33.4966 10.1343C33.081 10.0003 32.7123 9.75018 32.4341 9.41354C32.156 9.0769 31.9799 8.66772 31.9266 8.23428C31.7447 7.27672 31.9367 6.28585 32.4631 5.46554C32.9895 4.64523 33.8104 4.05789 34.7566 3.82431C35.3691 3.69397 36.004 3.71456 36.6066 3.88431C36.8014 3.93097 36.9844 4.01718 37.1443 4.1376C37.3043 4.25802 37.4378 4.41004 37.5366 4.58426C37.5366 4.42426 37.5866 4.30428 37.6066 4.17428C37.6266 4.04428 37.7266 3.89425 37.9266 3.89425H39.4766C39.5241 3.88902 39.5721 3.89562 39.6164 3.91342C39.6607 3.93122 39.7 3.9597 39.7306 3.9963C39.7613 4.03291 39.7824 4.07651 39.7922 4.12326C39.8019 4.17001 39.8 4.21849 39.7866 4.26431C39.4966 6.07431 39.2166 7.88429 38.9266 9.68429C38.9243 9.75101 38.9082 9.81655 38.8792 9.87668C38.8502 9.9368 38.8089 9.99018 38.7581 10.0335C38.7073 10.0768 38.648 10.109 38.584 10.1281C38.5201 10.1472 38.4528 10.1526 38.3865 10.1443H37.0466C36.7966 10.1443 36.6966 10.0343 36.7166 9.78427C36.7532 9.66763 36.7733 9.54648 36.7765 9.42428ZM35.9166 5.42428H35.6566C35.2407 5.47905 34.8568 5.67652 34.5705 5.98294C34.2841 6.28936 34.1131 6.68572 34.0866 7.10428C34.0467 7.35151 34.0838 7.60505 34.1929 7.83047C34.3021 8.05589 34.4779 8.24227 34.6966 8.36429C35.0071 8.51431 35.3568 8.56328 35.6966 8.5043C35.9372 8.47056 36.1685 8.38844 36.3765 8.26291C36.5846 8.13737 36.7651 7.97099 36.9072 7.77383C37.0492 7.57668 37.1498 7.35278 37.2029 7.11569C37.2561 6.8786 37.2608 6.63319 37.2166 6.39425C37.1453 6.1073 36.9768 5.85392 36.7398 5.67709C36.5028 5.50027 36.2119 5.41094 35.9166 5.42428Z"
                            fill="white"></path>
                          <path
                            d="M19.7765 7.3445L21.4466 4.89448L21.9966 4.08449C22.044 4.00851 22.1104 3.94638 22.1894 3.90425C22.2684 3.86212 22.3571 3.84148 22.4466 3.8445H23.9966C24.0555 3.83837 24.1148 3.85044 24.1667 3.87904C24.2185 3.90764 24.2603 3.95144 24.2865 4.00453C24.3179 4.05199 24.3348 4.1076 24.3348 4.1645C24.3348 4.2214 24.3179 4.27708 24.2865 4.32454C22.5065 6.90454 20.7232 9.47784 18.9366 12.0445C18.886 12.1221 18.816 12.1851 18.7336 12.2272C18.6511 12.2693 18.5591 12.289 18.4666 12.2845H16.9566C16.8959 12.2929 16.834 12.2832 16.7789 12.2565C16.7237 12.2298 16.6776 12.1874 16.6465 12.1345C16.6146 12.0836 16.5977 12.0246 16.5977 11.9645C16.5977 11.9044 16.6146 11.8455 16.6465 11.7945L18.2166 9.58449C18.2407 9.54725 18.2535 9.50384 18.2535 9.45949C18.2535 9.41513 18.2407 9.37172 18.2166 9.33449C17.6433 7.67449 17.0765 6.00782 16.5165 4.33449C16.5135 4.28119 16.5135 4.2278 16.5165 4.17451C16.5038 4.13529 16.5007 4.09362 16.5072 4.05293C16.5138 4.01224 16.5301 3.97371 16.5545 3.9405C16.5789 3.90729 16.6109 3.88031 16.6478 3.86189C16.6846 3.84347 16.7253 3.83407 16.7665 3.83449H18.4366C18.6666 3.83449 18.7866 4.0045 18.8566 4.2245C19.0566 4.9045 19.2666 5.5845 19.4666 6.2245C19.5566 6.6345 19.6965 6.9745 19.7765 7.3445Z"
                            fill="white"></path>
                          <path
                            d="M40.4065 10.0944C40.1265 10.0944 40.0165 9.97443 40.0565 9.70443C40.1465 9.16443 40.2265 8.62437 40.3165 8.08437L40.8865 4.48439C41.0665 3.31439 41.2565 2.14439 41.4365 0.984394C41.4378 0.948039 41.4464 0.91231 41.4618 0.879353C41.4772 0.846395 41.4991 0.816905 41.5261 0.792622C41.5532 0.768338 41.585 0.749778 41.6194 0.738056C41.6538 0.726334 41.6903 0.721668 41.7266 0.724384H43.2566C43.4866 0.724384 43.5865 0.864399 43.5465 1.1144C43.5065 1.3644 43.4166 1.92437 43.3566 2.33437L42.7865 5.94442C42.5865 7.18442 42.3966 8.42439 42.1966 9.66439C42.1916 9.72712 42.1741 9.78824 42.145 9.84407C42.116 9.89991 42.076 9.9493 42.0275 9.9894C41.979 10.0295 41.923 10.0595 41.8627 10.0775C41.8024 10.0956 41.7391 10.1013 41.6765 10.0944H40.4065Z"
                            fill="white"></path>
                        </svg>
                      </li>
                      <li>
                        <svg width="34" height="21" viewBox="0 0 34 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M32.3953 1.15995L33.3052 11.2499H30.5253L30.4452 9.76994H27.1653C27.1218 9.76346 27.0775 9.77309 27.0406 9.79704C27.0038 9.82098 26.9769 9.8576 26.9652 9.89994C26.7852 10.2999 26.5953 10.6899 26.4153 11.0899L26.3252 11.2699H23.3252C23.3252 11.2099 23.3253 11.15 23.4053 11.1L27.1152 4.09996L28.6252 1.25993C28.6452 1.21627 28.6777 1.1796 28.7188 1.15464C28.7598 1.12969 28.8073 1.11757 28.8552 1.11991H32.3552L32.3953 1.15995ZM30.1753 2.93992L27.9652 7.86991H30.3452C30.2752 6.21991 30.1253 4.57992 30.1753 2.93992Z"
                            fill="white"></path>
                          <path
                            d="M33.3654 13.6999L33.2253 17.0299L32.7253 16.9299C31.7253 16.7399 30.7754 16.5699 29.7854 16.4299C28.7954 16.2899 27.6354 16.1499 26.5454 16.0599C24.6164 15.9015 22.6796 15.8581 20.7454 15.9299C19.6654 15.9765 18.5854 16.0565 17.5054 16.1699C15.7337 16.3599 13.9741 16.6504 12.2354 17.0399C9.97008 17.5453 7.74425 18.2137 5.57532 19.0399C4.76532 19.3399 3.97541 19.6799 3.17542 20.0399L3.0354 20.0899C3.04068 20.0367 3.04068 19.9831 3.0354 19.9299V19.7799L3.14539 19.7199C5.28539 18.7199 7.44542 17.7199 9.67542 16.8499C12.1797 15.8856 14.7538 15.1134 17.3754 14.5399C18.5054 14.2899 19.6453 14.0799 20.8053 13.9199C21.8053 13.7799 22.7453 13.6599 23.7253 13.5799C25.4349 13.4399 27.1506 13.3898 28.8654 13.4299C29.9954 13.4299 31.1254 13.5199 32.2554 13.6099L33.2554 13.7099L33.3654 13.6999Z"
                            fill="white"></path>
                          <path
                            d="M6.33521 11.2595H3.49524C3.49524 11.1395 3.49524 11.0195 3.49524 10.9095L3.28528 9.06951L3.04529 6.9395C2.98529 6.3295 2.91521 5.71948 2.84521 5.10948C2.77521 4.49948 2.70524 3.8295 2.62524 3.1895C2.59396 2.94748 2.52659 2.71151 2.42529 2.48949C2.30789 2.22279 2.12389 1.99078 1.89099 1.81566C1.65809 1.64055 1.38402 1.52821 1.09521 1.48949C0.925215 1.48949 0.745176 1.48949 0.555176 1.42949V1.17949H5.15527C5.15062 1.21266 5.15062 1.24636 5.15527 1.27953C5.21527 2.27953 5.29522 3.27952 5.35522 4.32952C5.41522 5.37952 5.46526 6.32953 5.51526 7.27953C5.51526 7.45953 5.51526 7.64948 5.51526 7.85948V7.79949C5.64973 7.33109 5.84824 6.88357 6.10522 6.46953C7.08522 4.7362 8.08522 3.00619 9.10522 1.27953C9.11926 1.24626 9.14302 1.21797 9.17334 1.19835C9.20366 1.17873 9.23917 1.16865 9.27527 1.16948H12.0253L6.33521 11.2595Z"
                            fill="white"></path>
                          <path
                            d="M14.9954 10.3798L16.2954 8.37984L16.4453 8.45985C16.7353 8.61985 17.0153 8.78983 17.3053 8.93983C17.9471 9.25733 18.6606 9.40207 19.3754 9.35982C19.5451 9.35016 19.713 9.31998 19.8754 9.26985C20.0331 9.21511 20.1759 9.12416 20.2922 9.00435C20.4086 8.88453 20.4953 8.73917 20.5454 8.57985C20.5823 8.49105 20.5943 8.39391 20.5802 8.29878C20.5661 8.20366 20.5264 8.11415 20.4653 8.03987C20.3806 7.91665 20.2759 7.80848 20.1554 7.71986L19.3854 7.21986C18.8559 6.91122 18.357 6.55293 17.8954 6.14986C17.7654 6.01986 17.6354 5.88983 17.5154 5.74983C17.2701 5.47118 17.0948 5.13797 17.0044 4.77791C16.9139 4.41784 16.9109 4.04133 16.9954 3.67982C17.0679 3.30477 17.1996 2.9436 17.3854 2.60982C17.7394 2.00614 18.2849 1.53808 18.9353 1.27986C19.4803 1.05922 20.0583 0.930798 20.6454 0.899856C21.9909 0.825146 23.3225 1.20559 24.4254 1.97987C24.4911 2.02327 24.5545 2.06995 24.6154 2.11983L23.1254 3.86983L23.0054 3.78987C22.7181 3.55666 22.4062 3.35544 22.0753 3.18983C21.6094 2.96521 21.0839 2.89513 20.5753 2.98982C20.3982 3.0266 20.2289 3.09432 20.0753 3.18983C19.984 3.24743 19.9067 3.32456 19.8488 3.41566C19.7908 3.50677 19.7539 3.60963 19.7405 3.71675C19.7271 3.82387 19.7375 3.93261 19.7712 4.03517C19.8049 4.13773 19.861 4.23153 19.9353 4.30983C20.0722 4.44738 20.2194 4.57441 20.3754 4.68983C20.6854 4.89983 21.0054 5.09982 21.3754 5.29982C21.8272 5.58659 22.2464 5.92191 22.6254 6.29982C22.8712 6.54866 23.08 6.83158 23.2454 7.13985C23.3985 7.42119 23.4877 7.73282 23.5067 8.05257C23.5257 8.37232 23.4741 8.69231 23.3553 8.98982C23.1039 9.68596 22.6643 10.2987 22.0853 10.7598C21.5917 11.1283 21.0146 11.3688 20.4054 11.4599C18.5825 11.7669 16.7098 11.4122 15.1254 10.4599L14.9954 10.3798Z"
                            fill="white"></path>
                          <path
                            d="M13.1654 11.2496H10.4453L13.5054 1.13965H16.2153C16.2153 1.25965 13.2754 11.0196 13.1654 11.2496Z"
                            fill="white"></path>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="app-f-footer__bottom">
                <p>© 2021 Fragrant Jewels LLC. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default HomePage
