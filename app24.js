var app = angular.module("app1", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when("/home24", {
      templateUrl: "home24.html",
      controller: "c1"
    })
    .when("/about24", {
      templateUrl: "about24.html",
      controller: "c2"
    })
    .when("/student24", {
      templateUrl: "student24.html",
      controller: "c3"
    })
    .otherwise({
      redirectTo: "/home24"
    });
});

app.controller("c1", function($scope) {
  $scope.display = "Explore the FACE Prep Campus";
});

app.controller("c2", function($scope) {
  $scope.display = "About FACE Prep and Our AI Program";
});

app.controller("c3", function($scope) {
  $scope.display = "List of Students - 1st Year B.Sc. CS with AI";

  $scope.students = [
    { regno: "E24AI001", name: "Abinaya S" },
    { regno: "E24AI002", name: "Ahamed Haseeba" },
    { regno: "E24AI003", name: "Anika M B" },
    { regno: "E24AI054", name: "Archana S" },
    { regno: "E24AI004", name: "Asiya Maryam A" },
    { regno: "E24AI005", name: "Datchayeni A" },
    { regno: "E24AI006", name: "Deepa M" },
    { regno: "E24AI007", name: "Dharshini N" },
    { regno: "E24AI008", name: "Divya S" },
    { regno: "E24AI009", name: "Elakiya K" },
    { regno: "E24AI010", name: "Fathima Hafeesha P" },
    { regno: "E24AI012", name: "Harini R" },
    { regno: "E24AI011", name: "Harini R" },
    { regno: "E24AI013", name: "Harini R" },
    { regno: "E24AI014", name: "Harshini. S" },
    { regno: "E24AI015", name: "Janhavi N K" },
    { regno: "E24AI017", name: "Kamalika A" },
    { regno: "E24AI018", name: "Kanmani J" },
    { regno: "E24AI019", name: "Karishma G" },
    { regno: "E24AI020", name: "Keerthana S" },
    { regno: "E24AI021", name: "Kiruthiga R" },
    { regno: "E24AI022", name: "Lekha Mithra S A" },
    { regno: "E24AI023", name: "Madhangi B" },
    { regno: "E24AI024", name: "Mahalaksmi G" },
    { regno: "E24AI025", name: "Maneesha C A" },
    { regno: "E24AI026", name: "Manju Dharshini" },
    { regno: "E24AI027", name: "Midhuna S" },
    { regno: "E24AI028", name: "Mirudulaa A V R" },
    { regno: "E24AI029", name: "Miruthula M" },
    { regno: "E24AI030", name: "Mrithulashri P" },
    { regno: "E24AI031", name: "Muthu Rakshana R" },
    { regno: "E24AI032", name: "Pooja M D" },
    { regno: "E24AI033", name: "Poonguzhali" },
    { regno: "E24AI034", name: "Prathiba D" },
    { regno: "E24AI035", name: "Preethi P" },
    { regno: "E24AI036", name: "Priyadarshini S" },
    { regno: "E24AI037", name: "Rickshitha A" },
    { regno: "E24AI038", name: "Rithika C" },
    { regno: "E24AI039", name: "Sai Niharika B" },
    { regno: "E24AI040", name: "Samreen Fathima R" },
    { regno: "E24AI041", name: "Sangavi A" },
    { regno: "E24AI042", name: "Shalini P" },
    { regno: "E24AI043", name: "Shameera A" },
    { regno: "E24AI044", name: "Sherin Mary P J" },
    { regno: "E24AI045", name: "Shruthi N" },
    { regno: "E24AI046", name: "Subhashini K" },
    { regno: "E24AI047", name: "Swathi SM" },
    { regno: "E24AI048", name: "Tamizththendral R" },
    { regno: "E24AI049", name: "Tharini P" },
    { regno: "E24AI050", name: "Varsha P" },
    { regno: "E24AI051", name: "Vijeta Baskaran" },
    { regno: "E24AI052", name: "Yashika E" },
    { regno: "E24AI053", name: "Yuvashree S" },
    { regno: "E24AI055", name: "Subbulakshmi S" }
  ];
});

