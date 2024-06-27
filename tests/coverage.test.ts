import { readFile } from "fs/promises";

describe('Coverage development', () => {
  let colectCoverage = { total: { lines: { pct: 0 }, statements: { pct: 0 }, branches: { pct: 0 }, functions: { pct: 0 } }};

  beforeAll(async () => {
    const readJson = await readFile('coverage/coverage-summary.json', 'utf-8');
    colectCoverage = JSON.parse(readJson);
  });

  it('should verify that the overall line coverage is at least 80%', async () => {
    const coverageLines = colectCoverage.total.lines.pct;

    expect(coverageLines).toBeGreaterThanOrEqual(80);
  });

  it('should verify that the overall statement coverage is at least 80%', async () => {
    const coverageStatements = colectCoverage.total.statements.pct;

    expect(coverageStatements).toBeGreaterThanOrEqual(80);
  });

  it('should verify that the overall branch coverage is at least 80%', async () => {
    const coverageBranches = colectCoverage.total.branches.pct;

    expect(coverageBranches).toBeGreaterThanOrEqual(80);
  });

  it('should verify that the overall function coverage is at least 50%', async () => {
    const coverageFunctions = colectCoverage.total.functions.pct;

    expect(coverageFunctions).toBeGreaterThanOrEqual(50);
  });
});
