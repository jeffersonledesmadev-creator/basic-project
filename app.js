var MainModule = (function(){

    var initApp = function(){
        console.log("app init");
    }
    
    return {
        init: function(){
            initApp();
        }
    }
})();

MainModule.init();