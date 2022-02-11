async function pitch(this: any, remaining: string) {
  const result = await this.importModule(
    this.resourcePath + ".webpack[javascript/auto]" + "!=!" + remaining
  );
  return result.default || result;
}

export { pitch };
