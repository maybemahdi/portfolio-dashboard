/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; 
import { FormProvider, useForm } from "react-hook-form";

import { ConfigProvider } from "antd";
import { cn } from "@/lib/utils";

const MyFormWrapper = ({
  onSubmit,
  className,
  children,
  defaultValues,
  resolver,
}: {
  onSubmit: (data: any, reset: () => void) => void;
  className?: string;
  children: React.ReactNode;
  defaultValues?: any;
  resolver?: import("react-hook-form").Resolver<any, any>;
}) => {
  const formConfig: Record<string, any> = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
  const { handleSubmit, reset } = methods;

  const submit = (data: any) => {
    onSubmit(data, reset); // Pass reset function to onSubmit
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            hoverBorderColor: "#1BB68A",
            activeBorderColor: "#1BB68A",
          },
          Input: {
            hoverBorderColor: "#69735d",
            activeBorderColor: "#69735d",
          },
          Checkbox: {
            colorBorder: "#2078e0",
            colorPrimary: "#2078e0",
            colorPrimaryHover: "#2078e0",
          },
          DatePicker: {
            colorPrimary: "#7F56D9",
            colorPrimaryHover: "#7F56D9",
            colorBorder: "#7F56D9",
            colorText: "#7F56D9",
            colorTextDisabled: "#7F56D9",
          },
        },
      }}
    >
      <FormProvider {...methods}>
        <form className={cn("", className)} onSubmit={handleSubmit(submit)}>
          {children}
        </form>
      </FormProvider>
    </ConfigProvider>
  );
};

export default MyFormWrapper;
