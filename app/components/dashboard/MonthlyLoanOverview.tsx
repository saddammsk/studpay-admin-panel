
import { MonthlyActiveUsers } from "./MonthlyActiveUsers";
import { LoansOverviews } from "./LoansOverviews";
import { LoanApplications } from "./LoanApplications";

export default function MonthlyLoanOverview() {

  return (
    <div className="w-full font-inter">
      <div className="flex 2xl:flex-row flex-col items-start gap-6">

        <div className="4xl:w-[62%] 2xl:w-[60%] w-full">
        <MonthlyActiveUsers/>            
        </div>

        <div className="4xl:w-[37%] 2xl:w-[40%] w-full 2xl:block grid md:grid-cols-2 grid-cols-1 gap-4">
          {/* Loads Overviews Component */}
          <LoansOverviews/>

          {/* Loan Applications Status Component */}
         <LoanApplications/>
        </div>
      </div>
     
    </div>
  );
}
