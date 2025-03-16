export default defineEventHandler(async (event) => {
  if (event.req.method !== 'POST') {
    return { error: 'Method Not Allowed' }; // Это должно вернуть 405, если метод не POST
  }

  const body = await readBody(event);

  const botToken = process.env.BOOT_TOKEN;
  const chatId = process.env.CHAT_ID;

  try {
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: body.message,
      }),
    });

    const data = await res.json();
    return data;
  } catch (err) {
    return { error: err.message };
  }
});
