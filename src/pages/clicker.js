import React, { Component } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Container from "../components/Container";
import images from "../images.json";

class clicker extends Component {

state = {
    score:0,
    topscore:0,
    images: images,
    msg: "Click an image to begin!"
};

 shuffle =array => {
    array.sort(() => Math.random() - 0.5);
  };

endgame = array =>{

    array.forEach(images => {
        images.shake = 0;
    });
};

handleImageClick = (id, shake) => {

    const newstate = {...this.state};
    let count = this.state.score;
    let highscore = this.state.topscore ? this.state.topscore :0;
    let objid = id;
    let objshake = shake;
    let index = this.state.images.findIndex(i => i.id === objid);


    if (objshake){
        newstate.topscore = highscore;
        newstate.msg = "You guessed incorrectly!";
        newstate.score=0;
        this.endgame(newstate.images);
        this.shuffle(newstate.images);
        // newstate.images = newstate.initalImages;
    }else{
        // highscore = highscore+1;
        count = count+1;
        newstate.score = count;
        newstate.topscore = newstate.score>newstate.topscore ? newstate.score : newstate.topscore;
        newstate.images[index].shake = 1;
        newstate.msg = "You guessed correctly!";
        this.shuffle(newstate.images);

        // this.setState({this.state.images[index].shake :1});

    }

    this.setState(newstate, () => {
        console.log(this.state)
    });

  };

render() {
    return (
      <div>
        <Navbar score={this.state.score} topscore={this.state.topscore} msg={this.state.msg}/>
        <Header  />
        <Container result={this.state.images} handleImageClick={this.handleImageClick} />
        <br/>
        <br/>
        <Footer  />
      </div>
    );
  }

}

export default clicker;