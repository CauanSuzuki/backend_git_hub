import React, { useState } from "react";
import { useFormik } from "formik";

function Home() {
  const [store, setStore] = useState([]);
  const [loading, setLoading] = useState(false);

  function reserch(nome) {
    setLoading(true);
    fetch(`https://api.github.com/users/${nome}`)
      .then((row) => row.json())
      .then((data) => {
        setStore(data);
        setLoading(false);
      });
  }
  const formik = useFormik({
    initialValues: {
      userName: "",
      Id: "",
    },
    onSubmit: (values) => {
      reserch(values.userName);
    },
  });

  return (
    <div className="search">
      <p>Search</p>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="userName">user Name:</label>
        <input
          id="userName"
          name="userName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.userName}
        />

        <button type="submit">procurar</button>
      </form>

      {/* <div className={loading === true ? "lds-hourglass" : "none"}></div> */}
      {loading && <div className="lds-hourglass"></div>}

      <div className="bodyx">
        Login: {store.login} <br></br>
        <br></br>
        Id: {store.id}
        <br></br>
        <br></br>
        Nome: {store.name} <br></br>
        <br></br>
        Github: <a href={store.html_url}>{store.html_url}</a>
        <br></br>
        <br></br>
        Bio: {store.bio}
      </div>
    </div>
  );
}
export default Home;
