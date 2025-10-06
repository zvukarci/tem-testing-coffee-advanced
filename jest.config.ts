import type { Config } from 'jest';

const config: Config = {
  // Použijeme ts-jest, aby vedel spracovať TypeScript
  preset: 'ts-jest',

  // Node prostredie – najlepšie pre unit testy
  testEnvironment: 'node',

  // Cesty ku testom
  roots: ['<rootDir>/tests'],

  // Akceptované prípony
  moduleFileExtensions: ['ts', 'js', 'json'],

  // ✅ Dôležité: povolíme Jest-u transformovať ESM balíky (ako node-fetch)
  transformIgnorePatterns: [
    '/node_modules/(?!node-fetch)',
  ],

  // ✅ (Voliteľné) Môžeš zapnúť podrobnejšie logovanie, ak testy failujú
  verbose: true,

  // ✅ (Voliteľné) Ak chceš spúšťať setup skript pred testami (napr. global fetch mock)
  // setupFiles: ['<rootDir>/tests/setupTests.ts'],

  // ✅ Ignoruj build output
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
};

export default config;
