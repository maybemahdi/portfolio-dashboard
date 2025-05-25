/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "antd";
import type { GetProps } from "antd";

type OTPProps = GetProps<typeof Input.OTP>;

const MyFormOTP = ({
  name,
  label,
  labelClassName,
  className,
  rules,
  length,
}: {
  name: string;
  label?: string;
  labelClassName?: string;
  className?: string;
  rules?: any; // Validation rules
  length?: number;
}) => {
  const { control } = useFormContext(); // Use react-hook-form context to access methods

  // Shared properties for the OTP input component
  const sharedProps: OTPProps = {
    size: "large",
    length,
    className,
    formatter: (str) => str.toUpperCase(), // Format OTP to uppercase
  };

  return (
    <div className="flex flex-col justify-center gap-1">
      {/* Label */}
      {label && (
        <p className={labelClassName || "ps-1 mb-2 text-[#101828] text-base font-normal leading-6"}>
          {label}
        </p>
      )}

      {/* Controller for OTP input */}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <div className="w-fit flex flex-col">
            {/* OTP Input */}
            <Input.OTP
              {...field}
              {...sharedProps} // Spread shared props
            />

            {/* Display error message if validation fails */}
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </div>
        )}
      />
    </div>
  );
};

export default MyFormOTP;
