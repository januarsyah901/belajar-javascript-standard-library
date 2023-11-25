function info(params) {
    console.info(params);
}
// object freeze
{
  const name = {
    firstName: "januarsyah",
    lastName: "akbar",
  };

  Object.freeze(name); // agar ga bisa diotak atik lagi
//   Object.seal(name) // bisa diotak atik tapi ga bisa dihapus ataupun ditambah

  name.firstName = "wahid"; //tidak berubah 

  delete name.lastName; //tidak berubah

  info(name);
}
// object assign
{
  const target = {firstName : "nabil"}
  const source = {lastName : "fikry",firstName : "wahid"}

  info(Object.assign(target,source)); //object target akan mengambil object source , dan jika ada property yang sama maka akan ditimpa
}
// object property nama and value
{
  const name = {firstName : "januarsyah",lastName : "akbar"};
  info(Object.values(name)); // dapat nilainya aja
  info(Object.getOwnPropertyNames(name)); //  dapat property 

}