import React, { useEffect, useState } from "react";

function Projectadmin() {
  const [random, setrandom] = useState([]);

  const [projectname, setprojectname] = useState("");
  const [description, setdescription] = useState("");
  const [tools, settools] = useState("");
  const [image, setimage] = useState("");

  useEffect(() => {
    getProjectData();
  }, []);

  const getProjectData = () => {
    fetch("https://myportfoliobackend1.herokuapp.com/api/projects/")
      .then((res) => res.json())
      .then((data) => setrandom(data))
      .catch((err) => console.error("Error: ", err));
  };

  const deleteUser = (_id) => {
    fetch(
      `https://myportfoliobackend1.herokuapp.com/api/projects/delete/${_id}`,
      {
        method: "DELETE",
      }
    ).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getProjectData();
      });
    });
  };

  function selectUser(_id) {
    let item = random[_id - 1];
    setprojectname(item.projectname);
    setdescription(item.description);
    settools(item.tools);
    setimage(item.image);
  }
  function updateUser(_id) {
    let item = { projectname, description, tools, image };
    console.warn("item", item);
    fetch(
      `https://myportfoliobackend1.herokuapp.com/api/projects/update/${_id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    ).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getProjectData();
      });
    });
  }

  return (
    <div className="App">
      <h1>Update User Data With API </h1>
      <table border="1" style={{ float: "left" }}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>projectname</td>
            <td>description</td>
            <td>tools</td>
            <td>image</td>
            <td>Operations</td>
          </tr>
          {random.map((item, i) => (
            <tr key={i}>
              <td>{item._id}</td>
              <td>{item.projectname}</td>
              <td>{item.description}</td>
              <td>{item.tools}</td>
              <td>{item.image}</td>
              <td>
                <button onClick={() => deleteUser(item._id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => selectUser(item._id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          value={projectname}
          onChange={(e) => {
            setprojectname(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          value={image}
          onChange={(e) => {
            setimage(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          value={tools}
          onChange={(e) => {
            settools(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <button onClick={updateUser}>Update User</button>
      </div>
    </div>
  );
}

export default Projectadmin;
