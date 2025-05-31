import React from "react"
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsDribbble } from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/vikram-kumar-0b7619244/" target="__blank"><BsLinkedin /></a>
      <a href="https://github.com/vikramKumarWebLearner" target="__blank"><BsGithub /></a>
      {/* <a href="https://dribbble.com" target="__blank"><BsDribbble /></a> */}
    </div>
  )

}
export default HeaderSocials;