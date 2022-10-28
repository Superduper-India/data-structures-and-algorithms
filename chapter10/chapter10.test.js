// 배열 내 모든 숫자(오로지 숫자만)를 출력하는 재귀 함수 작성
const printNumberOnly = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) { // 인자가 Array인지 판별
      printNumberOnly(arr[i]);
    } else {
      console.log(arr[i]);
    }
  }
};

test("run", () => {
  expect(printNumberOnly(
    [1, 2, 3, [4, 5, 6], 7, [8, [9, 10, 11, [12, 13, 14]]],
      [15, 16, 17, 18, 19, [20, 21, 22, [23, 24, 25, [26, 27, 29]], 30, 31], 32], 33]
  ));
});
