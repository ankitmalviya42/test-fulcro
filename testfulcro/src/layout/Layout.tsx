import React from 'react'
import Header from './header/header.component';


interface LayoutProps {
    children: React.ReactNode;
  }
  


export default function Layout({children}: LayoutProps){
  return (
    <div>
        <Header/>
      {children}
    </div>
  )
}
