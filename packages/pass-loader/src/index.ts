exports  async function pitch (remaining) {
    const result = await this.importModule(
      this.resourcePath + '.webpack[javascript/auto]' + '!=!' + remaining
    );
    return result.default || result;
  };
  