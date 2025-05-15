import { useEffect } from "react";

const Reports = () => {

  useEffect(() => {
    const Incomechart = buildIncomeChart(); // Build income chart
    const packageChart = buildBarChart();     //build bar chart

    return () => { // Cleanup function to destroy double-rendered charts on component unmount(attemptCode07)
      Incomechart.destroy();
      packageChart.destroy();
    };
    }, []); // Empty dependency array to run only once after mount


    //Total income Chart rendering function called in useEffect
    const buildIncomeChart = () => {
        const options = {
          chart: {
            height: 300,
            type: "line",
            toolbar: { show: false },
            zoom: { enabled: false },
          },
          series: [
            { name: "Sales", data: [0, 27000, 25000, 27000, 40000] },
          ],
          dataLabels: { enabled: true },
          stroke: {
            curve: "straight",
            width: [4, 4, 4],
            dashArray: [0, 0, 4],
          },
          grid: {
            strokeDashArray: 0,
            borderColor: "#e5e7eb",
            padding: { top: -20, right: 0 },
          },
          xaxis: {
            type: "category",
            categories: [
              "25 January 2023",
              "28 January 2023",
              "31 January 2023",
              "1 February 2023",
              "3 February 2023",
            ],
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: {
              offsetY: 5,
              style: { colors: "#9ca3af", fontSize: "13px", fontFamily: "Inter, ui-sans-serif", fontWeight: 400 },
              formatter: (title) => {
                let t = title;
                if (t) {
                  const newT = t.split(" ");
                  t = `${newT[0]} ${newT[1].slice(0, 3)}`;
                }
                return t;
              },
            },
          },
          yaxis: {
            min: 0,
            max: 40000,
            tickAmount: 4,
            labels: {
              align: "left",
              style: { colors: "#9ca3af", fontSize: "12px", fontFamily: "Inter, ui-sans-serif", fontWeight: 400 },
              formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value),
            },
          },
          tooltip: {
            custom: function (props) {
              const { categories } = props.ctx.opts.xaxis;
              const { dataPointIndex } = props;
              const title = categories[dataPointIndex].split(" ");
              const newTitle = `${title[0]} ${title[1]}`;
              return `<div class="tooltip"><strong>${newTitle}</strong>: ${props.series[props.seriesIndex][props.dataPointIndex]}</div>`;
            },
          },
          colors: ["#2563EB", "#22d3ee", "#d1d5db"],
        };
  
        const Incomechart = new ApexCharts(document.querySelector("#hs-single-line-chart"), options);
        Incomechart.render();
  
        // Return chart instance for cleanup
        return Incomechart;
      };

      //Total package Chart rendering function called in useEffect
      const buildBarChart = () => {
        const barChartOptions = {
            chart: {
              id: "barChart",
              type: "bar",
              height: 300,
              toolbar: { show: false },
              zoom: { enabled: false },
            },
            series: [
              {
                name: "Basic Package",
                data: [23000, 44000, 55000, 57000, 56000, 61000, 58000, 63000, 60000, 66000, 34000, 78000],
              },
              {
                name: "Family Package",
                data: [17000, 76000, 85000, 101000, 98000, 87000, 105000, 91000, 114000, 94000, 67000, 66000],
              },
              {
                name: "Customized Package",
                data: [23000, 44000, 55000, 57000, 56000, 61000, 58000, 63000, 60000, 66000, 34000, 78000], // Same as Basic Package
              },
              {
                name: "Premium Package",
                data: [17000, 76000, 85000, 101000, 98000, 87000, 105000, 91000, 114000, 94000, 67000, 66000], // Same as Family Package
              }
            ],
            plotOptions: {
              bar: { horizontal: false, columnWidth: "16px", borderRadius: 0 },
            },
            xaxis: {
              categories: [
                "January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"
              ],
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: {
                style: { colors: "#9ca3af", fontSize: "13px" },
                formatter: (title) => title.slice(0, 3),//slicing was used to show first 03 letters hmm
              },
            },
            yaxis: {
              labels: {
                align: "left",
                style: { colors: "#9ca3af", fontSize: "13px" },
                formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value),
              },
            },
            colors: ["#2563eb", "#d1d5db", "#34d399", "#f97316"], // Added colors for new bars
            tooltip: {
              y: {
                formatter: (value) => `Rs/- ${value >= 1000 ? `${value / 1000}k` : value}`,
              },
            },
          };
          
    
        const packageChart = new ApexCharts(
          document.querySelector("#hs-multiple-bar-charts"),
          barChartOptions
        );
        packageChart.render();

        //return chart to cleanup double-rendered instances
        return packageChart;
      };



    return (
        <>
        <h2 className="text-xs text-indigo-500 tracking-widest mt-6 mb-10 font-medium title-font text-center">REPORTS</h2>

      {/*dashboard grid starts here*/}
      <section className="text-gray-600 body-font border-2 border-gray-200 mb-10">
        
        <div className="container px-5 py-2 mt-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-5">
                    <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-400 title-font">Status</h1>
                    <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
                        <button className="py-1 px-4 hover:bg-gray-200 focus:bg-indigo-500 focus:text-white focus:outline-none">This Week</button>
                        <button className="py-1 px-4 hover:bg-gray-200 focus:bg-indigo-500 focus:text-white focus:outline-none">This Month</button>
                        <button className="py-1 px-4 hover:bg-gray-200 focus:bg-indigo-500 focus:text-white focus:outline-none">This Year</button>
                    </div>
                    </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div>
                  <i className="gridline-icon fi-rr-benefit-porcent"></i>
                </div>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  12K
                </h2>
                <p className="leading-relaxed">Total Sales</p>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div>
                  <i className="gridline-icon fi fi-rr-coins"></i>
                </div>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  217K
                </h2>
                <p className="leading-relaxed">Total Income</p>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <i className="gridline-icon fi fi-rr-customer-care"></i>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  4
                </h2>
                <p className="leading-relaxed">Available Packages</p>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <i className="gridline-icon fi fi-rr-customer-care"></i>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  1.3K
                </h2>
                <p className="leading-relaxed">Customers</p>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <i className="gridline-icon fi fi-rr-employee-man"></i>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  200
                </h2>
                <p className="leading-relaxed">Employees</p>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <i className="gridline-icon fi fi-rr-building"></i>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  7
                </h2>
                <p className="leading-relaxed">Branches</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <i className="gridline-icon fi fi-rr-order-history"></i>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  46
                </h2>
                <p className="leading-relaxed">Orders</p>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div>
                  <i className="gridline-icon fi fi-rr-envelope"></i>
                </div>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  2.7K
                </h2>
                <p className="leading-relaxed">Reviews</p>
              </div>
            </div>

          </div>
        </div>
      </section>


        {/*package count starts here */}
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex flex-col text-center w-full mb-5">
                    <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-400 title-font">Packages</h1>
                    <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
                        <button className="py-1 px-4 hover:bg-gray-200 focus:bg-indigo-500 focus:text-white  focus:outline-none">All</button>
                        <button className="py-1 px-4 hover:bg-gray-200 focus:bg-indigo-500 focus:text-white focus:outline-none">Available</button>
                    </div>
                    </div>

                    <div className="flex flex-wrap -m-4">
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                        <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BASIC</h2>
                        <h1 className="text-4xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>Rs/- 2000</span>
                            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                        </h1>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Vexillologist pitchfork
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Tumeric plaid portland
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Hexagon neutra unicorn
                        </p>
                        <p className="flex items-center text-gray-600 mb-6">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Mixtape chillwave tumeric
                        </p>
                        <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                        </div>
                    </div>
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-red-400 flex flex-col relative overflow-hidden">
                        <span className="bg-red-400 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">UNAVAILABLE</span>
                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">FAMILY</h2>
                        <h1 className="text-4xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>Rs/- 3800</span>
                            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                        </h1>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Vexillologist pitchfork
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Tumeric plaid portland
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Hexagon neutra unicorn
                        </p>
                        <p className="flex items-center text-gray-600 mb-6">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Mixtape chillwave tumeric
                        </p>
                        <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                        </div>
                    </div>
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                        <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">CUSTOMIZED</h2>
                        <h1 className="text-4xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>Rs/- 4500</span>
                            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                        </h1>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Vexillologist pitchfork
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Tumeric plaid portland
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Hexagon neutra unicorn
                        </p>
                        <p className="flex items-center text-gray-600 mb-6">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Mixtape chillwave tumeric
                        </p>
                        <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                        </div>
                    </div>
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                        <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PREMIUM</h2>
                        <h1 className="text-4xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>Rs/- 5600</span>
                            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                        </h1>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Vexillologist pitchfork
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Tumeric plaid portland
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Hexagon neutra unicorn
                        </p>
                        <p className="flex items-center text-gray-600 mb-6">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Mixtape chillwave tumeric
                        </p>
                        <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>


                {/*sales per package chart starts here*/}
                <section className="text-gray-600 body-font overflow-hidden m-10">
                <h1 className="sm:text-3xl text-3xl text-center font-medium title-font mb-2 text-gray-400 title-font">Total Package Sales</h1>
                    {/* Legend Indicator*/}

                    {/*End Legend Indicator*/}

                    <div id="hs-multiple-bar-charts"></div>
                </section>

                {/*Total income chart starts here*/}
                <section className="text-gray-600 body-font overflow-hidden text-center m-10">
                <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-400 title-font">Total income</h1>
                <div id="hs-single-line-chart" className="hs-single-line-chart"></div>
                </section>

        </div>

        </>
    );
}

export default Reports;