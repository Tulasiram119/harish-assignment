import { ChevronDownIcon } from "@radix-ui/react-icons";
import BuildingLogo from "../assets/building.svg";
import PropTypes from "prop-types";
const VendorDetails = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
}) => {
  return (
    <div className="flex flex-col">
      <>
        <div className="flex flex-row items-center mb-4">
          <div className="p-4 bg-[#E8F3FC] w-[56px] h-[56px] rounded-full">
            <img src={BuildingLogo} alt="building" />
          </div>
          <p className="ml-3 font-bold text-xl">Vendor Details</p>
        </div>
        <p className="font-semibold text-lg mb-4">Vendor information</p>
        <label
          htmlFor="vendor"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Vendor <span className="text-red-500">*</span>
        </label>
        <select
          id="vendor"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.vendor}
        >
          <option defaultValue>Select a vendor </option>
          <option value="A-1">A-1 Exterminators</option>
          <option value="A-2">A-2 Exterminators</option>
          <option value="A-3">A-3 Exterminators</option>
          <option value="A-4">A-4 Exterminators</option>
        </select>
        <p className="mb-2 ml-2 text-left text-xs text-red-500">
          {errors.vendor && touched.vendor && errors.vendor}
        </p>
        <span className="font-thin text-sm">550 Main St.,Lynn</span>
      </>
      <p className="mt-2 text-blue-700 flex flex-row justify-center hover:cursor-pointer">
        <ChevronDownIcon className="mt-[5px]" />
        <span className="px-2">View Vendor Deatils</span>
      </p>
    </div>
  );
};

export default VendorDetails;
VendorDetails.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};
