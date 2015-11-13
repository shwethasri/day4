/* javascript file for cearting dynamic table and applying sorting, filtering and paging */
var student = [
    {
      sno : 23,
      sname : "john",
      course : "EEE"
    },
    {
      sno : 1,
      sname : "sam",
      course : "EEE"
    },
    {
      sno : 26,
      sname : "sid",
      course : "ECE"
    },
    {
      sno : 2,
      sname : "josh",
      course : "EEE"
    },
    {
      sno : 3,
      sname : "john",
      course : "CSE"
    },
    {
      sno : 5,
      sname : "johnson",
      course : "IT"
    },
    {
      sno : 10,
      sname : "joy",
      course : "EIE"
    },
    {
      sno : 57,
      sname : "sri",
      course : "Chem"
    },
    {
      sno : 15,
      sname : "shrs",
      course : "Civ"
    },
    {
      sno : 24,
      sname : "shil",
      course : "Mech"
    }
  ];
function createTable() {
  var tableDiv = document.getElementById('tableDiv');
  var table = document.createElement('table');
  table.id = "student-Informaton";
  table.border=1;
  var tr1 = document.createElement('tr');
  tr1.id = "headers";
  var t1 = document.createElement('th');
  t1.innerHTML = "no";
  t1.id = "noh";
  tr1.appendChild(t1);
  var t2 = document.createElement('th');
  t2.innerHTML = "name";
  t2.id = "nameh";
  tr1.appendChild(t2);
  var t3 = document.createElement('th');
  t3.innerHTML = "course";
  t3.id = "courseh";
  tr1.appendChild(t3);
  table.appendChild(tr1);
  var len = student.length;
  var collen = table.rows[0].cells.length;
  for ( var i = 1; i < len; i++ )
  {
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    td1.innerHTML =student[i].sno;
    tr.appendChild(td1);
    var td2 = document.createElement('td');
    td2.innerHTML =student[i].sname;
    tr.appendChild(td2);
    var td3 = document.createElement('td');
    td3.innerHTML =student[i].course;
    tr.appendChild(td3);
    tr.border = 1;
    table.appendChild(tr);
  }
  tableDiv.appendChild(table);

  t1.addEventListener('click', sortc);
  t2.addEventListener('click', sortc);
  t3.addEventListener('click', sortc);
}

function sortc(){
    var table = document.getElementById('student-Informaton');
      var collen = table.rows[0].cells.length;
      var rowCount = table.rows.length;
      var temp = "";
      for( var i = 1; i < rowCount; i++ )
      {
        for ( var j = 1; j < rowCount-1; j++ )
        {
          for( var k = j+1; k < rowCount-j-1; k++)
          {
            if( table.rows[j].innerHTML < table.rows[k].innerHTML)
            {
              temp = table.rows[j].innerHTML;
              table.rows[j].innerHTML = table.rows[k].innerHTML;
              table.rows[k].innerHTML = temp;
            }
          }
        }
      }
}
function filter(){
  var table = document.getElementById('student-Informaton');
  var tr = document.getElementById('headers');
  var len = student.length;
  var collen = table.rows[0].cells.length;
  var rowCount = table.rows.length;
  var temp = "";
  var td1 = document.getElementById('noh');
  var td2 = document.getElementById('nameh');
  var td3 = document.getElementById('courseh');
  var inputElement = '<input type="search" placeholder="filter" >';
  td1.innerHTML = inputElement;
  tr.appendChild(td1);
  td2.innerHTML = inputElement;
  tr.appendChild(td2);
  td3.innerHTML = inputElement;
  tr.appendChild(td3);
  table.appendChild(tr);
  var v1 = td1.innerHTML.value;
  var v2 = td2.innerHTML.value;
  var v3 = td3.innerHTML.value;
  var f = 0;
  for( var i = 1; i < rowCount; i++ )
  {
    for ( var j = 1; j < collen; j++ )
    {
        if( v1  === table.rows[i].cells[j].innerHTML)
        {
          f=1;
          break;
        }
        if( v2  === table.rows[i].cells[j].innerHTML)
        {
          f=1;
          break;
        }
        if( v3  === table.rows[i].cells[j].innerHTML)
        {
          f=1;
          break;
        }
    }
  }
  if(f === 1)
  {
    table.rows[i].style.display = table.rows[i].innerHTML;
  }
  else {
      table.rows[i].style.display = 'none';
  }
}
