export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.RESEND_API_KEY) {
    return Response.json({ error: "Mail service not configured" }, { status: 500 });
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const { firstName, lastName, email, organization, interest, message } = data;

  if (!firstName || !lastName || !email || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const html = `
    <h2>New Contact Form Submission</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${firstName} ${lastName}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="padding:8px;font-weight:bold;">Organization</td><td style="padding:8px;">${organization || "—"}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;">Interest</td><td style="padding:8px;">${interest}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${message}</td></tr>
    </table>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Eastcoast AVL <noreply@eastcoastavl.com>",
      to: ["info@eastcoastavl.com"],
      reply_to: email,
      subject: `New Contact: ${firstName} ${lastName} — ${interest}`,
      html,
    }),
  });

  if (!res.ok) {
    return Response.json({ error: "Failed to send" }, { status: 502 });
  }

  return Response.json({ success: true });
}
