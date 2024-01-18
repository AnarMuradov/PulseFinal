import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";
import { foodDelete, foodPost } from "../../service/foodCrud";
import { Helmet } from "react-helmet-async";
const AddPage = () => {
  const [search, setSearch] = useState("");
  const [property, setProperty] = useState(null);
  const [api, setApi] = useState([]);
  async function getApi() {
    await fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }
  async function handleDelete(id) {
    await foodDelete(id);
    await getApi();
  }
  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
    <Helmet>
      <title>
        Add Page
      </title>
    </Helmet>
    <section className="addPage">
      <div className="addPage__container">
        <div className="addPage__container__formik">
          <Formik
            initialValues={{ name: "", description: "", price: "" }}
            validationSchema={Yup.object({
              name: Yup.string().min(2, "too short!!").required("Required"),
              description: Yup.string()
                .min(2, "too short!!")
                .required("Required"),
              price: Yup.string().min(1, "too short!!").required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                foodPost(values);
                getApi();
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <div>
                <label htmlFor="name">Name</label>
                <Field name="name" type="text" />
                <ErrorMessage name="name" />
              </div>
              <div>
                <label htmlFor="description">description</label>
                <Field name="description" type="text" />
                <ErrorMessage name="description" />
              </div>
              <div>
                <label htmlFor="price">price</label>
                <Field name="price" type="number" />
                <ErrorMessage name="price" />
              </div>
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
        <div className="addPage__container__table">
          <input
            placeholder="Search..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => setProperty({ choosenProperty: "name", asc: true })}
          >
            a-Z
          </button>
          <button
            onClick={() => setProperty({ choosenProperty: "name", asc: false })}
          >
            Z-a
          </button>
          <button
            onClick={() => setProperty({ choosenProperty: "price", asc: true })}
          >
            chox
          </button>
          <button
            onClick={() =>
              setProperty({ choosenProperty: "price", asc: false })
            }
          >
            az
          </button>

          <button onClick={() => setProperty(null)}>Default</button>
          <table>
            <thead>
      <tr>
      <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Delete</th>
      </tr>
            </thead>
            <tbody>
              {[...api]
                .sort((a, b) => {
                  if (property && property.asc === true) {
                    return a[property.choosenProperty] >
                      b[property.choosenProperty]
                      ? 1
                      : b[property.choosenProperty] >
                        a[property.choosenProperty]
                      ? -1
                      : 0;
                  } else if (property && property.asc === false) {
                    return a[property.choosenProperty] <
                      b[property.choosenProperty]
                      ? 1
                      : b[property.choosenProperty] <
                        a[property.choosenProperty]
                      ? -1
                      : 0;
                  } else {
                    return 0;
                  }
                })
                .filter((x) =>
                  x.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((x) => {
                  return (
                    <tr key={x._id}>
                      <td>{x.name}</td>
                      <td>{x.description}</td>
                      <td>{x.price}$</td>
                      <td>
                        <button onClick={() => handleDelete(x._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    </>
  );
};

export default AddPage;
