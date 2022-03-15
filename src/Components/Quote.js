import React from "react";

const Quote = ({ data }) => {
  if (data) {
    var Quote = data.Quote.map(function (Quote) {
      return (
        <li key={Quote.user}>
          <blockquote>
            <p>{Quote.text}</p>
            <cite>{Quote.user}</cite>
          </blockquote>
        </li>
      );
    });
  }

  return (
    <section id="Quote">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Motivation Quote</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{Quote}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
