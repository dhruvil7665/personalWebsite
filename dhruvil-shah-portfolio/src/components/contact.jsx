import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div><section class="colorlib-contact" data-section="contact">
      <div class="colorlib-narrow-content">
          <div class="row">
              <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                  <span class="heading-meta">Get in Touch</span>
                  <h2 class="colorlib-heading">Contact</h2>
              </div>
          </div>
          <div class="row">
              <div class="col-md-5">
                  <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                      <div class="colorlib-icon">
                          <i class="icon-globe-outline"></i>
                      </div>
                      <div class="colorlib-text">
                          <p><a href="#">shah.dhruvil@northeastern.edu</a></p>
                      </div>
                  </div>

                  <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                      <div class="colorlib-icon">
                          <i class="icon-map"></i>
                      </div>
                      <div class="colorlib-text">
                          <p>226 Parker Hill Ave, Boston MA 02120</p>
                      </div>
                  </div>

                  <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                      <div class="colorlib-icon">
                          <i class="icon-phone"></i>
                      </div>
                      <div class="colorlib-text">
                          <p><a href="tel://">+1 857-588-2246</a></p>
                      </div>
                  </div>
              </div>
         
          </div>
      </div>
  </section></div>


      )
    }
  }