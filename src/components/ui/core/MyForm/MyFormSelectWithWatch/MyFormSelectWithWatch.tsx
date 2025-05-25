// import { Form, Select } from "antd";
// import { useEffect } from "react";
// import { Controller, useFormContext, useWatch } from "react-hook-form";

// const MyFormSelectWithWatch = ({ label, name, options, disabled, mode, onValueChange }) => {
//   const method = useFormContext();
//   const inputValue = useWatch({
//     control: method.control,
//     name,
//   });

//   useEffect(() => {
//     onValueChange(inputValue);
//   }, [inputValue]);

//   return (
//     <Controller
//       name={name}
//       render={({ field, fieldState: { error } }) => (
//         <div className="flex flex-col justify-center gap-1">
//           <p className="ps-1">{label}</p>
//           <Form.Item style={{ marginBottom: "0px" }}>
//             <Select mode={mode} style={{ width: "100%" }} {...field} options={options} size="large" disabled={disabled} />
//             {error && <small style={{ color: "red" }}>{error.message}</small>}
//           </Form.Item>
//         </div>
//       )}
//     />
//   );
// };

// export default MyFormSelectWithWatch;
