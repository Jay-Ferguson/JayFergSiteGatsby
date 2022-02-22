import * as React from "react"
import IntroCard from "../components/IntroCard";
import Socials from "../components/Socials";
import Layout from "../components/Layout";

const about = () => {
     return (
          <Layout>
          <IntroCard>
               <p>I am a front end web developer and UX designer from Ottawa Canada. 
                    I am passionate about creating modern designs. 
                    I have knowledge of modern technologies such as: post CSS, 
                    SASS, Webpack, Javascript, Wordpress, Github and more. 
                    I utilize these tools to build my sites.
                    To see more of my projects or just to learn more about me, 
                    check out my social media pages through the links below!</p>

                    <Socials></Socials>
          </IntroCard>
          
          </Layout>
          
     )
}

export default about;