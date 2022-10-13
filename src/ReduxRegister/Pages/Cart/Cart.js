import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { removeToCart } from "../../Redux/Action/Action";
import { useDispatch } from "react-redux";
import { CgMathEqual } from "react-icons/cg";
import { Link } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { toast } from "react-toastify";

import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const [item, setItem] = useState([]);
  const selector = useSelector((state) => state.cardItems);
  const dispatch = useDispatch();
  const [count, setCount] = useState([]);
  const [totelAll, setTotelAll] = useState(0);

  useEffect(() => {
    let tet = 0;
    item?.map((w) => {
      let multi = Number(w.price) * Number(w.quantity);
      tet = Number(tet) + Number(multi);
    });

    setTotelAll(tet);
  }, [item]);

  useEffect(() => {
    setItem(selector?.data || []);
  }, []);

  useEffect(() => {
    setCount(selector?.data?.length || 0);
  }, [selector]);

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      { token, totelAll }
    );
    const { status } = response.data;
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center ">
        <div className="col-md-8">
          {item?.length > 0 && (
            <>
              <h1>Shopping Cart</h1>
              <h6>You Have {count} items in Shopping Cart</h6>
              <br />
              {item?.map((w, i) => {
                return (
                  <>
                    <div className="d-flex align-items-center p-2 bg-white mt-4 px-3 rounded Main">
                      <div className="mr-1">
                        <img className="rounded" src={w?.imge} width="70" />
                      </div>
                      <div className="d-flex flex-column align-items-center product-details">
                        <span className="font-weight-bold">{w?.name}</span>
                      </div>
                      <h5>${w?.price}&nbsp;&nbsp;&nbsp;&nbsp;X</h5>
                      <input
                        type="number"
                        className="form-control Input"
                        name="number"
                        value={w?.quantity}
                        onChange={(e) => {
                          let arr = [...item];
                          arr[i].quantity = e.target.value;
                          arr[i].totel =
                            Number(e.target.value) * Number(w.price);
                          setItem(arr);
                        }}
                      />
                      <CgMathEqual className="Equal" />
                      <div className="d-flex flex-column align-items-center product-details Total">
                        <span className="font-weight-bold">${w?.totel}</span>
                      </div>
                      <AiOutlineDelete
                        className="mb-1 text-danger delete"
                        onClick={() => {
                          dispatch(removeToCart(w?.id));
                        }}
                      />
                    </div>
                  </>
                );
              })}
              <br />
              <h2 className="GTotal">Grand Total = {totelAll}</h2>

              <StripeCheckout
                className="btn btn-block btn-lg pay-button"
                stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
                token={handleToken}
                amount={totelAll * 100}
                billingAddress
                shippingAddress
              />
              <div className="d-flex flex-row align-items-center mt-3 p-2  rounded">
                {/* <Link
                  to="/payment"
                  className="btn btn-success btn-block btn-lg ml-2 pay-button"
                >
                  Pay Now {totelAll}
                </Link> */}

                <PayPalScriptProvider options={{ "client-id": "test" }}>
                  <PayPalButtons
                    className="btn btn-block btn-lg pay-button"
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: totelAll,
                              currency: "USA",
                            },
                            // amount: { value: totelAll, currency: "USA" },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                      });
                    }}
                  />
                </PayPalScriptProvider>
              </div>
            </>
          )}
          {item.length === 0 && <h1 className="Empty">Cart Is Empty</h1>}
        </div>
      </div>
    </>
  );
};

export default Cart;
