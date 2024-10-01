// [시전시간, 1초당회복량, 추가회복량], 최대체력, [공격시간, 피해량]
function solution(bandage, health, attacks) {
  const [duration, recover, bonusRecover] = bandage;
  const endTime = attacks.at(-1)[0];
  let nowHealth = health;
  attacks.push([endTime + 1, 0]);

  let cnt = 0;
  let consecutiveCnt = 0;
  for (let i = 0; i <= endTime; i++) {
    const [attackTime, damage] = attacks[cnt];
    if (i === attackTime) {
      cnt += 1;
      consecutiveCnt = 0;
      if (nowHealth - damage <= 0) return -1;
      nowHealth -= damage;
    } else {
      let heal = recover;
      if (consecutiveCnt === duration && i !== 0) {
        heal += bonusRecover;
        consecutiveCnt = 0;
      }

      nowHealth = nowHealth + heal > health ? health : nowHealth + heal;
    }
    consecutiveCnt += 1;
  }

  return nowHealth;
}

solution([5, 1, 5], 30, [
  [2, 10],
  [9, 15],
  [10, 5],
  [11, 5],
]);
