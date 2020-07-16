// JavaScript source code




(function () {

    var actualizarhora = function () {

        var fecha = new Date();
        var day = fecha.getDay();
        var Nday = fecha.getDate();
       var  Mes = fecha.getMonth();
        var year = fecha.getFullYear();
        var minute = fecha.getMinutes();
        var hour = fecha.getHours();
        var segunde = fecha.getSeconds();
        var ampm;

        if (minute < 10) {
            minute = "0" + minute;
        };

        
        var pdia = document.getElementById("dia");
        var days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        pdia.textContent = days[day];

        var pday = document.getElementById("ndia");
        pday.textContent = Nday;

        var pmes = document.getElementById("mes");
        var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        pmes.textContent = meses[Mes];

        var pyear = document.getElementById("year");
        pyear.textContent = year;

        var phora = document.getElementById("hora");
        phora.textContent = hour;
        
        var pminuto = document.getElementById("minuto");
        pminuto.textContent = minute;

        var pampm = document.getElementById("ampm");
        if (hour >= 12) {
            hour = hour - 12;
            ampm = "PM";
        }
        else {
            ampm = "AM";
        }

        if (hour == 0) {
            hour = 12;
        };
        if (minute < 10) {
            minute = "0" + minute;
        };

        if (segunde < 10) {
            segunde = "0" + segunde;
        };
        pampm.textContent = ampm;

        var psegundo = document.getElementById("segundo");
        psegundo.textContent = segunde;

        var psaludo = document.getElementById("saludos");

        if (ampm == "AM") {
            psaludo.textContent = "!BUENOS DIAS!"

        }
        else {
            psaludo.textContent = "!BUENAS TARDES!";
        }

    };
   


    actualizarhora();
    var interbalo = setInterval(actualizarhora, 1000);
  

}())




