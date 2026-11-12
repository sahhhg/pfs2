import { Nunito } from "next/font/google";
import "./globals.css";
import "../public/template/css/sb-admin-2.min.css";
import "../public/template/css/fontawesome-free/css/all.min.css"
import { CursoProvider } from "./context/cursosContext";
import { Toaster } from "react-hot-toast";

const nunito = Nunito({subsets: ['latin']})

export const metadata = {
  title: "PFS2 - Locação de Imoveis",
  description: "Aplicação criada para a disciplina de PFS2",
};

export default function RootLayout({ children }) {
  return (
    <CursoProvider>
      <html lang="en">
        
          <head>
            <script src="/template/js/jquery.min.js"></script>
            <script src="/template/js/bootstrap.bundle.min.js"></script>
            <script src="/template/js/sb-admin-2.min.js"></script>
          </head>
          <body  className={nunito.className}>
            <Toaster></Toaster>
            {children}
          </body>
        
      </html>
    </CursoProvider>
  );
}
