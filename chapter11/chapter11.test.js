// (p.219) 11.1.1 재귀 트릭: 추가 인자 넘기기
const doubleNumbers = (arr, index) => {
  if (index >= arr.length) {
    return;
  }

  arr[index] *= 2;
  doubleNumbers(arr, index + 1);
};

// (p.224) 11.2.1 두 가지 계산 방식
const bottomUp = (n, i, product) => {
  if (i > n) {
    return product;
  }

  bottomUp(n, i + 1, product * i);
};

// (p.239) 11.7 연습문제
// 1. 모든 문자열에 쓰인 문자 개수를 반환하는 함수를 재귀적으로 작성하라.
const practice1 = (arr) => {
  if (arr.length == 1) {
    return arr[0].length;
  }

  // slice로 풀어야함
  if (arr) {
    console.log(arr[0].length + practice1(arr[1, arr.length - 1]));
  }
};

// 2. 수 배열을 받아 짝수만 포함하는 새 배열을 반환하는 함수를 재귀적으로 작성하라.
const practice2 = (arr) => {
  // if (arr.length == 0) {
  //   return [];
  // }

  if (arr && arr[0] % 2 !== 0) { // arr[0]이 홀수일 때,
    return practice2(arr[1, arr.length - 1]);
  } else if (arr) { // arr[0]이 짝수일 때,
    return [arr[0]] + practice2(arr[1, arr.length - 1]);
  }
};

test("run", () => {
  expect(doubleNumbers(
    [1, 2, 3, 4, 5], 0
  ));

  expect(bottomUp(
    6, 1, 1
  ));

  expect(practice1(
    ["ab", "c", "def", "ghij"]
  )).toBe(10);

  // expect(practice2(
  //   [1, 2, 3, 4, 5, 6]
  // ));
});
