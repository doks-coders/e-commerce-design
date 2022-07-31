import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Box,Flex} from '@chakra-ui/react'

import {useEffect} from 'react' 
import LoadingElement from './LoadingElement'

import AOS from "aos";
import "aos/dist/aos.css";

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress


import {useState} from 'react'

//Binding events. 
 


const Layout = ({children}) => {
  Router.events.on('routeChangeStart', () => {setLoading(true);
    NProgress.start()}); 
    

    Router.events.on('routeChangeComplete', () => {setLoading(false);
      NProgress.done()}); 
    
      Router.events.on('routeChangeError', () => {setLoading(false);
        NProgress.done()}); 
    

  let [loading,setLoading] = useState(false)
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    {
      loading && 
        <Box className="fade">
        <LoadingElement/>
        </Box>
         
      
    }
    {
     !loading && <Box w="100%" className="fade">
       <Header />
    <Box pt="75px">
    {children}
    </Box>
    
    <Footer/>
      </Box>
    }
   
    </>
  )
}

export default Layout