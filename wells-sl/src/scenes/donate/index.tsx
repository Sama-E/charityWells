// import { motion } from 'framer-motion';

// const amounts: Array<AmountType> = [
//   {price: "$10" },
//   {price: "$20"},
//   {price: "$50"},
//   {price: "$100"},
// ];

// const Donate = () => {

//   return(
//     <div id="donate" className="mx-auto w-5/6 pt-24 pb-32">
//       {/* HEADER */}
//           <h1 className={`text-4xl font-mono font-semibold  text-primary-500`}>
//             DONATE TODAY
//           </h1>
//         {/* FORM */}
//         <div className="mt-10 justify-between gap-8 bg-primary-100 md:flex">
//           <motion.div 
//             className="mt-10 basis-3/5 md:mt-0"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.5 }}
//             variants={{
//                 hidden: { opacity: 0, x: -50 },
//                 visible: { opacity: 1, x: 0 },
//             }}
//           >
//             <form className="relative mt-16 basis-3/5">
//             {amounts.map((amount: AmountType) => (
//               <div className="grid grid-rows-1 gap-1 h-100">
//                   <button className="mt-5 rounded-lg bg-secondary-500 px-2 py-2 transition duration-500 hover:text-white text-md text-center">
//                     {amount.price}
//                   </button>
//               </div>
//             ))}
//             </form>
//           </motion.div>

//           {/* IMAGE */}
//           <motion.div
//             className="relative mt-16 basis-2/5 md:mt-0"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             variants={{
//                 hidden: { opacity: 0, x: 50 },
//                 visible: { opacity: 1, x: 0 },
//             }}
//         >
//             <div>
//               Right
//                 <img 
//                     className="w-full rounded"
//                 />
//             </div>
//         </motion.div>

//         </div>
//         <p>Donate Today</p>
//     </div>

//   );
// }

// export default Donate;