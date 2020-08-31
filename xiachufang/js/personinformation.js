var cities = [
      ["东城区","西城区","朝阳区","海淀区","石景山区"],
      ["石家庄市","唐山市","秦皇岛市","保定市","邯郸市","沧州市"],
      ["济南市","青岛市","淄博市","烟台市","聊城市","德州市"],
      ["南京市","苏州市","南通市","无锡市","常州市"]
    ];
    var city = document.all.city;
     onchange="changeCity(this)"
    function changeCity(ele){
      var i = ele.selectedIndex;
      city.innerHTML = "";
      for(var j in cities[i]){
        var opt = new Option(cities[i][j],"");
        city.add(opt);
      }
    }