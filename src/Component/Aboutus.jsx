import React from "react";

function Aboutus(){
    return ( 
    <div className="container bg-info text-danger">
       <h1>About Edupoly</h1> 
       <ul class="list-unstyled d-flex flex-column gap-2">
        <li>
          <a href="#" class="btn btn-hover-light rounded-2 d-flex align-items-start gap-2 py-2 px-3 lh-sm text-start">
            <svg class="bi" width="24" height="24"></svg>
            <div>
              <strong class="d-block">Main product</strong>
              <small>Take a tour through the product</small>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="btn btn-hover-light rounded-2 d-flex align-items-start gap-2 py-2 px-3 lh-sm text-start">
            <svg class="bi" width="24" height="24"></svg>
            <div>
              <strong class="d-block">Another product</strong>
              <small>Explore this other product we offer</small>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="btn btn-hover-light rounded-2 d-flex align-items-start gap-2 py-2 px-3 lh-sm text-start">
            <svg class="bi" width="24" height="24"></svg>
            <div>
              <strong class="d-block">Support</strong>
              <small>Get help from our support crew</small>
            </div>
          </a>
        </li>
      </ul>
    </div> )
}
export default Aboutus