// const timeLine = {
//   props: ["cours", "heur"],
//   template: `<div class="timeline__item">
//                 <div class="timeline__content text-center">
//                     <h2>{{this.cours}}</h2>
//                     <h2>{{this.heur}}</h2>
//                     <p>salle</p>
//                     <div class="btn-group" role="group">
//                       <button type="button" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
//                       <button type="button" class="btn btn-primary"><i class="fa fa-trash" aria-hidden="true"></i></button>
//                     </div>
//                 </div>
//               </div>`
// };
// let vm = new Vue({
//   el: "#app",
//   data: {
//     cour: [
//       {
//         name: "",
//         heure: ""
//       }
//     ]
//   },
//   components: { timeLine },
//   methods: {
//     addNewCours() {
//       console.log("debug");
//       this.cour.push({
//         name: "",
//         heure: ""
//       });
//     }
//   }
// });
/*
function myCtrl($scope) {
  $scope.AppendText = function() {
    var myEl = angular.element(document.querySelector(".timeline__items"));
    myEl.append(`<div class="timeline__item">
                <div class="timeline__content text-center">
                    <h2>Cour</h2>
                    <h2>Heure</h2>
                    <p>salle</p>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                      <button type="button" class="btn btn-primary"><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>
              </div>`);
  };
}*/
// var app = new Vue({
//   el: ".container",
//   data: {
//     cours: [
//       {
//         name: "",
//         time: "",
//         salle: ""
//       }
//     ]
//   },
//   methods: {
//     addCours() {
//       this.cours.push({
//         name: "",
//         time: "",
//         salle: ""
//       });
//     }
//   }
// });

var el1 = ["note1", "note2"];
var el2 = ["note1", "note2"];
var el3 = ["note1", "note2"];
var el4 = ["note1", "note2"];
var ntglb = {
  el1,
  el2,
  el3
};
alert(ntglb[1]);
