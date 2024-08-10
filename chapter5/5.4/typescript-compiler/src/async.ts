const asyncFunction = async () => {
  const result = await new Promise<number>((resolve) => {
    resolve(1000);
  });

  return result;
};

export { asyncFunction };
