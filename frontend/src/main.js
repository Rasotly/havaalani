import './style.css'

document.addEventListener("DOMContentLoaded", () => {
    const flightsBody = document.getElementById("flights-body");

    // Öğrenci projesi için sahte (mock) uçuş verileri
    const mockFlights = [
        { flightNo: "TK961", airline: "Turkish Airlines", destination: "Istanbul (IST)", time: "18:00", status: "Zamanında" },
        { flightNo: "PC1853", airline: "Pegasus", destination: "Izmir (ADB)", time: "18:30", status: "Gecikmeli" },
        { flightNo: "VF123", airline: "AJet", destination: "Ankara (ESB)", time: "19:15", status: "Zamanında" },
        { flightNo: "PC1900", airline: "Pegasus", destination: "Istanbul (SAW)", time: "20:00", status: "İptal" },
        { flightNo: "TK963", airline: "Turkish Airlines", destination: "Istanbul (IST)", time: "20:45", status: "Kapı Kapandı" }
    ];

    function renderFlights() {
        if (!flightsBody) return;
        flightsBody.innerHTML = ""; // Yükleniyor yazısını temizle

        mockFlights.forEach(flight => {
            const tr = document.createElement("tr");

            // Duruma göre renk vermek için
            let statusStyle = "color: #e0e0e0;"; // varsayılan
            if (flight.status === "Gecikmeli") statusStyle = "color: #f39c12;"; // turuncu
            if (flight.status === "İptal") statusStyle = "color: #e74c3c;"; // kırmızı
            if (flight.status === "Zamanında" || flight.status === "Kapı Kapandı") statusStyle = "color: #2ecc71;"; // yeşil

            tr.innerHTML = `
                <td><strong>${flight.flightNo}</strong></td>
                <td>${flight.airline}</td>
                <td>${flight.destination}</td>
                <td>${flight.time}</td>
                <td style="${statusStyle} font-weight: bold;">${flight.status}</td>
            `;
            flightsBody.appendChild(tr);
        });
    }

    // Gerçekçi görünmesi için 1.5 saniye sonra verileri yükle
    setTimeout(renderFlights, 1500);
});
