// src/utils/slugify.ts
export function slugify(input: string): string {
  return input
    .normalize('NFD') // separa acentos
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // remove símbolos
    .replace(/\s+/g, '-') // espaço -> hífen
    .replace(/-+/g, '-'); // remove hífens duplicados
}
