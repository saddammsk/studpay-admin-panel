import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="dashboard-bg flex items-center justify-center py-10">
      <div className="w-full max-w-xl rounded-2xl border border-gray-1600 bg-white px-6 py-8 shadow-4xl text-center">
        <div className="mb-5 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-1300">
            <span className="text-2xl font-bold text-blue-1200">404</span>
          </div>
        </div>

        <h1 className="mb-3 text-2xl font-normal leading-tight text-blue-1200 md:text-3xl">
          Page not found
        </h1>

        <p className="mb-6 text-sm font-normal leading-6 text-gray-1100 md:text-base">
          The page you&apos;re looking for doesn&apos;t exist, was moved, or is
          currently unavailable. Use the sidebar navigation or go back to your
          main dashboard to continue managing StudPay.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-blue-1000 px-5 py-2.5 text-sm font-medium leading-5 text-white hover:bg-blue-1200"
          >
            Back to Dashboard
          </Link>

        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;