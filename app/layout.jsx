// import "@styles/globals.css";
// import StoreProvider from "@store/StoreProvider";
// import { Toaster } from "react-hot-toast";

// export const metadata = {
//   title: "Server Configurator",
//   description: "You can configure your server here",
// };

// const RootLayout = ({ children }) => {
//   return (
//     <html lang="en">
//       <body>
//         <main>
//           <StoreProvider>
//             <Toaster
//               position={"top-right"}
//               toastOptions={{
//                 style: {
//                   margin: "15px",
//                   background: "#828282",
//                   color: "#fff",
//                   width: "340px",
//                 },
//                 className: "text-base",
//                 duration: 3000,
//                 error: { icon: "⚠️" },
//               }}
//             />
//             {children}
//           </StoreProvider>
//         </main>
//       </body>
//     </html>
//   );
// };

// export default RootLayout;

import "@styles/globals.css";
import StoreProvider from "@store/StoreProvider";

export const metadata = {
  title: "Server Configurator",
  description: "You can configure your server here",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>
          <StoreProvider>
            {children}
          </StoreProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
