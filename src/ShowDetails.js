import React from "react";
import "./ShowDetails.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import NavbarMain from "./NavbarMain";

function ShowDetails() {
  const { name } = useParams();

  return (
    <>
      <NavbarMain />
      <div className="ShowDetails row justify-content-center mt-5">
        <div>params</div>
        <div className="card-body button">
          <Link className="btn btn-dark" to="/shows">
            Go Back
          </Link>
        </div>
        <div className="col-11 col-5-lg">
          <div className="ShowDetails-card card">
            <img
              className="card-img-top"
              src={`/images/Shows/${name}`}
              alt={name}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowDetails;
