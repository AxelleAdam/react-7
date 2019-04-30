import React from "react";

class FormEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: "",
      urlFilm: "",
      comment: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };

    const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";

    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Film ajouté avec l'ID ${res}!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert("Erreur lors de l'ajout d'un film");
      });
  }

  render() {
    return (
      <div className="FormEmployee">
        <h1>Saisi d'un film</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="film">Titre du Film</label>
              <input
                type="text"
                id="film"
                name="film"
                onChange={this.onChange}
                value={this.state.film}
              />
            </div>

            <div className="form-data">
              <label htmlFor="urlFilm">url du film</label>
              <input
                type="text"
                id="urlFilm"
                name="urlFilm"
                onChange={this.onChange}
                value={this.state.urlFilm}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Commentaire</label>
              <input
                type="comment"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Soumettre la réponse" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormEmployee;
