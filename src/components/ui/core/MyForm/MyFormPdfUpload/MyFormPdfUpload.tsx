/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { RiDeleteBinLine } from "react-icons/ri";

type TPdfUploadProps = {
  name: string;
  label?: string;
  size?: string;
  parentClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  defaultValue?: string; // URL or name for the default PDF file if any
  [key: string]: any; // Allow other props
};

const MyFormPdfUpload = ({
  name,
  label,
  size = "medium",
  parentClassName = "",
  labelClassName = "",
  inputClassName = "",
  defaultValue,
  ...rest
}: TPdfUploadProps) => {
  const { control, setValue, resetField } = useFormContext();
  const [fileName, setFileName] = useState<string | null>(defaultValue || null);
  const [fileInputKey, setFileInputKey] = useState(0); // Used to force reset the file input

  const handleFileChange = (file: File) => {
    setFileName(file.name); // Display the uploaded file's name
    setValue(name, file); // Update form state with the uploaded file
  };

  const handleRemoveFile = () => {
    setFileName(null); // Clear the file name display
    resetField(name); // Reset the form field
    setFileInputKey((prev) => prev + 1); // Force input field reset
  };

  useEffect(() => {
    if (defaultValue) {
      setFileName(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className={cn(`form-group ${size}`, parentClassName)}>
      {label && <p className={cn("mb-2", labelClassName)}>{label}</p>}
      <Controller
        control={control}
        name={name}
        render={({  fieldState: { error } }) => (
          <>
            {fileName ? (
              <div className="mb-2 flex items-center">
                <span className="mr-2 text-sm text-gray-700">{fileName}</span>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="px-1 py-1 bg-black bg-opacity-80 text-white rounded-md"
                >
                  <RiDeleteBinLine size={20} className="hover:text-red-500" />
                </button>
              </div>
            ) : null}
            <input
              id={name}
              key={fileInputKey} // Reset the input field by changing its key
              type="file"
              accept="application/pdf"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  handleFileChange(file);
                }
              }}
              className={cn(
                "w-full rounded-md border border-gray-300 p-2",
                inputClassName
              )}
              {...rest}
            />
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </>
        )}
      />
    </div>
  );
};

export default MyFormPdfUpload;
