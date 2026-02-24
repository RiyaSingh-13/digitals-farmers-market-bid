import React from 'react';
import { Search, ArrowRight, ShoppingBag, Star, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import LiveMap from '../../components/maps/LiveMap';

export default function ConsumerHome() {
  const navigate = useNavigate();

  const categories = [
    { title: "Fresh Vegetables", img: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=600&auto=format&fit=crop", count: "120+ Items", color: "from-green-400 to-green-600", path: "/consumer/vegetables" },
    { title: "Organic Fruits", img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=600&auto=format&fit=crop", count: "80+ Items", color: "from-orange-400 to-red-500", path: "/consumer/fruits" },
    { title: "Dairy Products", img: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=600&auto=format&fit=crop", count: "45 Items", color: "from-blue-400 to-cyan-500", path: "/consumer/dairy" },
    { title: "Grains & Cereals", img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600&auto=format&fit=crop", count: "60+ Items", color: "from-yellow-400 to-orange-500", path: "/consumer/grains" },
    { title: "Organic Staples", img: "https://images.unsplash.com/photo-1596700021650-77a809f4438b?q=80&w=600&auto=format&fit=crop", count: "40+ Items", color: "from-amber-700 to-stone-600", path: "/consumer/organic" },
    { title: "Seeds & Plants", img: "https://images.unsplash.com/photo-1594488340776-857ae89d1b64?q=80&w=600&auto=format&fit=crop", count: "25+ Items", color: "from-teal-600 to-cyan-600", path: "/consumer/seeds" },
    { title: "Fresh Herbs", img: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=600&auto=format&fit=crop", count: "30+ Items", color: "from-emerald-400 to-teal-600", path: "/consumer/herbs" },
    { title: "Exotic Spices", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop", count: "50+ Items", color: "from-red-500 to-rose-700", path: "/consumer/spices" },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-green-500 selection:text-white pb-20">

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto">

        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="pt-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-green-400 text-sm font-bold uppercase tracking-wider animate-fade-in-up">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                #1 Marketplace for Fresh Produce
              </div>

              <h1 className="text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                Farm Fresh <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                  Straight to You
                </span>
              </h1>

              <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                Experience the future of grocery shopping. Connect directly with local farmers and get premium, organic produce delivered to your doorstep.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="relative flex-1 max-w-sm group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-[#1e293b] flex items-center p-2 rounded-2xl border border-white/10 shadow-2xl">
                    <Search className="ml-3 text-gray-400 w-6 h-6" />
                    <input
                      type="text"
                      placeholder="Search for 'Organic Tomatoes'..."
                      className="w-full bg-transparent border-none text-white px-4 py-2 focus:outline-none placeholder-gray-500 text-lg"
                    />
                    <button className="bg-green-500 hover:bg-green-400 text-black p-3 rounded-xl transition-transform hover:scale-105 active:scale-95">
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Map & Floating Elements */}
            <div className="relative h-[500px] hidden lg:block perspective-1000">

              {/* Live Map Widget */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4 z-10 transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-all duration-700 shadow-2xl rounded-3xl overflow-hidden border border-white/20">
                <LiveMap />
              </div>

              {/* Floating Info Cards */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl animate-float-slow">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-500 rounded-2xl text-black">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">15k+</p>
                    <p className="text-sm text-gray-400">Orders Delivered</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 right-20 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl animate-float-medium delay-700">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500 rounded-2xl text-white">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">98%</p>
                    <p className="text-sm text-gray-400">Satisfied Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mt-12 relative z-10">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-4xl font-bold text-white">Explore Categories</h2>
              <p className="text-gray-400 mt-2">Premium selections curated just for you.</p>
            </div>
            <button className="text-green-400 font-bold hover:text-green-300 flex items-center gap-2 transition-colors">
              View All <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                onClick={() => navigate(cat.path)}
                className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/5 bg-[#1e293b]"
              >
                {/* Image Background */}
                <div className="absolute inset-0">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500`}>
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{cat.title}</h3>
                  <p className="text-gray-400 text-sm opacity-80 mb-4">{cat.count}</p>

                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full w-0 group-hover:w-full bg-gradient-to-r ${cat.color} transition-all duration-700 delay-100`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
