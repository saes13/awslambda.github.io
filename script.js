document.getElementById("formulario").addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const reserva = {
        id: formData.get("id"),
        email: formData.get("email"),
        name: formData.get("name"),
        fechaHora: formData.get("fechaHora"),
        laboratory: formData.get("laboratory"),
    };

    try {
        const response = await fetch("https://cvqgh7rcp0.execute-api.us-east-2.amazonaws.com/labAccess", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reserva),
        });

        if (response.ok) {
            alert("Reservación exitosa");
        } else {
            alert("Error en la reservación");
        }
    } catch (error) {
        console.error(error);
        alert("Error en la reservación");
    }
});