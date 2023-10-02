import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { verifyNewAdminUser } from "../../helper/axiosHelper";

const VerifyAdminUserPage = () => {
  const [response, setResponse] = useState({});

  // show spinner on load
  const [isPending, setIsPending] = useState(true);

  {
    /**
     * http://127.0.0.1:5174/admin-user/verify-email?c=7a49fc75-5a4e-4563-b1de-fd143e3b5e4f&e=ssfdgfh@wsdg.
     * 1. grab the c and e from the query string parameter USING useSearchParams()
     *
     * - check if the code and email are empty
     * - if empty, show error message
     * - if not empty, call the server to check the code and email combo exist in the user table
     * - if combo exist, activate the user and send the email notifications
     * - if combo not exist, show error message
     *
     */
  }

  const [queryParams] = useSearchParams();

  {
    /**
     * if the component is being rendered initially with empty queryParams,
     * it may execute the useEffect with empty parameters and show the loading spinner.
     * After that, when the queryParams are updated with the actual values from the URL parameters,
     * the useEffect will run again, making the API call and showing the result.
     * This could result in two executions: one for the initial render and another when the URL parameters are available.
     */
  }

  useEffect(() => {
    // if (queryParams.get("c") && queryParams.get("e")) {
    const obj = {
      emailValidateCode: queryParams.get("c"),
      email: queryParams.get("e"),
    };

    // 3. create an axios function or api ep to call the server
    // 4. check if the combination of the email and code exist in th user table, if so activate the user and send the email notifications

    // Using Async/Await
    // const verifyAdminUserfunc = async () => {
    //    const result = await verifyAdminUser(obj)
    //       setResponse(result)
    // }
    // verifyAdminUserfunc(obj)

    // Using IIFE - Immediately Invoke Function Why IIFE?
    (async () => {
      const result = await verifyNewAdminUser(obj);
      // console.log(result);
      setResponse(result);
      setIsPending(false);
    })();
    // }
  }, [queryParams]);

  return (
    <div className="w-full flex items-center min-h-screen justify-center">
      {isPending && (
        <div className="inline-block w-full text-center" role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="w-full text-center">
            Email Verification process has began, please wait...
          </span>
        </div>
      )}
      {response.message && (
        <div
          className={`${
            response.status === "success"
              ? "p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
              : "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          }`}
        >
          {response.message}
        </div>
      )}
    </div>
  );
};

export default VerifyAdminUserPage;
