import { useDispatch } from "react-redux";
import { useState } from "react";
import {deposit} from './Actions';
import {withdraw} from './Actions';
import {nameUpdate} from './Actions'
function Forms() {
  let dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState(null);
  const [transactionId,updateTranscationId] = useState(0);

  return (
    <>
      <div className="container">
        <h2 className="text-primary">Form Component</h2>
        <div className="row">
          <div className="col-4">
            <input
              type="number"
              className="form-control"
              placeholder="Enter number"
              value={amount}
              onChange={(e) => {
                let data = e.target.value;
                setAmount(data);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-1 mx-2"
            onClick={() => {
              dispatch(deposit(amount));
              dispatch({type:"ADD TRANSACTION", payload:{
                id:transactionId,
                amount:amount,
                date:new Date(),
                type:"Credit"
              }});
              //{type: "deposit", payload: amount}
              setAmount("");
            }}>Deposit</button>
          <button
            className="btn btn-danger col-1 mx-3"
            onClick={() => {
              dispatch(withdraw(amount));
                //{type: "withdraw", payload: amount}
            }}>Withdraw</button>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full name"
              value={fullName}
              onChange={(e) => {
                let data = e.target.value;
                setFullName(data);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-1 mx-2"
            onClick={() => {
              dispatch(nameUpdate(fullName)
                // { type: "nameUpdate", payload: fullName }
            );
            setFullName("")
            }}>Update</button>

         
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Mobile number"
              value={mobile}
              onChange={(e) => {
                let data = e.target.value;
                setMobile(data);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-1 mx-2"
            onClick={() => {
              dispatch({ type: "mobileUpdate", payload: mobile });
            setMobile("")
            }}>Update</button>

<div>
<button
            className="btn btn-danger mt-3 col-1 mx-2"
            onClick={() => {
              dispatch({ type: "reset" });
            setMobile("")
            }}>Reset</button>
</div>
        </div>
      </div>
    </>
  );
}

export default Forms;
