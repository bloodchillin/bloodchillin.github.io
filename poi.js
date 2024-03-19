var xppoles = {
    "type": "FeatureCollection",
    "features": [
        {"geometry": {"type": "Point","coordinates": [274,143]},
            "type": "Feature","properties": {"popupContent": "TEST 1"},
            "id": 1},
		{"geometry": {"type": "Point","coordinates": [522,239]},
            "type": "Feature","properties": {"popupContent": "TEST 2"},
            "id": 2}
    ]
};

var chests = {
    "type": "FeatureCollection",
    "features": [
        {"geometry": {"type": "Point","coordinates": [274,143]},
            "type": "Feature","properties": {"popupContent": "TEST 1"},
            "id": 1},
		{"geometry": {"type": "Point","coordinates": [522,239]},
            "type": "Feature","properties": {"popupContent": "TEST 2"},
            "id": 2}
    ]
};

var campus = {
    "type": "Feature",
    "properties": {
        "popupContent": "This is the Auraria West Campus",
        "style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fillColor: "#B0DE5C",
            fillOpacity: 0.8
        }
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [100,100],[100,200],[200,200],[200,100]
                ]
            ]
        ]
    }
};

var Waypoints = {
    "type": "FeatureCollection",
    "features": [
        {"geometry": {"type": "Point","coordinates": [1060,984]},
            "type": "Feature","properties": {"popupContent": "Lynbore, Tavern"},
            "id": 1},
		{"geometry": {"type": "Point","coordinates": [1572,1140]},
            "type": "Feature","properties": {"popupContent": "Lynbore, East"},
            "id": 2},
		{"geometry": {"type": "Point","coordinates": [1884,1468]},
            "type": "Feature","properties": {"popupContent": "Aston, South"},
            "id": 3},
		{"geometry": {"type": "Point","coordinates": [1964,1904]},
            "type": "Feature","properties": {"popupContent": "Aston, Crossroads"},
            "id": 4},
		{"geometry": {"type": "Point","coordinates": [1596,1896]},
            "type": "Feature","properties": {"popupContent": "Aston, West"},
            "id": 5},
		{"geometry": {"type": "Point","coordinates": [2424,1896]},
            "type": "Feature","properties": {"popupContent": "Aston, East"},
            "id": 6},
		{"geometry": {"type": "Point","coordinates": [1980,912]},
            "type": "Feature","properties": {"popupContent": "Forgotten Canyon"},
            "id": 7},
		{"geometry": {"type": "Point","coordinates": [2844,2660]},
            "type": "Feature","properties": {"popupContent": "Lizard Temple, North"},
            "id": 8},
		{"geometry": {"type": "Point","coordinates": [2964,1464]},
            "type": "Feature","properties": {"popupContent": "Temple of Osiris"},
            "id": 9},
		{"geometry": {"type": "Point","coordinates": [2048,2048]},
            "type": "Feature","properties": {"popupContent": "Neiseer, West"},
            "id": 10},
		{"geometry": {"type": "Point","coordinates": [1596,1896]},
            "type": "Feature","properties": {"popupContent": "Aston, West"},
            "id": 11},
		{"geometry": {"type": "Point","coordinates": [2424,1896]},
            "type": "Feature","properties": {"popupContent": "Aston, East"},
            "id": 12},
    ]
};

var astonshop = {
	"type": "FeatureCollection",
	"features": [
	
        {"geometry": {"type": "Point","coordinates": [1906.25,2090.25]},
			"type": "Feature","properties": {"name": "Ronald"}},
		{"geometry": {"type": "Point","coordinates": [1906.25,2076.25]},
			"type": "Feature","properties": {"name": "Gani"}},
	
	]
};

var astonquest = {
    "type": "FeatureCollection",
    "features": [

		{"geometry": {"type": "Point","coordinates": [1898.25,2025.75]},
			"type": "Feature","properties": {"name": "Manager"}},
		{"geometry": {"type": "Point","coordinates": [1897.75,1881.75]},
			"type": "Feature","properties": {"name": "Donna"}},
		{"geometry": {"type": "Point","coordinates": [1897.25,1745]},
            "type": "Feature","properties": {"name": "Rocky"}},
		{"geometry": {"type": "Point","coordinates": [1897.75,1629.75]},
            "type": "Feature","properties": {"name": "Elric"}},
		{"geometry": {"type": "Point","coordinates": [1877.5,1597.5]},
            "type": "Feature","properties": {"name": "Cherri"}},
		{"geometry": {"type": "Point","coordinates": [1878.5,1510.25]},
            "type": "Feature","properties": {"name": "Gene"}},
		{"geometry": {"type": "Point","coordinates": [1790.25,1505.25]},
            "type": "Feature","properties": {"name": "Robin"}},
		{"geometry": {"type": "Point","coordinates": [1745.5,1505.75]},
            "type": "Feature","properties": {"name": "Monica"}},
		{"geometry": {"type": "Point","coordinates": [1722.25,1506.25]},
            "type": "Feature","properties": {"name": "Danica"}},
		{"geometry": {"type": "Point","coordinates": [1750.5,1586.5]},
            "type": "Feature","properties": {"name": "Jamie"}},
		{"geometry": {"type": "Point","coordinates": [1737.75,1657.5]},
            "type": "Feature","properties": {"name": "Terri"}},	
		{"geometry": {"type": "Point","coordinates": [1737,1697.5]},
            "type": "Feature","properties": {"name": "Ellis"}},
		{"geometry": {"type": "Point","coordinates": [1658,1722]},
            "type": "Feature","properties": {"name": "Sierra"}},
		{"geometry": {"type": "Point","coordinates": [1745.75,1742.25]},
            "type": "Feature","properties": {"name": "Roger"}},
		{"geometry": {"type": "Point","coordinates": [1737.5,1801.5]},
            "type": "Feature","properties": {"name": "Boris"}},
		{"geometry": {"type": "Point","coordinates": [1737.5,1837.75]},
            "type": "Feature","properties": {"name": "Kaleigh"}},
		{"geometry": {"type": "Point","coordinates": [1641.75,1898.75]},
            "type": "Feature","properties": {"name": "Tactician"}},
		{"geometry": {"type": "Point","coordinates": [1665.5,1986.25]},
            "type": "Feature","properties": {"name": "Western Watch"}},
		{"geometry": {"type": "Point","coordinates": [1745.5,1990.25]},
            "type": "Feature","properties": {"name": "Shera"}},
		{"geometry": {"type": "Point","coordinates": [1745.5,2078]},
            "type": "Feature","properties": {"name": "Iggy"}},
		{"geometry": {"type": "Point","coordinates": [1781.5,1985.5]},
            "type": "Feature","properties": {"name": "Oscar"}},
		{"geometry": {"type": "Point","coordinates": [1874.25,1965.75]},
            "type": "Feature","properties": {"name": "Roxie"}}				
    ]
};


