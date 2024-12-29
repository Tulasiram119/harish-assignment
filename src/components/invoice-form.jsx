import { Form, Formik } from "formik";

import * as Yup from "yup";
import VendorDetails from "./vendor-deatils";
import InvoiceFormDetails from "./invoice-deatils-from";
import { getCurrentUser } from "../helpers/utils";
import { useEffect, useState } from "react";
const schema = Yup.object().shape({
  vendor: Yup.string().required("Vendor is a required field"),
  purchaseOrderNumber: Yup.string().required(
    "Purchase order number is required"
  ),
  invoiceNumber: Yup.string().required("Invoice number is required"),
  invoiceDueDate: Yup.date().required("Invoice due date is required"),
  totalAmount: Yup.number().required("Total amount is required"),
  invoiceDate: Yup.date().required("Invoice date is required"),
  paymentTerms: Yup.string().required("Payment terms is required"),
  postDate: Yup.date().required("Post date is required"),
  invoiceDescription: Yup.string().required("Invoice description is required"),
  lineAmount: Yup.number().required("Line amount is required"),
  account: Yup.string().required("Account is required"),
  department: Yup.string().required("Department is required"),
  location: Yup.string().required("Location is required"),
  description: Yup.string().required("Description is required"),
  comments: Yup.string().nullable(),
});
const InvoiceFrom = () => {
  const [previousValues, setPreviousValues] = useState({});
  useEffect(() => {
    const user = getCurrentUser();
    const data = localStorage.getItem(user.username);
    if (data) {
      const { values } = JSON.parse(data);
      setPreviousValues(values);
    }
  }, []);

  return (
    <div className="w-[648px] h-full mt-[245px] md:mt-4 ml-4 md:ml-0 p-4 space-y-4">
      <div className="flex flex-row justify-items-start gap-4">
        <p className="text-blue-700 font-bold">Vendor Details</p>
        <p>Invoice Details</p>
        <p>Comments</p>
      </div>
      <div className="">
        <Formik
          validationSchema={schema}
          enableReinitialize
          initialValues={{
            vendor: previousValues.vendor || "",
            purchaseOrderNumber: previousValues.purchaseOrderNumber || "",
            invoiceNumber: previousValues.invoiceNumber || "",
            invoiceDueDate: previousValues.invoiceDueDate || "",
            totalAmount: previousValues.totalAmount || null,
            invoiceDate: previousValues.invoiceDate || "",
            paymentTerms: previousValues.paymentTerms || "",
            postDate: previousValues.postDate || "",
            invoiceDescription: previousValues.invoiceDescription || "",
            lineAmount: previousValues.lineAmount || null,
            account: previousValues.account || "",
            department: previousValues.department || "",
            location: previousValues.location || "",
            description: previousValues.description || "",
            comments: previousValues.comments || "",
          }}
          onSubmit={(values) => {
            const user = getCurrentUser();
            localStorage.setItem(user.username, JSON.stringify({ values }));
            alert("Form submitted successfully");
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <div className="w-full flex flex-col gap-10">
                <VendorDetails
                  values={values}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors}
                />
                <InvoiceFormDetails
                  values={values}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors}
                  handleSubmit={handleSubmit}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default InvoiceFrom;
