import React from "react";
import { Link } from "react-router-dom";
import "./PhotosList.css";
import NavbarMain from "./NavbarMain";

function PhotosList({ photos }) {
  return (
    <>
      <NavbarMain />
      <div className="PhotosList">
        <div className="row">
          {photos.map((photo, index) => (
            <div
              className="Photo col-lg-3 col-md-4 col-sm-6 text-center"
              key={`photo-${index}`}
            >
              <Link className="link" to={`${photo}`}>
                <img src={`/images/Photos/${photo}`} alt="foto" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PhotosList;
