import React from 'react';
import Footer from './partials/Footer.comp';
import Header from './partials/Header.comp';

const DefaultLayout = ({children}) =>{
    return(
        
        <div className='default-layout'>
           
           <header>
           <Header />
           </header>

           <main className='main'>
         {children}
           </main>

          <footer className='footer'>
          <Footer />
          </footer>
          
           
        </div>
    )
}

export default DefaultLayout