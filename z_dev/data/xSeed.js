DbCrm = require("./../../src/model/DbCrm"); /*<-- solo hace conexion con la base de datos */


let xdata={
  "nombre": "david huerta",
  "nick": "davidh",
  "email": "david@productividadti.com.mx",
  "password": "$2a$04$/HlaxT2BP2gOL/myDlTVFOj1E2QyyF3jbpZLzYXKG4N4f3i93Qibm",
  "is_admin": true,
  "is_activo": true
};

let idUsuario="5d97ff8b66d6af1750e4e08d";


let lista=[
  {
    "nombre": "Brennan",
    "apaterno": "Maxwell",
    "amaterno": "Bond",
    "tel": "5556581111",
    "origen": "",
    "email1": "t2@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Cairo",
    "apaterno": "Newman",
    "amaterno": "Hayes",
    "tel": "5556581111",
    "origen": "",
    "email1": "t3@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Bert",
    "apaterno": "Patton",
    "amaterno": "Chase",
    "tel": "5556581111",
    "origen": "",
    "email1": "t4@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Jonas",
    "apaterno": "Velez",
    "amaterno": "Lester",
    "tel": "5556581111",
    "origen": "",
    "email1": "t5@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Brendan",
    "apaterno": "Solis",
    "amaterno": "Rocha",
    "tel": "5556581111",
    "origen": "",
    "email1": "t6@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Jaden",
    "apaterno": "Fields",
    "amaterno": "Glenn",
    "tel": "5556581111",
    "origen": "",
    "email1": "t7@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Nora",
    "apaterno": "Craft",
    "amaterno": "Hicks",
    "tel": "5556581111",
    "origen": "",
    "email1": "t8@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Tanek",
    "apaterno": "Sullivan",
    "amaterno": "Foley",
    "tel": "5556581111",
    "origen": "",
    "email1": "t9@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Bianca",
    "apaterno": "Manning",
    "amaterno": "Hendricks",
    "tel": "5556581111",
    "origen": "",
    "email1": "t10@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Carolyn",
    "apaterno": "Harvey",
    "amaterno": "Curtis",
    "tel": "5556581111",
    "origen": "",
    "email1": "t11@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Teagan",
    "apaterno": "Ellison",
    "amaterno": "Ewing",
    "tel": "5556581111",
    "origen": "",
    "email1": "t12@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Yolanda",
    "apaterno": "Contreras",
    "amaterno": "Morris",
    "tel": "5556581111",
    "origen": "",
    "email1": "t13@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Stephanie",
    "apaterno": "Bauer",
    "amaterno": "Gould",
    "tel": "5556581111",
    "origen": "",
    "email1": "t14@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Alden",
    "apaterno": "Kennedy",
    "amaterno": "Herrera",
    "tel": "5556581111",
    "origen": "",
    "email1": "t15@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Erich",
    "apaterno": "Juarez",
    "amaterno": "Freeman",
    "tel": "5556581111",
    "origen": "",
    "email1": "t16@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Wilma",
    "apaterno": "Callahan",
    "amaterno": "Ray",
    "tel": "5556581111",
    "origen": "",
    "email1": "t17@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Josiah",
    "apaterno": "Jennings",
    "amaterno": "Walter",
    "tel": "5556581111",
    "origen": "",
    "email1": "t18@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Donovan",
    "apaterno": "Gallegos",
    "amaterno": "Hendrix",
    "tel": "5556581111",
    "origen": "",
    "email1": "t19@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Jacqueline",
    "apaterno": "Hancock",
    "amaterno": "Pugh",
    "tel": "5556581111",
    "origen": "",
    "email1": "t20@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Quynn",
    "apaterno": "Porter",
    "amaterno": "Blake",
    "tel": "5556581111",
    "origen": "",
    "email1": "t21@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Eliana",
    "apaterno": "Cervantes",
    "amaterno": "Nichols",
    "tel": "5556581111",
    "origen": "",
    "email1": "t22@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Imani",
    "apaterno": "Flores",
    "amaterno": "Norris",
    "tel": "5556581111",
    "origen": "",
    "email1": "t23@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Harriet",
    "apaterno": "Randall",
    "amaterno": "Barron",
    "tel": "5556581111",
    "origen": "",
    "email1": "t24@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Dolan",
    "apaterno": "Mcneil",
    "amaterno": "Pope",
    "tel": "5556581111",
    "origen": "",
    "email1": "t25@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Hector",
    "apaterno": "Roman",
    "amaterno": "Sweet",
    "tel": "5556581111",
    "origen": "",
    "email1": "t26@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Riley",
    "apaterno": "Callahan",
    "amaterno": "Reilly",
    "tel": "5556581111",
    "origen": "",
    "email1": "t27@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Rinah",
    "apaterno": "Jimenez",
    "amaterno": "Jensen",
    "tel": "5556581111",
    "origen": "",
    "email1": "t28@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Orla",
    "apaterno": "Woods",
    "amaterno": "Albert",
    "tel": "5556581111",
    "origen": "",
    "email1": "t29@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Meredith",
    "apaterno": "Mccullough",
    "amaterno": "Jennings",
    "tel": "5556581111",
    "origen": "",
    "email1": "t30@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Cole",
    "apaterno": "Gould",
    "amaterno": "Frye",
    "tel": "5556581111",
    "origen": "",
    "email1": "t31@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Fulton",
    "apaterno": "Wells",
    "amaterno": "Shields",
    "tel": "5556581111",
    "origen": "",
    "email1": "t32@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Holly",
    "apaterno": "Gregory",
    "amaterno": "Davidson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t33@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Hunter",
    "apaterno": "Hancock",
    "amaterno": "Aguilar",
    "tel": "5556581111",
    "origen": "",
    "email1": "t34@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Merritt",
    "apaterno": "Parsons",
    "amaterno": "Bauer",
    "tel": "5556581111",
    "origen": "",
    "email1": "t35@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Rudyard",
    "apaterno": "Chase",
    "amaterno": "Fields",
    "tel": "5556581111",
    "origen": "",
    "email1": "t36@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Gil",
    "apaterno": "Anderson",
    "amaterno": "Colon",
    "tel": "5556581111",
    "origen": "",
    "email1": "t37@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Kareem",
    "apaterno": "Lang",
    "amaterno": "Underwood",
    "tel": "5556581111",
    "origen": "",
    "email1": "t38@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Echo",
    "apaterno": "Koch",
    "amaterno": "Juarez",
    "tel": "5556581111",
    "origen": "",
    "email1": "t39@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Hector",
    "apaterno": "Walton",
    "amaterno": "Meyers",
    "tel": "5556581111",
    "origen": "",
    "email1": "t40@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Baker",
    "apaterno": "Morrison",
    "amaterno": "Potter",
    "tel": "5556581111",
    "origen": "",
    "email1": "t41@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Porter",
    "apaterno": "Joyner",
    "amaterno": "Copeland",
    "tel": "5556581111",
    "origen": "",
    "email1": "t42@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Russell",
    "apaterno": "Pollard",
    "amaterno": "Hyde",
    "tel": "5556581111",
    "origen": "",
    "email1": "t43@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Brielle",
    "apaterno": "Lucas",
    "amaterno": "Drake",
    "tel": "5556581111",
    "origen": "",
    "email1": "t44@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Yoshio",
    "apaterno": "Singleton",
    "amaterno": "Hancock",
    "tel": "5556581111",
    "origen": "",
    "email1": "t45@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Aretha",
    "apaterno": "Freeman",
    "amaterno": "Branch",
    "tel": "5556581111",
    "origen": "",
    "email1": "t46@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Dustin",
    "apaterno": "Pollard",
    "amaterno": "Chandler",
    "tel": "5556581111",
    "origen": "",
    "email1": "t47@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Linus",
    "apaterno": "Beard",
    "amaterno": "Huffman",
    "tel": "5556581111",
    "origen": "",
    "email1": "t48@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Jolie",
    "apaterno": "Patton",
    "amaterno": "Rivas",
    "tel": "5556581111",
    "origen": "",
    "email1": "t49@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Dante",
    "apaterno": "Henson",
    "amaterno": "Burton",
    "tel": "5556581111",
    "origen": "",
    "email1": "t50@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Carson",
    "apaterno": "Branch",
    "amaterno": "Browning",
    "tel": "5556581111",
    "origen": "",
    "email1": "t51@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Meghan",
    "apaterno": "Sears",
    "amaterno": "Sanford",
    "tel": "5556581111",
    "origen": "",
    "email1": "t52@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Tatum",
    "apaterno": "Singleton",
    "amaterno": "Macias",
    "tel": "5556581111",
    "origen": "",
    "email1": "t53@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Anthony",
    "apaterno": "Nelson",
    "amaterno": "Matthews",
    "tel": "5556581111",
    "origen": "",
    "email1": "t54@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Chadwick",
    "apaterno": "Alston",
    "amaterno": "Mejia",
    "tel": "5556581111",
    "origen": "",
    "email1": "t55@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Mallory",
    "apaterno": "Larsen",
    "amaterno": "Bray",
    "tel": "5556581111",
    "origen": "",
    "email1": "t56@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Xerxes",
    "apaterno": "Estes",
    "amaterno": "Townsend",
    "tel": "5556581111",
    "origen": "",
    "email1": "t57@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Daquan",
    "apaterno": "Booth",
    "amaterno": "Hinton",
    "tel": "5556581111",
    "origen": "",
    "email1": "t58@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Raymond",
    "apaterno": "Long",
    "amaterno": "Mcgowan",
    "tel": "5556581111",
    "origen": "",
    "email1": "t59@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Aristotle",
    "apaterno": "Lamb",
    "amaterno": "Bowers",
    "tel": "5556581111",
    "origen": "",
    "email1": "t60@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Clark",
    "apaterno": "Bowers",
    "amaterno": "Juarez",
    "tel": "5556581111",
    "origen": "",
    "email1": "t61@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Bert",
    "apaterno": "Gardner",
    "amaterno": "Beard",
    "tel": "5556581111",
    "origen": "",
    "email1": "t62@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Preston",
    "apaterno": "Cruz",
    "amaterno": "Carpenter",
    "tel": "5556581111",
    "origen": "",
    "email1": "t63@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Jared",
    "apaterno": "Campbell",
    "amaterno": "Arnold",
    "tel": "5556581111",
    "origen": "",
    "email1": "t64@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Caesar",
    "apaterno": "Fernandez",
    "amaterno": "West",
    "tel": "5556581111",
    "origen": "",
    "email1": "t65@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "George",
    "apaterno": "Ward",
    "amaterno": "Thomas",
    "tel": "5556581111",
    "origen": "",
    "email1": "t66@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Maya",
    "apaterno": "Glenn",
    "amaterno": "Barnett",
    "tel": "5556581111",
    "origen": "",
    "email1": "t67@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Bo",
    "apaterno": "Hunter",
    "amaterno": "Williams",
    "tel": "5556581111",
    "origen": "",
    "email1": "t68@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Judith",
    "apaterno": "Hernandez",
    "amaterno": "Harding",
    "tel": "5556581111",
    "origen": "",
    "email1": "t69@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Wang",
    "apaterno": "Blankenship",
    "amaterno": "Booth",
    "tel": "5556581111",
    "origen": "",
    "email1": "t70@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Jamal",
    "apaterno": "Peterson",
    "amaterno": "Larsen",
    "tel": "5556581111",
    "origen": "",
    "email1": "t71@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Richard",
    "apaterno": "Richard",
    "amaterno": "Waller",
    "tel": "5556581111",
    "origen": "",
    "email1": "t72@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Angela",
    "apaterno": "Bradford",
    "amaterno": "Perkins",
    "tel": "5556581111",
    "origen": "",
    "email1": "t73@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Jameson",
    "apaterno": "Vargas",
    "amaterno": "Church",
    "tel": "5556581111",
    "origen": "",
    "email1": "t74@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Judah",
    "apaterno": "French",
    "amaterno": "Hogan",
    "tel": "5556581111",
    "origen": "",
    "email1": "t75@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Malachi",
    "apaterno": "Boone",
    "amaterno": "Lott",
    "tel": "5556581111",
    "origen": "",
    "email1": "t76@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Ila",
    "apaterno": "Estrada",
    "amaterno": "Kerr",
    "tel": "5556581111",
    "origen": "",
    "email1": "t77@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Helen",
    "apaterno": "Howard",
    "amaterno": "Boone",
    "tel": "5556581111",
    "origen": "",
    "email1": "t78@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Zoe",
    "apaterno": "Lawson",
    "amaterno": "Holder",
    "tel": "5556581111",
    "origen": "",
    "email1": "t79@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Maya",
    "apaterno": "Snyder",
    "amaterno": "Estes",
    "tel": "5556581111",
    "origen": "",
    "email1": "t80@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Merritt",
    "apaterno": "Shannon",
    "amaterno": "Simpson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t81@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Isaiah",
    "apaterno": "Foley",
    "amaterno": "Emerson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t82@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Slade",
    "apaterno": "Shannon",
    "amaterno": "Franklin",
    "tel": "5556581111",
    "origen": "",
    "email1": "t83@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Athena",
    "apaterno": "Farmer",
    "amaterno": "Pollard",
    "tel": "5556581111",
    "origen": "",
    "email1": "t84@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Thaddeus",
    "apaterno": "Lawson",
    "amaterno": "Rice",
    "tel": "5556581111",
    "origen": "",
    "email1": "t85@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Kieran",
    "apaterno": "Valdez",
    "amaterno": "Barron",
    "tel": "5556581111",
    "origen": "",
    "email1": "t86@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Jessamine",
    "apaterno": "Downs",
    "amaterno": "Palmer",
    "tel": "5556581111",
    "origen": "",
    "email1": "t87@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Dante",
    "apaterno": "Clark",
    "amaterno": "Dickerson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t88@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Moses",
    "apaterno": "Hinton",
    "amaterno": "Dillon",
    "tel": "5556581111",
    "origen": "",
    "email1": "t89@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Tucker",
    "apaterno": "Tran",
    "amaterno": "Anthony",
    "tel": "5556581111",
    "origen": "",
    "email1": "t90@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Alvin",
    "apaterno": "Herman",
    "amaterno": "Mcconnell",
    "tel": "5556581111",
    "origen": "",
    "email1": "t91@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Francis",
    "apaterno": "Shannon",
    "amaterno": "Robles",
    "tel": "5556581111",
    "origen": "",
    "email1": "t92@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Isabella",
    "apaterno": "Duran",
    "amaterno": "Bauer",
    "tel": "5556581111",
    "origen": "",
    "email1": "t93@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Haley",
    "apaterno": "Colon",
    "amaterno": "Freeman",
    "tel": "5556581111",
    "origen": "",
    "email1": "t94@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Alexandra",
    "apaterno": "Pittman",
    "amaterno": "Carlson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t95@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Silas",
    "apaterno": "Green",
    "amaterno": "Joyner",
    "tel": "5556581111",
    "origen": "",
    "email1": "t96@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Merrill",
    "apaterno": "Hyde",
    "amaterno": "Ballard",
    "tel": "5556581111",
    "origen": "",
    "email1": "t97@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Deanna",
    "apaterno": "Underwood",
    "amaterno": "Herman",
    "tel": "5556581111",
    "origen": "",
    "email1": "t98@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Indira",
    "apaterno": "Sexton",
    "amaterno": "Velazquez",
    "tel": "5556581111",
    "origen": "",
    "email1": "t99@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Branden",
    "apaterno": "Waller",
    "amaterno": "Barrera",
    "tel": "5556581111",
    "origen": "",
    "email1": "t100@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Amber",
    "apaterno": "Palmer",
    "amaterno": "David",
    "tel": "5556581111",
    "origen": "",
    "email1": "t101@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Gary",
    "apaterno": "Mccray",
    "amaterno": "Walton",
    "tel": "5556581111",
    "origen": "",
    "email1": "t102@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Brian",
    "apaterno": "Henry",
    "amaterno": "Sharp",
    "tel": "5556581111",
    "origen": "",
    "email1": "t103@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Fiona",
    "apaterno": "Beach",
    "amaterno": "Hatfield",
    "tel": "5556581111",
    "origen": "",
    "email1": "t104@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Basil",
    "apaterno": "Buck",
    "amaterno": "Peterson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t105@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Slade",
    "apaterno": "Gardner",
    "amaterno": "Abbott",
    "tel": "5556581111",
    "origen": "",
    "email1": "t106@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Hayden",
    "apaterno": "Richmond",
    "amaterno": "Velasquez",
    "tel": "5556581111",
    "origen": "",
    "email1": "t107@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Hunter",
    "apaterno": "Hughes",
    "amaterno": "Hancock",
    "tel": "5556581111",
    "origen": "",
    "email1": "t108@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Anne",
    "apaterno": "Calderon",
    "amaterno": "Dyer",
    "tel": "5556581111",
    "origen": "",
    "email1": "t109@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Georgia",
    "apaterno": "Paul",
    "amaterno": "Parsons",
    "tel": "5556581111",
    "origen": "",
    "email1": "t110@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Hiram",
    "apaterno": "England",
    "amaterno": "Green",
    "tel": "5556581111",
    "origen": "",
    "email1": "t111@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Victor",
    "apaterno": "Ray",
    "amaterno": "Avery",
    "tel": "5556581111",
    "origen": "",
    "email1": "t112@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Brody",
    "apaterno": "Rocha",
    "amaterno": "Mckee",
    "tel": "5556581111",
    "origen": "",
    "email1": "t113@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Maxwell",
    "apaterno": "Arnold",
    "amaterno": "Hancock",
    "tel": "5556581111",
    "origen": "",
    "email1": "t114@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Dillon",
    "apaterno": "Hutchinson",
    "amaterno": "Hawkins",
    "tel": "5556581111",
    "origen": "",
    "email1": "t115@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Alexis",
    "apaterno": "Morris",
    "amaterno": "Odonnell",
    "tel": "5556581111",
    "origen": "",
    "email1": "t116@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Ray",
    "apaterno": "Church",
    "amaterno": "Oconnor",
    "tel": "5556581111",
    "origen": "",
    "email1": "t117@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Alisa",
    "apaterno": "Meyers",
    "amaterno": "Blevins",
    "tel": "5556581111",
    "origen": "",
    "email1": "t118@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Rashad",
    "apaterno": "Ortega",
    "amaterno": "Brooks",
    "tel": "5556581111",
    "origen": "",
    "email1": "t119@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Jonas",
    "apaterno": "Perkins",
    "amaterno": "Maxwell",
    "tel": "5556581111",
    "origen": "",
    "email1": "t120@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Lucian",
    "apaterno": "Barron",
    "amaterno": "Davenport",
    "tel": "5556581111",
    "origen": "",
    "email1": "t121@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Iona",
    "apaterno": "Winters",
    "amaterno": "Marquez",
    "tel": "5556581111",
    "origen": "",
    "email1": "t122@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Buckminster",
    "apaterno": "Lara",
    "amaterno": "Lloyd",
    "tel": "5556581111",
    "origen": "",
    "email1": "t123@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Hashim",
    "apaterno": "Nichols",
    "amaterno": "Hartman",
    "tel": "5556581111",
    "origen": "",
    "email1": "t124@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Noel",
    "apaterno": "Gamble",
    "amaterno": "Ryan",
    "tel": "5556581111",
    "origen": "",
    "email1": "t125@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Emerald",
    "apaterno": "Torres",
    "amaterno": "Vaughn",
    "tel": "5556581111",
    "origen": "",
    "email1": "t126@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Portia",
    "apaterno": "Madden",
    "amaterno": "Shannon",
    "tel": "5556581111",
    "origen": "",
    "email1": "t127@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Quintessa",
    "apaterno": "Macdonald",
    "amaterno": "Palmer",
    "tel": "5556581111",
    "origen": "",
    "email1": "t128@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Cody",
    "apaterno": "Barnett",
    "amaterno": "Ortega",
    "tel": "5556581111",
    "origen": "",
    "email1": "t129@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Ethan",
    "apaterno": "Avery",
    "amaterno": "Barrett",
    "tel": "5556581111",
    "origen": "",
    "email1": "t130@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Boris",
    "apaterno": "Townsend",
    "amaterno": "Cruz",
    "tel": "5556581111",
    "origen": "",
    "email1": "t131@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Doris",
    "apaterno": "Watkins",
    "amaterno": "Lamb",
    "tel": "5556581111",
    "origen": "",
    "email1": "t132@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Joseph",
    "apaterno": "Schroeder",
    "amaterno": "Wells",
    "tel": "5556581111",
    "origen": "",
    "email1": "t133@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Rhona",
    "apaterno": "Gould",
    "amaterno": "Daniels",
    "tel": "5556581111",
    "origen": "",
    "email1": "t134@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Ian",
    "apaterno": "Knight",
    "amaterno": "Solis",
    "tel": "5556581111",
    "origen": "",
    "email1": "t135@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Cooper",
    "apaterno": "Sykes",
    "amaterno": "Patel",
    "tel": "5556581111",
    "origen": "",
    "email1": "t136@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Courtney",
    "apaterno": "Walter",
    "amaterno": "Valdez",
    "tel": "5556581111",
    "origen": "",
    "email1": "t137@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Alyssa",
    "apaterno": "Lester",
    "amaterno": "Pollard",
    "tel": "5556581111",
    "origen": "",
    "email1": "t138@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Christine",
    "apaterno": "Wilder",
    "amaterno": "French",
    "tel": "5556581111",
    "origen": "",
    "email1": "t139@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Lucas",
    "apaterno": "Blevins",
    "amaterno": "Kane",
    "tel": "5556581111",
    "origen": "",
    "email1": "t140@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Keiko",
    "apaterno": "Williams",
    "amaterno": "Conway",
    "tel": "5556581111",
    "origen": "",
    "email1": "t141@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Quentin",
    "apaterno": "Cote",
    "amaterno": "Clements",
    "tel": "5556581111",
    "origen": "",
    "email1": "t142@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Lois",
    "apaterno": "Burns",
    "amaterno": "Mccullough",
    "tel": "5556581111",
    "origen": "",
    "email1": "t143@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Deirdre",
    "apaterno": "Cleveland",
    "amaterno": "Carey",
    "tel": "5556581111",
    "origen": "",
    "email1": "t144@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Nathan",
    "apaterno": "Church",
    "amaterno": "Morris",
    "tel": "5556581111",
    "origen": "",
    "email1": "t145@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Kerry",
    "apaterno": "Woods",
    "amaterno": "Tyler",
    "tel": "5556581111",
    "origen": "",
    "email1": "t146@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Lila",
    "apaterno": "Combs",
    "amaterno": "Grimes",
    "tel": "5556581111",
    "origen": "",
    "email1": "t147@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Alexandra",
    "apaterno": "Barron",
    "amaterno": "Kerr",
    "tel": "5556581111",
    "origen": "",
    "email1": "t148@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Sara",
    "apaterno": "Carey",
    "amaterno": "Olson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t149@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Sheila",
    "apaterno": "Santos",
    "amaterno": "Ward",
    "tel": "5556581111",
    "origen": "",
    "email1": "t150@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Roary",
    "apaterno": "Davidson",
    "amaterno": "Roth",
    "tel": "5556581111",
    "origen": "",
    "email1": "t151@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Ila",
    "apaterno": "Velasquez",
    "amaterno": "Fitzpatrick",
    "tel": "5556581111",
    "origen": "",
    "email1": "t152@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Mark",
    "apaterno": "Haley",
    "amaterno": "Villarreal",
    "tel": "5556581111",
    "origen": "",
    "email1": "t153@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Magee",
    "apaterno": "Riggs",
    "amaterno": "Bradford",
    "tel": "5556581111",
    "origen": "",
    "email1": "t154@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Otto",
    "apaterno": "Robbins",
    "amaterno": "Huff",
    "tel": "5556581111",
    "origen": "",
    "email1": "t155@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Ali",
    "apaterno": "Dennis",
    "amaterno": "Dunn",
    "tel": "5556581111",
    "origen": "",
    "email1": "t156@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Eden",
    "apaterno": "Walton",
    "amaterno": "Lawrence",
    "tel": "5556581111",
    "origen": "",
    "email1": "t157@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Hoyt",
    "apaterno": "Giles",
    "amaterno": "Sexton",
    "tel": "5556581111",
    "origen": "",
    "email1": "t158@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Jack",
    "apaterno": "Crosby",
    "amaterno": "Townsend",
    "tel": "5556581111",
    "origen": "",
    "email1": "t159@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Jacob",
    "apaterno": "Sandoval",
    "amaterno": "Anderson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t160@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Xena",
    "apaterno": "Shepard",
    "amaterno": "Brady",
    "tel": "5556581111",
    "origen": "",
    "email1": "t161@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Jerry",
    "apaterno": "Rosa",
    "amaterno": "Marquez",
    "tel": "5556581111",
    "origen": "",
    "email1": "t162@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Ira",
    "apaterno": "Hogan",
    "amaterno": "Gilmore",
    "tel": "5556581111",
    "origen": "",
    "email1": "t163@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Hamilton",
    "apaterno": "Grimes",
    "amaterno": "Norton",
    "tel": "5556581111",
    "origen": "",
    "email1": "t164@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Taylor",
    "apaterno": "Bush",
    "amaterno": "Boyd",
    "tel": "5556581111",
    "origen": "",
    "email1": "t165@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Anne",
    "apaterno": "Wood",
    "amaterno": "Solis",
    "tel": "5556581111",
    "origen": "",
    "email1": "t166@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Fredericka",
    "apaterno": "Watkins",
    "amaterno": "Watkins",
    "tel": "5556581111",
    "origen": "",
    "email1": "t167@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Dane",
    "apaterno": "Randolph",
    "amaterno": "Hughes",
    "tel": "5556581111",
    "origen": "",
    "email1": "t168@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Logan",
    "apaterno": "Curtis",
    "amaterno": "Zamora",
    "tel": "5556581111",
    "origen": "",
    "email1": "t169@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Amaya",
    "apaterno": "Freeman",
    "amaterno": "Santos",
    "tel": "5556581111",
    "origen": "",
    "email1": "t170@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Cyrus",
    "apaterno": "Patton",
    "amaterno": "Torres",
    "tel": "5556581111",
    "origen": "",
    "email1": "t171@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Nicholas",
    "apaterno": "Pugh",
    "amaterno": "Young",
    "tel": "5556581111",
    "origen": "",
    "email1": "t172@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Camden",
    "apaterno": "Fitzpatrick",
    "amaterno": "Haley",
    "tel": "5556581111",
    "origen": "",
    "email1": "t173@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Kalia",
    "apaterno": "Villarreal",
    "amaterno": "Wade",
    "tel": "5556581111",
    "origen": "",
    "email1": "t174@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Darryl",
    "apaterno": "Mcconnell",
    "amaterno": "Schneider",
    "tel": "5556581111",
    "origen": "",
    "email1": "t175@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Chaim",
    "apaterno": "Gardner",
    "amaterno": "Callahan",
    "tel": "5556581111",
    "origen": "",
    "email1": "t176@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Phelan",
    "apaterno": "Manning",
    "amaterno": "Snyder",
    "tel": "5556581111",
    "origen": "",
    "email1": "t177@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Gemma",
    "apaterno": "Davenport",
    "amaterno": "Shannon",
    "tel": "5556581111",
    "origen": "",
    "email1": "t178@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Emerson",
    "apaterno": "Lambert",
    "amaterno": "Wilkinson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t179@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Lee",
    "apaterno": "Nguyen",
    "amaterno": "Swanson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t180@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Morgan",
    "apaterno": "Sharp",
    "amaterno": "Paul",
    "tel": "5556581111",
    "origen": "",
    "email1": "t181@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Charissa",
    "apaterno": "Collins",
    "amaterno": "Massey",
    "tel": "5556581111",
    "origen": "",
    "email1": "t182@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Urielle",
    "apaterno": "Lee",
    "amaterno": "Trujillo",
    "tel": "5556581111",
    "origen": "",
    "email1": "t183@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Bradley",
    "apaterno": "Grant",
    "amaterno": "Wooten",
    "tel": "5556581111",
    "origen": "",
    "email1": "t184@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Eric",
    "apaterno": "Cruz",
    "amaterno": "Mann",
    "tel": "5556581111",
    "origen": "",
    "email1": "t185@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Tobias",
    "apaterno": "Young",
    "amaterno": "Kelly",
    "tel": "5556581111",
    "origen": "",
    "email1": "t186@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Silas",
    "apaterno": "Rowe",
    "amaterno": "Monroe",
    "tel": "5556581111",
    "origen": "",
    "email1": "t187@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Carl",
    "apaterno": "Rowe",
    "amaterno": "Stephens",
    "tel": "5556581111",
    "origen": "",
    "email1": "t188@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Kiayada",
    "apaterno": "Workman",
    "amaterno": "Pollard",
    "tel": "5556581111",
    "origen": "",
    "email1": "t189@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Ivor",
    "apaterno": "Medina",
    "amaterno": "Kennedy",
    "tel": "5556581111",
    "origen": "",
    "email1": "t190@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Donna",
    "apaterno": "Herman",
    "amaterno": "Becker",
    "tel": "5556581111",
    "origen": "",
    "email1": "t191@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Jessica",
    "apaterno": "Mullen",
    "amaterno": "Bond",
    "tel": "5556581111",
    "origen": "",
    "email1": "t192@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Akeem",
    "apaterno": "Garza",
    "amaterno": "Ferguson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t193@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Jane",
    "apaterno": "Noel",
    "amaterno": "Cash",
    "tel": "5556581111",
    "origen": "",
    "email1": "t194@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Quincy",
    "apaterno": "Lowe",
    "amaterno": "Lawson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t195@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Ignatius",
    "apaterno": "Marquez",
    "amaterno": "Barr",
    "tel": "5556581111",
    "origen": "",
    "email1": "t196@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Isabelle",
    "apaterno": "Wyatt",
    "amaterno": "Kirby",
    "tel": "5556581111",
    "origen": "",
    "email1": "t197@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Curran",
    "apaterno": "Harrington",
    "amaterno": "Burks",
    "tel": "5556581111",
    "origen": "",
    "email1": "t198@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Aurelia",
    "apaterno": "Knowles",
    "amaterno": "Estrada",
    "tel": "5556581111",
    "origen": "",
    "email1": "t199@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Garrison",
    "apaterno": "Hatfield",
    "amaterno": "Robbins",
    "tel": "5556581111",
    "origen": "",
    "email1": "t200@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Blake",
    "apaterno": "Battle",
    "amaterno": "Howard",
    "tel": "5556581111",
    "origen": "",
    "email1": "t201@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Jermaine",
    "apaterno": "Kane",
    "amaterno": "Nguyen",
    "tel": "5556581111",
    "origen": "",
    "email1": "t202@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Thane",
    "apaterno": "Becker",
    "amaterno": "Richmond",
    "tel": "5556581111",
    "origen": "",
    "email1": "t203@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Kendall",
    "apaterno": "Decker",
    "amaterno": "Riggs",
    "tel": "5556581111",
    "origen": "",
    "email1": "t204@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Porter",
    "apaterno": "Clements",
    "amaterno": "Singleton",
    "tel": "5556581111",
    "origen": "",
    "email1": "t205@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Quinn",
    "apaterno": "Stewart",
    "amaterno": "Randall",
    "tel": "5556581111",
    "origen": "",
    "email1": "t206@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Thaddeus",
    "apaterno": "Keller",
    "amaterno": "Irwin",
    "tel": "5556581111",
    "origen": "",
    "email1": "t207@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Christine",
    "apaterno": "Frederick",
    "amaterno": "Keller",
    "tel": "5556581111",
    "origen": "",
    "email1": "t208@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Amery",
    "apaterno": "Bauer",
    "amaterno": "Woods",
    "tel": "5556581111",
    "origen": "",
    "email1": "t209@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Brenna",
    "apaterno": "Blevins",
    "amaterno": "English",
    "tel": "5556581111",
    "origen": "",
    "email1": "t210@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Nadine",
    "apaterno": "Nunez",
    "amaterno": "Santos",
    "tel": "5556581111",
    "origen": "",
    "email1": "t211@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Leila",
    "apaterno": "Dalton",
    "amaterno": "Willis",
    "tel": "5556581111",
    "origen": "",
    "email1": "t212@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Michelle",
    "apaterno": "Levy",
    "amaterno": "Snow",
    "tel": "5556581111",
    "origen": "",
    "email1": "t213@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Benjamin",
    "apaterno": "Chaney",
    "amaterno": "Mcleod",
    "tel": "5556581111",
    "origen": "",
    "email1": "t214@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Hope",
    "apaterno": "Schultz",
    "amaterno": "Roach",
    "tel": "5556581111",
    "origen": "",
    "email1": "t215@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Jerome",
    "apaterno": "Warner",
    "amaterno": "Mckay",
    "tel": "5556581111",
    "origen": "",
    "email1": "t216@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Chiquita",
    "apaterno": "Melendez",
    "amaterno": "Hunter",
    "tel": "5556581111",
    "origen": "",
    "email1": "t217@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Kermit",
    "apaterno": "Conway",
    "amaterno": "Zimmerman",
    "tel": "5556581111",
    "origen": "",
    "email1": "t218@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Vera",
    "apaterno": "Curtis",
    "amaterno": "Melendez",
    "tel": "5556581111",
    "origen": "",
    "email1": "t219@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Abbot",
    "apaterno": "Patel",
    "amaterno": "Nichols",
    "tel": "5556581111",
    "origen": "",
    "email1": "t220@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Ivy",
    "apaterno": "Nash",
    "amaterno": "Hancock",
    "tel": "5556581111",
    "origen": "",
    "email1": "t221@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Mechelle",
    "apaterno": "Zimmerman",
    "amaterno": "Henderson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t222@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Leslie",
    "apaterno": "Powell",
    "amaterno": "Burns",
    "tel": "5556581111",
    "origen": "",
    "email1": "t223@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Jillian",
    "apaterno": "Byrd",
    "amaterno": "Cleveland",
    "tel": "5556581111",
    "origen": "",
    "email1": "t224@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Kerry",
    "apaterno": "Warren",
    "amaterno": "Velez",
    "tel": "5556581111",
    "origen": "",
    "email1": "t225@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Trevor",
    "apaterno": "Roth",
    "amaterno": "Sweeney",
    "tel": "5556581111",
    "origen": "",
    "email1": "t226@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Angelica",
    "apaterno": "Eaton",
    "amaterno": "Sawyer",
    "tel": "5556581111",
    "origen": "",
    "email1": "t227@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Channing",
    "apaterno": "Rios",
    "amaterno": "Warner",
    "tel": "5556581111",
    "origen": "",
    "email1": "t228@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Silas",
    "apaterno": "English",
    "amaterno": "Rios",
    "tel": "5556581111",
    "origen": "",
    "email1": "t229@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Keefe",
    "apaterno": "Sanford",
    "amaterno": "Giles",
    "tel": "5556581111",
    "origen": "",
    "email1": "t230@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Regina",
    "apaterno": "White",
    "amaterno": "Craft",
    "tel": "5556581111",
    "origen": "",
    "email1": "t231@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Paki",
    "apaterno": "Huff",
    "amaterno": "Bell",
    "tel": "5556581111",
    "origen": "",
    "email1": "t232@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Charlotte",
    "apaterno": "Gregory",
    "amaterno": "Patton",
    "tel": "5556581111",
    "origen": "",
    "email1": "t233@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Yasir",
    "apaterno": "Contreras",
    "amaterno": "Workman",
    "tel": "5556581111",
    "origen": "",
    "email1": "t234@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Allen",
    "apaterno": "Golden",
    "amaterno": "Nguyen",
    "tel": "5556581111",
    "origen": "",
    "email1": "t235@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Kevin",
    "apaterno": "Palmer",
    "amaterno": "Wyatt",
    "tel": "5556581111",
    "origen": "",
    "email1": "t236@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Maia",
    "apaterno": "Hendrix",
    "amaterno": "Patton",
    "tel": "5556581111",
    "origen": "",
    "email1": "t237@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Rhiannon",
    "apaterno": "Duffy",
    "amaterno": "Hernandez",
    "tel": "5556581111",
    "origen": "",
    "email1": "t238@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Finn",
    "apaterno": "Lester",
    "amaterno": "Tanner",
    "tel": "5556581111",
    "origen": "",
    "email1": "t239@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Daniel",
    "apaterno": "Santos",
    "amaterno": "Webster",
    "tel": "5556581111",
    "origen": "",
    "email1": "t240@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Dante",
    "apaterno": "Baxter",
    "amaterno": "Church",
    "tel": "5556581111",
    "origen": "",
    "email1": "t241@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Tana",
    "apaterno": "Kelly",
    "amaterno": "Nguyen",
    "tel": "5556581111",
    "origen": "",
    "email1": "t242@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Maxwell",
    "apaterno": "Hartman",
    "amaterno": "Hewitt",
    "tel": "5556581111",
    "origen": "",
    "email1": "t243@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Athena",
    "apaterno": "Pruitt",
    "amaterno": "Cruz",
    "tel": "5556581111",
    "origen": "",
    "email1": "t244@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Catherine",
    "apaterno": "David",
    "amaterno": "Campbell",
    "tel": "5556581111",
    "origen": "",
    "email1": "t245@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Ferdinand",
    "apaterno": "Leonard",
    "amaterno": "Carney",
    "tel": "5556581111",
    "origen": "",
    "email1": "t246@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Cassidy",
    "apaterno": "Grimes",
    "amaterno": "Reid",
    "tel": "5556581111",
    "origen": "",
    "email1": "t247@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Laith",
    "apaterno": "Carlson",
    "amaterno": "Hanson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t248@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Kylynn",
    "apaterno": "Gould",
    "amaterno": "Beach",
    "tel": "5556581111",
    "origen": "",
    "email1": "t249@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Mia",
    "apaterno": "Garcia",
    "amaterno": "Santos",
    "tel": "5556581111",
    "origen": "",
    "email1": "t250@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Elijah",
    "apaterno": "Hancock",
    "amaterno": "Chase",
    "tel": "5556581111",
    "origen": "",
    "email1": "t251@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Jeremy",
    "apaterno": "Trujillo",
    "amaterno": "Slater",
    "tel": "5556581111",
    "origen": "",
    "email1": "t252@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Hamish",
    "apaterno": "Kirby",
    "amaterno": "Dennis",
    "tel": "5556581111",
    "origen": "",
    "email1": "t253@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Seth",
    "apaterno": "Sykes",
    "amaterno": "Dejesus",
    "tel": "5556581111",
    "origen": "",
    "email1": "t254@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Tatiana",
    "apaterno": "Nguyen",
    "amaterno": "Hebert",
    "tel": "5556581111",
    "origen": "",
    "email1": "t255@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Emery",
    "apaterno": "Oconnor",
    "amaterno": "Wilder",
    "tel": "5556581111",
    "origen": "",
    "email1": "t256@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Leila",
    "apaterno": "Gray",
    "amaterno": "Roman",
    "tel": "5556581111",
    "origen": "",
    "email1": "t257@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Dara",
    "apaterno": "Thomas",
    "amaterno": "Combs",
    "tel": "5556581111",
    "origen": "",
    "email1": "t258@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Beau",
    "apaterno": "Nichols",
    "amaterno": "Callahan",
    "tel": "5556581111",
    "origen": "",
    "email1": "t259@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Clio",
    "apaterno": "Joseph",
    "amaterno": "Cote",
    "tel": "5556581111",
    "origen": "",
    "email1": "t260@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Mariam",
    "apaterno": "Jensen",
    "amaterno": "Manning",
    "tel": "5556581111",
    "origen": "",
    "email1": "t261@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Magee",
    "apaterno": "Cash",
    "amaterno": "Blankenship",
    "tel": "5556581111",
    "origen": "",
    "email1": "t262@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Dustin",
    "apaterno": "Schneider",
    "amaterno": "Simpson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t263@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Evangeline",
    "apaterno": "Zamora",
    "amaterno": "Nelson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t264@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Honorato",
    "apaterno": "Vaughn",
    "amaterno": "Kramer",
    "tel": "5556581111",
    "origen": "",
    "email1": "t265@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Price",
    "apaterno": "Peterson",
    "amaterno": "Cobb",
    "tel": "5556581111",
    "origen": "",
    "email1": "t266@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Lester",
    "apaterno": "Mercado",
    "amaterno": "Chandler",
    "tel": "5556581111",
    "origen": "",
    "email1": "t267@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Curran",
    "apaterno": "Franklin",
    "amaterno": "Lara",
    "tel": "5556581111",
    "origen": "",
    "email1": "t268@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Lilah",
    "apaterno": "Juarez",
    "amaterno": "Rowe",
    "tel": "5556581111",
    "origen": "",
    "email1": "t269@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Zahir",
    "apaterno": "Knowles",
    "amaterno": "Gould",
    "tel": "5556581111",
    "origen": "",
    "email1": "t270@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Camille",
    "apaterno": "Ewing",
    "amaterno": "Powell",
    "tel": "5556581111",
    "origen": "",
    "email1": "t271@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Yael",
    "apaterno": "Mccullough",
    "amaterno": "Sykes",
    "tel": "5556581111",
    "origen": "",
    "email1": "t272@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Imani",
    "apaterno": "Kerr",
    "amaterno": "Gamble",
    "tel": "5556581111",
    "origen": "",
    "email1": "t273@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Norman",
    "apaterno": "Hays",
    "amaterno": "Berg",
    "tel": "5556581111",
    "origen": "",
    "email1": "t274@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Elmo",
    "apaterno": "Contreras",
    "amaterno": "Paul",
    "tel": "5556581111",
    "origen": "",
    "email1": "t275@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Jerry",
    "apaterno": "Brooks",
    "amaterno": "Potts",
    "tel": "5556581111",
    "origen": "",
    "email1": "t276@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Branden",
    "apaterno": "Hayes",
    "amaterno": "Hogan",
    "tel": "5556581111",
    "origen": "",
    "email1": "t277@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Adam",
    "apaterno": "Haney",
    "amaterno": "Mcdaniel",
    "tel": "5556581111",
    "origen": "",
    "email1": "t278@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Stephanie",
    "apaterno": "Hendricks",
    "amaterno": "Bauer",
    "tel": "5556581111",
    "origen": "",
    "email1": "t279@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Cooper",
    "apaterno": "Cobb",
    "amaterno": "Stewart",
    "tel": "5556581111",
    "origen": "",
    "email1": "t280@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Jessamine",
    "apaterno": "Hewitt",
    "amaterno": "Cleveland",
    "tel": "5556581111",
    "origen": "",
    "email1": "t281@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Gay",
    "apaterno": "Foreman",
    "amaterno": "Madden",
    "tel": "5556581111",
    "origen": "",
    "email1": "t282@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Macon",
    "apaterno": "Blake",
    "amaterno": "Dillon",
    "tel": "5556581111",
    "origen": "",
    "email1": "t283@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Kamal",
    "apaterno": "Bell",
    "amaterno": "Booker",
    "tel": "5556581111",
    "origen": "",
    "email1": "t284@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Emery",
    "apaterno": "Booth",
    "amaterno": "Oneill",
    "tel": "5556581111",
    "origen": "",
    "email1": "t285@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Knox",
    "apaterno": "Cabrera",
    "amaterno": "Mullen",
    "tel": "5556581111",
    "origen": "",
    "email1": "t286@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Brynn",
    "apaterno": "Wise",
    "amaterno": "Knight",
    "tel": "5556581111",
    "origen": "",
    "email1": "t287@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Shaeleigh",
    "apaterno": "Matthews",
    "amaterno": "Pruitt",
    "tel": "5556581111",
    "origen": "",
    "email1": "t288@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Clare",
    "apaterno": "Taylor",
    "amaterno": "Kennedy",
    "tel": "5556581111",
    "origen": "",
    "email1": "t289@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Dakota",
    "apaterno": "Frye",
    "amaterno": "Flores",
    "tel": "5556581111",
    "origen": "",
    "email1": "t290@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Alyssa",
    "apaterno": "Lucas",
    "amaterno": "Herman",
    "tel": "5556581111",
    "origen": "",
    "email1": "t291@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Heather",
    "apaterno": "Rice",
    "amaterno": "Cote",
    "tel": "5556581111",
    "origen": "",
    "email1": "t292@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Rina",
    "apaterno": "Morris",
    "amaterno": "Warren",
    "tel": "5556581111",
    "origen": "",
    "email1": "t293@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Eaton",
    "apaterno": "Whitfield",
    "amaterno": "Elliott",
    "tel": "5556581111",
    "origen": "",
    "email1": "t294@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Kelsie",
    "apaterno": "Burton",
    "amaterno": "Clayton",
    "tel": "5556581111",
    "origen": "",
    "email1": "t295@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Isabella",
    "apaterno": "Pollard",
    "amaterno": "Alvarado",
    "tel": "5556581111",
    "origen": "",
    "email1": "t296@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Holly",
    "apaterno": "Mcleod",
    "amaterno": "Sloan",
    "tel": "5556581111",
    "origen": "",
    "email1": "t297@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Jasper",
    "apaterno": "Parrish",
    "amaterno": "Alston",
    "tel": "5556581111",
    "origen": "",
    "email1": "t298@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Molly",
    "apaterno": "Aguilar",
    "amaterno": "Glenn",
    "tel": "5556581111",
    "origen": "",
    "email1": "t299@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Ira",
    "apaterno": "Solomon",
    "amaterno": "Rosario",
    "tel": "5556581111",
    "origen": "",
    "email1": "t300@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Lenore",
    "apaterno": "Macdonald",
    "amaterno": "Blevins",
    "tel": "5556581111",
    "origen": "",
    "email1": "t301@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Faith",
    "apaterno": "Pope",
    "amaterno": "Chambers",
    "tel": "5556581111",
    "origen": "",
    "email1": "t302@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Kitra",
    "apaterno": "Barr",
    "amaterno": "Sandoval",
    "tel": "5556581111",
    "origen": "",
    "email1": "t303@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Lareina",
    "apaterno": "Fernandez",
    "amaterno": "Rivas",
    "tel": "5556581111",
    "origen": "",
    "email1": "t304@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Vance",
    "apaterno": "Patton",
    "amaterno": "Kidd",
    "tel": "5556581111",
    "origen": "",
    "email1": "t305@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Haviva",
    "apaterno": "Freeman",
    "amaterno": "Mason",
    "tel": "5556581111",
    "origen": "",
    "email1": "t306@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Elizabeth",
    "apaterno": "Mann",
    "amaterno": "Garner",
    "tel": "5556581111",
    "origen": "",
    "email1": "t307@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Lester",
    "apaterno": "Cote",
    "amaterno": "Andrews",
    "tel": "5556581111",
    "origen": "",
    "email1": "t308@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Tallulah",
    "apaterno": "Dickerson",
    "amaterno": "Peck",
    "tel": "5556581111",
    "origen": "",
    "email1": "t309@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Tyrone",
    "apaterno": "Franco",
    "amaterno": "Manning",
    "tel": "5556581111",
    "origen": "",
    "email1": "t310@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Audra",
    "apaterno": "Dillon",
    "amaterno": "Hartman",
    "tel": "5556581111",
    "origen": "",
    "email1": "t311@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Fatima",
    "apaterno": "Coleman",
    "amaterno": "Calderon",
    "tel": "5556581111",
    "origen": "",
    "email1": "t312@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Isadora",
    "apaterno": "Wilkerson",
    "amaterno": "Owens",
    "tel": "5556581111",
    "origen": "",
    "email1": "t313@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Ginger",
    "apaterno": "Vinson",
    "amaterno": "Bush",
    "tel": "5556581111",
    "origen": "",
    "email1": "t314@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Ferdinand",
    "apaterno": "Stephens",
    "amaterno": "Chaney",
    "tel": "5556581111",
    "origen": "",
    "email1": "t315@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Candace",
    "apaterno": "Monroe",
    "amaterno": "Shepard",
    "tel": "5556581111",
    "origen": "",
    "email1": "t316@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Ishmael",
    "apaterno": "Kirby",
    "amaterno": "Lott",
    "tel": "5556581111",
    "origen": "",
    "email1": "t317@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Jana",
    "apaterno": "Nguyen",
    "amaterno": "Watkins",
    "tel": "5556581111",
    "origen": "",
    "email1": "t318@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Isaiah",
    "apaterno": "Gill",
    "amaterno": "Tran",
    "tel": "5556581111",
    "origen": "",
    "email1": "t319@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Gay",
    "apaterno": "Garner",
    "amaterno": "Schroeder",
    "tel": "5556581111",
    "origen": "",
    "email1": "t320@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Finn",
    "apaterno": "Franklin",
    "amaterno": "Contreras",
    "tel": "5556581111",
    "origen": "",
    "email1": "t321@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Hector",
    "apaterno": "Hammond",
    "amaterno": "Collier",
    "tel": "5556581111",
    "origen": "",
    "email1": "t322@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Lillian",
    "apaterno": "Anthony",
    "amaterno": "Baxter",
    "tel": "5556581111",
    "origen": "",
    "email1": "t323@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Sawyer",
    "apaterno": "Mcdonald",
    "amaterno": "Collins",
    "tel": "5556581111",
    "origen": "",
    "email1": "t324@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Shea",
    "apaterno": "Macias",
    "amaterno": "Fitzpatrick",
    "tel": "5556581111",
    "origen": "",
    "email1": "t325@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Griffin",
    "apaterno": "Howard",
    "amaterno": "Wise",
    "tel": "5556581111",
    "origen": "",
    "email1": "t326@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Mark",
    "apaterno": "Boyd",
    "amaterno": "Booth",
    "tel": "5556581111",
    "origen": "",
    "email1": "t327@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Katelyn",
    "apaterno": "Snyder",
    "amaterno": "Rivers",
    "tel": "5556581111",
    "origen": "",
    "email1": "t328@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Judith",
    "apaterno": "Martinez",
    "amaterno": "Cruz",
    "tel": "5556581111",
    "origen": "",
    "email1": "t329@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Tobias",
    "apaterno": "Dunn",
    "amaterno": "Harvey",
    "tel": "5556581111",
    "origen": "",
    "email1": "t330@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Perry",
    "apaterno": "Wilkinson",
    "amaterno": "Lowe",
    "tel": "5556581111",
    "origen": "",
    "email1": "t331@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Evelyn",
    "apaterno": "Rivers",
    "amaterno": "Vinson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t332@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Jelani",
    "apaterno": "Paul",
    "amaterno": "Harper",
    "tel": "5556581111",
    "origen": "",
    "email1": "t333@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Adrienne",
    "apaterno": "Hancock",
    "amaterno": "Woods",
    "tel": "5556581111",
    "origen": "",
    "email1": "t334@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Ignacia",
    "apaterno": "Andrews",
    "amaterno": "Jensen",
    "tel": "5556581111",
    "origen": "",
    "email1": "t335@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Hadassah",
    "apaterno": "Abbott",
    "amaterno": "Henry",
    "tel": "5556581111",
    "origen": "",
    "email1": "t336@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Lawrence",
    "apaterno": "Mcgowan",
    "amaterno": "Bolton",
    "tel": "5556581111",
    "origen": "",
    "email1": "t337@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "James",
    "apaterno": "Irwin",
    "amaterno": "Singleton",
    "tel": "5556581111",
    "origen": "",
    "email1": "t338@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Christian",
    "apaterno": "Henderson",
    "amaterno": "Duffy",
    "tel": "5556581111",
    "origen": "",
    "email1": "t339@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Urielle",
    "apaterno": "Tyler",
    "amaterno": "Hines",
    "tel": "5556581111",
    "origen": "",
    "email1": "t340@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Reagan",
    "apaterno": "Sloan",
    "amaterno": "Mccullough",
    "tel": "5556581111",
    "origen": "",
    "email1": "t341@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Georgia",
    "apaterno": "Wooten",
    "amaterno": "Ray",
    "tel": "5556581111",
    "origen": "",
    "email1": "t342@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Noah",
    "apaterno": "Hensley",
    "amaterno": "Allen",
    "tel": "5556581111",
    "origen": "",
    "email1": "t343@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Fuller",
    "apaterno": "Huffman",
    "amaterno": "Larsen",
    "tel": "5556581111",
    "origen": "",
    "email1": "t344@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Simone",
    "apaterno": "Flynn",
    "amaterno": "Macdonald",
    "tel": "5556581111",
    "origen": "",
    "email1": "t345@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Henry",
    "apaterno": "Harrell",
    "amaterno": "Frederick",
    "tel": "5556581111",
    "origen": "",
    "email1": "t346@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Anastasia",
    "apaterno": "Little",
    "amaterno": "Mcdonald",
    "tel": "5556581111",
    "origen": "",
    "email1": "t347@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Jaime",
    "apaterno": "Albert",
    "amaterno": "Byrd",
    "tel": "5556581111",
    "origen": "",
    "email1": "t348@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Rigel",
    "apaterno": "Copeland",
    "amaterno": "Clark",
    "tel": "5556581111",
    "origen": "",
    "email1": "t349@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Octavius",
    "apaterno": "Ramirez",
    "amaterno": "Lambert",
    "tel": "5556581111",
    "origen": "",
    "email1": "t350@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Stewart",
    "apaterno": "Madden",
    "amaterno": "Freeman",
    "tel": "5556581111",
    "origen": "",
    "email1": "t351@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Nero",
    "apaterno": "Odonnell",
    "amaterno": "Contreras",
    "tel": "5556581111",
    "origen": "",
    "email1": "t352@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Rae",
    "apaterno": "Buckner",
    "amaterno": "Mcneil",
    "tel": "5556581111",
    "origen": "",
    "email1": "t353@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Kasimir",
    "apaterno": "Stevens",
    "amaterno": "Noel",
    "tel": "5556581111",
    "origen": "",
    "email1": "t354@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Daquan",
    "apaterno": "Mosley",
    "amaterno": "Mercado",
    "tel": "5556581111",
    "origen": "",
    "email1": "t355@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Indigo",
    "apaterno": "Wade",
    "amaterno": "Trujillo",
    "tel": "5556581111",
    "origen": "",
    "email1": "t356@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Cadman",
    "apaterno": "Glenn",
    "amaterno": "Sullivan",
    "tel": "5556581111",
    "origen": "",
    "email1": "t357@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Dahlia",
    "apaterno": "Fernandez",
    "amaterno": "Chan",
    "tel": "5556581111",
    "origen": "",
    "email1": "t358@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "John",
    "apaterno": "Mckee",
    "amaterno": "Gill",
    "tel": "5556581111",
    "origen": "",
    "email1": "t359@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Zane",
    "apaterno": "Barrett",
    "amaterno": "Blake",
    "tel": "5556581111",
    "origen": "",
    "email1": "t360@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Quynn",
    "apaterno": "Hicks",
    "amaterno": "Martinez",
    "tel": "5556581111",
    "origen": "",
    "email1": "t361@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Natalie",
    "apaterno": "Ryan",
    "amaterno": "Henson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t362@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Harper",
    "apaterno": "Dillon",
    "amaterno": "Contreras",
    "tel": "5556581111",
    "origen": "",
    "email1": "t363@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Nell",
    "apaterno": "Brady",
    "amaterno": "Barrera",
    "tel": "5556581111",
    "origen": "",
    "email1": "t364@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Brent",
    "apaterno": "Trujillo",
    "amaterno": "Gallegos",
    "tel": "5556581111",
    "origen": "",
    "email1": "t365@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Dara",
    "apaterno": "Snow",
    "amaterno": "Dalton",
    "tel": "5556581111",
    "origen": "",
    "email1": "t366@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Gwendolyn",
    "apaterno": "Mckee",
    "amaterno": "Morrison",
    "tel": "5556581111",
    "origen": "",
    "email1": "t367@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Ezekiel",
    "apaterno": "Lott",
    "amaterno": "Sears",
    "tel": "5556581111",
    "origen": "",
    "email1": "t368@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Samuel",
    "apaterno": "Lynn",
    "amaterno": "Sheppard",
    "tel": "5556581111",
    "origen": "",
    "email1": "t369@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Sybil",
    "apaterno": "Miles",
    "amaterno": "Garcia",
    "tel": "5556581111",
    "origen": "",
    "email1": "t370@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Byron",
    "apaterno": "Reid",
    "amaterno": "Franklin",
    "tel": "5556581111",
    "origen": "",
    "email1": "t371@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Joel",
    "apaterno": "Church",
    "amaterno": "Shannon",
    "tel": "5556581111",
    "origen": "",
    "email1": "t372@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Donovan",
    "apaterno": "West",
    "amaterno": "Morrison",
    "tel": "5556581111",
    "origen": "",
    "email1": "t373@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Nero",
    "apaterno": "Franklin",
    "amaterno": "Winters",
    "tel": "5556581111",
    "origen": "",
    "email1": "t374@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Dahlia",
    "apaterno": "Stanley",
    "amaterno": "Cervantes",
    "tel": "5556581111",
    "origen": "",
    "email1": "t375@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Zelenia",
    "apaterno": "Collier",
    "amaterno": "Fernandez",
    "tel": "5556581111",
    "origen": "",
    "email1": "t376@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Cailin",
    "apaterno": "Jensen",
    "amaterno": "Crosby",
    "tel": "5556581111",
    "origen": "",
    "email1": "t377@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Lucas",
    "apaterno": "Rivas",
    "amaterno": "Schultz",
    "tel": "5556581111",
    "origen": "",
    "email1": "t378@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Lara",
    "apaterno": "Santos",
    "amaterno": "Stanley",
    "tel": "5556581111",
    "origen": "",
    "email1": "t379@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Barbara",
    "apaterno": "Walls",
    "amaterno": "Oneal",
    "tel": "5556581111",
    "origen": "",
    "email1": "t380@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Hadley",
    "apaterno": "Ball",
    "amaterno": "Gardner",
    "tel": "5556581111",
    "origen": "",
    "email1": "t381@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Cruz",
    "apaterno": "Hines",
    "amaterno": "Knowles",
    "tel": "5556581111",
    "origen": "",
    "email1": "t382@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Adara",
    "apaterno": "Galloway",
    "amaterno": "Leonard",
    "tel": "5556581111",
    "origen": "",
    "email1": "t383@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Maryam",
    "apaterno": "Hartman",
    "amaterno": "Rice",
    "tel": "5556581111",
    "origen": "",
    "email1": "t384@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Georgia",
    "apaterno": "Mejia",
    "amaterno": "Mckee",
    "tel": "5556581111",
    "origen": "",
    "email1": "t385@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Kiona",
    "apaterno": "Chapman",
    "amaterno": "Fernandez",
    "tel": "5556581111",
    "origen": "",
    "email1": "t386@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Alexis",
    "apaterno": "Ray",
    "amaterno": "Miles",
    "tel": "5556581111",
    "origen": "",
    "email1": "t387@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Mara",
    "apaterno": "Chandler",
    "amaterno": "Baxter",
    "tel": "5556581111",
    "origen": "",
    "email1": "t388@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Sybill",
    "apaterno": "Keller",
    "amaterno": "Farmer",
    "tel": "5556581111",
    "origen": "",
    "email1": "t389@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Calvin",
    "apaterno": "Owens",
    "amaterno": "Hays",
    "tel": "5556581111",
    "origen": "",
    "email1": "t390@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Denton",
    "apaterno": "Daniels",
    "amaterno": "Coleman",
    "tel": "5556581111",
    "origen": "",
    "email1": "t391@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Tyrone",
    "apaterno": "Chase",
    "amaterno": "Wilkerson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t392@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Michelle",
    "apaterno": "Rich",
    "amaterno": "Jimenez",
    "tel": "5556581111",
    "origen": "",
    "email1": "t393@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Rooney",
    "apaterno": "Alvarado",
    "amaterno": "Grant",
    "tel": "5556581111",
    "origen": "",
    "email1": "t394@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Madeline",
    "apaterno": "Norris",
    "amaterno": "Galloway",
    "tel": "5556581111",
    "origen": "",
    "email1": "t395@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Xerxes",
    "apaterno": "Freeman",
    "amaterno": "Snyder",
    "tel": "5556581111",
    "origen": "",
    "email1": "t396@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Kennedy",
    "apaterno": "Gilmore",
    "amaterno": "Garza",
    "tel": "5556581111",
    "origen": "",
    "email1": "t397@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Kaye",
    "apaterno": "Harper",
    "amaterno": "Walsh",
    "tel": "5556581111",
    "origen": "",
    "email1": "t398@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Neville",
    "apaterno": "Vaughn",
    "amaterno": "Duran",
    "tel": "5556581111",
    "origen": "",
    "email1": "t399@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Bevis",
    "apaterno": "Keller",
    "amaterno": "Whitfield",
    "tel": "5556581111",
    "origen": "",
    "email1": "t400@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Kareem",
    "apaterno": "Chan",
    "amaterno": "Gregory",
    "tel": "5556581111",
    "origen": "",
    "email1": "t401@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Bell",
    "apaterno": "Shannon",
    "amaterno": "Knowles",
    "tel": "5556581111",
    "origen": "",
    "email1": "t402@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Regina",
    "apaterno": "Coleman",
    "amaterno": "Parrish",
    "tel": "5556581111",
    "origen": "",
    "email1": "t403@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Piper",
    "apaterno": "Lawrence",
    "amaterno": "Flynn",
    "tel": "5556581111",
    "origen": "",
    "email1": "t404@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Adam",
    "apaterno": "Elliott",
    "amaterno": "Howard",
    "tel": "5556581111",
    "origen": "",
    "email1": "t405@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Yuli",
    "apaterno": "Sweeney",
    "amaterno": "Grimes",
    "tel": "5556581111",
    "origen": "",
    "email1": "t406@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Breanna",
    "apaterno": "Fitzpatrick",
    "amaterno": "Solomon",
    "tel": "5556581111",
    "origen": "",
    "email1": "t407@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Aquila",
    "apaterno": "Brady",
    "amaterno": "Battle",
    "tel": "5556581111",
    "origen": "",
    "email1": "t408@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Chiquita",
    "apaterno": "Bauer",
    "amaterno": "Cabrera",
    "tel": "5556581111",
    "origen": "",
    "email1": "t409@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Avye",
    "apaterno": "Ballard",
    "amaterno": "Vargas",
    "tel": "5556581111",
    "origen": "",
    "email1": "t410@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Whilemina",
    "apaterno": "Allen",
    "amaterno": "Sanford",
    "tel": "5556581111",
    "origen": "",
    "email1": "t411@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Idona",
    "apaterno": "Camacho",
    "amaterno": "Freeman",
    "tel": "5556581111",
    "origen": "",
    "email1": "t412@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Cassady",
    "apaterno": "Larsen",
    "amaterno": "Hutchinson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t413@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Jacob",
    "apaterno": "Walsh",
    "amaterno": "Lester",
    "tel": "5556581111",
    "origen": "",
    "email1": "t414@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Clare",
    "apaterno": "Lloyd",
    "amaterno": "Brown",
    "tel": "5556581111",
    "origen": "",
    "email1": "t415@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Gretchen",
    "apaterno": "Marquez",
    "amaterno": "Lawson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t416@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Rhea",
    "apaterno": "Burks",
    "amaterno": "Ellison",
    "tel": "5556581111",
    "origen": "",
    "email1": "t417@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Sebastian",
    "apaterno": "Carney",
    "amaterno": "Sykes",
    "tel": "5556581111",
    "origen": "",
    "email1": "t418@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Tad",
    "apaterno": "Waller",
    "amaterno": "Keller",
    "tel": "5556581111",
    "origen": "",
    "email1": "t419@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Emerald",
    "apaterno": "Tanner",
    "amaterno": "Porter",
    "tel": "5556581111",
    "origen": "",
    "email1": "t420@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Burton",
    "apaterno": "York",
    "amaterno": "Mosley",
    "tel": "5556581111",
    "origen": "",
    "email1": "t421@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Benedict",
    "apaterno": "Swanson",
    "amaterno": "Harrell",
    "tel": "5556581111",
    "origen": "",
    "email1": "t422@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Teagan",
    "apaterno": "Sawyer",
    "amaterno": "Fernandez",
    "tel": "5556581111",
    "origen": "",
    "email1": "t423@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Zena",
    "apaterno": "Bond",
    "amaterno": "Ball",
    "tel": "5556581111",
    "origen": "",
    "email1": "t424@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Carol",
    "apaterno": "Shields",
    "amaterno": "Gray",
    "tel": "5556581111",
    "origen": "",
    "email1": "t425@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Bethany",
    "apaterno": "Blake",
    "amaterno": "Buck",
    "tel": "5556581111",
    "origen": "",
    "email1": "t426@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Cedric",
    "apaterno": "Browning",
    "amaterno": "Vinson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t427@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Gregory",
    "apaterno": "Cleveland",
    "amaterno": "Curtis",
    "tel": "5556581111",
    "origen": "",
    "email1": "t428@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Lucius",
    "apaterno": "Berg",
    "amaterno": "Haney",
    "tel": "5556581111",
    "origen": "",
    "email1": "t429@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "May",
    "apaterno": "Sheppard",
    "amaterno": "Koch",
    "tel": "5556581111",
    "origen": "",
    "email1": "t430@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Bryar",
    "apaterno": "Slater",
    "amaterno": "Long",
    "tel": "5556581111",
    "origen": "",
    "email1": "t431@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Ria",
    "apaterno": "Torres",
    "amaterno": "Taylor",
    "tel": "5556581111",
    "origen": "",
    "email1": "t432@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Preston",
    "apaterno": "Robles",
    "amaterno": "Reynolds",
    "tel": "5556581111",
    "origen": "",
    "email1": "t433@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Kennedy",
    "apaterno": "Ferguson",
    "amaterno": "Joseph",
    "tel": "5556581111",
    "origen": "",
    "email1": "t434@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Gay",
    "apaterno": "Drake",
    "amaterno": "Peterson",
    "tel": "5556581111",
    "origen": "",
    "email1": "t435@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Armand",
    "apaterno": "Peck",
    "amaterno": "Pittman",
    "tel": "5556581111",
    "origen": "",
    "email1": "t436@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Aidan",
    "apaterno": "Rosario",
    "amaterno": "Buckner",
    "tel": "5556581111",
    "origen": "",
    "email1": "t437@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Summer",
    "apaterno": "Sweet",
    "amaterno": "Mccray",
    "tel": "5556581111",
    "origen": "",
    "email1": "t438@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Hiram",
    "apaterno": "Mckay",
    "amaterno": "Kirby",
    "tel": "5556581111",
    "origen": "",
    "email1": "t439@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Benjamin",
    "apaterno": "Bond",
    "amaterno": "Torres",
    "tel": "5556581111",
    "origen": "",
    "email1": "t440@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Kendall",
    "apaterno": "Sanford",
    "amaterno": "Chandler",
    "tel": "5556581111",
    "origen": "",
    "email1": "t441@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Lesley",
    "apaterno": "Clayton",
    "amaterno": "Patton",
    "tel": "5556581111",
    "origen": "",
    "email1": "t442@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Hall",
    "apaterno": "Vinson",
    "amaterno": "Lee",
    "tel": "5556581111",
    "origen": "",
    "email1": "t443@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Kamal",
    "apaterno": "Vance",
    "amaterno": "Gould",
    "tel": "5556581111",
    "origen": "",
    "email1": "t444@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Victor",
    "apaterno": "Kerr",
    "amaterno": "Lynn",
    "tel": "5556581111",
    "origen": "",
    "email1": "t445@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Melyssa",
    "apaterno": "Carpenter",
    "amaterno": "Walls",
    "tel": "5556581111",
    "origen": "",
    "email1": "t446@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Anjolie",
    "apaterno": "Bolton",
    "amaterno": "Bass",
    "tel": "5556581111",
    "origen": "",
    "email1": "t447@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Ruby",
    "apaterno": "Bass",
    "amaterno": "Lang",
    "tel": "5556581111",
    "origen": "",
    "email1": "t448@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Elizabeth",
    "apaterno": "Gallegos",
    "amaterno": "Decker",
    "tel": "5556581111",
    "origen": "",
    "email1": "t449@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Jacob",
    "apaterno": "Barrera",
    "amaterno": "Harrington",
    "tel": "5556581111",
    "origen": "",
    "email1": "t450@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Cadman",
    "apaterno": "Hawkins",
    "amaterno": "Randolph",
    "tel": "5556581111",
    "origen": "",
    "email1": "t451@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Hayes",
    "apaterno": "Dejesus",
    "amaterno": "Foreman",
    "tel": "5556581111",
    "origen": "",
    "email1": "t452@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Garrett",
    "apaterno": "Baxter",
    "amaterno": "White",
    "tel": "5556581111",
    "origen": "",
    "email1": "t453@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Cally",
    "apaterno": "Oneal",
    "amaterno": "Bradley",
    "tel": "5556581111",
    "origen": "",
    "email1": "t454@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Ima",
    "apaterno": "Velazquez",
    "amaterno": "Franco",
    "tel": "5556581111",
    "origen": "",
    "email1": "t455@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Nigel",
    "apaterno": "Willis",
    "amaterno": "Shannon",
    "tel": "5556581111",
    "origen": "",
    "email1": "t456@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Coby",
    "apaterno": "Chambers",
    "amaterno": "Lopez",
    "tel": "5556581111",
    "origen": "",
    "email1": "t457@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Elton",
    "apaterno": "Booker",
    "amaterno": "Wood",
    "tel": "5556581111",
    "origen": "",
    "email1": "t458@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Bevis",
    "apaterno": "Kidd",
    "amaterno": "Hammond",
    "tel": "5556581111",
    "origen": "",
    "email1": "t459@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Florence",
    "apaterno": "Hebert",
    "amaterno": "Camacho",
    "tel": "5556581111",
    "origen": "",
    "email1": "t460@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Ayanna",
    "apaterno": "Simpson",
    "amaterno": "Ramirez",
    "tel": "5556581111",
    "origen": "",
    "email1": "t461@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Cade",
    "apaterno": "Kennedy",
    "amaterno": "Wells",
    "tel": "5556581111",
    "origen": "",
    "email1": "t462@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Chase",
    "apaterno": "Humphrey",
    "amaterno": "Little",
    "tel": "5556581111",
    "origen": "",
    "email1": "t463@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Levi",
    "apaterno": "Hogan",
    "amaterno": "Madden",
    "tel": "5556581111",
    "origen": "",
    "email1": "t464@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Cairo",
    "apaterno": "Kramer",
    "amaterno": "Golden",
    "tel": "5556581111",
    "origen": "",
    "email1": "t465@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Wesley",
    "apaterno": "Harding",
    "amaterno": "Levy",
    "tel": "5556581111",
    "origen": "",
    "email1": "t466@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Jocelyn",
    "apaterno": "Morrison",
    "amaterno": "Hensley",
    "tel": "5556581111",
    "origen": "",
    "email1": "t467@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Kenyon",
    "apaterno": "Lott",
    "amaterno": "Rich",
    "tel": "5556581111",
    "origen": "",
    "email1": "t468@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Dale",
    "apaterno": "Holder",
    "amaterno": "Eaton",
    "tel": "5556581111",
    "origen": "",
    "email1": "t469@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Phoebe",
    "apaterno": "Townsend",
    "amaterno": "Nunez",
    "tel": "5556581111",
    "origen": "",
    "email1": "t470@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Bruno",
    "apaterno": "Reilly",
    "amaterno": "Vance",
    "tel": "5556581111",
    "origen": "",
    "email1": "t471@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Hermione",
    "apaterno": "Montgomery",
    "amaterno": "Patton",
    "tel": "5556581111",
    "origen": "",
    "email1": "t472@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Sydnee",
    "apaterno": "Hanson",
    "amaterno": "Keller",
    "tel": "5556581111",
    "origen": "",
    "email1": "t473@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Jane",
    "apaterno": "Rivas",
    "amaterno": "Gallegos",
    "tel": "5556581111",
    "origen": "",
    "email1": "t474@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Henry",
    "apaterno": "Barrera",
    "amaterno": "Rosa",
    "tel": "5556581111",
    "origen": "",
    "email1": "t475@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Ariel",
    "apaterno": "Mcdaniel",
    "amaterno": "Montgomery",
    "tel": "5556581111",
    "origen": "",
    "email1": "t476@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Galvin",
    "apaterno": "Potter",
    "amaterno": "Waller",
    "tel": "5556581111",
    "origen": "",
    "email1": "t477@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Suki",
    "apaterno": "Dyer",
    "amaterno": "Hogan",
    "tel": "5556581111",
    "origen": "",
    "email1": "t478@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Ainsley",
    "apaterno": "Brown",
    "amaterno": "Nash",
    "tel": "5556581111",
    "origen": "",
    "email1": "t479@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Gareth",
    "apaterno": "Roach",
    "amaterno": "England",
    "tel": "5556581111",
    "origen": "",
    "email1": "t480@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Harrison",
    "apaterno": "Emerson",
    "amaterno": "Lucas",
    "tel": "5556581111",
    "origen": "",
    "email1": "t481@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Zeph",
    "apaterno": "Massey",
    "amaterno": "Chapman",
    "tel": "5556581111",
    "origen": "",
    "email1": "t482@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Garth",
    "apaterno": "Rice",
    "amaterno": "Gardner",
    "tel": "5556581111",
    "origen": "",
    "email1": "t483@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Herman",
    "apaterno": "Chandler",
    "amaterno": "Macdonald",
    "tel": "5556581111",
    "origen": "",
    "email1": "t484@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Ronan",
    "apaterno": "Oneill",
    "amaterno": "Gregory",
    "tel": "5556581111",
    "origen": "",
    "email1": "t485@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Berk",
    "apaterno": "Potts",
    "amaterno": "Gardner",
    "tel": "5556581111",
    "origen": "",
    "email1": "t486@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Montana",
    "apaterno": "Cruz",
    "amaterno": "Franklin",
    "tel": "5556581111",
    "origen": "",
    "email1": "t487@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Amanda",
    "apaterno": "Bradley",
    "amaterno": "Coleman",
    "tel": "5556581111",
    "origen": "",
    "email1": "t488@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Vivien",
    "apaterno": "Simpson",
    "amaterno": "Vaughn",
    "tel": "5556581111",
    "origen": "",
    "email1": "t489@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Hillary",
    "apaterno": "Webster",
    "amaterno": "York",
    "tel": "5556581111",
    "origen": "",
    "email1": "t490@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Tallulah",
    "apaterno": "Norton",
    "amaterno": "Church",
    "tel": "5556581111",
    "origen": "",
    "email1": "t491@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Kennedy",
    "apaterno": "Mason",
    "amaterno": "Rowe",
    "tel": "5556581111",
    "origen": "",
    "email1": "t492@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Ulla",
    "apaterno": "Reynolds",
    "amaterno": "Downs",
    "tel": "5556581111",
    "origen": "",
    "email1": "t493@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Colton",
    "apaterno": "Solis",
    "amaterno": "Walton",
    "tel": "5556581111",
    "origen": "",
    "email1": "t494@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Rosalyn",
    "apaterno": "Chandler",
    "amaterno": "Humphrey",
    "tel": "5556581111",
    "origen": "",
    "email1": "t495@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  },
  {
    "nombre": "Xerxes",
    "apaterno": "Hogan",
    "amaterno": "Newman",
    "tel": "5556581111",
    "origen": "",
    "email1": "t496@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 1
    }
  },
  {
    "nombre": "Wang",
    "apaterno": "Bray",
    "amaterno": "Stevens",
    "tel": "5556581111",
    "origen": "",
    "email1": "t497@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 2
    }
  },
  {
    "nombre": "Reese",
    "apaterno": "Wells",
    "amaterno": "Lucas",
    "tel": "5556581111",
    "origen": "",
    "email1": "t498@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Orla",
    "apaterno": "Olson",
    "amaterno": "Richard",
    "tel": "5556581111",
    "origen": "",
    "email1": "t499@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 4
    }
  },
  {
    "nombre": "Steven",
    "apaterno": "Herrera",
    "amaterno": "Medina",
    "tel": "5556581111",
    "origen": "",
    "email1": "t500@crm.productividadti.com.mx",
    "indicadores": {
      "funelIndex": 3
    }
  }
];

lista.forEach(x=>{
  x.id_usuario=idUsuario;
});

// DbCrm.ModelCliente.insertMany( lista).then(x=>{
//   console.log(x);
// });
