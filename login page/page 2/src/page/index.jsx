import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div className='main-container'>
      <span className='sign-in-1'>Sign in</span>
      <span className='email'>E-mail</span>
      <div className='rectangle'>
        <span className='email-2'>E-mail</span>
      </div>
      <span className='password-input'>Password</span>
      <div className='rectangle-3'>
        <span className='password-input-4'>Password</span>
      </div>
      <span className='confirm-password-input'>Confrom Password</span>
      <div className='rectangle-5'>
        <input className='group-input' />
      </div>
      <div className='rectangle-6'>
        <span className='sign-in-7'>Sign in</span>
      </div>
    </div>
  );
}
