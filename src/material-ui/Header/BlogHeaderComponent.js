import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import { useState } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, withStyles,Toolbar} from '@material-ui/core';
import { Route,Switch } from 'react-router-dom';
import Header from './Header';
import MainPage from './HeaderButtons/MainPage';
import Hakkında from './HeaderButtons/Hakkında';
import Magaza from './HeaderButtons/Magaza';
import Haberler from './HeaderButtons/Haberler';
import Iletisim from './HeaderButtons/Iletisim';
import Galeri from './HeaderButtons/Galeri';
import OkçulukHakkında from './HeaderButtons/OkçulukHakkında';
import Kurslarımız from './HeaderButtons/Kurslarimiz';
import IkinciElMalzemeler from './HeaderButtons/IkinciElMalzemeler';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';



/*
* BlogHeaderComponent, index.js dosyası içerisinde toolbar_section isimli <div> ogesine eklenir.
* Üzerinde oluşan menü butonları (Header.js dosyasında oluşmaktadır), sahip oldukları tıklama eventi
* ile tüm sayfanın kontrolünü saglamaktadır. Tıklanan butona göre root isimli <div> ögesinin içerisin-
* de ki componenti kaldırıp ilgili yeni componenti koyarak sayfanın bedenini düzenler.
* Ayrıca sunucu ile iletişim de şu an burada yapılmaktadır

* Yapılacaklar:
* component kaldırıp yenisini ekleme işleminden vazgeçip Router kullanılarak yeni html sayfalarına zıplama yapılacaktır.
*/

const useStyles = makeStyles((theme) => ({
  
 
  bosluk: {
    align:'center',
   
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(7),
    },
    //laptoplar için
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(15),
      marginRight: theme.spacing(15),
    },
    //büyük ekranlar için
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(30),
      marginRight: theme.spacing(30),
  },
  },

}));


class BlogHeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {NewsList: null,ImagesList:null, xmlfound: false, jsonstring: "", index: 0 };
    this.clickedName = "";
    this.handleSelect = this.handleSelect.bind(this);
    
    this.useStyles = withStyles((theme) => ({
      toolbar: theme.mixins.toolbar,
    }));

    /* These are the names to be placed on menu buttons. Props of <Header> component*/
    this.sections = [
      { title: 'AnaSayfa', url: 'AnaSayfa' },
      {
        title: 'Hakkında',
        subtitles: [
          { title: 'Hakkımızda', url: 'Hakkimizda' },
          { title: 'Kurslarımız', url: 'Kurslarimiz' },
        ],
        url: 'Hakkinda'
      },

      { title: 'Haberler', url: 'Haberler' },

      {
        title: 'Galeri',
        subtitles: [
          { title: 'KLÜBÜMÜZ', url: 'Klubumuz' },
          { title: 'Madalyalar', url: 'Madalyalar' },
          { title: 'Sporcularımız', url: 'Sporcularimiz' },
        ],
        url: 'Galeri'
      },

      
      { title: 'Okçuluk Hakkında', url: 'OkculukHakkinda' },
      { title: 'Mağaza', url: 'Magaza' },
      { title: '2. El Malzemeler', url: '2. El Malzemeler' },
      { title: 'İLETİŞİM', url: 'Iletisim' },
    ];

  }

  /* Fetching News(Haberler) data from a local server program. */
  async componentDidMount() {
    try {
      /*
      let [items, news] = await Promise.all([
        fetch("http://localhost:4000/"),
        fetch("http://localhost:4000/news")
      ]);      
      */
      let [images,news] = await Promise.all([
        //fetch("http://192.168.1.21:3005/Images/Sporcularimiz"),
        //fetch("http://192.168.1.21:4000/news")     
      ]);
      //const b = await images.json();
      //console.log(b);

      //this.setState({ImagesList:b});
      
    }
    catch (err) {
      console.log(err);
    };

  }
  componentWillUnmount() {

  }


  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {

    /* This will trigger a refresh when user click a button on <Header> component. Function is, as a prop, going to be
        onClick event handler function inside <Header> */

    return (
      
      <React.Fragment>
        <CssBaseline />
          <Header title="" clickedName={this.clickedName} sections={this.sections} />
          <Toolbar />
          <Toolbar />
         
          
<Switch>
          <Route
            exact
            path='/'
            render={() => (<MainPage ></MainPage>)}
          />
          <Route
            exact
            path='/AnaSayfa'
            render={() => (<MainPage></MainPage>)}
          />
          <Route
            exact
            path='/Hakkinda/Hakkimizda'
            render={() => (<Hakkında></Hakkında>)}
          />
          <Route
            exact
            path='/Hakkinda/Kurslarimiz'
            render={() => (<Kurslarımız></Kurslarımız>)}
          />
          <Route
            exact
            path='/Haberler'
            render={() => (<Haberler news={this.state.NewsList}></Haberler>)}
          />      
            <Route
              exact
              path='/Galeri/Klubumuz'
              render={() => (<Galeri section={"Klubumuz"}></Galeri>)}
            />
            <Route
              exact
              path='/Galeri/Madalyalar'
              render={() => (<Galeri section={"Madalyalar"}></Galeri>)}
            />
            <Route
              exact
              path='/Galeri/Sporcularimiz'
              render={() => (<Galeri section={"Sporcularimiz"}></Galeri>)}
            />
            <Route
              exact
              path='/2. El Malzemeler'  //OkculukMalzemeleri
              render={() => (<IkinciElMalzemeler></IkinciElMalzemeler>)}
            />
          <Route
            exact
            path='/Magaza'
            render={() => (<Magaza></Magaza>)}
          />
          <Route
            exact
            path='/OkculukHakkinda'
            render={() => (<OkçulukHakkında></OkçulukHakkında>)}
          />
          <Route
            exact
            path='/Iletisim'
            render={() => (<Iletisim></Iletisim>)}
          />
          </Switch>
      </React.Fragment>
    );
  }
}

export default BlogHeaderComponent;



