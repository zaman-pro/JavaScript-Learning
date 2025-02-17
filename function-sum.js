const relatives = [
  { name: "Alice", member: 1 },
  { name: "Bob", member: 2 },
  { name: "Charlie", member: 3 },
  { name: "Alice", member: 1 },
  { name: "David", member: 4 },
  { name: "Eve", member: 5 },
  { name: "Bob", member: 2 },
  { name: "Frank", member: 6 },
  { name: "Grace", member: 7 },
  { name: "Alice", member: 1 },
];

//function of total member count

function getTotalGuest(mainList) {
  let totalCount = 0;
  for (const relative of mainList) {
    totalCount += relative["member"];
  }
  return totalCount;
}
const total = getTotalGuest(relatives);
console.log("total invited member is:", total);
