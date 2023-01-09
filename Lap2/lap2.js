const gameEvents = new Map([
        [17, 'Vào'],
        [36, 'Thay người'],
        [47, 'Vào'],
        [61, 'Thay người'],
        [64, 'Thẻ vàng'],
        [69, 'Thẻ đỏ'],
        [70, 'Thay người'],
        [72, 'Thay người'],
        [76, 'Vào'],
        [80, 'Vào'],
        [92, 'Thẻ vàng'],
 
   
]);
const events = new Set(gameEvents.values());
console.log(events);

gameEvents.delete(64);

console.log(`1 sự kiện xảy ra, ${90 / gameEvents.size }`);
console.log(gameEvents.size);
const time = [...gameEvents.keys()].pop(); // cuoi cung
console.log(...gameEvents.keys());
console.log(time);
console.log(`Thẻ vàng vào phút  ${time}`);


for( const[min,event] of gameEvents){
    const half = min <= 45 ? 'Hiệp 1' : 'Hiệp 2';
    console.log(`${half} Phút thứ ${min} : ${event}` ); 
}