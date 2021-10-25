import React, { useState, useEffect } from "react";

function ContactAdmin() {
  const [getcontact, setgetcontact] = useState([]);

  useEffect(() => {
    getcontactList();
  }, []);

  const getcontactList = () => {
    fetch("https://myportfoliobackend1.herokuapp.com/api/contactform/")
      .then((res) => res.json())
      .then((data) => setgetcontact(data))
      .catch((err) => console.error("Error: ", err));
  };
  return (
    <div>
      <ul>
        {getcontact.map((post) => (
          <li>
            {post.name},{post.email},{post.phone},{post.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactAdmin;
