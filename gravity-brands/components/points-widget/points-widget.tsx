import React from 'react'
import styled from 'styled-components'

export type PointsWidgetProps = {
  points: number
}

const SWrapper = styled.div``

const SLinkWrapper = styled.a`
  position: relative;
  color: #000;
  background-size: 100% 100%;
  display: block;
  text-decoration: none;
`

const SValueWrapper = styled.div`
  font-weight: 600;
  position: absolute;
  top: 48%;
  left: calc(50% + 19px);
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 8px;
  text-transform: uppercase;
  line-height: 1;

  @media (min-width: 1200px) {
    line-height: 1.25;
  }
`

const SValue = styled.div`
  font-weight: 700;
  font-size: 13px;

  @media (min-width: 1200px) {
    font-size: 14px;
  }
`

export function PointsWidget({ points }: PointsWidgetProps) {
  const gradientId = `app-points-gold-des${Math.floor(Math.random() * 100)}`

  return (
    <SWrapper>
      <SLinkWrapper href="/pages/rewards-boutique">
        <svg width="127" height="40" viewBox="0 0 127 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M38.5 1H119.205C122.815 1 125.767 3.95133 125.767 7.56133V32.4387C125.767 36.0487 122.815 39 119.205 39H24.5"
            stroke="black"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M24.2053 39L47.892 11.4247L38.6073 1H24.3827H24.522H10.2847L1 11.4247L24.6993 39"
            fill={`url(#${gradientId})`}
          ></path>
          <path
            d="M24.4719 39L47.9305 11.4247L38.6332 1H24.4085H24.5479H10.3105L1.02588 11.4247L24.4719 39Z"
            stroke="black"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M1.02539 11.4247H47.8667"
            stroke="black"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M10.3101 1L24.5 39L38.6327 1"
            stroke="black"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M14.4395 11.5513L24.5475 1.41797L34.7821 11.222"
            stroke="black"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <defs>
            <linearGradient id={gradientId} x1="5" y1="5.5" x2="48" y2="28" gradientUnits="userSpaceOnUse">
              <animate attributeName="x1" values="5;4;5" dur="7s" repeatCount="indefinite"></animate>
              <animate attributeName="y1" values="5.5;4.5;5.5" dur="7s" repeatCount="indefinite"></animate>
              <animate attributeName="x2" values="48;108.5;48" dur="7s" repeatCount="indefinite"></animate>
              <stop stopColor="#D08E17"></stop>
              <stop offset="0.0199" stopColor="#D89C29">
                <animate
                  attributeName="offset"
                  values="0.0199;0.0309454;0.0199"
                  dur="7s"
                  repeatCount="indefinite"
                ></animate>
              </stop>
              <stop offset="0.0597" stopColor="#E6B248">
                <animate
                  attributeName="offset"
                  values="0.0597;0.0697112;0.0597"
                  dur="7s"
                  repeatCount="indefinite"
                ></animate>
              </stop>
              <stop offset="0.1014" stopColor="#F1C460">
                <animate
                  attributeName="offset"
                  values="0.1014;0.120298;0.1014"
                  dur="7s"
                  repeatCount="indefinite"
                ></animate>
              </stop>
              <stop offset="0.1453" stopColor="#F9D072">
                <animate
                  attributeName="offset"
                  values="0.1453;0.183327;0.1453"
                  dur="7s"
                  repeatCount="indefinite"
                ></animate>
              </stop>
              <stop offset="0.1929" stopColor="#FED87C">
                <animate
                  attributeName="offset"
                  values="0.1929;0.239427;0.1929"
                  dur="7s"
                  repeatCount="indefinite"
                ></animate>
              </stop>
              <stop offset="0.251" stopColor="#FFDA7F">
                <animate
                  attributeName="offset"
                  values="0.251;0.33628;0.251"
                  dur="7s"
                  repeatCount="indefinite"
                ></animate>
              </stop>
              <stop offset="0.3617" stopColor="#F9D072">
                <animate
                  attributeName="offset"
                  values="0.3617;0.451013;0.3617"
                  dur="7s"
                  repeatCount="indefinite"
                ></animate>
              </stop>
              <stop offset="0.540309" stopColor="#E9B64E"></stop>
              <stop offset="0.743575" stopColor="#D08E17"></stop>
              <stop offset="0.808329" stopColor="#B88313"></stop>
              <stop offset="0.898368" stopColor="#99740F"></stop>
            </linearGradient>
          </defs>
        </svg>
        <SValueWrapper>
          <SValue>{points}</SValue>
          Points
        </SValueWrapper>
      </SLinkWrapper>
    </SWrapper>
  )
}
