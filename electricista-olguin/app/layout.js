export const metadata = {
  title: "Electricista Olguin",
  description: "Servicios eléctricos profesionales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}