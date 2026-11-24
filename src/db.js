// Run one SQL statement through the SQL gateway (the only route to the database).
const GATEWAY = process.env.SQL_GATEWAY || "http://10.89.10.1:8082/query";

export async function query(sql) {
  const r = await fetch(GATEWAY, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ sql }),
  });
  const out = await r.json();
  if (out.status !== "allowed") throw new Error(`query blocked: ${JSON.stringify(out.reasons)}`);
  return out.result;
}
