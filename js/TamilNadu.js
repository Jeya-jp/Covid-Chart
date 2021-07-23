function onloadJS()
{
    let Tamil_Nadu = [
        "Ariyalur",
        "Chengalpattu",
        "Chennai",
        "Coimbatore",
        "Cuddalore",
        "Dharmapuri",
        "Dindigul",
        "Erode",
        "Kallakurichi",
        "Kancheepuram",
        "Kanyakumari",
        "Karur",
        "Krishnagiri",
        "Madurai",
        "Nagapattinam",
        "Namakkal",
        "Nilgiris",
        "Perambalur",
        "Pudukkottai",
        "Ramanathapuram",
        "Ranipet",
        "Salem",
        "Sivaganga",
        "Tenkasi",
        "Thanjavur",
        "Theni",
        "Thiruvallur",
        "Thiruvarur",
        "Thoothukkudi",
        "Tiruchirappalli",
        "Tirunelveli",
        "Tirupathur",
        "Tiruppur",
        "Tiruvannamalai",
        "Vellore",
        "Viluppuram",
        "Virudhunagar"
    ];
   
    let Active = [], Confirm = [], Deceased = [], Recovered = [];

    fetch("https://api.covid19india.org/state_district_wise.json").then(function(resp)
    {
        return resp.json();
    })
    .then(function(data)
    {          
        console.log(data);           
        for(i = 0; i < Tamil_Nadu.length;i++) 
        {
            Active[i] = data["Tamil Nadu"].districtData[Tamil_Nadu[i]].active; 
            Confirm[i] = data["Tamil Nadu"].districtData[Tamil_Nadu[i]].confirmed;
            Deceased[i] = data["Tamil Nadu"].districtData[Tamil_Nadu[i]].deceased;
            Recovered[i] = data["Tamil Nadu"].districtData[Tamil_Nadu[i]].recovered;                
        }               
    })    

    let myChart = document.getElementById("chart").getContext("2d");
    let display = new Chart(myChart, 
    {
        type: 'line',
        data: 
        {            
            labels: Tamil_Nadu,
            datasets: [
                {
                    label: "Active",
                    data: Active,                    
                    backgroundColor: "Blue",
                    borderWidth: 1,
                    borderColor: "Black"                    
                },
                {
                    label: "Confirmed",
                    data: Confirm,                    
                    backgroundColor: "Red",
                    borderWidth: 1,
                    borderColor: "#777"
                },
                {
                    label: "Deceased",
                    data: Deceased,                    
                    backgroundColor: "Yellow",
                    borderWidth: 1,
                    borderColor: "#777"
                },
                {
                    label: "Recovered",
                    data: Recovered,                    
                    backgroundColor: "Green",
                    borderWidth: 1,
                    borderColor: "#777"
                }
            ]
        }            
    });

    let Active2 = [], temp = [];
    fetch("Covid.json").then(function(resp)
    {
        return resp.json();
    })
    .then(function(result)
    {
        var ans = document.getElementById("incDec");
        for(i = 0; i < Tamil_Nadu.length;i++) 
        {
            Active2[i] = result["Tamil Nadu"].districtData[Tamil_Nadu[i]].active;                 
            temp[i] = Active[i] - Active2[i];         
        }
           
        let s = [];            
        s = temp.map(String);

        for(let i = 0; i < Tamil_Nadu.length; i++)
        {
            if(Active2[i] <= Active[i])
            {                    
                var node = document.createElement("li");
                var textnode = document.createTextNode(Tamil_Nadu[i] + " = " + s[i]);
                node.appendChild(textnode);
                document.getElementById("box2").appendChild(node);                     
            }

            if(Active2[i] > Active[i])
            {
                s[i] = s[i].replace('-', ''); 
                var node = document.createElement("li");
                var textnode = document.createTextNode(Tamil_Nadu[i] + " = " + s[i]);
                node.appendChild(textnode);
                document.getElementById("box3").appendChild(node);                            
            }
        }
            
        for(let i = 0; i < Tamil_Nadu.length; i++)
        {
            var node = document.createElement("li");
            var textnode = document.createTextNode(Tamil_Nadu[i] + " = " + Active[i]);
            node.appendChild(textnode);
            document.getElementById("box1").appendChild(node);                
        }            
    })
}


function A()
{
    let Delhi = [
        "Central Delhi",
        "East Delhi",
        "New Delhi",
        "North Delhi",
        "North East Delhi",
        "North West Delhi",
        "Shahdara",
        "South Delhi",
        "South East Delhi",   
        "South West Delhi",
        "Unknown",
        "West Delhi"
    ]
   
    let Active = [], Confirm = [], Deceased = [], Recovered = [];

    fetch("https://api.covid19india.org/state_district_wise.json").then(function(resp)
    {
        return resp.json();
    })
    .then(function(data)
    {          
        console.log(data);           
        for(i = 0; i < Delhi.length;i++) 
        {
            Active[i] = data["Delhi"].districtData[Delhi[i]].active; 
            Confirm[i] = data["Delhi"].districtData[Delhi[i]].confirmed;
            Deceased[i] = data["Delhi"].districtData[Delhi[i]].deceased;
            Recovered[i] = data["Delhi"].districtData[Delhi[i]].recovered;                
        }               
    })    

    let myChart = document.getElementById("chart").getContext("2d");
    let display = new Chart(myChart, 
    {
        type: 'line',
        data: 
        {            
            labels: Delhi,
            datasets: [
                {
                    label: "Active",
                    data: Active,                    
                    backgroundColor: "Blue",
                    borderWidth: 1,
                    borderColor: "Black"                    
                },
                {
                    label: "Confirmed",
                    data: Confirm,                    
                    backgroundColor: "Red",
                    borderWidth: 1,
                    borderColor: "#777"
                },
                {
                    label: "Deceased",
                    data: Deceased,                    
                    backgroundColor: "Yellow",
                    borderWidth: 1,
                    borderColor: "#777"
                },
                {
                    label: "Recovered",
                    data: Recovered,                    
                    backgroundColor: "Green",
                    borderWidth: 1,
                    borderColor: "#777"
                }
            ]
        }            
    });

    let Active2 = [], temp = [];
    fetch("Covid.json").then(function(resp)
    {
        return resp.json();
    })
    .then(function(result)
    {
        var ans = document.getElementById("incDec");
        for(i = 0; i < Delhi.length;i++) 
        {
            Active2[i] = result["Delhi"].districtData[Delhi[i]].active;                 
            temp[i] = Active[i] - Active2[i];         
        }
           
        let s = [];            
        s = temp.map(String);

        for(let i = 0; i < Delhi.length; i++)
        {
            if(Active2[i] <= Active[i])
            {                    
                var node = document.createElement("li");
                var textnode = document.createTextNode(Delhi[i] + " = " + s[i]);
                node.appendChild(textnode);
                document.getElementById("box2").appendChild(node);                     
            }

            if(Active2[i] > Active[i])
            {
                s[i] = s[i].replace('-', ''); 
                var node = document.createElement("li");
                var textnode = document.createTextNode(Delhi[i] + " = " + s[i]);
                node.appendChild(textnode);
                document.getElementById("box3").appendChild(node);                            
            }
        }
            
        for(let i = 0; i < Delhi.length; i++)
        {
            var node = document.createElement("li");
            var textnode = document.createTextNode(Delhi[i] + " = " + Active[i]);
            node.appendChild(textnode);
            document.getElementById("box1").appendChild(node);                
        }            
    })
}





