
export default function asyncReduce (tuples, asyncFn) {
  return new Promise((resolve) => {
    const results = Promise.all(
      tuples.map(async (tuple) => {
        const value = await asyncFn(tuple[0])
        return [tuple[0], value]
      }),
    )

    resolve(Object.fromEntries(results))
  })
}
    