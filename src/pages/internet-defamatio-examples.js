import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Internet Defamation Cases Examples</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>Internet Defamation occurs when someone posts a false factual negative statement on the Internet.  We encounter Internet defamation most frequently as a result of statements posted in a web log (blog) or in an Internet forum.  These posts constituting Internet defamation are often cached and indexed by the major search engines.</p>
                    <p>We have assisted our clients not only in removing defamatory contents from the Internet but also in identifying the anonymous post authors.  When litigation has become necessary, we have obtained legal victories for our clients, both through Summary Judgment and after hotly contested trials.  Injunctive relief ordering individuals to remove posts are not very easy to obtain due to their impact on Free Speech, but we have obtained them multiple times on behalf of our clients.</p>
                    <p>An Internet defamation attorney with our Internet defamation law firm is experienced in removing these cyber libel and online slander from the website where the defamation is posted and from the major search engines.  Whether your business is defamed in an Internet blog, Internet forum, or anywhere online, or whether you need expert advice to interpret the  Communications Decency Act, our Internet defamation attorneys can protect your reputation in cyberspace.</p>
                    <p>Internet defamation law changes constantly as courts interpret the Communications Decency Act and other laws affecting you rights online.  The distinction between a service provider and a content provider is subject to different interpretations.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic