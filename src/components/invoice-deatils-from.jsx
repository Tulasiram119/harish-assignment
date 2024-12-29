import PropTypes from "prop-types";
import BuildingLogo from "../assets/building.svg";
import { DotsVerticalIcon, PlusIcon } from "@radix-ui/react-icons";
const InvoiceFormDetails = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
  handleSubmit,
}) => {
  return (
    <div className="flex flex-col">
      <>
        <div className="flex flex-row items-center mb-4">
          <div className="p-4 bg-[#E8F3FC] w-[56px] h-[56px] rounded-full">
            <img src={BuildingLogo} alt="building" />
          </div>
          <p className="ml-3 font-bold text-xl">Invoice Details</p>
        </div>
        <p className="font-semibold text-lg mb-4">General information</p>
        <label
          htmlFor="purchaseOrderNumber"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Purchase order number <span className="text-red-500">*</span>
        </label>
        <select
          id="purchaseOrderNumber"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.purchaseOrderNumber}
        >
          <option defaultValue>Select PO Number </option>
          <option value="P-1">P-1 Purchase Order Numbers</option>
          <option value="P-2">P-2 Purchase Order Numbers</option>
          <option value="P-3">P-3 Purchase Order Numbers</option>
          <option value="P-4">P-4 Purchase Order Numbers</option>
        </select>
        <p className="mb-2 ml-2 text-left text-xs text-red-500">
          {errors?.purchaseOrderNumber &&
            touched.purchaseOrderNumber &&
            errors?.purchaseOrderNumber}
        </p>
      </>
      <>
        <p className="font-semibold text-lg mb-4">Invoice details</p>

        <div className="flex flex-row justify-between gap-4">
          <div className="w-1/2">
            <>
              <label
                htmlFor="invoiceNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Invoice Number <span className="text-red-500">*</span>
              </label>
              <select
                id="invoiceNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.invoiceNumber}
              >
                <option defaultValue>Select a vendor </option>
                <option value="A-1">A-1 Exterminators</option>
                <option value="A-2">A-2 Exterminators</option>
                <option value="A-3">A-3 Exterminators</option>
                <option value="A-4">A-4 Exterminators</option>
              </select>
              <p className="mb-2 ml-2 text-left text-xs text-red-500">
                {errors.invoiceNumber &&
                  touched.invoiceNumber &&
                  errors.invoiceNumber}
              </p>
            </>
            <>
              <label
                htmlFor="totalAmount"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Total Amount <span className="text-red-500">*</span>
              </label>
              <input
                id="totalAmount"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.totalAmount}
                placeholder="$0.00 USD"
              ></input>
              <p className="mb-2 ml-2 text-left text-xs text-red-500">
                {errors.totalAmount &&
                  touched.totalAmount &&
                  errors.totalAmount}
              </p>
            </>
            <>
              <label
                htmlFor="invoiceDueDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Invoice Due Date <span className="text-red-500">*</span>
              </label>
              <span className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2">
                <input
                  type="date"
                  id="invoiceDueDate"
                  value={values.invoiceDueDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="::placeholder block w-full text-md uppercase"
                />
              </span>
              <p className="mb-2 ml-2 text-left text-xs text-red-500">
                {errors.invoiceDueDate &&
                  touched.invoiceDueDate &&
                  errors.invoiceDueDate}
              </p>
            </>
          </div>
          <div className="w-1/2">
            <>
              <label
                htmlFor="invoiceDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Invoice Date <span className="text-red-500">*</span>
              </label>
              <span className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2">
                <input
                  type="date"
                  id="invoiceDate"
                  value={values.invoiceDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="::placeholder block w-full text-md uppercase"
                />
              </span>
              <p className="mb-2 ml-2 text-left text-xs text-red-500">
                {errors.invoiceDate &&
                  touched.invoiceDate &&
                  errors.invoiceDate}
              </p>
            </>
            <>
              <label
                htmlFor="paymentTerms"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Payment Terms <span className="text-red-500">*</span>
              </label>
              <select
                id="paymentTerms"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.paymentTerms}
              >
                <option defaultValue>Select</option>
                <option value="P-1">Payment-1</option>
                <option value="P-2">Payment-2</option>
                <option value="P-3">Payment-3</option>
                <option value="P-4">Payment-4</option>
              </select>
              <p className="mb-2 ml-2 text-left text-xs text-red-500">
                {errors.paymentTerms &&
                  touched.paymentTerms &&
                  errors.paymentTerms}
              </p>
            </>
            <>
              <label
                htmlFor="postDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                GL Post Date <span className="text-red-500">*</span>
              </label>
              <span className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2">
                <input
                  type="date"
                  id="postDate"
                  value={values.postDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="::placeholder block w-full text-md uppercase"
                />
              </span>
              <p className="mb-2 ml-2 text-left text-xs text-red-500">
                {errors.postDate && touched.postDate && errors.postDate}
              </p>
            </>
          </div>
        </div>
        <div>
          <label
            htmlFor="invoiceDescription"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Invoice Description <span className="text-red-500">*</span>
          </label>
          <input
            id="invoiceDescription"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.invoiceDescription}
          />
          <p className="mb-2 ml-2 text-left text-xs text-red-500">
            {errors.invoiceDescription &&
              touched.invoiceDescription &&
              errors.invoiceDescription}
          </p>
        </div>
      </>
      <>
        <div className="flex flex-row justify-between">
          <p className="font-semibold text-lg mb-4">Expense Details</p>
          <p>
            $0.00/<span className="text-blue- font-bold">$0.00</span>
            <span className="mx-1 bg-[#E7EAEE] rounded-full ">
              <span className="bg-blue-600 px-3 rounded-full text-white">
                $
              </span>
              <span className="px-2">%</span>
            </span>
          </p>
        </div>
        <div className="flex flex-row justify-between gap-4">
          <div className="w-1/2">
            <>
              <label
                htmlFor="lineAmount"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Line Amount <span className="text-red-500">*</span>
              </label>
              <input
                id="lineAmount"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lineAmount}
                placeholder="$0.00 USD"
              ></input>
              <p className="mb-2 ml-2 text-left text-xs text-red-500">
                {errors.lineAmount && touched.lineAmount && errors.lineAmount}
              </p>
            </>
            <>
              <label
                htmlFor="account"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Account <span className="text-red-500">*</span>
              </label>
              <select
                id="account"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.account}
              >
                <option defaultValue>Select Account</option>
                <option value="A-1">Account-1</option>
                <option value="A-2">Account-2</option>
                <option value="A-3">Account-3</option>
                <option value="A-4">Account-4</option>
              </select>
              <p className="mb-2 ml-2 text-left text-xs text-red-500">
                {errors.account && touched.account && errors.account}
              </p>
            </>
          </div>
          <div className="w-1/2">
            <>
              <label
                htmlFor="department"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Department <span className="text-red-500">*</span>
              </label>
              <select
                id="department"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.department}
              >
                <option defaultValue>Select Department</option>
                <option value="D-1">Department-1</option>
                <option value="D-2">Department-2</option>
                <option value="D-3">Department-3</option>
                <option value="D-4">Department-4</option>
              </select>
              <p className="mb-2 ml-2 text-left text-xs text-red-500">
                {errors.department && touched.department && errors.department}
              </p>
            </>
            <>
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Location <span className="text-red-500">*</span>
              </label>
              <select
                id="location"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
              >
                <option defaultValue>Select Location</option>
                <option value="L-1">Location-1</option>
                <option value="L-2">Location-2</option>
                <option value="L-3">Location-3</option>
                <option value="L-4">Location-4</option>
              </select>
              <p className="mb-2 ml-2 text-left text-xs text-red-500">
                {errors.location && touched.location && errors.location}
              </p>
            </>
          </div>
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description <span className="text-red-500">*</span>
          </label>
          <input
            id="description"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
          />
          <p className="mb-2 ml-2 text-left text-xs text-red-500">
            {errors.description && touched.description && errors.description}
          </p>
        </div>
        <div className="flex flex-row items-center gap-2 mt-4 border border-solid border-gray-300 p-1 rounded-md cursor-pointer ml-[70%]">
          <PlusIcon />
          Add Expense Coding
        </div>
      </>
      <>
        <div className="flex flex-row items-center mb-4">
          <div className="p-4 bg-[#E8F3FC] w-[56px] h-[56px] rounded-full">
            <img src={BuildingLogo} alt="building" />
          </div>
          <p className="ml-3 font-bold text-xl">Comments</p>
        </div>
        <div>
          <input
            id="comments"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.comments}
            placeholder="Add comments"
          />

          <p className="mb-2 ml-2 text-left text-xs text-red-500">
            {errors.comments && touched.comments && errors.comments}
          </p>
        </div>
      </>
      <div className="flex flex-row justify-between mt-4 pb-4">
        <DotsVerticalIcon className="mt-2" />
        <button
          className="border border-solid px-[15%] rounded-lg border-gray-700 py-2"
          onClick={handleSubmit}
        >
          Save as Draft
        </button>
        <button
          className="border border-solid px-[15%] rounded-lg border-gray-700 py-2 bg-blue-600 text-white"
          onClick={handleSubmit}
        >
          Submit & New
        </button>
      </div>
    </div>
  );
};

export default InvoiceFormDetails;
InvoiceFormDetails.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
