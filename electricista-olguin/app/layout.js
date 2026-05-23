export const metadata = {
  title: "Electricista Olguín",
  description: "Servicios eléctricos profesionales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}