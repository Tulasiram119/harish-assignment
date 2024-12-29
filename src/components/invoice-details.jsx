import PropTypes from "prop-types";
import UploadInvoice from "./upload-invoice";
import InvoiceForm from "./invoice-form";
const InvoiceDetails = ({ logOut }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <UploadInvoice />
      {/* <button onClick={logOut}>Logout</button> */}
      <InvoiceForm />
    </div>
  );
};

export default InvoiceDetails;
InvoiceDetails.propTypes = {
  logOut: PropTypes.func.isRequired,
};
