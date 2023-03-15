function generateTable() {
      var info = new Array();
      info.push(["Name", "Age", "DOB", "Email", "Company"]);
      info.push(["John ", 30, "02/01/1993", "john@gmail.com", "United Comapny"]);
      info.push(["Mudassar", 34, "02/01/1989", "mud@gmail.com", "Gemini"]);
      info.push(["Mathews", 22, "02/01/2001", "matt@gmail.com", "HCL"]);
      info.push(["Robert", 21, "02/01/2002", "robert@gmail.com", "Zyari"]);
      info.push(["Ankita", 23, "02/01/1999", "ankita@gmail.com", "Zepto"]);

      var table = document.createElement("TABLE");
      table.border = "1";

      var columnCount = info[0].length;

      var row = table.insertRow(-1);
      for (var i = 0; i < columnCount; i++) {
          var headerCell = document.createElement("TH");
          headerCell.innerHTML = info[0][i];
          row.appendChild(headerCell);
      }

      for (var i = 1; i < info.length; i++) {
          row = table.insertRow(-1);
          for (var j = 0; j < columnCount; j++) {
              var cell = row.insertCell(-1);
              cell.innerHTML = info[i][j];
          }
      }

      var dvTable = document.getElementById("dvTable");
      dvTable.innerHTML = "";
      dvTable.appendChild(table);
  
}
  