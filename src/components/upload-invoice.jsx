import { useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  ArrowLeftIcon,
  ArrowUpIcon,
  MinusIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";

const UploadInvoice = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setUploadedFile(acceptedFiles[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="w-[684px] h-[684px] p-4 space-y-4 mb-[10%]">
      <div className="flex items-center gap-2">
        <ArrowLeftIcon width={26} height={28} className="pt-1 font-semibold" />
        <p className="font-bold text-xl">Create New Invoice</p>
      </div>
      <div
        {...getRootProps()}
        className={`flex flex-col items-center justify-center min-h-screen max-h-full border-2 border-dashed border-gray-300 rounded-lg ${
          isDragActive ? "bg-gray-100" : ""
        }`}
      >
        <div className="text-center">
          <p className="font-bold text-2xl pb-2">Upload Your Invoice</p>
          <p className="text-xl pb-2">To auto-populate fields and save time</p>
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/16b9/71b5/374d35591cf107df0cbf15334675279b?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aZ0GxvOg7Vo9o8b02toN3CiLhkFgTsHFYl1YGJWOVMtBtI7o4yOQoPzhAxQZePyaiQ9nXAV2PqpCmeyq-kAWGVReyXpQGporZjNDlSDCuIzkfS1PF32Ed5tKD5vhy~50Y2TJbTxDotClJf6M~HJdykzk4aGUosVvJKHP3oeQoldsfEbUbBoLsuVBIEkFFADgt60uAuc32eDCDIAplRlb0WbO30Nsj4ewE8MS6YJPzFdrPs7swvK~~5uj9ndcTV0BNtE0Oszsk0jrECMqi9EGAbtbKCb5e0QUXfsNZDXUXwXmNrQqb7L3IGZ9LBOaFzHGdvwV7UKVpuNPHhWo99ir6g__"
          alt="file upload gif"
          className="w-[320px] h-[320px]"
        />
        <input {...getInputProps()} />
        {!uploadedFile ? (
          <>
            <span className="flex items-center space-x-2 border-solid border-2 border-gray-300 border-1 py-4 px-6 rounded-lg">
              <span>Upload Files</span>
              <div className="flex flex-col items-center justify-center">
                <MinusIcon className="mb-[-7px]" />
                <ArrowUpIcon />
              </div>
            </span>
            <p>
              <span className="font-bold text-blue-500">Click to upload </span>
              or Drag and Drop
            </p>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <p className="text-lg">{uploadedFile.name}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeFile();
              }}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <Cross2Icon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadInvoice;
