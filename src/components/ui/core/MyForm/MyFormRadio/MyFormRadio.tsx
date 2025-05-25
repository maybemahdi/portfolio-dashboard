/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { cn } from "@/lib/utils";
import { Radio, Form } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

const MyFormRadio = ({
  name,
  label,
  labelClassName,
  radioGroupClassName,
  options,
  value,
  onValueChange,
  direction = "row",
}: {
  name: string;
  label?: string;
  labelClassName?: string;
  radioGroupClassName?: string;
  options: { label: string; value: any }[];
  value?: any;
  onValueChange?: (newValue: any) => void;
  direction?: "row" | "col"
}) => {
  const { setValue, control } = useFormContext();

  // Watch the radio value
  const radioValue = useWatch({
    control,
    name,
  });

  useEffect(() => {
    setValue(name, value, { shouldValidate: false });
  }, [value, name, setValue]);

  useEffect(() => {
    if (onValueChange) {
      onValueChange(radioValue); // Trigger the callback whenever the value changes
    }
  }, [radioValue, onValueChange]);

  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={{
          required: "This field is required", // Adjust validation as needed
        }}
        render={({ field, fieldState: { error } }) => (
          <div className="flex flex-col justify-center w-full">
            {label && (
              <p
                className={cn(
                  "ps-1 mb-2 text-[#101828] dark:text-white text-base font-normal leading-6",
                  labelClassName
                )}
              >
                {label}
              </p>
            )}
            <Form.Item style={{ marginBottom: "0px" }}>
              <Radio.Group
                {...field}
                className={cn("flex gap-3",
                    direction == "row" && "flex-row",
                    direction == "col" && "flex-col",
                    radioGroupClassName)}
                onChange={(e) => field.onChange(e.target.value)}
                value={field.value}
              >
                {options.map((option) => (
                  <Radio key={option.value} value={option.value}>
                    {option.label}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </div>
        )}
      />
    </div>
  );
};

export default MyFormRadio;
