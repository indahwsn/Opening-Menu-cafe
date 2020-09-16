const cafe = {
  name: "Deich Cafe",
  businessHours: { 
    opening: "08:00 am",
    closing: "11:00 pm"
  },
  menu: ["Coffee", "Tiramisu", "Milk"]
  
};

console.log(`Nama: ${cafe.name}`);
console.log(`Jam: Dari jam ${cafe.businessHours.opening} sampai jam ${cafe.businessHours.closing}`);
console.log(`----------------------------`);
console.log("Menu Rekomendasi");

for (let i = 0; i < cafe.menu.length; i++) {
console.log(cafe.menu[i]);
}
