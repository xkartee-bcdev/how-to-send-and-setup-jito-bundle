# How to Send and Setup Jito Bundle

A clean starter repo for sending Jito bundles with safe placeholders only.

## What this includes
- A minimal Node.js script to call `sendBundle`
- Optional UUID auth header support (`x-jito-auth`)
- No real API keys, no real UUIDs, and no private credentials

## Rate limit note
- Without UUID: **1 request per second (1 RPS)**
- With UUID: **5 requests per second (5 RPS)**

## Important
This repository intentionally uses fake values:
- `FAKE_UUID_1234-5678-9012-ABCD`
- `FAKE_BASE58_SIGNED_TX_1`
- `FAKE_BASE58_SIGNED_TX_2`

Replace them with your own values locally before real usage.

## Setup
1. Install Node.js 18+
2. Install dependencies (none required for this minimal script)
3. Optionally set env vars:

```bash
export JITO_BLOCK_ENGINE_URL="https://mainnet.block-engine.jito.wtf/api/v1/bundles"
export JITO_UUID="YOUR_REAL_UUID"
```

PowerShell:

```powershell
$env:JITO_BLOCK_ENGINE_URL="https://mainnet.block-engine.jito.wtf/api/v1/bundles"
$env:JITO_UUID="YOUR_REAL_UUID"
```

## Run
```bash
npm start
```

## Example request body
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "sendBundle",
  "params": [
    [
      "BASE58_SIGNED_TX_1",
      "BASE58_SIGNED_TX_2"
    ]
  ]
}
```

## Security reminders
- Never commit private keys or production secrets
- Use environment variables for sensitive data
- Rotate credentials if they are ever exposed

## License
MIT
