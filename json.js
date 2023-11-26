function info(params) {
  console.info(params);
}
// stringfy
{
  people = [
    {
      firstName: "januarsyah",
      lastName: "akbar",
      addres : {
        country : "kalbar",
        city : "sintang"
      }
    },
    {
      firstName: "nabil",
      lastName: "fikry",
      addres : {
        country : "bali",
        city : "betang"
      }
    },
    {
      firstName: "ghifar",
      lastName: "azzam",
      addres : {
        country : "sanggau",
        city : "skadau"
      }
    },
  ];

  const json =JSON.stringify(people);
  const personAgain = JSON.parse(json);

  info(json);
  info(personAgain)

}
