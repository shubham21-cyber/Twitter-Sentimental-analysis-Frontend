import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Charts = () => {
  return (
    <div class="sidebar-light">
      <div class="container-scroller">
        <Navbar />
        <div class="container-fluid page-body-wrapper">
          <Sidebar />
          <div class="main-panel">
            <div class="content-wrapper">
              <div class="row">
                <div class="col-md-6 grid-margin stretch-card">
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
                            style={{ marginBottom: "20px" }}
                          />
                          <label>Date:</label>
                          <input
                            class="form-control"
                            data-inputmask="'alias': 'datetime'"
                            data-inputmask-inputformat="dd/mm/yyyy"
                          />
                        </div>

                        <button type="submit" class="btn btn-primary mr-2">
                          Submit
                        </button>
                        <button class="btn btn-light">Cancel</button>
                      </form>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Pie chart</h4>
                      <canvas id="pieChart"></canvas>
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

export default Charts;
