"use strict";

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	private: false,
	status: "",
	start() {
		this.count = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));

		while (this.count === "" || this.count === null || isNaN(this.count)) {
			this.count = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
		}
	},
	rememberMyFilms() {
		for (let i = 0; i < this.count; i++) {
			const whichFilm = prompt(`${i + 1}. Ո՞ր ֆիլմն եք վերջերս դիտել`, "");

			if (whichFilm !== null && whichFilm !== "" && whichFilm.length > 2 && whichFilm.length < 30) {
				let rateFilm = parseInt(prompt(`Ինչքա՞ն եք գնահատում <<${whichFilm}>> ֆիլմը`, ""));

				while (rateFilm === null || rateFilm === "" || isNaN(rateFilm)) {
					rateFilm = parseInt(prompt(`Ինչքա՞ն եք գնահատում <<${whichFilm}>> ֆիլմը`, ""));
				}

				this.movies[whichFilm] = rateFilm;
			}

			else {
				i--;
			}
		}
	},
	detectUsersPersonalStatus() {
		if (this.count > 0 && this.count <= 1) {
			this.status = "դուք դասական կինո դիտող եք";
		} else if (this.count >= 2 && this.count <= 3) {
			this.status = "դուք սիրում եք ֆիլմ դիտել";
		} else if (this.count >= 4) {
			this.status = "դուք կինոմեն եք !";
		}
	},
	writeYourFavoriteGenres() {
		for (let i = 0; i < 3; i++) {
			const genres = prompt(`${i + 1} Գրեք Ձեր նախընտրած ժանրը`);

			if (genres !== null && genres !== "" && genres.length < 20 && isNaN(genres)) {
				this.genres[i] = genres;
			} else {
				i--;
			}
		}
	},
	detectDBPrivate(isPrivate) {
		if (isPrivate) {
			console.log("Կներեք, բայց մեր տվյալների բազան փակ է");
		} else {
			console.log(this);
		}
	}
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectUsersPersonalStatus();
// personalMovieDB.writeYourFavoriteGenres();
// personalMovieDB.detectDBPrivate();