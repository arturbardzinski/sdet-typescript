export {};

export const runTest = async (name: string, fn: () => Promise<void>): Promise<void> => {
  try {
    await fn();
    console.log(`✅ PASS: ${name}`);
  } catch (err) {
    console.log(`❌ FAIL: ${name}`);
    console.log(err);
    process.exitCode = 1;
  }
};