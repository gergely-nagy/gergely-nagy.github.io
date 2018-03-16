require('./info.scss')

import React from 'react'

import contact from '../assets/contact-info'
import face from 'common/assets/face.png'

export default () => {
  return (
    <div data-component="info" className="info">
      <img width="200" height="200" src={face} />
      <h1 className="title">Gergely Nagy</h1>
      <h2 className="sub-title">
        Frontend Developer
        <a href="https://zszportal.zalaszam.hu/" target="_blank">@Zalaszam</a>
      </h2>
      {contact.map(({nickname, icon, url}, i) => (
        <a
          target="_blank"
          href={url}
          key={`contact-${i}`}
          className={`contact-info ${icon.split('-')[1]}`}>
          <i className={`fa ${icon}`}></i>
          {nickname}
        </a>
      ))}
    </div>
  )
}
