import React from "react";
import "./PhotoDetails.css";
import { Link, useParams } from "react-router-dom";
import NavbarMain from "./NavbarMain";

function PhotoDetails() {
  const { name } = useParams();

  return (
    <>
      <NavbarMain />
      <div className="PhotoDetails row justify-content-center mt-5">
        <div className="card-body button">
          <Link className="btn btn-dark" to="/photos">
            Go Back
          </Link>
        </div>
        <div className="col-11 col-5-lg">
          <div className="PhotoDetails-card card">
            <img
              className="card-img-top"
              src={`/images/Photos/${name}`}
              alt={name}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoDetails;
