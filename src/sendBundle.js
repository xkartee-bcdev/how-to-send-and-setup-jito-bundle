/**
 * Jito Bundle sender example (safe placeholders only).
 *
 * Replace FAKE_ values with your own data before using in production.
 */

const BLOCK_ENGINE_URL = process.env.JITO_BLOCK_ENGINE_URL || "https://mainnet.block-engine.jito.wtf/api/v1/bundles";
const AUTH_UUID = process.env.JITO_UUID || "FAKE_UUID_1234-5678-9012-ABCD";
const TXS_BASE58 = [
  "FAKE_BASE58_SIGNED_TX_1",
  "FAKE_BASE58_SIGNED_TX_2"
];

async function sendBundle({ txs, uuid, url }) {
  const payload = {
    jsonrpc: "2.0",
    id: 1,
    method: "sendBundle",
    params: [txs]
  };

  const headers = {
    "Content-Type": "application/json"
  };

  if (uuid) {
    headers["x-jito-auth"] = uuid;
  }

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(payload)
  });

  const text = await res.text();
  console.log(`HTTP ${res.status}`);
  console.log("Response:", text);

  if (!res.ok) {
    throw new Error(`sendBundle failed with status ${res.status}`);
  }
}

(async () => {
  try {
    // Set uuid to empty string to test unauthenticated flow.
    await sendBundle({
      txs: TXS_BASE58,
      uuid: AUTH_UUID,
      url: BLOCK_ENGINE_URL
    });
  } catch (err) {
    console.error("Bundle send error:", err.message);
    process.exit(1);
  }
})();
