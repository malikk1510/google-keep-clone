import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

const Content = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [notesArray, setNotesArray] = useState([]);
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  const show = () => {
    setShowTitle(true);
  };

  const addNotes = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    setNote((prevalue) => {
      return {
        ...prevalue,
        [name]: val,
      };
    });
  };

  const submit = () => {
    setNotesArray([...notesArray, note]);
    setNote((prevalue) => {
      return {
        ...prevalue,
        title: "",
        description: "",
      };
    });
  };

  const filter = (id) => {
    setNotesArray((list) => {
      return list.filter((item,index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="row d-flex justify-content-center mt-3  flex-column align-items-center">
        <div className="col-3 ">
          {showTitle === true ? (
            <textarea
              className="form-control mt-2 "
              onChange={addNotes}
              value={note.title}
              name="title"
              style={{
                height: "10px",
                boxShadow: "-1px 1px 5px 0px rgba(0,0,0,0.75)",
              }}
              placeholder="Title: "
              aria-label="With textarea"
            />
          ) : null}
        </div>
        <div className="col-3">
          <textarea
            className="form-control mt-2 "
            onChange={addNotes}
            value={note.description}
            name="description"
            onClick={show}
            style={{
              height: "80px",
              boxShadow: "-1px 1px 5px 0px rgba(0,0,0,0.75)",
            }}
            placeholder="Write a note here.."
            aria-label="With textarea"
          />
        </div>
        {showTitle === true ? (
          <div className="col-3  d-flex justify-content-end">
            <button className="btn mt-2 button" onClick={submit}>
              <AddIcon />
            </button>
          </div>
        ) : null}
      </div>
      <div className="row mt-5 ">
        <div className="col-12 d-flex">
          <div className="row d-flex justify-content-space-around">
            {notesArray.map((val, index) => {
              return (
                <>
                  <div
                    id={index}
                    className="col-2 pl-3 ml-4 mb-3 btn2"
                    style={{
                      boxShadow: "-1px 1px 5px 0px rgba(0,0,0,0.75)",wordBreak:"break-all"
                    }}
                  >
                    <h4>{val.title} </h4>
                    <p>{val.description}</p>
                    <div className="row">
                      <div className="col-12 p-0 d-flex justify-content-end">
                        <button
                          className="btn delete"
                          onClick={() => {
                            filter(index);
                          }}
                        >
                          <DeleteIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
