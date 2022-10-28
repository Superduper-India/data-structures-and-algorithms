const wordCreator = (arr) => {
  const len = arr.length;

  const collection = [];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      console.log(i, j);
    }
  }
};

test("run", () => {
  expect(wordCreator(
    ["a", "b", "c", "d"]
  )).toEqual(
    [
      "ab", "ac", "ad", "ba", "bc", "bd",
      "ca", "cb", "cd", "da", "db", "dc"
    ]
  );
});
