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
