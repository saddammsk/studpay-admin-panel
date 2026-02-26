


export default async function AviPipelineFunnel() { 

  return (
    <div className="w-full font-inter"> 
      <div className="border border-solid border-gray-3600 p-4 mb-8 bg-white rounded-lg shadow-80xl">
        <div className="flex items-center justify-between pb-4">
          <p className="text-sm font-semibold leading-5 text-blue-1300">
            AVI Pipeline Funnel
          </p>
          <p className="text-gray-1900 text-xs font-normal leading-4 flex items-center gap-1.5">
            <span>
              <img src="images/process-icon.svg" alt="" />
            </span>
            15 min avg processing
          </p>
        </div>
        <div className="grid sm:grid-cols-5 grid-cols-3 gap-6 border-b border-solid border-gray-3600 pb-4">
          <div className="relative">
            <span className="text-lg flex items-center justify-center rounded-md h-12 font-inter font-bold leading-7 text-white bg-gray-1900/60">
              145
            </span>
            <small className="text-[10px] block font-inter font-medium leading-[12.5px] tracking-[0.25px] uppercase text-gray-1900 mt-2 text-center">
              Draft
            </small>
            <span className="absolute top-6.5 -right-4">
              <img src="images/small-arw.svg" alt="" />
            </span>
          </div>
          <div className="relative">
            <span className="text-lg flex items-center justify-center rounded-md h-12 font-inter font-bold leading-7 text-white bg-yellow-1100/84">
              89
            </span>
            <small className="text-[10px] block font-inter font-medium leading-[12.5px] tracking-[0.25px] uppercase text-gray-1900 mt-2 text-center">
              KYC Review
            </small>
            <span className="absolute top-6.5 -right-4">
              <img src="images/small-arw.svg" alt="" />
            </span>
          </div>
          <div className="relative">
            <span className="text-lg flex items-center justify-center rounded-md h-12 font-inter font-bold leading-7 text-white bg-blue-1400/[0.7545]">
              56
            </span>
            <small className="text-[10px] block font-inter font-medium leading-[12.5px] tracking-[0.25px] uppercase text-gray-1900 mt-2 text-center">
              Payment
            </small>
            <span className="sm:block hidden absolute top-6.5 -right-4">
              <img src="images/small-arw.svg" alt="" />
            </span>
          </div>
          <div className="relative">
            <span className="text-lg flex items-center justify-center rounded-md h-12 font-inter font-bold leading-7 text-white bg-purple-5000/[0.6938]">
              34
            </span>
            <small className="text-[10px] block font-inter font-medium leading-[12.5px] tracking-[0.25px] uppercase text-gray-1900 mt-2 text-center">
              Funds Received
            </small>
            <span className="absolute top-6.5 -right-4">
              <img src="images/small-arw.svg" alt="" />
            </span>
          </div>
          <div className="relative">
            <span className="text-lg flex items-center justify-center rounded-md h-12 font-inter font-bold leading-7 text-white bg-lightgreen17/[0.6772]">
              28
            </span>
            <small className="text-[10px] block font-inter font-medium leading-[12.5px] tracking-[0.25px] uppercase text-gray-1900 mt-2 text-center">
              AVI Issued
            </small>
          </div>
        </div>
        <div className="pt-3.5 flex items-center justify-between">
          <p className="text-xs font-normal text-gray-1900 leading-4">
            Overall Conversion
          </p>
          <p className="text-sm font-semibold leading-5 text-lightgreen17">
            19.3%
          </p>
        </div>
      </div> 
    </div>
  );
}
