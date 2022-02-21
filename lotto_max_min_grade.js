/* 
//나의 풀이 
function solution(lottos, win_nums) {
  let answer = [];
  let zeroNum = lottos.filter((elem) => elem === 0).length;
  const n = lottos.length;
  let min = 0,
    max = 0,
    cnt = 0;

  for (let i = 0; i < n; i++) {
    if (lottos.indexOf(win_nums[i]) >= 0) {
      cnt++;
    }
  }
  if (zeroNum === n) {
    max = n;
    min = 0;
  } else {
    max = zeroNum + cnt;
    min = cnt;
  }

  function cal(num) {
    if (num === n) {
      return 1;
    } else if (num === 5) {
      return 2;
    } else if (num === 4) {
      return 3;
    } else if (num === 3) {
      return 4;
    } else if (num === 2) {
      return 5;
    } else {
      return 6;
    }
  }
  answer.push(cal(max));
  answer.push(cal(min));
  return answer;
}
*/
//다른 사람 코드 참고
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1]; //0,1개 맞추면 6등 / 2개 맞추면 5등 / 3개 맞추면 4등  ...
  let zero = lottos.filter((elem) => elem === 0).length;
  let min = lottos.filter((elem) => win_nums.includes(elem)).length;
  const max = min + zero;

  return [rank[max], rank[min]];
}

//console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); //[3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); //[1, 6]
//console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); //[1, 1]
