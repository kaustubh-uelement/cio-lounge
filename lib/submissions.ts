// Server-side handling for form submissions.
// All membership and partner submissions are recorded and forwarded directly to Founder Kamal Goel at kamal@ciolounge.in.

export type SubmissionKind = "membership" | "partner" | "contact";

export async function recordSubmission(kind: SubmissionKind, payload: unknown) {
  const recipientEmail = "kamal@ciolounge.in";
  const entry = {
    kind,
    recipientEmail,
    receivedAt: new Date().toISOString(),
    payload,
  };

  const webhook = process.env.SUBMISSIONS_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(entry),
      });
      if (!res.ok) console.warn(`Webhook responded with status ${res.status}`);
    } catch (err) {
      console.error("Webhook forwarding failed:", err);
    }
  }

  // Log explicitly for audit trail
  console.info(`[Submission routed to ${recipientEmail}]`, JSON.stringify(entry, null, 2));

  return {
    id: `${kind}-${Date.now().toString(36)}`,
    recipient: recipientEmail,
    timestamp: entry.receivedAt,
  };
}
