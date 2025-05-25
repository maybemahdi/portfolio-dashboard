/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { RiDeleteBinLine } from "react-icons/ri";

type TVideoUploadProps = {
  name: string;
  label?: string;
  children?: ReactNode;
  size?: string;
  parentClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  previewClassName?: string;
  defaultValue?: string;
  [key: string]: any; // Allow extra props
};

const MyFormVideoUpload = ({
  name,
  label,
  size = "medium",
  parentClassName = "",
  labelClassName = "",
  inputClassName = "",
  previewClassName = "",
  defaultValue,
  children,
  ...rest
}: TVideoUploadProps) => {
  const { control, setValue, resetField } = useFormContext();
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    defaultValue || null
  );
  const [fileInputKey, setFileInputKey] = useState(0);

  const handleFileChange = (file: File) => {
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setValue(name, file);
  };

  const handleRemoveVideo = () => {
    setPreviewUrl(null);
    resetField(name);
    setFileInputKey((prev) => prev + 1);
  };

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue, { shouldValidate: false });
      setPreviewUrl(defaultValue);
    }
  }, [defaultValue, name, setValue]);

  return (
    <div className={cn(`form-group ${size}`, parentClassName)}>
      {label && <p className={cn("mb-2 text-base", labelClassName)}>{label}</p>}
      <Controller
        control={control}
        name={name}
        render={({ fieldState: { error } }) => (
          <>
            {previewUrl ? (
              <div className={cn("relative w-fit", previewClassName)}>
                <video
                  controls
                  className="h-[200px] w-full rounded-md object-fill"
                  src={previewUrl}
                />
                <button
                  type="button"
                  onClick={handleRemoveVideo}
                  className="px-1 py-1 cursor-pointer bg-black bg-opacity-80 text-white rounded-md absolute top-2 right-2"
                >
                  <RiDeleteBinLine size={20} className="hover:text-red-500" />
                </button>
              </div>
            ) : (
              <>
                {children && (
                  <label
                    htmlFor={name}
                    className="h-full w-full cursor-pointer"
                  >
                    {children}
                  </label>
                )}
                <input
                  key={fileInputKey}
                  id={name}
                  type="file"
                  accept="video/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileChange(file);
                  }}
                  className={cn(
                    "w-full rounded-md border border-gray-300 p-2",
                    inputClassName,
                    children && "hidden"
                  )}
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

export default MyFormVideoUpload;
