const nonEditableFields = new Set(["id", "created_at", "updated_at"]);

export function getEditableFields(row = {}) {
  return Object.keys(row).filter((key) => !nonEditableFields.has(key));
}

function toInputValue(value) {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }

  return String(value);
}

export function prepareDraftRows(rows = []) {
  return rows.map((row) => {
    const draftRow = { ...row };

    getEditableFields(row).forEach((field) => {
      draftRow[field] = toInputValue(row[field]);
    });

    return draftRow;
  });
}

function normalizeValue(value, originalValue) {
  if (typeof originalValue === "number") {
    if (value === "") {
      return null;
    }
    const parsed = Number(value);
    return Number.isNaN(parsed) ? originalValue : parsed;
  }

  if (typeof originalValue === "boolean") {
    return value === "true";
  }

  return value;
}

export function buildUpdatePayload(draftRow, originalRow) {
  const payload = {};

  getEditableFields(originalRow).forEach((field) => {
    payload[field] = normalizeValue(draftRow[field], originalRow[field]);
  });

  return payload;
}
