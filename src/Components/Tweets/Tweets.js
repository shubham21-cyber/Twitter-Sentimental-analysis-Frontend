import axios from "axios";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Tweets = () => {
  const [sentiments, setSentiments] = useState("");
  const [date, setTweetDate] = useState("");
  const [results, setResults] = useState([]);

  const postData = async (formData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "http://localhost:5000/sentiments",
        formData,
        config
      );
      console.log(res.data);
      setResults(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div class="sidebar-light">
      <div class="container-scroller">
        <Navbar />
        <div class="container-fluid page-body-wrapper">
          <Sidebar />
          <div class="main-panel">
            <div class="content-wrapper">
              <div>
                <div class="col-md-12 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <form class="forms-sample">
                        <div class="form-group">
                          <label for="exampleInputUsername1">Keywords</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputUsername1"
                            placeholder="Username"
                            value={sentiments}
                            onChange={(e) => {
                              setSentiments(e.target.value);
                            }}
                            style={{ marginBottom: "20px" }}
                          />
                          <label>Date:</label>
                          <input
                            class="form-control"
                            // data-inputmask="'alias': 'datetime'"
                            // data-inputmask-inputformat="yyyy-mm-dd"
                            value={date}
                            onChange={(e) => {
                              setTweetDate(e.target.value);
                            }}
                          />
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            postData({ sentiments, date });
                          }}
                          class="btn btn-primary mr-2"
                        >
                          Submit
                        </button>
                        <button class="btn btn-light">Cancel</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Data table</h4>
                  <div class="row">
                    <div class="col-12">
                      <div class="table-responsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>Tweets</th>
                              <th> Retweet</th>
                              {/* <th>Favorite</th> */}
                              <th>Tweet Time</th>
                              <th>Score</th>
                              <th>Sentiments</th>
                            </tr>
                          </thead>
                          <tbody>
                            {!Array.isArray(results) ? (
                              <p>No Tweets</p>
                            ) : (
                              results.map((result, i) => {
                                return (
                                  <tr key={i}>
                                    <td>{result.text}</td>
                                    <td>{result.retweet}</td>
                                    {/* <td>{result.favorite}</td> */}
                                    <td>{result.tweetDate}</td>
                                    <td>{result.score}</td>
                                    <td>{result.sentiments}</td>
                                  </tr>
                                );
                              })
                            )}
                            {/* 
                            <tr>
                              <td>1</td>
                              <td>2012/08/03</td>
                              <td>Edinburgh</td>
                              <td>New York</td>
                              <td>$1500</td>
                              <td>$3200</td>
                              <td>
                                <label class="badge badge-info">On hold</label>
                              </td>
                              <td>
                                <button class="btn btn-outline-primary">
                                  View
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>2015/04/01</td>
                              <td>Doe</td>
                              <td>Brazil</td>
                              <td>$4500</td>
                              <td>$7500</td>
                              <td>
                                <label class="badge badge-danger">
                                  Pending
                                </label>
                              </td>
                              <td>
                                <button class="btn btn-outline-primary">
                                  View
                                </button>
                              </td>
                            </tr> */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
