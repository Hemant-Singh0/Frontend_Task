import React, { useState } from "react";
import "./Dashbord.css";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/Action/Action";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  let arrays = [
    {
      id: "1",
      imge: "https://res.cloudinary.com/dxfq3iotg/image/upload/v1574239782/ecommerce-furniture/simple-dining-table-1813502.jpg",
      price: "399",
      name: "Simple Dining Table",
    },
    {
      id: "2",
      imge: "https://res.cloudinary.com/dxfq3iotg/image/upload/v1574239782/ecommerce-furniture/black-kettle-beside-condiment-shakers-and-green-fruits-and-1080696.jpg",
      price: "999",
      name: "Home Dining Table",
    },
    {
      id: "3",
      imge: "https://res.cloudinary.com/dxfq3iotg/image/upload/v1574239782/ecommerce-furniture/apartment-chairs-clean-contemporary-534172.jpg",
      price: "1099",
      name: "Appartment Dining Table",
    },
    {
      id: "4",
      imge: "https://res.cloudinary.com/dxfq3iotg/image/upload/v1574239781/ecommerce-furniture/cabinet-contemporary-cups-decoration-279618.jpg",
      price: "399",
      name: "Home wall cabinet",
    },
    {
      id: "5",
      imge: "https://res.cloudinary.com/dxfq3iotg/image/upload/v1574239782/ecommerce-furniture/office-chair-and-desk-1957477.jpg",
      price: "5099",
      name: "Office Chair Furniture",
    },
    {
      id: "6",
      imge: "https://res.cloudinary.com/dxfq3iotg/image/upload/v1574239781/ecommerce-furniture/apartment-armchair-chair-coffee-table-1148955.jpg",
      price: "3099",
      name: "Luxury Arm Chair",
    },
  ];
  const search = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input type="text" value={text} onChange={search} />
      <div className="MainContainer">
        <div className="row">
          {arrays
            .filter((val) => {
              if (text === "") {
                return val;
              } else if (isNaN(+text)) {
                if (val.name.toLowerCase().startsWith(text.toLowerCase())) {
                  return val;
                }
              }
            })
            .map((w) => {
              return (
                <div className="col-md-3">
                  <div className="category mb-10">
                    <div>
                      <img src={w.imge} alt="product images" />
                    </div>
                    <div className="frhoverinfo">
                      <ul className="productaction">
                        <li>
                          <Link to="/register">
                            <i>Buy</i>
                          </Link>
                        </li>

                        <li>
                          <FaOpencart
                            size={30}
                            className="icons"
                            onClick={() => {
                              dispatch(addToCart(w));
                            }}
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="frproductinner innerposition">
                      <h5>{w.name}</h5>
                      <ul className="frproprize text-left ml-text">
                        <li className="oldprize">${w.price}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
