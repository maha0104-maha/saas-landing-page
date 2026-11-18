// Letters only (any language), plus spaces, dots, apostrophes and hyphens.
// Must start with a letter and be at least 2 characters.
export const NAME_RE = /^\p{L}[\p{L} .'’-]+$/u;

// Company names may contain numbers (like "3M"), but need at least one letter.
export const hasLetter = (text) => /\p{L}/u.test(text);
