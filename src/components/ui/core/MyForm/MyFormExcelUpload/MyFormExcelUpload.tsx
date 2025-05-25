/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { RiDeleteBinLine } from "react-icons/ri";

type TExcelUploadProps = {
  name: string;
  label?: string;
  parentClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  defaultValue?: File;
  children?: React.ReactNode;
  [key: string]: any;
};

const MyFormExcelUpload = ({
  name,
  label,
  parentClassName = "",
  labelClassName = "",
  inputClassName = "",
  defaultValue,
  children,
  ...rest
}: TExcelUploadProps) => {
  const { control, setValue, resetField } = useFormContext();
  const [fileName, setFileName] = useState<string | null>(
    defaultValue?.name || null
  );
  const [fileInputKey, setFileInputKey] = useState(0);

  const handleFileChange = (file: File) => {
    setValue(name, file);
    setFileName(file.name);
  };

  const handleRemoveFile = () => {
    resetField(name);
    setFileName(null);
    setFileInputKey((prev) => prev + 1); // reset input
  };

  return (
    <div className={cn("form-group", parentClassName)}>
      {label && <p className={cn("mb-2 text-base", labelClassName)}>{label}</p>}

      <Controller
        name={name}
        control={control}
        render={({ fieldState: { error } }) => (
          <>
            {fileName ? (
              <div className="relative flex items-center gap-2 border rounded-md p-2 bg-gray-100">
                <span className="text-sm truncate">{fileName}</span>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="ml-auto cursor-pointer text-red-600"
                >
                  <RiDeleteBinLine size={18} />
                </button>
              </div>
            ) : (
              <>
                {children ? (
                  <label htmlFor={name} className="block w-full cursor-pointer">
                    {children}
                  </label>
                ) : (
                  <label
                    htmlFor={name}
                    className={cn(
                      "block w-full border border-gray-300 p-2 rounded-md text-center cursor-pointer",
                      inputClassName
                    )}
                  >
                    Upload Excel File
                  </label>
                )}
                <input
                  key={fileInputKey}
                  id={name}
                  type="file"
                  accept=".xls,.xlsx,.csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileChange(file);
                  }}
                  className="hidden"
                  {...rest}
                />
              </>
            )}
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </>
        )}
      />
    </div>
  );
};

export default MyFormExcelUpload;
