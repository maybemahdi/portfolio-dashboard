// import { Controller, useFormContext } from 'react-hook-form';
// import { Form, TimePicker } from 'antd';


// const MyFormTimePicker = ({ name, label }) => {
//   const { control } = useFormContext();

//   return (
//     <div>
//       <Controller
//         name={name}
//         control={control}
//         render={({ field, fieldState: { error } }) => (
//           <div className="flex flex-col justify-center gap-1">
//           <p className="ps-1">{label}</p>
//             <Form.Item style={{ marginBottom: "0px" }}> 
//               <TimePicker
//                 {...field}
//                 size="large"
//                 style={{ width: '100%' }}
//                 format="HH:mm"
//               />
//               {error && <small style={{ color: 'red' }}>{error.message}</small>}
//             </Form.Item>
//             </div>
//         )}
//       ></Controller>
//     </div>
//   );
// };

// export default MyFormTimePicker;
