import React from "react"
import { inject, observer } from "mobx-react"

import './style.scss'


@inject('UserStore', 'UIStore')
@observer
class LandingComponent extends React.Component {

  componentDidMount() {

  }

  render() {


    const { UserStore, UIStore } = this.props;

    return (
      <div className="container">
        <div className="row row-custom align-items-center">
          <div className="col-md-10">
            <div className="tab-content bg-white p-4 rounded" style={{ border: "1px solid #ddd" }}>
              <div className="row mb-3">
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <input type="text" className="mr-3 form-control-2   px-4" placeholder="Find candidate" />
                    </div>
                    <div className="col-md-6 mb-3 mb-md-0">
                      <input type="text" className="mr-3 form-control-2   px-4" placeholder="Find employer" />
                    </div>

                  </div>
                </div>
                <div className="col-md-3">
                  <input type="submit" className="btn btn-search btn-primary btn-block" value="Search" />
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="row justify-content-start text-left mb-5">
          <div className="col-md-9 aos-init aos-animate" style={{ margin: "20px" }}>
            <h2 className="font-weight-bold text-black">Featured Jobs</h2>
          </div>
        </div>
        <div>
          <div className="row aos-init aos-animate">
            <div className="col-md-12">
              <div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center">
                <div className="mb-4 mb-md-0 mr-5">
                  <div className="job-post-item-header d-flex align-items-center">
                    <h2 className="mr-3 text-black h4">Frontend Development</h2>
                    <div className="badge-wrap">
                      <span className="bg-primary text-white badge py-2 px-4">Partime</span>
                    </div>
                  </div>
                  <div className="job-post-item-body d-block d-md-flex">
                    <div className="mr-3"><i className="fa fa-briefcase" aria-hidden="true"></i> <a href="#">Facebook, Inc.</a></div>
                    <div><span className="fl-bigmug-line-big104"></span> <span>New York City, USA</span></div>
                  </div>
                </div>
                <div className="ml-auto">
                  <a href="#" className="btn btn-secondary rounded-circle btn-favorite text-gray-500"><i className="fa fa-heart" aria-hidden="true"></i></a>
                  <a href="job-single.html" className="btn btn-primary py-2" style={{marginLeft:"20px"}}>Apply Job</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row aos-init aos-animate">
            <div className="col-md-12">
              <div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center">
                <div className="mb-4 mb-md-0 mr-5">
                  <div className="job-post-item-header d-flex align-items-center">
                    <h2 className="mr-3 text-black h4">Frontend Development</h2>
                    <div className="badge-wrap">
                      <span className="bg-primary text-white badge py-2 px-4">Partime</span>
                    </div>
                  </div>
                  <div className="job-post-item-body d-block d-md-flex">
                    <div className="mr-3"><i className="fa fa-briefcase" aria-hidden="true"></i> <a href="#">Facebook, Inc.</a></div>
                    <div><span className="fl-bigmug-line-big104"></span> <span>New York City, USA</span></div>
                  </div>
                </div>
                <div className="ml-auto">
                  <a href="#" className="btn btn-secondary rounded-circle btn-favorite text-gray-500"><i className="fa fa-heart" aria-hidden="true"></i></a>
                  <a href="job-single.html" className="btn btn-primary py-2" style={{marginLeft:"20px"}}>Apply Job</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row aos-init aos-animate">
            <div className="col-md-12">
              <div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center">
                <div className="mb-4 mb-md-0 mr-5">
                  <div className="job-post-item-header d-flex align-items-center">
                    <h2 className="mr-3 text-black h4">Frontend Development</h2>
                    <div className="badge-wrap">
                      <span className="bg-primary text-white badge py-2 px-4">Partime</span>
                    </div>
                  </div>
                  <div className="job-post-item-body d-block d-md-flex">
                    <div className="mr-3"><i className="fa fa-briefcase" aria-hidden="true"></i> <a href="#">Facebook, Inc.</a></div>
                    <div><span className="fl-bigmug-line-big104"></span> <span>New York City, USA</span></div>
                  </div>
                </div>
                <div className="ml-auto">
                  <a href="#" className="btn btn-secondary rounded-circle btn-favorite text-gray-500"><i className="fa fa-heart" aria-hidden="true"></i></a>
                  <a href="job-single.html" className="btn btn-primary py-2" style={{marginLeft:"20px"}}>Apply Job</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row aos-init aos-animate">
            <div className="col-md-12">
              <div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center">
                <div className="mb-4 mb-md-0 mr-5">
                  <div className="job-post-item-header d-flex align-items-center">
                    <h2 className="mr-3 text-black h4">Frontend Development</h2>
                    <div className="badge-wrap">
                      <span className="bg-primary text-white badge py-2 px-4">Partime</span>
                    </div>
                  </div>
                  <div className="job-post-item-body d-block d-md-flex">
                    <div className="mr-3"><i className="fa fa-briefcase" aria-hidden="true"></i> <a href="#">Facebook, Inc.</a></div>
                    <div><span className="fl-bigmug-line-big104"></span> <span>New York City, USA</span></div>
                  </div>
                </div>
                <div className="ml-auto">
                  <a href="#" className="btn btn-secondary rounded-circle btn-favorite text-gray-500"><i className="fa fa-heart" aria-hidden="true"></i></a>
                  <a href="job-single.html" className="btn btn-primary py-2" style={{marginLeft:"20px"}}>Apply Job</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row aos-init aos-animate">
            <div className="col-md-12">
              <div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center">
                <div className="mb-4 mb-md-0 mr-5">
                  <div className="job-post-item-header d-flex align-items-center">
                    <h2 className="mr-3 text-black h4">Frontend Development</h2>
                    <div className="badge-wrap">
                      <span className="bg-primary text-white badge py-2 px-4">Partime</span>
                    </div>
                  </div>
                  <div className="job-post-item-body d-block d-md-flex">
                    <div className="mr-3"><i className="fa fa-briefcase" aria-hidden="true"></i> <a href="#">Facebook, Inc.</a></div>
                    <div><span className="fl-bigmug-line-big104"></span> <span>New York City, USA</span></div>
                  </div>
                </div>
                <div className="ml-auto">
                  <a href="#" className="btn btn-secondary rounded-circle btn-favorite text-gray-500"><i className="fa fa-heart" aria-hidden="true"></i></a>
                  <a href="job-single.html" className="btn btn-primary py-2" style={{marginLeft:"20px"}}>Apply Job</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row aos-init aos-animate">
            <div className="col-md-12">
              <div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center">
                <div className="mb-4 mb-md-0 mr-5">
                  <div className="job-post-item-header d-flex align-items-center">
                    <h2 className="mr-3 text-black h4">Frontend Development</h2>
                    <div className="badge-wrap">
                      <span className="bg-primary text-white badge py-2 px-4">Partime</span>
                    </div>
                  </div>
                  <div className="job-post-item-body d-block d-md-flex">
                    <div className="mr-3"><i className="fa fa-briefcase" aria-hidden="true"></i> <a href="#">Facebook, Inc.</a></div>
                    <div><span className="fl-bigmug-line-big104"></span> <span>New York City, USA</span></div>
                  </div>
                </div>
                <div className="ml-auto">
                  <a href="#" className="btn btn-secondary rounded-circle btn-favorite text-gray-500"><i className="fa fa-heart" aria-hidden="true"></i></a>
                  <a href="job-single.html" className="btn btn-primary py-2" style={{marginLeft:"20px"}}>Apply Job</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row aos-init aos-animate">
            <div className="col-md-12">
              <div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center">
                <div className="mb-4 mb-md-0 mr-5">
                  <div className="job-post-item-header d-flex align-items-center">
                    <h2 className="mr-3 text-black h4">Frontend Development</h2>
                    <div className="badge-wrap">
                      <span className="bg-primary text-white badge py-2 px-4">Partime</span>
                    </div>
                  </div>
                  <div className="job-post-item-body d-block d-md-flex">
                    <div className="mr-3"><i className="fa fa-briefcase" aria-hidden="true"></i> <a href="#">Facebook, Inc.</a></div>
                    <div><span className="fl-bigmug-line-big104"></span> <span>New York City, USA</span></div>
                  </div>
                </div>
                <div className="ml-auto">
                  <a href="#" className="btn btn-secondary rounded-circle btn-favorite text-gray-500"><i className="fa fa-heart" aria-hidden="true"></i></a>
                  <a href="job-single.html" className="btn btn-primary py-2" style={{marginLeft:"20px"}}>Apply Job</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row aos-init aos-animate">
            <div className="col-md-12">
              <div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center">
                <div className="mb-4 mb-md-0 mr-5">
                  <div className="job-post-item-header d-flex align-items-center">
                    <h2 className="mr-3 text-black h4">Frontend Development</h2>
                    <div className="badge-wrap">
                      <span className="bg-primary text-white badge py-2 px-4">Partime</span>
                    </div>
                  </div>
                  <div className="job-post-item-body d-block d-md-flex">
                    <div className="mr-3"><i className="fa fa-briefcase" aria-hidden="true"></i> <a href="#">Facebook, Inc.</a></div>
                    <div><span className="fl-bigmug-line-big104"></span> <span>New York City, USA</span></div>
                  </div>
                </div>
                <div className="ml-auto">
                  <a href="#" className="btn btn-secondary rounded-circle btn-favorite text-gray-500"><i className="fa fa-heart" aria-hidden="true"></i></a>
                  <a href="job-single.html" className="btn btn-primary py-2" style={{marginLeft:"20px"}}>Apply Job</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row aos-init aos-animate">
            <div className="col-md-12">
              <div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center">
                <div className="mb-4 mb-md-0 mr-5">
                  <div className="job-post-item-header d-flex align-items-center">
                    <h2 className="mr-3 text-black h4">Frontend Development</h2>
                    <div className="badge-wrap">
                      <span className="bg-primary text-white badge py-2 px-4">Partime</span>
                    </div>
                  </div>
                  <div className="job-post-item-body d-block d-md-flex">
                    <div className="mr-3"><i className="fa fa-briefcase" aria-hidden="true"></i> <a href="#">Facebook, Inc.</a></div>
                    <div><span className="fl-bigmug-line-big104"></span> <span>New York City, USA</span></div>
                  </div>
                </div>
                <div className="ml-auto">
                  <a href="#" className="btn btn-secondary rounded-circle btn-favorite text-gray-500"><i className="fa fa-heart" aria-hidden="true"></i></a>
                  <a href="job-single.html" className="btn btn-primary py-2" style={{marginLeft:"20px"}}>Apply Job</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row aos-init aos-animate">
            <div className="col-md-12">
              <div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center">
                <div className="mb-4 mb-md-0 mr-5">
                  <div className="job-post-item-header d-flex align-items-center">
                    <h2 className="mr-3 text-black h4">Frontend Development</h2>
                    <div className="badge-wrap">
                      <span className="bg-primary text-white badge py-2 px-4">Partime</span>
                    </div>
                  </div>
                  <div className="job-post-item-body d-block d-md-flex">
                    <div className="mr-3"><i className="fa fa-briefcase" aria-hidden="true"></i> <a href="#">Facebook, Inc.</a></div>
                    <div><span className="fl-bigmug-line-big104"></span> <span>New York City, USA</span></div>
                  </div>
                </div>
                <div className="ml-auto">
                  <a href="#" className="btn btn-secondary rounded-circle btn-favorite text-gray-500"><i className="fa fa-heart" aria-hidden="true"></i></a>
                  <a href="job-single.html" className="btn btn-primary py-2" style={{marginLeft:"20px"}}>Apply Job</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row aos-init aos-animate">
            <div className="col-md-12">
              <div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center">
                <div className="mb-4 mb-md-0 mr-5">
                  <div className="job-post-item-header d-flex align-items-center">
                    <h2 className="mr-3 text-black h4">Frontend Development</h2>
                    <div className="badge-wrap">
                      <span className="bg-primary text-white badge py-2 px-4">Partime</span>
                    </div>
                  </div>
                  <div className="job-post-item-body d-block d-md-flex">
                    <div className="mr-3"><i className="fa fa-briefcase" aria-hidden="true"></i> <a href="#">Facebook, Inc.</a></div>
                    <div><span className="fl-bigmug-line-big104"></span> <span>New York City, USA</span></div>
                  </div>
                </div>
                <div className="ml-auto">
                  <a href="#" className="btn btn-secondary rounded-circle btn-favorite text-gray-500"><i className="fa fa-heart" aria-hidden="true"></i></a>
                  <a href="job-single.html" className="btn btn-primary py-2" style={{marginLeft:"20px"}}>Apply Job</a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}
export default LandingComponent
