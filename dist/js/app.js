const timeLine = {
  props: ['cours', 'heur'],
  template: `<div class="timeline__item">
  <div class="timeline__content text-center">
      <h2>{{this.cours}}</h2>
      <h2>{{this.heur}}</h2>
      <p>salle</p>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
        <button type="button" class="btn btn-primary"><i class="fa fa-trash" aria-hidden="true"></i></button>
      </div>
  </div>
</div>`
};
let vm = new Vue({
  el: '#app',
  components: { timeLine },

});
