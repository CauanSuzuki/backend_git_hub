import React, { useState } from "react";
import { useFormik } from "formik";

function Home() {
  // const [user, setUser] = useState([]);
  const [store, setStore] = useState([]);

  function reserch() {
    fetch(`https://api.github.com/users/${formik.values.userName}`)
      .then((row) => row.json())
      .then((data) => {
        setStore(data);
      });
  }
  const formik = useFormik({
    initialValues: {
      userName: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div>
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
        {/* <input
          type="text"
          onChange={(event) => setUser(event.target.value)}
          placeholder="Digite o usuário"
        /> */}
        <button onClick={reserch} type="submit">
          {/* {console.log("store",store)}
          {console.log("user",user)}
          {console.log("fromik",formik)}
          {console.log("userName",formik.userName)} */}
          procurar
        </button>
      </form>

      <div>
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
