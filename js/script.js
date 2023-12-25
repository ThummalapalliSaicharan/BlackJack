let key = 1,key2=1;
let you,computer;
let d = 0, e = 0, f = 0, result = 0, result2 = 0, g, h, j = 0, k = 0, l = 0, m, n, o, p, q,r,x=0,st=0;
q = document.getElementById("sp");

function hit() {
  if (key <= 3) {
    you = Math.floor(Math.random() * 13 + 1);
    var a = document.createElement("img");
    a.src = "assets/" + you + ".png";
    var b = document.getElementById("d1");
    b.appendChild(a).style.height = "150px";
    b.appendChild(a).style.marginTop = "50px";
    b.appendChild(a).style.marginLeft = "90px";
   
  }
  st++;
  Count();
 
}
function Count() {

  if (you == 11) {
    you = 10;

  } else if (you == 12) {
    you = 10;

  } else if (you == 13) {
    you = 10;
  }



  if (key <= 3) {
    
    if (key == 1) {
      d = you + 0;
      result = d;
    }

    if (key == 2) {
      g.remove();
      e = d + you;
      result = e;
    }

    if (key == 3) {
      g.remove();
      f = e + you;
      result = f;
    }
 
    g = document.createElement("h2");
    g = document.createTextNode(result)
    h = document.getElementById("h2");
    h.appendChild(g);

    key++;

  }

}



function stand() {
  if (st >= 1)
    if (key > 0 && key <= 4) {
      for (let i = 1; i <= key - 1; i++) {
        computer = Math.floor(Math.random() * 13 + 1);
        var a = document.createElement("img");
        a.src = "assets/" + computer + ".png";
        var b = document.getElementById("d2");
        b.appendChild(a).style.height = "150px";
        b.appendChild(a).style.marginTop = "50px";
        b.appendChild(a).style.marginLeft = "90px";

        Count2();
    
      }

      key = 5;
      verify();
    }
}

function Count2() {
  if (computer == 11) {
    computer = 10;
  } else if (computer == 12) {
    computer = 10;
  } else if (computer == 13) {
    computer = 10;
  }

  if (key2 <= 3) {
    if (key2 == 1) {
      j = computer + 0;
      result2 = j;
    }

    if (key2 == 2) {
      m.remove();
      k = j + computer;
      result2 = k;
    }
          
     if (key2 == 3) {
       m.remove();
       l = k + computer;
       result2 = l;
     }

    m = document.createElement("h2");
    m = document.createTextNode(result2);
    n = document.getElementById("h3");
    n.appendChild(m);

    key2++;
  }
}

function verify() {
  
    if (result <= 21 && result2 > 21) {
      r = "You won";
    } else if (result <= 21 && result2 < result) {
      r = "You won";
    } else if (result2 <= 21 && result2 > result) {
      r = "computer won";
    } else if (result2 <= 21 && result > result2) {
      r = "computer won";
    }
    else if (result > 21 && result2 > result) {
      r = "computer won";
    }
    else if (result2 > 21 && result > result2) {
      r = "You won";
    }
    else if (result2 == 0 && result == 0) {
      r = "Press hit button";
    }
    else {
      r = "Draw";
    }
  if (x == 0) {
    q.remove();
    o = document.createElement("h2");
    o = document.createTextNode(r);
    p = document.getElementById("p");
    p.appendChild(o);
  }
  x++;
  }


   