import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from "react-icons-kit";
import { github } from "react-icons-kit/icomoon/github";
import {facebook} from 'react-icons-kit/icomoon/facebook';
import {instagram} from 'react-icons-kit/icomoon/instagram';

export default function Footer() {
  return (
    <div id='footer' >
      <p>Coded with love by Angela & Sofia ♡</p>
      <div className="footer-icons">
            <Link to={"https://github.com/somorales/viajes"}><Icon icon={github} /></Link>
            <Icon icon={facebook} />
            <Icon icon={instagram} />
          </div>
    </div>
  )
}
