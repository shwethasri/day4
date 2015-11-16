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
  var t = document.createElement('thead');
  t.id = 'tablehead';
  t.innerHTML = '<button id="filter">&#947';
  var th = document.createElement(tr);
  th.appendChild(t);
  table.appendChild(th);
  var tr1 = document.createElement('tr');
  tr1.id = "headers";
  var t1 = document.createElement('th');
  t1.innerHTML = 'no<button id="noasc">&#9652</button><button id="nodsc">&#9662</button>';
  t1.id = "noh";
  tr1.appendChild(t1);
  var t2 = document.createElement('th');
  t2.innerHTML = 'name <button id="nameasc">&#9652</button><button id="namedsc">&#9662</button>';
  t2.id = "nameh";
  tr1.appendChild(t2);
  var t3 = document.createElement('th');
  t3.innerHTML = 'course <button id="courseasc">&#9652</button><button id="coursedsc">&#9662</button>';
  t3.id = "courseh";
  tr1.appendChild(t3);
  table.appendChild(tr1);
  var len = student.length;
  var collen = table.rows[0].cells.length;
  for ( var i = 0; i < len; i++ )
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
  document.getElementById('noasc').addEventListener('click', function(){sortac(0);});
  document.getElementById('nameasc').addEventListener('click', function(){sortac(1);});
  document.getElementById('courseasc').addEventListener('click', function(){sortac(2);});
  document.getElementById('nodsc').addEventListener('click', function(){sortdc(0);});
  document.getElementById('namedsc').addEventListener('click', function(){sortdc(1);});
  document.getElementById('coursedsc').addEventListener('click', function(){sortdc(2);});
  document.getElementById('filter').addEventListener('click',filter);
  table.addEventListener('load', paging);
}
/* sorting function for ascending order*/
function sortac(column){
    var table = document.getElementById('student-Informaton');
    var rowCount = table.rows.length;
    var temp = "", a, b;
    for( var i = 1; i <= rowCount; i++ )
    {
        for ( var j = i; j < rowCount-1; j++ )
        {
            var k = j+1;
            if( column === 0 )
            {
              a = parseInt(table.rows[j].cells[column].innerHTML);
              b = parseInt(table.rows[k].cells[column].innerHTML);
            }
            else{
              a = table.rows[j].cells[column].innerHTML;
              b = table.rows[k].cells[column].innerHTML;
            }
            if( a < b )
            {
              temp = table.rows[j].innerHTML;
              table.rows[j].innerHTML = table.rows[k].innerHTML;
              table.rows[k].innerHTML = temp;
            }
        }
      }
}
/* sorting function for descending order */
function sortdc(column){
    var table = document.getElementById('student-Informaton');
    var rowCount = table.rows.length;
    var temp = "", a, b;
    for( var i = 1; i <= rowCount; i++ )
    {
        for ( var j = i; j < rowCount-1; j++ )
        {
            var k = j+1;
            if( column === 0 )
            {
              a = parseInt(table.rows[j].cells[column].innerHTML);
              b = parseInt(table.rows[k].cells[column].innerHTML);
            }
            else{
              a = table.rows[j].cells[column].innerHTML;
              b = table.rows[k].cells[column].innerHTML;
            }
            if( a > b )
            {
              temp = table.rows[j].innerHTML;
              table.rows[j].innerHTML = table.rows[k].innerHTML;
              table.rows[k].innerHTML = temp;
            }
        }
      }
}
/*filtering function on table*/
function filter(){
  var table = document.getElementById('student-Informaton');
  var tr = document.getElementById('headers');
  var collen = table.rows[0].cells.length;
  var rowCount = table.rows.length;
  var td1 = document.getElementById('noh');
  var td2 = document.getElementById('nameh');
  var td3 = document.getElementById('courseh');
  var inputElement1 = '<input id="filter1" type="search" onchange="filt(0)" >';
  td1.innerHTML = inputElement1;
  tr.appendChild(td1);
  var inputElement2 = '<input id="filter2" type="search" onchange="filt(1)" >';
  td2.innerHTML = inputElement2;
  tr.appendChild(td2);
  var inputElement3 = '<input id="filter3" type="search" onchange="filt(2)" >';
  td3.innerHTML = inputElement3;
  tr.appendChild(td3);
  table.appendChild(tr);
}
function filt(column)
{
  var table = document.getElementById('student-Informaton');
  var v1 = parseInt(document.getElementById("filter1").value);
  var v2 = document.getElementById("filter2").value;
  var v3 = document.getElementById("filter3").value;
  var rowCount = table.rows.length;
  for( var i = 1; i <= rowCount; i++ )
  {
    for ( var j = i; j < rowCount-1; j++ )
    {
        if( (v1  === parseInt(table.rows[j].cells[column].innerHTML)) || (v2  === table.rows[j].cells[column].innerHTML) || (v3  === table.rows[j].cells[column].innerHTML))
        {
            table.rows[j].style.display = table.rows[j];
            break;
        }
        else{
            table.rows[j].style.display = 'none';
        }
      }
    }
}
/* function for paging*/
function paging()
{
  var table = document.getElementById('student-Informaton');
  var count = table.rows.length;
  var noofrecs = count - 1;
  var recsperpage = 3;
  var pages = math.ceil(noofrecs / recsperpage);
  var currentPage = 0;
  function showRecs(from,to)
  {
    for (var i = 1; i < count; i++ )
    {
      if( i < from || i > to )
        table.rows[i].style.display = 'none';
      else {
        table.rows[i].style.display = table.rows[i];
      }
    }
    function showPage(pageNumber)
    {
      currentPage = pageNumber;
      var from = (pageNumber - 1) * recsperpage + 1;
      var to = from + recsperpage - 1;
      showRecs(from, to);
    }
    function prev()
    {
      if(currentPage > 1)
      {
        showPage(currentPage-1);
      }
    }
    function next()
    {
      if(currentPage < pages)
      {
        showPage(currentPage+1);
      }
    }
    function pagNav()
    {
      var pageDiv = document.getElementById('tableDiv');
      var pageHtml = '<span onclick="(new paging()).prev();""> &#171  </span> ';
        for (var page = 1; page <= pages; page++)
            pageHtml += '<span id="page' + page + '" onclick="(new paging()).showPage(' + page + ');"></span>  ';
        pageHtml += '<span onclick="(new paging()).next();" >  &#187;</span>';
        pageDiv.innerHTML = pageHtml;
    }
  }
}
