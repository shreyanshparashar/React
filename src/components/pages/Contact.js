import React, { useState } from "react";
import "../../App.css";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [emailId, setEmailId] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    if (e) e.preventDefault();
    let newErrors = {};
    if (name.trim() === "") {
      newErrors.name = "Please enter your name";
    }
    if (mobileNo.trim() === "") {
      newErrors.mobileNo = "Please enter your mobile no";
    }
    if (emailId.trim() === "") {
      newErrors.emailId = "Please enter your Email";
    }
    if (message.trim() === "") {
      newErrors.message = "Please enter a message";
    }

    setErrors(newErrors);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text center"> Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={onSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Full Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Full Name"
                />
                {errors.name && <p>{errors.name}</p>}
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Mobile Number</label>
                <input
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="For Ex.8258745690"
                />
                {errors.mobileNo && <p>{errors.mobileNo}</p>}
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                {errors.emaiId && <p>{errors.emaiId}</p>}
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
                {errors.message && <p>{errors.message}</p>}
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
