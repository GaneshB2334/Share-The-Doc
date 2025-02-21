// lib/uuid.ts
export function generateUUID(): string {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  } else {
    // Fallback (not cryptographically secure)
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
