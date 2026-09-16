var MainModule = (function(){

    var initApp = function(){
        console.log("app init");
        configureEvents();
    }
    
    var configureEvents = function(){
        console.log("Configurando eventos");
        console.log("Otro cambio");
    }
    
    return {
        init: function(){
            initApp();
        }
    }
})();

MainModule.init();