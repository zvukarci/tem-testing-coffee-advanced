import fetch from 'node-fetch';

export async function notifyUser(message: string): Promise<void> {
  const payload = {
    message,
    timestamp: new Date().toISOString(),
  };

  try {
    const response = await fetch('https://example.com/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`Failed to notify user: ${response.statusText}`);
    } else {
      console.log(`Notification sent: ${message}`);
    }
  } catch (error) {
    console.error('Error sending notification:', error);
  }
}
