var persona= {
    persona.nombre="adriana",
    persona.apellidos="bermudez",
    persona.edad=27,
    Saludar : function (){
        console.log("mi nombre es:"+this.nombre+" "+this.apellidos+" "+this.edad);
    },
    Edad: function (){
    console.log("mi edad es:"+ this.edad);
    }
    }
    saludar();
    edad();