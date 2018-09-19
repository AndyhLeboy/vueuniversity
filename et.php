<?php 
require_once('head.php')
?>

<main style="margin-top:50px" id="app" ng-app="" ng-controller="myCtrl">
<button class="btn btn-default" @click="AddCours">Add</button>
	<section class="page-section">
		<div class="container">
			<h1>Informatique</h1>
			<!-- {{message}} -->
			<div class="dropdown">
				<button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
				 aria-expanded="false">
					Select semestre
				</button>
				<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a class="dropdown-item" href="#">Semestre 1</a>
					<a class="dropdown-item" href="#">Semestre 2</a>
					<a class="dropdown-item" href="#">Semestre 3</a>
				</div>
			</div>
			<hr>
			
			<div class="timeline">
				<div class="timeline__wrap">
					<div class="timeline__items">
						<!-- <div id="divID"></div> -->
						<!-- <time-line cours="Maths" heur="12 à 16h"></time-line> -->
						<time-line cours="FrameWork - Bootstrap" heur="12 à 16h"></time-line>
						<time-line cours="Algorithimque" heur="12 à 16h"></time-line>
						<time-line cours="Anglais des Affaier" heur="12 à 16h"></time-line>
						<time-line cours="Javascript" heur="12 à 16h"></time-line>
						<time-line cours="Php" heur="12 à 16h"></time-line>
						<div class="timeline__item"  v-for="(cour, index) in cours">
							<span class="float-rigth">X</span>
							<div class="timeline__content text-center">
								<h2>cours</h2>
								<h2>heure</h2>                     
								<p>salle</p>
								<div class="btn-group" role="group">
									<button type="button" class="btn btn-primary"><i class="fa fa-pencil-square-o" 			aria-hidden="true"></i></button>
									<button type="button" class="btn btn-primary"><i class="fa fa-trash" aria-hidden="true"></i></button>
								</div>
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
<?php require_once('footer.php')?>
    <script>
        timeline(document.querySelectorAll('.timeline'), {
            forceVerticalMode: 700,
            mode: 'horizontal',
            verticalStartPosition: 'left',
            // visibleItems: 4
        });
	</script>
