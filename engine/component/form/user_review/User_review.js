import React, { useRef } from "react";
import { Star } from "../../../../assets/icons/Icon_svg";

import S from "./User_review.module.scss";

export default function User_review() {
  const inputs = useRef({
    name: useRef(),
    email: useRef(),
    comment: useRef(),
  });

  function handleRate(e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
  }

  return (
    <div className={S.wrapper}>
      <h1>Votre avis nous intéresse !</h1>

      <form>
        <div>
          <div className={`bloc_input ${S.bloc_ratings}`}>
            <label>Votre note :</label>
            <div className={S.ratings}>
              <input
                type="radio"
                id="star1"
                name="rate"
                value="1"
                onChange={(e) => {
                  handleRate(e);
                }}
              />
              <label for="star1" title="text">
                <Star></Star>
              </label>
              <input
                type="radio"
                id="star2"
                name="rate"
                value="2"
                onChange={(e) => {
                  handleRate(e);
                }}
              />
              <label for="star2" title="text">
                <Star></Star>
              </label>
              <input
                type="radio"
                id="star3"
                name="rate"
                value="3"
                onChange={(e) => {
                  handleRate(e);
                }}
              />
              <label for="star3" title="text">
                <Star></Star>
              </label>
              <input
                type="radio"
                id="star4"
                name="rate"
                value="4"
                onChange={(e) => {
                  handleRate(e);
                }}
              />
              <label for="star4" title="text">
                <Star></Star>
              </label>
              <input
                type="radio"
                id="star5"
                name="rate"
                value="5"
                onChange={(e) => {
                  handleRate(e);
                }}
              />
              <label for="star5" title="text">
                <Star></Star>
              </label>
            </div>
          </div>

          <div className={`bloc_input ${S.bloc_input}`}>
            <label htmlFor="username">Votre nom</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Votre Nom"
              required
              ref={inputs.email}
            />
          </div>

          <div className={`bloc_input ${S.bloc_input}`}>
            <label htmlFor="email">Votre e-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Votre E-mail"
              required
              ref={inputs.name}
            />
          </div>
          <div className={`bloc_input ${S.bloc_input}`}>
            <label htmlFor="email">Votre commentaire</label>
            <textarea
              required
              placeholder="Votre commentaire"
              ref={inputs.name}
            ></textarea>
          </div>
        </div>
        <button class="btn_sub btn_primary" type="submit" disabled>
          Envoyer
        </button>
      </form>
    </div>
  );
}
