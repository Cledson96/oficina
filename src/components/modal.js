export function AlertPassword({ setconfirmPassword }) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "10000",
        }}
      >
        <div
          style={{
            backgroundColor: "red",
            padding: "16px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ marginRight: "8px", color: "white" }}>
            As senhas não conferem!!
          </p>
          <button
            style={{
              marginLeft: "auto",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
            onClick={() => setconfirmPassword(false)}
          >
            X
          </button>
        </div>
      </div>
      ;
    </>
  );
}

export function AlertErrorSignUp({ setIsOpen }) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "10000",
        }}
      >
        <div
          style={{
            backgroundColor: "red",
            padding: "16px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ marginRight: "8px", color: "white" }}>
            Obrigatório preencher todos os campos!
          </p>
          <button
            style={{
              marginLeft: "auto",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
        </div>
      </div>
      ;
    </>
  );
}
export function AlertErrorCPF({ setIsOpen }) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "red",
            padding: "16px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ marginRight: "8px", color: "white" }}>
            Obrigatório CPF com 11 digitos numericos!!
          </p>
          <button
            style={{
              marginLeft: "auto",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
        </div>
      </div>
      ;
    </>
  );
}

export function SignUpOK() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "10000",
        }}
      >
        <div
          style={{
            backgroundColor: "green",
            padding: "16px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ marginRight: "8px", color: "white" }}>
            Cadastro realizado com sucesso!
          </p>
          <a
            href="/login"
            style={{
              marginLeft: "auto",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            X
          </a>
        </div>
      </div>
      ;
    </>
  );
}
