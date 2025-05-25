/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { cn } from "@/lib/utils";
import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";

const MyFormTextArea = ({
  name,
  label,
  labelClassName,
  inputClassName,
  placeHolder,
  value,
}: {
  name: string;
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  placeHolder?: string;
  value?: any;
}) => {
  const { setValue, control } = useFormContext();

  useEffect(() => {
    setValue(name, value, { shouldValidate: false });
  }, [value, name, setValue]);

  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={{
          required: true,
        }}
        render={({ field, fieldState: { error } }) => (
          <div className="flex flex-col justify-center gap-2 w-full">
            <p className={cn("ps-1 text-[#101828] dark:text-white text-base font-normal leading-6", labelClassName)}>
              {label}
            </p>
            <Form.Item style={{ marginBottom: "0px" }}>
              <TextArea
                {...field}
                id={name}
                size="large"
                rows={4}
                className={cn("w-full dark:bg-gray-300", inputClassName)}
                placeholder={placeHolder}
              />
            </Form.Item>
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </div>
        )}
      />
    </div>
  );
};

export default MyFormTextArea;


/* eslint-disable @typescript-eslint/no-explicit-any */
// 'use client'
// import { cn } from "@/lib/utils";
// import { useEffect } from "react";
// import { Controller, useFormContext } from "react-hook-form";

// const MyFormTextArea = ({
//   name,
//   label,
//   labelClassName,
//   inputClassName,
//   placeHolder,
//   value,
// }: {
//   name: string;
//   label?: string;
//   labelClassName?: string;
//   inputClassName?: string;
//   placeHolder?: string;
//   value?: any;
// }) => {
//   const { setValue, control } = useFormContext();

//   useEffect(() => {
//     setValue(name, value, { shouldValidate: false });
//   }, [value, name, setValue]);

//   return (
//     <div>
//       <Controller
//         name={name}
//         control={control}
//         rules={{
//           required: "This field is required",
//         }}
//         render={({ field, fieldState: { error } }) => (
//           <div className="flex flex-col justify-center gap-2 w-full">
//             {label && (
//               <p className={cn("ps-1 text-[#101828] text-base font-normal leading-6", labelClassName)}>
//                 {label}
//               </p>
//             )}
//             <textarea
//               {...field}
//               id={name}
//               className={cn("w-full p-3 border rounded-md focus:outline-none", inputClassName)}
//               placeholder={placeHolder}
//               rows={4} // You can adjust the number of rows for the height of the textarea
//             />
//             {error && <small style={{ color: "red" }}>{error.message}</small>}
//           </div>
//         )}
//       />
//     </div>
//   );
// };

// export default MyFormTextArea;
