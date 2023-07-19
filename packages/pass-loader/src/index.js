/**
 * @param {string} remaining
 * @this {any}
 */
async function pitch(remaining) {
  const result = await this.importModule(
    this.resourcePath + ".webpack[javascript/auto]" + "!=!" + remaining,
  );
  return result.default || result;
}

export { pitch };
