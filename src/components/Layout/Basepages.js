import React from 'react';

class Basepages extends React.Component {

    render() {
        return (
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>

                <header className="site-navbar py-1" role="banner">
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-6 col-xl-2">
                                <h1 className="mb-0"><a href="index.html" className="text-black h2 mb-0">Job<strong>start</strong></a></h1>
                            </div>

                            <div className="col-10 col-xl-10 d-xl-block">
                                <nav className="site-navigation text-right" role="navigation">

                                    <ul className="site-menu js-clone-nav mr-auto d-lg-block">
                                        <li className="active"><a href="index.html">Home</a></li>
                                        <li className="has-children">
                                            <a href="category.html">Category</a>
                                        </li>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="about.html">Login</a></li>
                                        <li><a href="contact.html">Register</a></li>
                                        {/* <li><a href="new-post.html"><span className="rounded bg-primary py-2 px-3 text-white"><span className="h5 mr-2">+</span> Post a Job</span></a></li> */}
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-6 col-xl-2 text-right d-block">
                                <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{ position: "relative", top: "3px" }}><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>
                            </div>

                        </div>
                    </div>
                </header>



                {this.props.children}
            </div>
        );
    }

}

export default Basepages;