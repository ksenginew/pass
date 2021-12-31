exports.pitch = async function (remaining) {
  const result = await this.importModule(
    this.resourcePath + '.webpack[javascript/auto]' + '!=!' + remaining
  );
  this.clearDependencies();
  return result.default || result;
};
