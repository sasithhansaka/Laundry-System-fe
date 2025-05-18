import "./DashboardContent.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineDollarCircle,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { BsPersonBoundingBox } from "react-icons/bs";
import { FiUsers, FiPackage } from "react-icons/fi";

// Pie Chart Options
const getPieChartOptions = () => ({
  series: [52.8, 26.8, 20.4],
  colors: ["#7E3BF2", "#A78BFA", "#C4B5FD"],
  chart: {
    height: 420,
    width: "100%",
    type: "pie",
  },
  stroke: { colors: ["white"] },
  plotOptions: {
    pie: {
      size: "100%",
      dataLabels: { offset: -25 },
    },
  },
  labels: ["Direct", "Organic search", "Referrals"],
  dataLabels: {
    enabled: true,
    style: { fontFamily: "Inter, sans-serif" },
  },
  legend: {
    position: "bottom",
    fontFamily: "Inter, sans-serif",
  },
  yaxis: {
    labels: {
      formatter: value => value + "%",
    },
  },
  xaxis: {
    labels: {
      formatter: value => value + "%",
    },
    axisTicks: { show: false },
    axisBorder: { show: false },
  },
});

// Area Chart Options
const chartOptions = {
  yaxis: {
    show: false,
    labels: {
      formatter: value => "€" + value,
    },
  },
  chart: {
    height: "100%",
    maxWidth: "100%",
    type: "area",
    fontFamily: "Inter, sans-serif",
    dropShadow: { enabled: false },
    toolbar: { show: false },
  },
  tooltip: { enabled: true, x: { show: false } },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: "#7E3BF2",
      gradientToColors: ["#7E3BF2"],
    },
  },
  dataLabels: { enabled: false },
  stroke: { width: 6 },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: { left: 2, right: 2, top: -26 },
  },
  series: [
    {
      name: "Developer Edition",
      data: [1500, 1418, 1456, 1526, 1356, 1256],
      color: "#7E3BF2",
    },
    {
      name: "Designer Edition",
      data: [643, 413, 765, 412, 1423, 1731],
      color: "#A78BFA",
    },
  ],
  xaxis: {
    categories: ["01 Feb", "02 Feb", "03 Feb", "04 Feb", "05 Feb", "06 Feb", "07 Feb"],
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
};

const DashboardContent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const chartElement = document.getElementById("pie-chart");
    const lineChartElement = document.getElementById("grid-chart");
    let pieChart, lineChart;

    if (chartElement && typeof ApexCharts !== "undefined") {
      pieChart = new ApexCharts(chartElement, getPieChartOptions());
      pieChart.render();
    }

    if (lineChartElement && typeof ApexCharts !== "undefined") {
      lineChart = new ApexCharts(lineChartElement, chartOptions);
      lineChart.render();
    }

    return () => {
      pieChart?.destroy();
      lineChart?.destroy();
    };
  }, []);

  const getGreetingMessage = () => {
    const hours = currentTime.getHours();
    if (hours < 12) return "Good Morning";
    if (hours < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Top Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-2xl shadow-lg p-8 mb-10 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{getGreetingMessage()},</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-1">
            Welcome to Laundry Management System
          </h2>
          <p className="text-sm md:text-base text-purple-100">Stay on top of your dashboard insights.</p>
        </div>
        <div className="flex items-center space-x-3 mt-6 md:mt-0">
          <AiOutlineClockCircle className="text-3xl text-white" />
          <span className="text-xl font-medium">{currentTime.toLocaleString()}</span>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <Link
          to="/sales"
          className="bg-white border-2 border-purple-200 rounded-lg p-6 flex items-center hover:bg-purple-100 transition"
        >
          <AiOutlineDollarCircle className="text-5xl text-purple-600" />
          <div className="ml-4">
            <h3 className="text-2xl font-semibold text-gray-800">Sales</h3>
            <p className="text-gray-600">Quick access to sales information</p>
          </div>
        </Link>

        <Link
          to="/orders"
          className="bg-white border-2 border-purple-200 rounded-lg p-6 flex items-center hover:bg-purple-100 transition"
        >
          <AiOutlineShoppingCart className="text-5xl text-purple-600" />
          <div className="ml-4">
            <h3 className="text-2xl font-semibold text-gray-800">Orders</h3>
            <p className="text-gray-600">Quick access to orders</p>
          </div>
        </Link>
      </div>

      {/* Stats Grid */}
      <section className="text-gray-600 body-font mt-10">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            {[
              { count: "1.3K", label: "Customers", icon: <FiUsers className="text-4xl text-purple-600 mb-2" /> },
              { count: "200", label: "Employees", icon: <BsPersonBoundingBox className="text-4xl text-purple-600 mb-2" /> },
              { count: "74", label: "Sales", icon: <AiOutlineDollarCircle className="text-4xl text-purple-600 mb-2" /> },
              { count: "46", label: "Orders", icon: <FiPackage className="text-4xl text-purple-600 mb-2" /> },
            ].map((stat, i) => (
              <div key={i} className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-purple-200 px-4 py-6 rounded-lg bg-white shadow">
                  <div className="flex justify-center">{stat.icon}</div>
                  <h2 className="title-font font-bold text-2xl text-gray-900">{stat.count}</h2>
                  <p className="leading-relaxed text-gray-700">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div className="bg-white rounded-lg shadow p-5">
          <h3 className="text-lg font-semibold mb-4">Traffic Source</h3>
          <div id="pie-chart"></div>
        </div>
        <div className="bg-white rounded-lg shadow p-5">
          <h3 className="text-lg font-semibold mb-4">Edition Performance</h3>
          <div id="grid-chart" style={{ height: 400 }}></div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-10">
        <h4 className="text-xl font-semibold mb-4">Additional Information</h4>
        <p className="text-gray-600">
          You can also manage other aspects of your account from the menu. Stay updated with the latest reports and insights.
        </p>
      </div>
    </div>
  );
};

export default DashboardContent;
