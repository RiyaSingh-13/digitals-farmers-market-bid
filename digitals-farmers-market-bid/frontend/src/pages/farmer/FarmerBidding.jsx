import { useState, useEffect } from "react";
import io from "socket.io-client";
import { Gavel, Users, TrendingUp, Clock, CheckCircle } from "lucide-react";

const socket = io("http://localhost:5000");

export default function FarmerBidding() {
  const [bids, setBids] = useState([]);
  const [activeAuctions, setActiveAuctions] = useState([
    { id: 1, product: "Organic Tomatoes", qty: "50 kg", price: 120, bids: 8, ramesh: "₹135/kg", time: "2h 15m", status: "Active" },
    { id: 2, product: "Fresh Strawberries", qty: "30 kg", price: 450, bids: 12, ramesh: "₹480/kg", time: "45m", status: "Ending Soon" },
    { id: 3, product: "Basmati Rice", qty: "100 kg", price: 150, bids: 5, ramesh: "₹165/kg", time: "5h 30m", status: "Active" },
    { id: 4, product: "Organic Honey", qty: "20 kg", price: 680, bids: 15, ramesh: "₹720/500g", time: "1h 10m", status: "Active" },
  ]);

  useEffect(() => {
    socket.on("new_bid", (data) => {
      setBids((prev) => [data, ...prev]);
      // Update active auctions mock data strictly for demo effect
      setActiveAuctions((prev) => prev.map(a =>
        a.id === data.productId ? { ...a, bids: a.bids + 1, ramesh: `₹${data.amount}/kg` } : a
      ));
    });

    return () => {
      socket.off("new_bid");
    };
  }, []);

  return (
    <div className="p-6 font-sans text-gray-800">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Live Auctions</h1>
        <button className="bg-[#15803d] text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition flex items-center gap-2">
          <Gavel className="w-4 h-4" />
          Start New Auction
        </button>
      </div>

      {/* Stats Header */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between mb-2">
            <span className="text-gray-500 text-sm font-medium">Active Listings</span>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold">12</h3>
          <span className="text-xs text-green-600 font-medium">+2 from last week</span>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between mb-2">
            <span className="text-gray-500 text-sm font-medium">Total Bids</span>
            <Users className="w-5 h-5 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold">40</h3>
          <span className="text-xs text-gray-400 font-medium">Across all listings</span>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between mb-2">
            <span className="text-gray-500 text-sm font-medium">Avg. Bid Increase</span>
            <TrendingUp className="w-5 h-5 text-orange-500" />
          </div>
          <h3 className="text-2xl font-bold">12%</h3>
          <span className="text-xs text-orange-500 font-medium">Above starting price</span>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between mb-2">
            <span className="text-gray-500 text-sm font-medium">This Week</span>
            <span className="text-green-500 font-bold">$</span>
          </div>
          <h3 className="text-2xl font-bold">₹45.2K</h3>
          <span className="text-xs text-green-600 font-medium">+18% from last week</span>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold">Live Auction Inventory</h2>
          <p className="text-sm text-gray-400">Monitor bids and manage your active listings</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 font-medium text-xs uppercase">
              <tr>
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">Quantity</th>
                <th className="px-6 py-4">Starting Price</th>
                <th className="px-6 py-4">Active Bids</th>
                <th className="px-6 py-4">Highest Bid</th>
                <th className="px-6 py-4">Time Left</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {activeAuctions.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {item.product}
                    <div className="text-xs text-gray-400 font-normal">Vegetables</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{item.qty}</td>
                  <td className="px-6 py-4 font-bold text-gray-800">₹{item.price}/kg</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 bg-green-50 text-green-700 px-2 py-1 rounded-md w-fit">
                      <Users className="w-3 h-3" />
                      <span className="font-bold">{item.bids}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-green-700">{item.ramesh}</td>
                  <td className="px-6 py-4 flex items-center gap-2 text-orange-600 font-medium">
                    <Clock className="w-4 h-4" />
                    {item.time}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === "Active" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                      }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-green-600 hover:text-green-800 font-bold text-xs">View Bids</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
