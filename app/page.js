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
          fontSize: "48px",
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

        <a
          href="https://wa.me/526642304932"
          style={{
            background: "#2563eb",
            padding: "15px 30px",
            borderRadius: "15px",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block",
            marginRight: "15px"
          }}
        >
          Solicitar Cotización
        </a>

        <a
          href="https://wa.me/526642304932"
          style={{
            border: "2px solid #2563eb",
            padding: "15px 30px",
            borderRadius: "15px",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block"
          }}
        >
          Emergencia Eléctrica
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
        }}>
          Servicios Profesionales
        </h2>

        <div style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
        }}>

          {[
            "Bases de Medición",
            "Centros de Carga",
            "Cometidas",
            "Cableado General",
            "Censos de Carga"
          ].map((service) => (

            <div
              key={service}
              style={{
                background: "#0f172a",
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid #1e293b"
              }}
            >

              <h3 style={{
                color: "#3b82f6",
                marginBottom: "15px"
              }}>
                ⚡ {service}
              </h3>

              <p style={{
                color: "#cbd5e1"
              }}>
                Servicio profesional en baja tensión para hogares, negocios e industria.
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* PRECIOS */}
      <section style={{
        padding: "70px 20px",
        background: "#0f172a"
      }}>

        <h2 style={{
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "50px"
        }}>
          Bases de Medición
        </h2>

        <div style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
        }}>

          {[
            {
              title: "Base Triple",
              price: "$5,500"
            },
            {
              title: "Base Cuádruple",
              price: "$7,500"
            },
            {
              title: "Base Quíntuple",
              price: "$9,500"
            }
          ].map((item) => (

            <div
              key={item.title}
              style={{
                background: "#020617",
                padding: "30px",
                borderRadius: "20px",
                textAlign: "center"
              }}
            >

              <h3>{item.title}</h3>

              <p style={{
                fontSize: "42px",
                color: "#3b82f6",
                fontWeight: "bold"
              }}>
                {item.price}
              </p>

              <a
                href="https://link.mercadopago.com.mx/electricistaolguin"
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  background: "#2563eb",
                  padding: "12px 25px",
                  borderRadius: "12px",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold"
                }}
              >
                Pagar
              </a>

            </div>

          ))}

        </div>

      </section>

      {/* CONTACTO */}
      <section style={{
        padding: "70px 20px",
        textAlign: "center"
      }}>

        <h2 style={{
          fontSize: "40px",
          marginBottom: "20px"
        }}>
          Contacto
        </h2>

        <p>📞 664 230 4932</p>
        <p>📞 664 230 4982</p>
        <p>✉️ electricista.olguin@gmail.com</p>

        <br />

        <p>📍 Tijuana • Rosarito • Tecate</p>

        <br />

        <p>
          Lunes a Viernes: 5:00 AM - 8:00 PM
        </p>

        <p>
          Sábado: 10:00 AM - 2:00 PM
        </p>

        <p>
          Domingo: Solo Emergencias
        </p>

      </section>

    </main>
  );
}
