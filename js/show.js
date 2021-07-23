let filterUrl = window.location.href;
let filter = filterUrl.split("=");
let state = filter[1]; 
let stateName;
let stateNameArr;

for (let i =0; i < 6; i++)
{
    if(state.includes("%20") === true)
{
    const regex = /%20/i;
    stateName = state.replace(regex, ' '); 
    stateNameArr = state.replace(regex, '_');
}
else
{
    stateName = state;
    stateNameArr = state;
}
}


console.log(stateName)
let myobj = [
        {
            stateName: "Andhra Pradesh",
            district:[
                "Anantapur",
                "Chittoor",
                "East Godavari",
                "Guntur",
                "Krishna",
                "Kurnool",  
                "Prakasam",
                "S.P.S. Nellore",
                "Srikakulam",        
                "Visakhapatnam",
                "Vizianagaram",
                "West Godavari",
                "Y.S.R. Kadapa"
            ]
        }, 
        {
            stateName: "Arunachal Pradesh",
            district:[
                "Anjaw",
                "Changlang",
                "East Kameng",
                "East Siang",
                "Kamle",
                "Kra Daadi",
                "Kurung Kumey",
                "Lepa Rada",
                "Lohit",
                "Longding",
                "Lower Dibang Valley",
                "Lower Siang",
                "Lower Subansiri",
                "Namsai",
                "Pakke Kessang",
                "Papum Pare",
                "Shi Yomi",
                "Siang",
                "Tawang",
                "Tirap",
                "Upper Dibang Valley",
                "Upper Siang",
                "Upper Subansiri",
                "West Kameng",
                "West Siang"
            ]
        }, 
        {
            stateName: "Assam",
            district:[
                "Baksa",
                "Barpeta",
                "Biswanath",
                "Bongaigaon",
                "Cachar",
                "Charaideo",
                "Chirang",
                "Darrang",
                "Dhemaji",
                "Dhubri",
                "Dibrugarh",
                "Dima Hasao",
                "Goalpara",
                "Golaghat",
                "Hailakandi",
                "Hojai",
                "Jorhat",
                "Kamrup",
                "Kamrup Metropolitan",
                "Karbi Anglong",
                "Karimganj",
                "Kokrajhar",
                "Lakhimpur",
                "Majuli",
                "Morigaon",
                "Nagaon",
                "Nalbari",
                "Sivasagar",
                "Sonitpur",
                "South Salmara Mankachar",
                "Tinsukia",
                "Udalguri",
                "West Karbi Anglong"
            ]
        },
        {
            stateName: "Bihar",
            district:[
                "Araria",
                "Arwal",
                "Aurangabad",
                "Banka",
                "Begusarai",
                "Bhagalpur",
                "Bhojpur",
                "Buxar",
                "Darbhanga",
                "East Champaran",
                "Gaya",
                "Gopalganj",
                "Jamui",
                "Jehanabad",
                "Kaimur",
                "Katihar",
                "Khagaria",
                "Kishanganj",
                "Lakhisarai",
                "Madhepura",
                "Madhubani",
                "Munger",
                "Muzaffarpur",
                "Nalanda",
                "Nawada",
                "Patna",
                "Purnia",
                "Rohtas",
                "Saharsa",
                "Samastipur",
                "Saran",
                "Sheikhpura",
                "Sheohar",
                "Sitamarhi",
                "Siwan",
                "Supaul",
                "Vaishali",
                "West Champaran"
            ]
        },
        {
            stateName: "Chandigarh",
            district:[
                "Chandigarh"            
            ]
        },
        {
            stateName: "Chhattisgarh",
            district:[
                "Balod",
                "Baloda Bazar",
                "Balrampur",
                "Bametara",
                "Bastar",                
                "Bijapur",
                "Bilaspur",
                "Dakshin Bastar Dantewada",
                "Dhamtari",
                "Durg",
                "Gariaband",
                "Janjgir Champa",
                "Jashpur",
                "Kabeerdham",
                "Kondagaon",
                "Korba",
                "Koriya",
                "Mahasamund",
                "Mungeli",
                "Narayanpur",
                "Other State",
                "Raigarh",
                "Raipur",
                "Rajnandgaon",
                "Sukma",
                "Surajpur",
                "Surguja"
            ]
        },
        {
            stateName: "Dadra and Nagar Haveli and Daman and Diu",
            district:[
                "Dadra & Nagar Haveli",
                "Daman",
                "Diu"            
            ]
        },
        {
            stateName: "Delhi",
            district:[
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
                "West Delhi"
            ]
        },
        {
            stateName: "Goa",
            district:[
                "North Goa",
                "South Goa"            
            ]
        },
        {
            stateName: "Gujarat",
            district:[
                "Ahmedabad",
                "Amreli",
                "Anand",
                "Aravalli",
                "Banaskantha",
                "Bharuch",
                "Bhavnagar",
                "Botad",
                "Chhota Udaipur",
                "Dahod",
                "Dang",
                "Devbhumi Dwarka",
                "Gandhinagar",
                "Gir Somnath",
                "Jamnagar",
                "Junagadh",
                "Kheda",
                "Kutch",
                "Mahisagar",
                "Mehsana",
                "Morbi",
                "Narmada",
                "Navsari",
                "Panchmahal",
                "Patan",
                "Porbandar",
                "Rajkot",
                "Sabarkantha",
                "Surat",
                "Surendranagar",
                "Tapi",
                "Vadodara",
                "Valsad"
            ]
        },
        {
            stateName: "Haryana",
            district:[
                "Ambala",
                "Bhiwani",
                "Charkhi Dadri",
                "Faridabad",
                "Fatehabad",
                "Gurugram",
                "Hisar",
                "Jhajjar",
                "Jind",
                "Kaithal",
                "Karnal",
                "Kurukshetra",
                "Mahendragarh",
                "Nuh",
                "Palwal",
                "Panchkula",
                "Panipat",
                "Rewari",
                "Rohtak",
                "Sirsa",
                "Sonipat",
                "Yamunanagar"
            ]
        },
        {
            stateName: "Himachal Pradesh",
            district:[
                "Bilaspur",
                "Chamba",
                "Hamirpur",
                "Kangra",
                "Kinnaur",
                "Kullu",
                "Lahaul and Spiti",
                "Mandi",
                "Shimla",
                "Sirmaur",
                "Solan",
                "Una",
            ]
        },
        {
            stateName: "Jammu and Kashmir",
            district:[
                "Anantnag",
                "Bandipore",
                "Baramulla",
                "Budgam",
                "Doda",
                "Ganderbal",
                "Jammu",
                "Kathua",
                "Kishtwar",
                "Kulgam",
                "Kupwara",
                "Mirpur",
                "Muzaffarabad",
                "Pulwama",
                "Punch",
                "Rajouri",
                "Ramban",
                "Reasi",
                "Samba",
                "Shopiyan",
                "Srinagar",
                "Udhampur"
            ]
        },
        {
            stateName: "Jharkhand",
            district:[
                "Bokaro",
                "Chatra",
                "Deoghar",
                "Dhanbad",
                "Dumka",
                "East Singhbhum",
                "Garhwa",
                "Giridih",
                "Godda",
                "Gumla",
                "Hazaribagh",
                "Jamtara",
                "Khunti",
                "Koderma",
                "Latehar",
                "Lohardaga",
                "Pakur",
                "Palamu",
                "Ramgarh",
                "Ranchi",
                "Sahibganj",
                "Saraikela-Kharsawan",
                "Simdega",
                "West Singhbhum"
            ]
        },
        {
            stateName: "Karnataka",
            district:[
                "Bagalkote",
                "Ballari",
                "Belagavi",
                "Bengaluru Rural",
                "Bengaluru Urban",
                "Bidar",
                "Chamarajanagara",
                "Chikkaballapura",
                "Chikkamagaluru",
                "Chitradurga",
                "Dakshina Kannada",
                "Davanagere",
                "Dharwad",
                "Gadag",
                "Hassan",
                "Haveri",
                "Kalaburagi",
                "Kodagu",
                "Kolar",
                "Koppal",
                "Mandya",
                "Mysuru",
                "Raichur",
                "Ramanagara",
                "Shivamogga",
                "Tumakuru",
                "Udupi",
                "Uttara Kannada",
                "Vijayapura",
                "Yadgir"
            ]
        },
        {
            stateName:"Kerala",
            district:[
                "Alappuzha",
                "Ernakulam",
                "Idukki",
                "Kannur",
                "Kasaragod",
                "Kollam",
                "Kottayam",
                "Kozhikode",
                "Malappuram",
                "Palakkad",
                "Pathanamthitta",
                "Thiruvananthapuram",
                "Thrissur",
                "Wayanad"
            ]
        },
        {
            stateName: "Ladakh",
            district:[
                "Lakshadweep"
            ]
        },
        {
            stateName: "Madhya Pradesh",
            district:[
                "Agar Malwa",
                "Alirajpur",
                "Anuppur",
                "Ashoknagar",
                "Balaghat",
                "Barwani",
                "Betul",
                "Bhind",
                "Bhopal",
                "Burhanpur",
                "Chhatarpur",
                "Chhindwara",
                "Damoh",
                "Datia",
                "Dewas",
                "Dhar",
                "Dindori",
                "Guna",
                "Gwalior",
                "Harda",
                "Hoshangabad",
                "Indore",
                "Jabalpur",
                "Jhabua",
                "Katni",
                "Khandwa",
                "Khargone",
                "Mandla",
                "Mandsaur",
                "Morena",
                "Narsinghpur",
                "Neemuch",
                "Niwari",
                "Panna",
                "Raisen",
                "Rajgarh",
                "Ratlam",
                "Rewa",
                "Sagar",
                "Satna",
                "Sehore",
                "Seoni",
                "Shahdol",
                "Shajapur",
                "Sheopur",
                "Shivpuri",
                "Sidhi",
                "Singrauli",
                "Tikamgarh",
                "Ujjain",
                "Umaria",
                "Vidisha"
            ]
        },
        {
            stateName: "Maharashtra",
            district:[
                "Ahmednagar",
                "Akola",
                "Amravati",
                "Aurangabad",
                "Beed",
                "Bhandara",
                "Buldhana",
                "Chandrapur",
                "Dhule",
                "Gadchiroli",
                "Gondia",
                "Hingoli",
                "Jalgaon",
                "Jalna",
                "Kolhapur",
                "Latur",
                "Mumbai",
                "Mumbai Suburban",
                "Nagpur",
                "Nanded",
                "Nandurbar",
                "Nashik",
                "Osmanabad",
                "Palghar",
                "Parbhani",
                "Pune",
                "Raigad",
                "Ratnagiri",
                "Sangli",
                "Satara",
                "Sindhudurg",
                "Solapur",
                "Thane",
                "Wardha",
                "Washim",
                "Yavatmal"
            ]
        },
        {
            stateName: "Manipur",
            district:[
                "Bishnupur",
                "CAPF Personnel",
                "Chandel",
                "Churachandpur",
                "Imphal East",
                "Imphal West",
                "Jiribam",
                "Kakching",
                "Kamjong",
                "Kangpokpi",
                "Noney",
                "Pherzawl",
                "Senapati",
                "Tamenglong",
                "Tengnoupal",
                "Thoubal",
                "Ukhrul",
            ]
        },
        {
            stateName: "Meghalaya",
            district:[
                "East Garo Hills",
                "East Jaintia Hills",
                "East Khasi Hills",
                "North Garo Hills",
                "Ribhoi",
                "South Garo Hills",
                "South West Garo Hills",
                "South West Khasi Hills",
                "West Garo Hills",
                "West Jaintia Hills",
                "West Khasi Hills"
            ]
        },
        {
            stateName: "Mizoram",
            district:[
                "Aizawl",
                "Champhai",
                "Hnahthial",
                "Khawzawl",
                "Kolasib",
                "Lawngtlai",
                "Lunglei",
                "Mamit",
                "Saiha",
                "Saitual",
                "Serchhip"
            ]
        },
        {
            stateName: "Nagaland",
            district:[
                "Dimapur",
                "Kiphire",
                "Kohima",
                "Longleng",
                "Mokokchung",
                "Mon",
                "Peren",
                "Phek",
                "Tuensang",
                "Wokha",
                "Zunheboto"
            ]
        },
        {
            stateName: "Odisha",
            district:[
                "Angul",
                "Balangir",
                "Balasore",
                "Bargarh",
                "Bhadrak",
                "Boudh",
                "Cuttack",
                "Deogarh",
                "Dhenkanal",
                "Gajapati",
                "Ganjam",
                "Jagatsinghpur",
                "Jajpur",
                "Jharsuguda",
                "Kalahandi",
                "Kandhamal",
                "Kendrapara",
                "Kendujhar",
                "Khordha",
                "Koraput",
                "Malkangiri",
                "Mayurbhanj",
                "Nabarangapur",
                "Nayagarh",
                "Nuapada",
                "Puri",
                "Rayagada",
                "Sambalpur",
                "State Pool",
                "Subarnapur",
                "Sundargarh"
            ]
        },
        {
            stateName: "Puducherry",
            district:[
                "Karaikal",
                "Mahe",
                "Puducherry",
                "Yanam"
            ]
        },
        {
            stateName: "Punjab",
            district:[
                "Amritsar",
                "Barnala",
                "Bathinda",
                "Faridkot",
                "Fatehgarh Sahib",
                "Fazilka",
                "Ferozepur",
                "Gurdaspur",
                "Hoshiarpur",
                "Jalandhar",
                "Kapurthala",
                "Ludhiana",
                "Mansa",
                "Moga",
                "Pathankot",
                "Patiala",
                "Rupnagar",
                "S.A.S. Nagar",
                "Sangrur",
                "Shahid Bhagat Singh Nagar",
                "Sri Muktsar Sahib",
                "Tarn Taran"
            ]
        },
        {
            stateName: "Rajasthan",
            district:[
                "Ajmer",
                "Alwar",
                "Banswara",
                "Baran",
                "Barmer",
                "Bharatpur",
                "Bhilwara",
                "Bikaner",
                "Bundi",
                "Chittorgarh",
                "Churu",
                "Dausa",
                "Dholpur",
                "Dungarpur",
                "Hanumangarh",
                "Jaipur",
                "Jaisalmer",
                "Jalore",
                "Jhalawar",
                "Jhunjhunu",
                "Jodhpur",
                "Karauli",
                "Kota",
                "Nagaur",
                "Pali",
                "Pratapgarh",
                "Rajsamand",
                "Sawai Madhopur",
                "Sikar",
                "Sirohi",
                "Tonk",
                "Udaipur"
            ]
        },
        {
            stateName: "Sikkim",
            district:[
                "East Sikkim",
                "North Sikkim",
                "South Sikkim",
                "West Sikkim"
            ]
        },
        {
            stateName: "Tamil Nadu",
            district:[
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
            ]
        },
        {
            stateName: "Telangana",
            district:[
                "Adilabad",
                "Bhadradri Kothagudem",
                "Hyderabad",
                "Jagtial",
                "Jangaon",
                "Jayashankar Bhupalapally",
                "Jogulamba Gadwal",
                "Kamareddy",
                "Karimnagar",
                "Khammam",
                "Komaram Bheem",
                "Mahabubabad",
                "Mahabubnagar",
                "Mancherial",
                "Medak",
                "Medchal Malkajgiri",
                "Mulugu",
                "Nagarkurnool",
                "Nalgonda",
                "Narayanpet",
                "Nirmal",
                "Nizamabad",
                "Peddapalli",
                "Rajanna Sircilla",
                "Ranga Reddy",
                "Sangareddy",
                "Siddipet",
                "Suryapet",
                "Vikarabad",
                "Wanaparthy",
                "Warangal Rural",
                "Warangal Urban",
                "Yadadri Bhuvanagiri"
            ]
        },
        {
            stateName: "Tripura",
            district:[
                "Dhalai",
                "Gomati",
                "Khowai",
                "North Tripura",
                "Sipahijala",
                "South Tripura",
                "Unokoti",
                "West Tripura"
            ]
        },
        {
            stateName: "Uttar Pradesh",
            district:[
                "Agra",
                "Aligarh",
                "Ambedkar Nagar",
                "Amethi",
                "Amroha",
                "Auraiya",
                "Ayodhya",
                "Azamgarh",
                "Baghpat",
                "Bahraich",
                "Ballia",
                "Balrampur",
                "Banda",
                "Barabanki",
                "Bareilly",
                "Basti",
                "Bhadohi",
                "Bijnor",
                "Budaun",
                "Bulandshahr",
                "Chandauli",
                "Chitrakoot",
                "Deoria",
                "Etah",
                "Etawah",
                "Farrukhabad",
                "Fatehpur",
                "Firozabad",
                "Gautam Buddha Nagar",
                "Ghaziabad",
                "Ghazipur",
                "Gonda",
                "Gorakhpur",
                "Hamirpur",
                "Hapur",
                "Hardoi",
                "Hathras",
                "Jalaun",
                "Jaunpur",
                "Jhansi",
                "Kannauj",
                "Kanpur Dehat",
                "Kanpur Nagar",
                "Kasganj",
                "Kaushambi",
                "Kushinagar",
                "Lakhimpur Kheri",
                "Lalitpur",
                "Lucknow",
                "Maharajganj",
                "Mahoba",
                "Mainpuri",
                "Mathura",
                "Mau",
                "Meerut",
                "Mirzapur",
                "Moradabad",
                "Muzaffarnagar",
                "Pilibhit",
                "Pratapgarh",
                "Prayagraj",
                "Rae Bareli",
                "Rampur",
                "Saharanpur",
                "Sambhal",
                "Sant Kabir Nagar",
                "Shahjahanpur",
                "Shamli",
                "Shrawasti",
                "Siddharthnagar",
                "Sitapur",
                "Sonbhadra",
                "Sultanpur",
                "Unnao",
                "Varanasi"
            ]
        },
        {
            stateName: "Uttarakhand",
            district:[
                "Almora",
                "Bageshwar",
                "Chamoli",
                "Champawat",
                "Dehradun",
                "Haridwar",
                "Nainital",
                "Pauri Garhwal",
                "Pithoragarh",
                "Rudraprayag",
                "Tehri Garhwal",
                "Udham Singh Nagar",
                "Uttarkashi"
            ]
        },
        {
            stateName: "West Bengal",
            district:[
                "Alipurduar",
                "Bankura",
                "Birbhum",
                "Cooch Behar",
                "Dakshin Dinajpur",
                "Darjeeling",
                "Hooghly",
                "Howrah",
                "Jalpaiguri",
                "Jhargram",
                "Kalimpong",
                "Kolkata",
                "Malda",
                "Murshidabad",
                "Nadia",
                "North 24 Parganas",
                "Paschim Bardhaman",
                "Paschim Medinipur",
                "Purba Bardhaman",
                "Purba Medinipur",
                "Purulia",
                "South 24 Parganas",
                "Uttar Dinajpur"
            ]
        }
        
    ]

let obj = myobj.find(o => o.stateName === stateName);
let dist = obj.district;
console.log(dist)

function view()
{
    let Active = [], Confirm = [], Deceased = [], Recovered = [];

    fetch("https://api.covid19india.org/state_district_wise.json").then(function(resp)
    {
        return resp.json();
    })
    .then(function(data)
    {          
        console.log(data);           
        for(i = 0; i < dist.length;i++) 
        {
            Active[i] = data[stateName].districtData[dist[i]].active; 
            Confirm[i] = data[stateName].districtData[dist[i]].confirmed;
            Deceased[i] = data[stateName].districtData[dist[i]].deceased;
            Recovered[i] = data[stateName].districtData[dist[i]].recovered;                
        }               
    })    

    let myChart = document.getElementById("chart").getContext("2d");
    let display = new Chart(myChart, 
    {
        type: 'line',
        data: 
        {            
            labels: dist,
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
        for(i = 0; i < dist.length;i++) 
        {
            Active2[i] = result[stateName].districtData[dist[i]].active;                 
            temp[i] = Active[i] - Active2[i];         
        }
           
        let s = [];            
        s = temp.map(String);

        for(let i = 0; i < dist.length; i++)
        {
            if(Active2[i] <= Active[i])
            {                    
                var node = document.createElement("li");
                var textnode = document.createTextNode(dist[i] + " = " + s[i]);
                node.appendChild(textnode);
                document.getElementById("box2").appendChild(node);                     
            }

            if(Active2[i] > Active[i])
            {
                s[i] = s[i].replace('-', ''); 
                var node = document.createElement("li");
                var textnode = document.createTextNode(dist[i] + " = " + s[i]);
                node.appendChild(textnode);
                document.getElementById("box3").appendChild(node);                            
            }
        }
            
        for(let i = 0; i < dist.length; i++)
        {
            var node = document.createElement("li");
            var textnode = document.createTextNode(dist[i] + " = " + Active[i]);
            node.appendChild(textnode);
            document.getElementById("box1").appendChild(node);                
        }            
    })
}