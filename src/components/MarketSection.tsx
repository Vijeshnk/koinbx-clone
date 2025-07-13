"use client";
import Image from "next/image";
import { useState } from "react";

// Mock data for hot coins
const hotCoinsData = [
  {
    id: 1,
    name: "BTC/INR",
    icon: "/assets/img/NewUI/btc.png",
    price: "10412967.39",
    change: "0.19",
    isPositive: true,
    href: "/trade/BTC-INR"
  },
  {
    id: 2,
    name: "ETH/INR",
    icon: "/assets/img/NewUI/eth.png",
    price: "261507.81",
    change: "-0.04",
    isPositive: false,
    href: "/trade/ETH-INR"
  },
  {
    id: 3,
    name: "UVCX/INR",
    icon: "/assets/img/NewUI/uvcx.png",
    price: "4.759",
    change: "10.82",
    isPositive: true,
    href: "/trade/UVCX-INR"
  },
  {
    id: 4,
    name: "TRX/INR",
    icon: "/assets/img/NewUI/trx.png",
    price: "26.52513",
    change: "-1.24",
    isPositive: false,
    href: "/trade/TRX-INR"
  },
  {
    id: 5,
    name: "SOL/INR",
    icon: "/assets/img/NewUI/sol.png",
    price: "14334.16",
    change: "-0.28",
    isPositive: false,
    href: "/trade/SOL-INR"
  }
];

// Mock data for new listing
const newListingData = [
  {
    id: 1,
    name: "TON/INR",
    icon: "/assets/img/NewUI/ton.png",
    price: "485.50",
    change: "2.35",
    isPositive: true,
    href: "/trade/TON-INR"
  },
  {
    id: 2,
    name: "JASMY/INR",
    icon: "/assets/img/NewUI/jasmy.png",
    price: "3.25",
    change: "5.67",
    isPositive: true,
    href: "/trade/JASMY-INR"
  },
  {
    id: 3,
    name: "TLOS/INR",
    icon: "/assets/img/NewUI/tlos.png",
    price: "6.87",
    change: "9.74",
    isPositive: true,
    href: "/trade/TLOS-INR"
  }
];

// Mock data for top gainers
const topGainersData = [
  {
    id: 1,
    name: "SWATER/INR",
    price: "0.00083",
    change: "59.61"
  },
  {
    id: 2,
    name: "RENDER/INR",
    price: "382.00",
    change: "31.76"
  },
  {
    id: 3,
    name: "JUP/INR",
    price: "44.7133",
    change: "20.09"
  }
];

// Mock data for top losers
const topLosersData = [
  {
    id: 1,
    name: "BRISE/INR",
    price: "0.0000034",
    change: "-33.33"
  },
  {
    id: 2,
    name: "TOKEN/INR",
    price: "1.01",
    change: "-25.30"
  },
  {
    id: 3,
    name: "UBIT/INR",
    price: "0.1",
    change: "-23.07"
  }
];

const MarketSection = () => {
  const [activeTab, setActiveTab] = useState("hotCoins");

  const currentData = activeTab === "hotCoins" ? hotCoinsData : newListingData;

  return (
    <div className="MuiBox-root">
      <div className="top-gainers-losers-bg bg-gray-50 dark:bg-gray-900 py-12">
        <div className="clscontainer top-gainers-container max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="top-gainers-title text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
              Catch Your Next Trading Opportunity
            </h2>
          </div>
          
          <div className="row grid grid-cols-1 xl:grid-cols-12 gap-6">
            {/* Hot Coins / New Listing Section */}
            <div className="col-xl-7 xl:col-span-7 z-index-higher">
              <div className="MuiPaper-root table-list-types bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="hot-list-header p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="list-types-tab flex space-x-6">
                    <span 
                      className={`tab-list cursor-pointer pb-2 border-b-2 transition-colors ${
                        activeTab === "hotCoins" 
                          ? "active-tab-list text-blue-600 border-blue-600" 
                          : "text-gray-600 dark:text-gray-400 border-transparent hover:text-blue-600"
                      }`}
                      onClick={() => setActiveTab("hotCoins")}
                    >
                      Hot Coins
                    </span>
                    <span 
                      className={`tab-list cursor-pointer pb-2 border-b-2 transition-colors ${
                        activeTab === "newListing" 
                          ? "active-tab-list text-blue-600 border-blue-600" 
                          : "text-gray-600 dark:text-gray-400 border-transparent hover:text-blue-600"
                      }`}
                      onClick={() => setActiveTab("newListing")}
                    >
                      New Listing
                    </span>
                  </div>
                </div>
                
                <div>
                  <div className="MuiTableContainer-root">
                    <table className="MuiTable-root list-view-table w-full">
                      <thead className="MuiTableHead-root bg-gray-50 dark:bg-gray-700">
                        <tr className="MuiTableRow-root">
                          <th className="MuiTableCell-root MuiTableCell-head px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Trending Pairs
                          </th>
                          <th className="MuiTableCell-root MuiTableCell-head px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Last Price
                          </th>
                          <th className="MuiTableCell-root MuiTableCell-head px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            24 hrs change
                          </th>
                          <th className="MuiTableCell-root MuiTableCell-head px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Trade
                          </th>
                        </tr>
                      </thead>
                      <tbody className="MuiTableBody-root bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {currentData.map((item) => (
                          <tr key={item.id} className="MuiTableRow-root hover:bg-gray-50 dark:hover:bg-gray-700">
                            <th className="MuiTableCell-root MuiTableCell-body px-6 py-4 whitespace-nowrap">
                              <div className="img-table-list-div flex items-center">
                                <div className="mr-3">
                                  <div className="MuiAvatar-root MuiAvatar-circular w-8 h-8 rounded-full overflow-hidden">
                                    <Image 
                                      alt="trenddpair-img" 
                                      src={item.icon} 
                                      className="MuiAvatar-img w-full h-full object-cover"
                                      width={32}
                                      height={32}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <span className="list-table-curr-name text-sm font-medium text-gray-900 dark:text-white">
                                    {item.name}
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td className="MuiTableCell-root MuiTableCell-body px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                              {item.price}
                            </td>
                            <td className="MuiTableCell-root MuiTableCell-body px-6 py-4 whitespace-nowrap">
                              <span className={`table-list-span text-sm font-medium ${
                                item.isPositive 
                                  ? "color-green-change-list text-green-600" 
                                  : "color-red-change-list text-red-600"
                              }`}>
                                {item.change} %
                              </span>
                            </td>
                            <td className="MuiTableCell-root MuiTableCell-body px-6 py-4 whitespace-nowrap">
                              <a 
                                className="btn-grad-trade inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
                                href={item.href}
                              >
                                Trade
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Gainers/Losers Section */}
            <div className="col-xl-5 xl:col-span-5 top-gainers">
              <div className="MuiPaper-root table-list-gainers-losers bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                {/* Top Gainers */}
                <div className="top-gainers-header p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="list-types-tab flex items-center justify-between">
                    <span className="active-tab-gainers text-lg font-semibold text-green-600">
                      Top Gainers
                    </span>
                    <figure>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Uparrow">
                          <path fillRule="evenodd" clipRule="evenodd" d="M23.7071 5.29265C24.0976 5.68318 24.0976 6.31634 23.7071 6.70687L14.2071 16.2069C13.8166 16.5974 13.1834 16.5974 12.7929 16.2069L8.49997 11.914L1.70708 18.7069C1.31655 19.0974 0.683386 19.0974 0.292862 18.7069C-0.0976615 18.3164 -0.0976615 17.6832 0.292862 17.2927L7.79286 9.79264C8.18339 9.40212 8.81655 9.40212 9.20708 9.79264L13.5 14.0856L22.2929 5.29265C22.6834 4.90213 23.3166 4.90213 23.7071 5.29265Z" fill="#10B981"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M16 5.99976C16 5.44748 16.4477 4.99976 17 4.99976H23C23.5523 4.99976 24 5.44748 24 5.99976V11.9998C24 12.5521 23.5523 12.9998 23 12.9998C22.4477 12.9998 22 12.5521 22 11.9998V6.99976H17C16.4477 6.99976 16 6.55204 16 5.99976Z" fill="#10B981"/>
                        </g>
                      </svg>
                    </figure>
                  </div>
                </div>
                
                <div className="gainer-table">
                  <div className="MuiTableContainer-root">
                    <table className="MuiTable-root list-view-table w-full">
                      <tbody className="MuiTableBody-root">
                        {topGainersData.map((item) => (
                          <tr key={item.id} className="MuiTableRow-root border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                            <th className="MuiTableCell-root MuiTableCell-body px-6 py-3">
                              <div className="img-table-list-div">
                                <div>
                                  <span className="list-table-curr-name text-sm font-medium text-gray-900 dark:text-white">
                                    {item.name}
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td className="MuiTableCell-root MuiTableCell-body px-6 py-3 text-sm text-gray-900 dark:text-white">
                              {item.price}
                            </td>
                            <td className="MuiTableCell-root MuiTableCell-body px-6 py-3">
                              <span className="table-list-span color-green-change-list text-sm font-medium text-green-600">
                                {item.change} %
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Top Losers */}
                <div className="top-losers-header p-6 border-b border-gray-200 dark:border-gray-700 bg-red-50 dark:bg-red-900/20">
                  <div className="list-types-tab flex items-center justify-between">
                    <span className="active-tab-gainers text-lg font-semibold text-red-600">
                      Top Losers
                    </span>
                    <figure>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Downarrow">
                          <path fillRule="evenodd" clipRule="evenodd" d="M23.7071 18.7072C24.0976 18.3167 24.0976 17.6835 23.7071 17.293L14.2071 7.79303C13.8166 7.40253 13.1834 7.40253 12.7929 7.79303L8.49997 12.0859L1.70708 5.29303C1.31655 4.90253 0.683386 4.90253 0.292862 5.29303C-0.0976615 5.68353 -0.0976615 6.31673 0.292862 6.70723L7.79286 14.2072C8.18339 14.5978 8.81655 14.5978 9.20708 14.2072L13.5 9.91432L22.2929 18.7072C22.6834 19.0978 23.3166 19.0978 23.7071 18.7072Z" fill="#DC2626"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M16 18C16 18.5523 16.4477 19 17 19H23C23.5523 19 24 18.5523 24 18V12C24 11.4477 23.5523 11 23 11C22.4477 11 22 11.4477 22 12V17H17C16.4477 17 16 17.4477 16 18Z" fill="#DC2626"/>
                        </g>
                      </svg>
                    </figure>
                  </div>
                </div>
                
                <div className="loser-table">
                  <div className="MuiTableContainer-root">
                    <table className="MuiTable-root list-view-table w-full">
                      <tbody className="MuiTableBody-root">
                        {topLosersData.map((item) => (
                          <tr key={item.id} className="MuiTableRow-root border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                            <th className="MuiTableCell-root MuiTableCell-body px-6 py-3">
                              <div className="img-table-list-div">
                                <div>
                                  <span className="list-table-curr-name text-sm font-medium text-gray-900 dark:text-white">
                                    {item.name}
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td className="MuiTableCell-root MuiTableCell-body px-6 py-3 text-sm text-gray-900 dark:text-white">
                              {item.price}
                            </td>
                            <td className="MuiTableCell-root MuiTableCell-body px-6 py-3">
                              <span className="table-list-span color-red-change-list text-sm font-medium text-red-600">
                                {item.change} %
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSection;
