import React from "react";
import { Link } from "react-router-dom";
import "./ShowsList.css";
import NavbarMain from "./NavbarMain";

function ShowsList({ shows }) {
  return (
    <>
      <NavbarMain />
      <div className="ShowsList">
        <div className="row">
          {shows.map((show, index) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 text-center"
              key={`photo-${index}`}
            >
              <Link className="link" to={`${show}`}>
                <img src={`/images/Shows/${show}`} alt="foto" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowsList;
