import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import styled from 'styled-components';

import React from 'react'
import { Link } from 'gatsby';

const navBarContainer = styled.nav`
width:100%;
height:5rem;
display:flex;
align-items:center;
justify-content: flex-end;
background-color: var(--black);

&:button {
color:var(--white);
margin-right:2rem;
}
`

const modal = {
     hidden:{
          y:"100vh",
          opacity: 0,
     },
     visible: {
          y:"200px",
          opacity: 1,
          transition:{delay:0.5}
     }
}

const backdrop = {
     visible: {opacity:1},
     hidden: {opacity:0}
}

const Modal = ({showModal, setShowModal}) => {
     return (
          <AnimatePresence exitBeforeEnter>
               {showModal && (
                    <motion.div className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible">

                    <motion.div className="modal" variants={model}>
                    <Link to="/"></Link>
                    <Link to="/about"></Link>
                    <Link to="/projects"></Link>
                    <Link to="/contact"></Link>
                    </motion.div>
               )}
          </AnimatePresence>
     )
}
