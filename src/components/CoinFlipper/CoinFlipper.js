import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "",
      flipping: false,
      yaziGelen: 0,
      turaGelen: 0,
      toplamAtis: 0,
    };
  }
  handleClick = () => {
    const number = Math.floor(Math.random() * 3);

    if (number === 0) {
      this.handleClick();
    }
    if (number === 1) {
      this.setState({ side: "tura" });
      this.setState({ turaGelen: this.state.turaGelen + 1 });
    }
    if (number === 2) {
      this.setState({ side: "yazi" });
      this.setState({ yaziGelen: this.state.yaziGelen + 1 });
    }
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    this.setState({ toplamAtis: this.state.toplamAtis + 1 });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);

    console.log(this.state.side);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.toplamAtis} </strong>
          atıştan
          <strong> {this.state.turaGelen} </strong>ü tura
          <strong> {this.state.yaziGelen} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
