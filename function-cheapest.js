// find the cheapest phone

const phones = [
  { brand: "Apple", price: 100000, camera: "48mp", battery: "4500mah" },
  { brand: "Xiaomi", price: 12000, camera: "16mp", battery: "4500mah" },
  { brand: "Motorola", price: 45000, camera: "32mp", battery: "6500mah" },
  { brand: "Nokia", price: 8000, camera: "12mp", battery: "3500mah" },
  { brand: "Samsung", price: 20000, camera: "20mp", battery: "5500mah" },
];

function getCheapestPhone(phones) {
  let cheapest = phones[0];
  for (const phone of phones) {
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}

const cheapestPhone = getCheapestPhone(phones);
console.log("The cheapest phone is:", cheapestPhone);
