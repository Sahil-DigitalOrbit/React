import { useState } from "react";
import "./App.css";
import { Form, Button, Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let [formDetails, setDetails] = useState({
    uName: "",
    uEmail: "",
    uPhone: "",
    uMessage: "",
    index: "",
  });

  let [forms, updateForm] = useState([]);
  function setValue(e) {
    let oldData = { ...formDetails };
    oldData[e.target.name] = e.target.value;
    setDetails(oldData);
  }

  function addUser(e) {
    e.preventDefault();
    let obj = { ...formDetails };
    console.log(obj)
    if (obj.index === "") {
      let isFound = forms.find(
        (user) => user.uEmail === obj.uEmail || user.uPhone === obj.uPhone
      );
      if (!isFound) {
        updateForm([...forms, { ...obj }]);
        setDetails({
          uName: "",
          uEmail: "",
          uPhone: "",
          uMessage: "",
          index: "",
        });
      } else {
        toast.error("Email or Phone number exists");
      }
    } else {
      let isFound = forms.filter(
        (user, index) =>  (user.uEmail === obj.uEmail || (user.uPhone === obj.uPhone ))&& index != obj.index
      );
      console.table(isFound)
      if (isFound.length == 0) {
        let idx=formDetails.index
        let newData = [...forms];
        newData[idx].uName = formDetails.uName;
        newData[idx].uEmail = formDetails.uEmail;
        newData[idx].uPhone = formDetails.uPhone;
        newData[idx].uMessage = formDetails.uMessage;
        updateForm(newData);
        setDetails({
          uName: "",
          uEmail: "",
          uPhone: "",
          uMessage: "",
          index: "",
        });
      } else {
        toast.error("Email or Phone number exists");
      }
    }
  }
  function deleteData(idx) {
    let newData = forms.filter((x, index) => index != idx);
    updateForm(newData);
  }
  function updateInfo(idx) {
    let targetData = forms[idx];
    setDetails({
      uName: targetData.uName,
      uEmail: targetData.uEmail,
      uPhone: targetData.uPhone,
      uMessage: targetData.uMessage,
      index: idx,
    });
  }

  return (
    <div className="App">
      <div className="app-section-div">
        <Form className="mb-3" onSubmit={addUser}>
          <div className="form-section">
            <label>Email address</label>
            <input
              name="uEmail"
              type="email"
              onChange={setValue}
              value={formDetails.uEmail}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-section">
            <label>Phone Number</label>
            <input
              name="uPhone"
              onChange={setValue}
              type="text"
              value={formDetails.uPhone}
              placeholder="Enter phone no."
              required
            />
          </div>
          <div className="form-section">
            <label>Name</label>
            <input
              onChange={setValue}
              name="uName"
              type="text"
              value={formDetails.uName}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-section">
            <label>Message</label>
            <textarea
              value={formDetails.uMessage}
              onChange={setValue}
              name="uMessage"
              placeholder="your message"
              rows="3"
              cols="50"
            />
          </div>
          <div className="form-section">
            <Button variant="primary" type="submit">
              {formDetails.index === "" ? "Submit" : "Update"}
            </Button>
          </div>
        </Form>
      </div>
      <div className="app-section-div">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((data, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{data.uName}</td>
                  <td>{data.uEmail}</td>
                  <td>{data.uPhone}</td>
                  <td>{data.uMessage}</td>
                  <td>
                    <button onClick={() => deleteData(idx)}>Delete</button>
                    <button onClick={() => updateInfo(idx)}>Update</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <ToastContainer />
        </Table>
      </div>
    </div>
  );
}

export default App;
