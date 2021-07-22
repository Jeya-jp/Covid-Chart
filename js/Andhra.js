function onloadJS()
{
    let Andhra_Pradesh = [
        "Foreign Evacuees",
        "Anantapur",
        "Chittoor",
        "East Godavari",
        "Guntur",
        "Krishna",
        "Kurnool",
        "Other State",
        "Prakasam",
        "S.P.S. Nellore",
        "Srikakulam",        
        "Visakhapatnam",
        "Vizianagaram",
        "West Godavari",
        "Y.S.R. Kadapa"
    ]

    let Active = [], Confirm = [], Deceased = [], Recovered = [];

    fetch("https://api.covid19india.org/state_district_wise.json").then(function(resp)
    {
        return resp.json();
    })
    .then(function(data)
    {          
        console.log(data);           
        for(i = 0; i < Andhra_Pradesh.length;i++) 
        {
            Active[i] = data["Andhra Pradesh"].districtData[Andhra_Pradesh[i]].active; 
            Confirm[i] = data["Andhra Pradesh"].districtData[Andhra_Pradesh[i]].confirmed;
            Deceased[i] = data["Andhra Pradesh"].districtData[Andhra_Pradesh[i]].deceased;
            Recovered[i] = data["Andhra Pradesh"].districtData[Andhra_Pradesh[i]].recovered;                
        }               
    })    

    let myChart = document.getElementById("chart").getContext("2d");
    let display = new Chart(myChart, 
    {
        type: 'line',
        data: 
        {            
            labels: Andhra_Pradesh,
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
        for(i = 0; i < Andhra_Pradesh.length;i++) 
        {
            Active2[i] = result["Andhra Pradesh"].districtData[Andhra_Pradesh[i]].active;                 
            temp[i] = Active[i] - Active2[i];         
        }
           
        let s = [];            
        s = temp.map(String);

        for(let i = 0; i < Andhra_Pradesh.length; i++)
        {
            if(Active2[i] <= Active[i])
            {                    
                var node = document.createElement("li");
                var textnode = document.createTextNode(Andhra_Pradesh[i] + " = " + s[i]);
                node.appendChild(textnode);
                document.getElementById("box2").appendChild(node);                     
            }

            if(Active2[i] > Active[i])
            {
                s[i] = s[i].replace('-', ''); 
                var node = document.createElement("li");
                var textnode = document.createTextNode(Andhra_Pradesh[i] + " = " + s[i]);
                node.appendChild(textnode);
                document.getElementById("box3").appendChild(node);                            
            }
        }
            
        for(let i = 0; i < Andhra_Pradesh.length; i++)
        {
            var node = document.createElement("li");
            var textnode = document.createTextNode(Andhra_Pradesh[i] + " = " + Active[i]);
            node.appendChild(textnode);
            document.getElementById("box1").appendChild(node);                
        }            
    })
}