import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import { Header } from "../../components";
import DataReportStyle from "../../assets/DataReport.module.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const DataReport = () => {
  const data = {
    labels: ["Apart Available", "Apart Not Available"],
    datasets: [
      {
        data: [50, 100],
        backgroundColor: ["green", "blue"],
        hoverBackgroundColor: ["lightgreen", "lightblue"],
      },
    ],
  };

  const options = {
    legend: {
      display: true,
      position: "right",
    },
    responsive: true,
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Data Report" />
      <div>
        <div className={`${DataReportStyle.data_report_area} mb-10`}>
          <div>
            <h1>Apart For Rent</h1>
            <Pie data={data} options={options} />
          </div>
          <div>
            <h1>Apart For Rent</h1>
            <Pie data={data} options={options} />
          </div>
        </div>
        <div className={`${DataReportStyle.data_report_area} mb-10`}>
          <div>
            <h1>Apart For Rent</h1>
            <Pie data={data} options={options} />
          </div>
          <div>
            <h1>Apart For Rent</h1>
            <Pie data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataReport;
