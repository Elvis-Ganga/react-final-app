import { Link } from "react-router-dom";
import Navbar from "../complex/Navbar";
import Footer from "../complex/Footer";
import "../../styling/About.css";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about">
        <div className="aboutBottom">
          <h1> ABOUT US</h1>
          <p>
            Bun venit în universul vinurilor de excepție!
            <br />
            <br />
            Descoperă colecția noastră de vinuri premium, atent selecționate din
            cele mai renumite podgorii. Fiecare sticlă spune o poveste despre
            tradiție, pasiune și măiestrie în arta vinificației. De la vinuri
            albe și proaspete, până la cele roșii, complexe și corpolente, am
            creat o selecție menită să satisfacă toate gusturile și ocaziile.
            <br />
            <br />
            Ce vei găsi pe site-ul nostru ?
            <br />
            Colecții exclusiviste: Vinuri de soi, autohtone, pentru cunoscători
            și iubitori de vinuri.
            <br />
            Degustări virtuale: Descoperă notele de degustare ale fiecărui vin
            și află cum să le combini cu cele mai rafinate preparate culinare.
            <br />
            Sfaturi de la experți: Articole și ghiduri despre cum să alegi vinul
            potrivit, să-l păstrezi corect și să-l servești la perfecțiune.
            <br />
            Comenzi rapide și livrare premium: Simplificăm experiența ta de
            cumpărare, asigurându-ne că fiecare sticlă ajunge în siguranță la
            tine, în cel mai scurt timp.
            <br />
            <br />
            Fie că ești un cunoscător sau un simplu pasionat, te invităm să te
            bucuri de o călătorie fascinantă în lumea vinului. Lasă-te inspirat
            de savoare, eleganță și rafinament!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
