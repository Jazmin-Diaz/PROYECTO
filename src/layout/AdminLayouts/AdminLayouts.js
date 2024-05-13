import React from 'react';
import BarraMenu from '../../components/BarraMenu';
import Login from '../../components/Login'

export function AdminLayouts({children}) {
  return (
    <div className='container-fluid'>
      
        <div className='section'>
            <BarraMenu/>
        </div>
        <div className='section'>
            {children}
        </div>

       
    </div>

    
  )
}
