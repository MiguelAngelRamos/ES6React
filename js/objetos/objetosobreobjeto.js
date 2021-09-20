// Destructuring Objetos sobre objeto
const sitioWeb = {
  nombre: 'Google',
  links: {
    enlace: 'www.google.cl'
  },
  redesSociales: {
    youtube: {
      enlace: 'youtube.com/google',
      nombre: 'Google'
    }
  }
}

const enlaceYoutube = sitioWeb.redesSociales.youtube.enlace;
console.log(enlaceYoutube);

// Destructuring
const { enlace, nombre } = sitioWeb.redesSociales.youtube;

//console.log(sitioWeb.redesSociales.youtube.enlace);
console.log(enlace);
console.log(nombre);
