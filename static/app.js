const statusEl = document.getElementById("status");

async function submitAndDownload(form, endpoint) {
  statusEl.textContent = "Processing...";
  const body = new FormData(form);

  const response = await fetch(endpoint, {
    method: "POST",
    body,
  });

  if (!response.ok) {
    const payload = await response.json();
    throw new Error(payload.error || "Request failed");
  }

  const blob = await response.blob();
  const disposition = response.headers.get("Content-Disposition") || "";
  const match = disposition.match(/filename="?([^\"]+)"?/i);
  const filename = match ? match[1] : "download.bin";

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);

  statusEl.textContent = `Done. Downloaded ${filename}`;
}

document.getElementById("convertForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    await submitAndDownload(event.target, "/api/convert");
  } catch (error) {
    statusEl.textContent = `Error: ${error.message}`;
  }
});

document.getElementById("redactForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    await submitAndDownload(event.target, "/api/redact");
  } catch (error) {
    statusEl.textContent = `Error: ${error.message}`;
  }
});
