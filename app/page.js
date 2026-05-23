export default function Home() {
  return (
    <main style={{
      background: "#020617",
      color: "white",
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh"
    }}>

      {/* HERO */}
      <section style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "linear-gradient(to bottom, #0f172a, #020617)"
      }}>

        <h1 style={{
          fontSize: "44px", // Ligeramente reducido para mejor lectura en móviles
          marginBottom: "20px",
          color: "#3b82f6"
        }}>
          ELECTRICISTA OLGUÍN ⚡
        </h1>

        <p style={{
          fontSize: "22px",
          marginBottom: "20px",
          color: "#cbd5e1"
        }}>
          “Si en tu mente enciende, lo hacemos posible”
        </p>

        <div style={{
          marginBottom: "30px",
          color: "#94a3b8"
        }}>
          <p>✅ Electricista Certificado por el Cecaty</p>
          <p>✅ Garantía de instalación</p>
          <p>✅ Atención profesional y rápida</p>
        </div>

        {/* Botón de Cotización */}
        <a
          href="https://wa.me."
          style={{
            background: "#2563eb",
            padding: "15px 30px",
            borderRadius: "15px",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block",
            margin: "10px" // Cambiado a margen general para que se acomoden mejor en móviles
          }}
        >
          Solicitar Cotización
        </a>

        {/* Botón de Emergencia con Mensaje Directo */}
        <a
          href="https://wa.me/526642304932"
          style={{
            border: "2px solid #ef4444", // Cambiado a rojo para denotar urgencia
            padding: "15px 30px",
            borderRadius: "15px",
            color: "#ef4444",
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block",
            margin: "10px"
          }}
        >
          🚨 Emergencia Eléctrica
        </a>

      </section>

      {/* SERVICIOS */}
      <section style={{
        padding: "70px 20px"
      }}>

        <h2 style={{
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "50px"
        }}> {/* <--- CORREGIDO AQUÍ */}
          Nuestros Servicios
        </h2>
        
      </section>
    </main>
  );
}
