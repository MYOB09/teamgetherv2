import Prices from "./assets/price-list.svg";

function Pricing() {
  return (
    <div>
      <div className="text-center" id="prices">
        <div className="flex justify-center">
          <img src={Prices} className="h-12 w-12" />
          <div className="text-4xl font-semibold ">&nbsp;Pricing Plans</div>
        </div>

        <div className="mt-4">
          Our pricing plans will be available soon. Stay tuned for more details!
        </div>
        <div className="grid auto-grid-auto sm:grid-cols-3 ">
          <div className="bg-gray-200 mx-12 rounded-xl mt-8 p-12 hover:cursor-pointer hover:bg-gray-100">
            <div className="text-2xl font-bold">Basic Bundle</div>
            <div className="pt-4">
              Essential features for small teams and startups.
            </div>
            <div className="pt-4 text-lg font-semibold text-blue-900">
              Available Soon
            </div>
          </div>
          <div className="bg-gray-200 mx-12 rounded-xl p-12 mt-8 hover:cursor-pointer hover:bg-gray-100">
            <div className="text-2xl font-bold">Professional Bundle</div>
            <div className="pt-4">
              Advanced features for growing teams and businesses.
            </div>
            <div className="pt-4 text-lg font-semibold text-blue-900">
              Available Soon
            </div>
          </div>
          <div className="bg-gray-200 mx-12 rounded-xl p-12 mt-8 hover:cursor-pointer hover:bg-gray-100">
            <div className="text-2xl font-bold">Enterprise Bundle</div>
            <div className="pt-4">
              Comprehensive solutions for large organizations and enterprises.
            </div>
            <div className="pt-4 text-lg font-semibold text-blue-900">
              Available Soon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
