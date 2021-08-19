import React, { useMemo } from 'react'
import { CustomerLevel } from '../use-customer-orders-details'
import qinu from 'qinu'

export function DiamondIcon({ customerLevel }: { customerLevel: CustomerLevel }): React.ReactElement {
  const gradientId = useMemo(() => qinu({ template: 'DiamondIconLinearGradient-%qinu%' }), [customerLevel])

  return (
    <svg width="127" height="40" viewBox="0 0 127 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M38.5 1H119.205C122.815 1 125.767 3.95133 125.767 7.56133V32.4387C125.767 36.0487 122.815 39 119.205 39H24.5"
        stroke="black"
        strokeWidth="0.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.2053 39L47.892 11.4247L38.6073 1H24.3827H24.522H10.2847L1 11.4247L24.6993 39"
        fill={`url(#${gradientId})`}
      />
      <path
        d="M24.4719 39L47.9305 11.4247L38.6332 1H24.4085H24.5479H10.3105L1.02588 11.4247L24.4719 39Z"
        stroke="black"
        strokeWidth="0.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.02539 11.4247H47.8667"
        stroke="black"
        strokeWidth="0.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3101 1L24.5 39L38.6327 1"
        stroke="black"
        strokeWidth="0.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4395 11.5513L24.5475 1.41797L34.7821 11.222"
        stroke="black"
        strokeWidth="0.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        {customerLevel === CustomerLevel.PLATINUM && (
          <linearGradient id={gradientId} x1="5" y1="5.5" x2="48" y2="28" gradientUnits="userSpaceOnUse">
            <animate attributeName="x1" values="5;4;5" dur="7s" repeatCount="indefinite" />
            <animate attributeName="y1" values="5.5;4.5;5.5" dur="7s" repeatCount="indefinite" />
            <animate attributeName="x2" values="48;108.5;48" dur="7s" repeatCount="indefinite" />
            <stop stopColor="#A8AEB6" />
            <stop offset="0.0199" stopColor="#BCC1C7">
              <animate attributeName="offset" values="0.0199;0.0309454;0.0199" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.0597" stopColor="#C3C7CC">
              <animate attributeName="offset" values="0.0597;0.0697112;0.0597" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.1014" stopColor="#D3D6DA">
              <animate attributeName="offset" values="0.1014;0.120298;0.1014" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.1453" stopColor="#EEEFF0">
              <animate attributeName="offset" values="0.1453;0.183327;0.1453" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.1929" stopColor="#F8F8F9">
              <animate attributeName="offset" values="0.1929;0.239427;0.1929" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.251" stopColor="#F8F8F9">
              <animate attributeName="offset" values="0.251;0.33628;0.251" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.3617" stopColor="#F8F8F8">
              <animate attributeName="offset" values="0.3617;0.451013;0.3617" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.540309" stopColor="#E4E5E8" />
            <stop offset="0.743575" stopColor="#D3D6DA" />
            <stop offset="0.808329" stopColor="#C3C7CC" />
            <stop offset="0.898368" stopColor="#A8AEB6" />
          </linearGradient>
        )}
        {customerLevel === CustomerLevel.GOLD && (
          <linearGradient id={gradientId} x1="5" y1="5.5" x2="48" y2="28" gradientUnits="userSpaceOnUse">
            <animate attributeName="x1" values="5;4;5" dur="7s" repeatCount="indefinite" />
            <animate attributeName="y1" values="5.5;4.5;5.5" dur="7s" repeatCount="indefinite" />
            <animate attributeName="x2" values="48;108.5;48" dur="7s" repeatCount="indefinite" />
            <stop stopColor="#D08E17" />
            <stop offset="0.0199" stopColor="#D89C29">
              <animate attributeName="offset" values="0.0199;0.0309454;0.0199" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.0597" stopColor="#E6B248">
              <animate attributeName="offset" values="0.0597;0.0697112;0.0597" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.1014" stopColor="#F1C460">
              <animate attributeName="offset" values="0.1014;0.120298;0.1014" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.1453" stopColor="#F9D072">
              <animate attributeName="offset" values="0.1453;0.183327;0.1453" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.1929" stopColor="#FED87C">
              <animate attributeName="offset" values="0.1929;0.239427;0.1929" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.251" stopColor="#FFDA7F">
              <animate attributeName="offset" values="0.251;0.33628;0.251" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.3617" stopColor="#F9D072">
              <animate attributeName="offset" values="0.3617;0.451013;0.3617" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.540309" stopColor="#E9B64E" />
            <stop offset="0.743575" stopColor="#D08E17" />
            <stop offset="0.808329" stopColor="#B88313" />
            <stop offset="0.898368" stopColor="#99740F" />
          </linearGradient>
        )}
        {customerLevel === CustomerLevel.NOIR && (
          <linearGradient id={gradientId} x1="5" y1="5.5" x2="48" y2="28" gradientUnits="userSpaceOnUse">
            <animate attributeName="x2" values="48;83.5;48" dur="7s" repeatCount="indefinite" />
            <animate attributeName="y2" values="28;49;28" dur="7s" repeatCount="indefinite" />
            <stop stopColor="#FFF7E2">
              <animate attributeName="stopColor" values="#FFF7E2; #FFF9EC" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.0262039" stopColor="#FFF9EC">
              <animate attributeName="stopColor" values="#FFF9EC; #FFF7E2;" dur="7s" repeatCount="indefinite" />
              <animate attributeName="offset" values="0.0262039;0.209294;0.0262039" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.3617" stopColor="white">
              <animate attributeName="offset" values="0.3617;0.353026;0.3617" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.612777" stopColor="#FEFDFA">
              <animate attributeName="offset" values="0.612777;0.540309;0.612777" dur="7s" repeatCount="indefinite" />
            </stop>
            <stop offset="0.743575" stopColor="#FFF6E7" />
          </linearGradient>
        )}
      </defs>
    </svg>
  )
}
