//перевірка чи є data масивом

if (!Array.isArray(data)) {
  throw new Error(`Ми отримали щось інше...`);
}
