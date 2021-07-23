import React from 'react'
import { NavMobile } from './nav-mobile'

export const BasicNavMobile = (): React.ReactElement => (
  <NavMobile isBurgerMenuOpen setBurgerMenuOpen={() => alert('Burger menu is opened')} />
)

export const NavMobileWithUserName = (): React.ReactElement => (
  <NavMobile isBurgerMenuOpen setBurgerMenuOpen={() => alert('Burger menu is opened')} userName="Kelya" />
)
