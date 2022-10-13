import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../Component/Icons/Icon_prev_ui.png";
import { BsSearch } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NotificationBadge from "react-notification-badge";

const Header = () => {
  const selector = useSelector((pre) => pre.cardItems);
  const [num, setNum] = useState(0);

  useEffect(() => {
    setNum(selector?.data?.length || 0);
  }, [selector]);
  return (
    <>
      <header className="section-header">
        <section className="header-main border-bottom bg-white">
          <div className="container-fluid">
            <div className="row p-2 pt-3 pb-3 d-flex align-items-center">
              <div className="col-md-2 Logo">
                <Link to="/">
                  <img className="d-none d-md-flex" src={Logo} width="100" />
                  <h5 className="title">React Redux</h5>
                </Link>
              </div>
              <div className="col-md-8">
                <div className="d-flex form-inputs">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search any product..."
                  />
                  <i className="bx bx-search icon">
                    <BsSearch />
                  </i>
                </div>
              </div>

              <div className="col-md-1">
                <Link to="/cart">
                  <NotificationBadge
                    count={num}
                    effect={[null, null, { top: "-20px" }, { top: "0px" }]}
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      bottom: "50px",
                      marginTop: "14px",
                      left: "110px",
                    }}
                  />
                  <FaOpencart size={40} className="Cart" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
